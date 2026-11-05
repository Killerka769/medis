import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // 1. Проверяем, авторизован ли пользователь
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Необходимо войти в аккаунт" }, { status: 401 });

        let patientId;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            patientId = String(payload.id);
        } catch (error) {
            return NextResponse.json({ message: "Сессия истекла, войдите заново" }, { status: 401 });
        }

        // 2. Получаем данные из формы
        const { doctorId, serviceId, date, comment } = await req.json();
        
        if(!doctorId || !serviceId || !date) {
            return NextResponse.json({ message: "Заполните все обязательные поля" }, { status: 400 });
        }

        // 3. Создаем запись
        const newAppointment = await db.orm.public.Appointment.create({
            patientId,
            doctorId,
            serviceId,
            date: new Date(date).toISOString(), // Сохраняем в ISO формате
            comment: comment || null,
            status: "pending" // Ожидает подтверждения
        });

        return NextResponse.json({ message: "Вы успешно записаны!", appointment: newAppointment }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка при создании записи" }, { status: 500 });
    }
}