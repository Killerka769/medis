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
        const products = await db.orm.public.Product.orderBy((p) => p.createdAt.desc()).all();
        return NextResponse.json(products, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения товаров" }, { status: 500 });
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
        const { title, description, content, price, categoryId, imageUrl, images, isActive } = await req.json();
        if(!title || !price || !categoryId) return NextResponse.json({ message: "Заполните название, цену и категорию" }, { status: 400 });

        const dataImages: string[] = images ? images.split("\n").map((e:string) => e.trim()).filter(Boolean) : [];

        const slug = await generateSlug(title);
        const newProduct = await db.orm.public.Product.create({
            title,
            slug,
            description: description || null,
            content: content || null,
            price: Number(price),
            categoryId,
            imageUrl: imageUrl || null,
            images: dataImages,
            inStock: true,
            isActive: isActive === true || isActive === "true"
        });
        return NextResponse.json({ message: "Успешное создание товара!", product: newProduct }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка создания товара" }, { status: 500 });
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
        const { id, title, description, content, price, categoryId, imageUrl, images, isActive } = await req.json();
        if(!id || !title || !price || !categoryId) return NextResponse.json({ message: "Заполните название, цену и категорию" }, { status: 400 });

        const dataImages: string[] = images ? images.split("\n").map((e:string)=> e.trim()).filter(Boolean) : [];

        const slug = await generateSlug(title);
        const updatedProduct = await db.orm.public.Product.where({ id }).update({
            title,
            slug,
            description: description || null,
            content: content || null,
            price: Number(price),
            categoryId,
            imageUrl: imageUrl || null,
            images: dataImages,
            isActive: isActive === true || isActive === "true"
        });
        return NextResponse.json({ message: "Успешное обновление товара!", product: updatedProduct }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка обновления товара" }, { status: 500 });
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
        await db.orm.public.Product.where({ id }).update({ isActive: false });
        return NextResponse.json({ message: "Успешное удаление товара" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка удаления товара" }, { status: 500 });
    }
}