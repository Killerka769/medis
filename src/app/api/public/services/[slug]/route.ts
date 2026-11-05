import { db } from "@/src/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;

        const service = await db.orm.public.Service
            .where({ slug, isActive: true })
            .include("category")
            .first();

        if (!service) return NextResponse.json({ message: "Услуга не найдена" }, { status: 404 });

        // Получаем врачей, которые оказывают эту услугу
        const doctorServices = await db.orm.public.DoctorService
            .where({ serviceId: service.id })
            .include("doctor")
            .all();

        // Извлекаем только активных врачей
        const doctors = doctorServices
            .map((ds: any) => ds.doctor)
            .filter((d: any) => d && d.isActive);

        return NextResponse.json({ service, doctors });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения услуги" }, { status: 500 });
    }
}