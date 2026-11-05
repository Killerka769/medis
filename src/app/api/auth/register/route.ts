import { db } from "@/src/prisma/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { formatPhoneToE164 } from "@/src/lib/utils/phone";

export async function POST(req : NextRequest) {
    try {
        const { email, phone, username, password } = await req.json();
        if(!email || !phone || !username || !password) return NextResponse.json({ message: "Не полные поля" }, { status: 400 });
        const existsEmail = await db.orm.public.Users.where({ email }).first();
        if(existsEmail) return NextResponse.json({ message: "Такая почта уже используется!" }, { status: 409 });
        const existsPhone = await db.orm.public.Users.where({ phone }).first();
        if(existsPhone) return NextResponse.json({ message: "Такой номер уже используется!" }, { status: 409 });
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await db.orm.public.Users.create({ email, phone: formatPhoneToE164(phone), username, password: hashPassword });
        return NextResponse.json({ message: "Успешная регистрация!" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка сервера регистрации" }, { status: 500 });
    }
}