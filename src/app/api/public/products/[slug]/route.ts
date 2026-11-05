import { db } from "@/src/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;
        const product = await db.orm.public.Product
            .where({ slug, isActive: true })
            .include("category")
            .first();

        if (!product) return NextResponse.json({ message: "Товар не найден" }, { status: 404 });
        return NextResponse.json({ product });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения товара" }, { status: 500 });
    }
}