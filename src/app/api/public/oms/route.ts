import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const services = await db.orm.public.Service
            .where({ isOms: true, isActive: true })
            .include("category")
            .all();

        return NextResponse.json({ services });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения услуг по ОМС" }, { status: 500 });
    }
}