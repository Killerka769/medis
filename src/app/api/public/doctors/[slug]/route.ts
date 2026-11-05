import { db } from "@/src/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;

        const doctor = await db.orm.public.Doctor
            .where({ slug, isActive: true })
            .first();

        if (!doctor) return NextResponse.json({ message: "Врач не найден" }, { status: 404 });

        // Получаем услуги, которые оказывает врач
        const doctorServices = await db.orm.public.DoctorService
            .where({ doctorId: doctor.id })
            .include("service")
            .all();

        const services = doctorServices
            .map((ds: any) => ds.service)
            .filter((s: any) => s && s.isActive);

        return NextResponse.json({ doctor, services });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения врача" }, { status: 500 });
    }
}