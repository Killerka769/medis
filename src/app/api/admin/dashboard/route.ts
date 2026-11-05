import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        if(String(payload.role).toLowerCase() !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });

        // Считаем записи
        const appointmentsCount = await db.orm.public.Appointment.all().then(res => res.length);
        const pendingAppointmentsCount = await db.orm.public.Appointment.where({ status: "pending" }).all().then(res => res.length);
        
        const usersCount = await db.orm.public.Users.all().then(res => res.length);
        const productsRequests = await db.orm.public.ProductRequest.where({ status: "new" }).all().then(res => res.length);

        return NextResponse.json({
            appointments: appointmentsCount,
            pending: pendingAppointmentsCount,
            users: usersCount,
            requests: productsRequests
        });
    } catch (error) {
        return NextResponse.json({ message: "Ошибка" }, { status: 500 });
    }
}