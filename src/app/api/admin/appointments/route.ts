import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).trim().toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 403 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 401 });
        const appointments = await db.orm.public.Appointment.orderBy(e => e.date.desc()).include("doctor").include("patient").include("service").all();
        return NextResponse.json(appointments);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения записей на прием" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).trim().toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 403 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 401 });
        const { id, status, adminComment } = await req.json();
        if(!id || !status) return NextResponse.json({ message: "Не все поля звполнены" }, { status: 400 });
        const updatedAppointment = await db.orm.public.Appointment.where({ id }).update({ status, adminComment: adminComment || null });
        return NextResponse.json({ message: "Успешно обновлено" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка обновления записи на прием" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).trim().toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 403 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 401 });
        const { id } = await req.json();
        if(!id) return NextResponse.json({ message: "id не найден" }, { status: 400 });
        const updatedAppointment = await db.orm.public.Appointment.where({ id }).delete();
        return NextResponse.json({ message: "Успешно удалено" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка удаления записи на прием" }, { status: 500 });
    }
}