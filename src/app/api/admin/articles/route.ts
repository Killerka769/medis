import { db } from "@/src/prisma/db";
import { generateSlug } from "@/src/utils/generateSlug";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    const token = (await cookies()).get("token")?.value;
    if(!token) return NextResponse.json({ message: "Неавторизован" }, { status: 401 });
    let roleCurrentUser;
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        roleCurrentUser = String(payload.role).toLowerCase();
    } catch (error) {
        return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
    }
    if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
    try {
        const articles = await db.orm.public.Article.orderBy((a) => a.createdAt.desc()).all();
        return NextResponse.json(articles, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения статей" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const token = (await cookies()).get("token")?.value;
    if(!token) return NextResponse.json({ message: "Неавторизован" }, { status: 401 });
    let roleCurrentUser;
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        roleCurrentUser = String(payload.role).toLowerCase();
    } catch (error) {
        return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
    }
    if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
    try {
        const { title, content, excerpt, coverUrl, categoryId, status } = await req.json();
        if(!title || !content) return NextResponse.json({ message: "Заполните заголовок и контент" }, { status: 400 });
        const slug = await generateSlug(title);
        const publishedAt = status === "published" ? new Date().toISOString() : null;
        const newArticle = await db.orm.public.Article.create({
            title,
            content,
            excerpt: excerpt || null,
            coverUrl: coverUrl || null,
            categoryId: categoryId || null,
            slug,
            status,
            publishedAt
        });
        return NextResponse.json({ message: "Успешное создание статьи!", article: newArticle }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка создания статьи" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    const token = (await cookies()).get("token")?.value;
    if(!token) return NextResponse.json({ message: "Неавторизован" }, { status: 401 });
    let roleCurrentUser;
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        roleCurrentUser = String(payload.role).toLowerCase();
    } catch (error) {
        return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
    }
    if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
    try {
        const { id, title, content, excerpt, coverUrl, categoryId, status } = await req.json();
        if(!id || !title || !content) return NextResponse.json({ message: "Заполните заголовок и контент" }, { status: 400 });

        const existsArticle = await db.orm.public.Article.where({ id }).first();
        if(!existsArticle) return NextResponse.json({ message: "Статья не найдена" }, { status: 404 });

        const slug = await generateSlug(title);

        let publishedAt = existsArticle.publishedAt;
        if(status === "published" && existsArticle.status !== "published") {
            publishedAt = new Date().toISOString();
        }
        if(status === "draft") {
            publishedAt = null;
        }

        const updatedArticle = await db.orm.public.Article.where({ id }).update({
            title,
            content,
            excerpt: excerpt || null,
            coverUrl: coverUrl || null,
            categoryId: categoryId || null,
            slug,
            status,
            publishedAt
        });
        return NextResponse.json({ message: "Успешное обновление статьи!", article: updatedArticle }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка обновления статьи" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const token = (await cookies()).get("token")?.value;
    if(!token) return NextResponse.json({ message: "Неавторизован" }, { status: 401 });
    let roleCurrentUser;
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        roleCurrentUser = String(payload.role).toLowerCase();
    } catch (error) {
        return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
    }
    if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
    try {
        const { id } = await req.json();
        if(!id) return NextResponse.json({ message: "id не найден" }, { status: 400 });
        await db.orm.public.Article.where({ id }).delete();
        return NextResponse.json({ message: "Успешное удаление статьи" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка удаления статьи" }, { status: 500 });
    }
}