import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const products = await db.orm.public.Product
            .where({ isActive: true })
            .include("category")
            .all();

        const categories = await db.orm.public.ProductCategory
            .where({ isActive: true })
            .orderBy(c => c.sortOrder.asc())
            .all();

        return NextResponse.json({ products, categories });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения товаров" }, { status: 500 });
    }
}