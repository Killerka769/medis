import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const services = await db.orm.public.Service
            .where({ isActive: true })
            .include("category")
            .all();
            
        const categories = await db.orm.public.ServiceCategory
            .where({ isActive: true })
            .orderBy(c => c.sortOrder.asc())
            .all();

        return NextResponse.json({ services, categories });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения услуг" }, { status: 500 });
    }
}