import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

async function requireAdmin() {
    const token = (await cookies()).get("token")?.value;
    if (!token) return { error: NextResponse.json({ message: "Неавторизован" }, { status: 401 }) };
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        if (String(payload.role).toLowerCase() !== "admin") {
            return { error: NextResponse.json({ message: "Нет доступа" }, { status: 403 }) };
        }
        return { error: null };
    } catch {
        return { error: NextResponse.json({ message: "Токен недействителен" }, { status: 401 }) };
    }
}

export async function GET() {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const banners = await db.orm.public.Banner.orderBy((b) => b.sortOrder.asc()).all();
        return NextResponse.json(banners, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка получения баннеров" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const { imageUrl, title, subtitle, buttonText, buttonLink, sortOrder, isActive, pages, intervalMs } = await req.json();
        if (!imageUrl) return NextResponse.json({ message: "Укажите изображение" }, { status: 400 });
        const banner = await db.orm.public.Banner.create({
            imageUrl,
            title: title || null,
            subtitle: subtitle || null,
            buttonText: buttonText || null,
            buttonLink: buttonLink || null,
            sortOrder: Number(sortOrder) || 0,
            isActive: isActive === "true" || isActive === true,
            pages: pages || "/",
            intervalMs: Number(intervalMs) || 5000,
        });
        return NextResponse.json({ message: "Баннер создан", banner }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка создания баннера" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const { id, imageUrl, title, subtitle, buttonText, buttonLink, sortOrder, isActive, pages, intervalMs } = await req.json();
        if (!id || !imageUrl) return NextResponse.json({ message: "Заполните изображение" }, { status: 400 });
        const banner = await db.orm.public.Banner.where({ id }).update({
            imageUrl,
            title: title || null,
            subtitle: subtitle || null,
            buttonText: buttonText || null,
            buttonLink: buttonLink || null,
            sortOrder: Number(sortOrder) || 0,
            isActive: isActive === "true" || isActive === true,
            pages: pages || "/",
            intervalMs: Number(intervalMs) || 5000,
        });
        return NextResponse.json({ message: "Баннер обновлён", banner }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка обновления баннера" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const { id } = await req.json();
        if (!id) return NextResponse.json({ message: "Не передан ID" }, { status: 400 });
        await db.orm.public.Banner.where({ id }).delete();
        return NextResponse.json({ message: "Баннер удалён" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка удаления баннера" }, { status: 500 });
    }
}
