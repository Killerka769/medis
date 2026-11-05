import { NextRequest, NextResponse } from "next/server";
import { generateSlug } from "../../../../utils/generateSlug";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { jwtVerify } from "jose";
import { db } from "@/src/prisma/db";

export async function GET() {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
        const serviceCategories = await db.orm.public.ArticleCategory.orderBy((fields) => fields.sortOrder.asc()).all();
        return NextResponse.json(serviceCategories, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка получения категорий блога" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
        const { title, sortOrder, isActive } = await req.json();
        if(!title) return NextResponse.json({ message: "Введите название категории блога" }, { status: 409 });
        const slug = await generateSlug(title);
        const newServiceCategory = await db.orm.public.ArticleCategory.create({ title, slug, sortOrder: Number(sortOrder) || 0, isActive: isActive === "true" });
        return NextResponse.json({ message: "Категория блога успешно создана!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка создания категории блога" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
        const { id } = await req.json();
        const deleteServicesCategory = await db.orm.public.ArticleCategory.where({ id }).delete();
        return NextResponse.json({ message: "Категория блога успешно удалена!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка удаления категории блога" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        let roleCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).toLowerCase();
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
        }
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
        const { id, title, sortOrder, isActive } = await req.json();
        if (!id) return NextResponse.json({ message: "Не передан ID категории блога" }, { status: 400 });
        if (!title) return NextResponse.json({ message: "Название обязательно" }, { status: 400 });
        const slug = await generateSlug(title);
        const updatedServiceCategory = await db.orm.public.ArticleCategory.where({ id }).update({ title, slug, sortOrder: Number(sortOrder) || 0, isActive: isActive === "true" });
        return NextResponse.json({ message: "Категория блога успешно обновлена!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка удаления категории блога" }, { status: 500 });
    }
}