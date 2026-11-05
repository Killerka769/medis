import { db } from "@/src/prisma/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { formatPhoneToE164 } from "@/src/lib/utils/phone";

export async function POST(req : NextRequest) {
    try {
        const { phone, password } = await req.json();
        if(!phone || !password) return NextResponse.json({ message: "Заполните все поля" }, { status: 409 });
        const existsUser = await db.orm.public.Users.where({ phone: formatPhoneToE164(phone) }).select("id", "role", "password").first();
        if(!existsUser) return NextResponse.json({ message: "Пользователь не найден" }, { status: 404 });
        const checkPassword = await bcrypt.compare(password, existsUser.password);
        if(!checkPassword) return NextResponse.json({ message: "Неверный пароль" }, { status:  401 });
        const token = await new SignJWT({ id: existsUser.id, role: existsUser.role }).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("14d").sign(new TextEncoder().encode(process.env.SECRET_KEY));
        let res = NextResponse.json({ message: "Успешный вход" }, { status: 200 });
        res.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60*60*24*14,
            path: "/"
        })
        return res;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка логина сервера" }, { status: 500 });
    }
}