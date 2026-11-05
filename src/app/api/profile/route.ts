import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });

        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        const userId = String(payload.id);

        const user = await db.orm.public.Users.where({ id: userId })
        .include("appointments")
        .first();

        if(!user) return NextResponse.json({ message: "Пользователь не найден" }, { status: 404 });

        const appointmentsWithDetails = await db.orm.public.Appointment
        .where({ patientId: userId })
        .include("doctor")
        .include("service")
        .orderBy(a => a.date.desc())
        .all();

        return NextResponse.json({ user, appointments: appointmentsWithDetails });
    } catch (error) {
        return NextResponse.json({ message: "Ошибка получения профиля" }, { status: 500 });
    }
}