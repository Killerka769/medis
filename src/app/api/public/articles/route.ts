import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const articles = await db.orm.public.Article
            .where({ status: "published" })
            .orderBy(a => a.publishedAt.desc())
            .include("category")
            .all();

        const categories = await db.orm.public.ArticleCategory
            .where({ isActive: true })
            .orderBy(c => c.sortOrder.asc())
            .all();

        return NextResponse.json({ articles, categories });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения статей" }, { status: 500 });
    }
}