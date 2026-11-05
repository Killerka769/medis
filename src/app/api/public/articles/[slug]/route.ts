import { db } from "@/src/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await params;

        const article = await db.orm.public.Article
            .where({ slug, status: "published" })
            .include("category")
            .first();

        if (!article) return NextResponse.json({ message: "Статья не найдена" }, { status: 404 });

        // Получаем 3 последние статьи для блока "Читайте также"
        const recentArticles = await db.orm.public.Article
            .where({ status: "published" })
            .orderBy(a => a.publishedAt.desc())
            .limit(3)
            .all();

        return NextResponse.json({ article, recentArticles });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения статьи" }, { status: 500 });
    }
}