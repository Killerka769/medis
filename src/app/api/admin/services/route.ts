import { db } from "@/src/prisma/db";
import { generateSlug } from "@/src/utils/generateSlug";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

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
        
        const services = await db.orm.public.Service.orderBy((s) => s.createdAt.desc()).include("doctors", (q) => q.include("doctor")).all();
        return NextResponse.json(services);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка получения сервисов" }, { status: 500 });
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
        
        const { title, description, content, price, priceFrom, categoryId, isOms, duration, imageUrl, isActive, doctorIds } = await req.json();
        if(!title || !categoryId) return NextResponse.json({ message: "Заполните название и категорию" }, { status: 400 });
        
        const slug = await generateSlug(title);
        
        const newService = await db.orm.public.Service.create({ 
            title, 
            slug, 
            description: description || null, 
            content: content || null, 
            price: price ? Number(price) : null, 
            priceFrom: priceFrom === "true" || priceFrom === true, 
            categoryId, 
            isOms: isOms === "true" || isOms === true, 
            duration: duration ? Number(duration) : null, 
            imageUrl: imageUrl || null, 
            isActive: isActive === "true" || isActive === true 
        });

        // Создаем связи с врачами
        if(doctorIds && doctorIds.length > 0) {
            for(const doctorId of doctorIds){
                await db.orm.public.DoctorService.create({ serviceId: newService.id, doctorId });
            }
        }

        return NextResponse.json({ message: "Успешное создание сервиса", service: newService }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка создания сервиса" }, { status: 500 });
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
        
        const { id, title, description, content, price, priceFrom, categoryId, isOms, duration, imageUrl, isActive, doctorIds } = await req.json();
        if(!id || !title || !categoryId) return NextResponse.json({ message: "Заполните название и категорию" }, { status: 400 });

        const slug = await generateSlug(title);

        // 1. Обновляем саму услугу
        const updatedService = await db.orm.public.Service.where({ id }).update({ 
            title, 
            slug, 
            description: description || null, 
            content: content || null, 
            price: price ? Number(price) : null, 
            priceFrom: priceFrom === "true" || priceFrom === true, 
            categoryId, 
            isOms: isOms === "true" || isOms === true, 
            duration: duration ? Number(duration) : null, 
            imageUrl: imageUrl || null, 
            isActive: isActive === "true" || isActive === true 
        });

        // 2. Удаляем старые связи
        await db.orm.public.DoctorService.where({ serviceId: id }).delete();

        // 3. Создаем новые связи
        if(doctorIds && doctorIds.length > 0) {
            for(const doctorId of doctorIds){
                await db.orm.public.DoctorService.create({ serviceId: id, doctorId });
            }
        }

        return NextResponse.json({ message: "Успешное обновление сервиса", service: updatedService }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка обновления сервиса" }, { status: 500 });
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
        if(!id) return NextResponse.json({ message: "id не найден" }, { status: 400 });

        // Сначала удаляем связи в DoctorService (хотя в схеме Cascade, но лучше явно)
        await db.orm.public.DoctorService.where({ serviceId: id }).delete();

        await db.orm.public.Service.where({ id }).deleteAll();

        return NextResponse.json({ message: "Услуга успешно удалена" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка удаления сервиса" }, { status: 500 });
    }
}