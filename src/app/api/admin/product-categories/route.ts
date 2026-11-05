import { NextRequest, NextResponse } from "next/server";
import { generateSlug } from "../../../../utils/generateSlug";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { db } from "@/src/prisma/db";

async function checkAdmin() {
    const token = (await cookies()).get("token")?.value;
    if (!token) return { error: "Не авторизован", status: 401 };
    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
        if (String(payload.role).toLowerCase() !== "admin") return { error: "Нет доступа", status: 403 };
        return { ok: true };
    } catch {
        return { error: "Токен недействителен", status: 401 };
    }
}

export async function GET() {
    try {
        const auth = await checkAdmin();
        if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status });

        const productCategories = await db.orm.public.ProductCategory
            .orderBy((fields) => fields.sortOrder.asc())
            .all();

        return NextResponse.json(productCategories, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка получения категорий товаров" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const auth = await checkAdmin();
        if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status });

        const { title, sortOrder, isActive } = await req.json();
        if (!title) return NextResponse.json({ message: "Введите название категории товаров" }, { status: 409 });

        const slug = await generateSlug(title);
        await db.orm.public.ProductCategory.create({
            title,
            slug,
            sortOrder: Number(sortOrder) || 0,
            isActive: isActive === true || isActive === "true"
        });

        return NextResponse.json({ message: "Категория товаров успешно создана!" }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка создания категории товаров" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const auth = await checkAdmin();
        if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status });

        const { id, title, sortOrder, isActive } = await req.json();
        if (!id) return NextResponse.json({ message: "Не передан ID категории товаров" }, { status: 400 });
        if (!title) return NextResponse.json({ message: "Название обязательно" }, { status: 400 });

        const slug = await generateSlug(title);
        await db.orm.public.ProductCategory.where({ id }).update({
            title,
            slug,
            sortOrder: Number(sortOrder) || 0,
            isActive: isActive === true || isActive === "true"
        });

        return NextResponse.json({ message: "Категория товаров успешно обновлена!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка обновления категории товаров" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const auth = await checkAdmin();
        if (auth.error) return NextResponse.json({ message: auth.error }, { status: auth.status });

        const { id } = await req.json();
        if (!id) return NextResponse.json({ message: "Не передан ID категории товаров" }, { status: 400 });

        try {
            await db.orm.public.ProductCategory.where({ id }).delete();
        } catch (err) {
            return NextResponse.json(
                { message: "Нельзя удалить категорию: в ней есть товары" },
                { status: 409 }
            );
        }

        return NextResponse.json({ message: "Категория товаров успешно удалена!" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка удаления категории товаров" }, { status: 500 });
    }
}