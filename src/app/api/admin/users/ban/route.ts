import { db } from "@/src/prisma/db";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const token = (await cookies()).get("token")?.value;
        if(!token) return NextResponse.json({ message: "Не авторизован" }, { status: 401 });
        
        let roleCurrentUser;
        let idCurrentUser;
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            roleCurrentUser = String(payload.role).toLowerCase();
            idCurrentUser = String(payload.id);
        } catch (error) {
            return NextResponse.json({ message: "Токен недействителен" }, { status: 401 });
        }
        
        if(roleCurrentUser !== "admin") return NextResponse.json({ message: "Нет доступа" }, { status: 403 });
      
        const { id, isBanned, bannedUntil, banReason } = await req.json();
        
        if(idCurrentUser === id) {
            return NextResponse.json({ message: "Нельзя заблокировать самого себя" }, { status: 400 });
        }

        const shouldBan = isBanned === "true" || isBanned === true;
        
        if(shouldBan) {
            await db.orm.public.Users.where({ id }).update({ 
                isBanned: true, 
                bannedUntil: bannedUntil ? new Date(bannedUntil).toISOString() : null, 
                banReason: banReason || null 
            });
        } else {
            await db.orm.public.Users.where({ id }).update({ 
                isBanned: false, 
                bannedUntil: null, 
                banReason: null 
            });
        }
        
        return NextResponse.json({ message: "Успешно" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка бана пользователя" }, { status: 500 });
    }
}