import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { formatPhoneToE164, isValidPhone } from "@/src/lib/utils/phone";

async function getAuthUserId() {
    const token = (await cookies()).get("token")?.value;
    if (!token) return null;
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        return String(payload.id);
    } catch {
        return null;
    }
}

export async function GET() {
    try {
        const userId = await getAuthUserId();
        if (!userId) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });

        const user = await db.orm.public.Users.where({ id: userId }).first();
        if (!user) return NextResponse.json({ message: "Пользователь не найден" }, { status: 404 });

        const appointments = await db.orm.public.Appointment
            .where({ patientId: userId })
            .include("doctor")
            .include("service")
            .orderBy(a => a.date.desc())
            .all();

        const productRequests = await db.orm.public.ProductRequest
            .where({ userId })
            .include("product")
            .orderBy(r => r.createdAt.desc())
            .all();

        const { password: _password, ...safeUser } = user;

        return NextResponse.json({ user: safeUser, appointments, productRequests });
    } catch (error) {
        return NextResponse.json({ message: "Ошибка получения профиля" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const userId = await getAuthUserId();
        if (!userId) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });

        const { username, phone } = await req.json();
        const name = String(username || "").trim();

        if (name.length < 3) {
            return NextResponse.json({ message: "Имя от 3 символов" }, { status: 400 });
        }

        const phoneCheck = isValidPhone(phone || "");
        if (!phoneCheck.valid) {
            return NextResponse.json({ message: phoneCheck.error }, { status: 400 });
        }

        const formattedPhone = formatPhoneToE164(phone);
        const existsPhone = await db.orm.public.Users.where({ phone: formattedPhone }).first();
        if (existsPhone && existsPhone.id !== userId) {
            return NextResponse.json({ message: "Такой номер уже используется" }, { status: 409 });
        }

        await db.orm.public.Users.where({ id: userId }).update({
            username: name,
            phone: formattedPhone
        });

        const updated = await db.orm.public.Users.where({ id: userId }).first();
        const { password: _pass, ...safeUser } = updated || {};
        return NextResponse.json({ message: "Данные обновлены", user: safeUser });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка обновления профиля" }, { status: 500 });
    }
}
