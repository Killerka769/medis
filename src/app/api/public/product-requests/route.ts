import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // Проверяем авторизацию
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Необходимо войти в аккаунт" }, { status: 401 });

        let userId;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            userId = String(payload.id);
        } catch (error) {
            return NextResponse.json({ message: "Сессия истекла" }, { status: 401 });
        }

        const { productId, name, phone, comment } = await req.json();
        if(!productId || !name || !phone) return NextResponse.json({ message: "Заполните обязательные поля" }, { status: 400 });

        await db.orm.public.ProductRequest.create({
            productId,
            userId,
            name,
            phone,
            comment: comment || null,
            status: "new"
        });

        return NextResponse.json({ message: "Заявка успешно отправлена!" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка при создании заявки" }, { status: 500 });
    }
}