import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

async function checkAdmin() {
    const token = (await cookies()).get("token")?.value;
    if (!token) return { error: "Не авторизован", status: 401 };
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        if (String(payload.role).toLowerCase() !== "admin") return { error: "Нет доступа", status: 403 };
        return { ok: true, id: String(payload.id) };
    } catch {
        return { error: "Токен недействителен", status: 401 };
    }
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const auth = await checkAdmin();
        if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status });

        const { id } = await params;

        const user = await db.orm.public.Users.where({ id })
            .include("appointments")
            .include("productRequests")
            .first();

        if (!user) return NextResponse.json({ message: "Пользователь не найден" }, { status: 404 });
        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения пользователя" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const auth = await checkAdmin();
        if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status });

        const { id } = await params; 
        const { username, email, phone } = await req.json();
        
        if (!email || !phone) return NextResponse.json({ message: "Заполните почту и телефон" }, { status: 400 });

        const updated = await db.orm.public.Users.where({ id }).update({
            username: username || null,
            email,
            phone
        });

        return NextResponse.json({ message: "Пользователь обновлен", user: updated }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка обновления пользователя" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const auth = await checkAdmin();
        if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status });

        const { id } = await params; 

        if (auth.id === id) {
            return NextResponse.json({ message: "Нельзя удалить самого себя" }, { status: 400 });
        }

        await db.orm.public.Users.where({ id }).delete();
        return NextResponse.json({ message: "Пользователь удален" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка удаления пользователя" }, { status: 500 });
    }
}