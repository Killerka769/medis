import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
    try {
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
        
        const { name, currentPath } = await req.json();
        if(!name) return NextResponse.json({ message: "Введите название папки" }, { status: 400 });
        
        const fullPath = path.join(process.cwd(), "public", "uploads", currentPath || "", name);
        await fs.mkdir(fullPath, { recursive: true });
        
        return NextResponse.json({ message: "Успешное создание папки" }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка создания папки" }, { status: 500 });
    }
}