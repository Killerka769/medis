import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });

        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        const userId = String(payload.id);

        const { id } = await req.json();

        // Проверяем, что запись принадлежит этому пользователю
        const appointment = await db.orm.public.Appointment.where({ id }).first();
        if(!appointment || appointment.patientId !== userId) {
            return NextResponse.json({ message: "Запись не найдена" }, { status: 404 });
        }

        await db.orm.public.Appointment.where({ id }).update({ status: "cancelled" });

        return NextResponse.json({ message: "Запись отменена" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка отмены" }, { status: 500 });
    }
}