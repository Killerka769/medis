import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
        const users = await db.orm.public.Users.orderBy(e => e.createdAt.desc()).all();
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения пользователей" }, { status: 500 });
    }
}