import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const doctors = await db.orm.public.Doctor.where({ isActive: true }).all();
        const services = await db.orm.public.Service.where({ isActive: true }).all();
        return NextResponse.json({ doctors, services });
    } catch (error) {
        return NextResponse.json({ message: "Ошибка загрузки" }, { status: 500 });
    }
}