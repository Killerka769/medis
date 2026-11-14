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

function toExpires(value: string | null | undefined) {
    if (!value) return null;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    return date.toISOString();
}

export async function GET() {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const items = await db.orm.public.Notification.orderBy((n) => n.createdAt.desc()).all();
        return NextResponse.json(items, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка получения уведомлений" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const { title, text, isFullScreen, isActive, expiresAt, durationMs } = await req.json();
        if (!title || !text) return NextResponse.json({ message: "Заполните заголовок и текст" }, { status: 400 });
        const item = await db.orm.public.Notification.create({
            title,
            text,
            isFullScreen: isFullScreen === "true" || isFullScreen === true,
            isActive: isActive === "true" || isActive === true,
            expiresAt: toExpires(expiresAt),
            durationMs: Number(durationMs) || 10000,
        });
        return NextResponse.json({ message: "Уведомление создано", notification: item }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка создания уведомления" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const { id, title, text, isFullScreen, isActive, expiresAt, durationMs } = await req.json();
        if (!id || !title || !text) return NextResponse.json({ message: "Заполните заголовок и текст" }, { status: 400 });
        const item = await db.orm.public.Notification.where({ id }).update({
            title,
            text,
            isFullScreen: isFullScreen === "true" || isFullScreen === true,
            isActive: isActive === "true" || isActive === true,
            expiresAt: toExpires(expiresAt),
            durationMs: Number(durationMs) || 10000,
        });
        return NextResponse.json({ message: "Уведомление обновлено", notification: item }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка обновления уведомления" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const auth = await requireAdmin();
    if (auth.error) return auth.error;
    try {
        const { id } = await req.json();
        if (!id) return NextResponse.json({ message: "Не передан ID" }, { status: 400 });
        await db.orm.public.Notification.where({ id }).delete();
        return NextResponse.json({ message: "Уведомление удалено" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка удаления уведомления" }, { status: 500 });
    }
}
