import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const doctors = await db.orm.public.Doctor
            .where({ isActive: true })
            .orderBy(d => d.name.asc())
            .all();

        return NextResponse.json({ doctors });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения врачей" }, { status: 500 });
    }
}