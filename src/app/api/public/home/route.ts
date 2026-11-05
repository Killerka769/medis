import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        // Берем 4 активных врачей
        const doctors = await db.orm.public.Doctor
            .where({ isActive: true })
            .orderBy(d => d.experienceYears.desc())
            .limit(4)
            .all();

        // Берем 6 активных услуг
        const services = await db.orm.public.Service
            .where({ isActive: true })
            .include("category")
            .limit(6)
            .all();

        // Берем 3 последние опубликованные статьи
        const articles = await db.orm.public.Article
            .where({ status: "published" })
            .orderBy(a => a.publishedAt.desc())
            .limit(3)
            .all();

        return NextResponse.json({ doctors, services, articles });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения данных для главной" }, { status: 500 });
    }
}