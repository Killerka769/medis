import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { db } from "@/src/prisma/db";
import { HeaderClient } from "./HeaderClient";

export async function Header() {
    const token = (await cookies()).get("token")?.value;
    
    let isAdmin = false;
    let isAuth = false;

    if (token) {
        try {
            const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_KEY));
            const userId = String(payload.id);
            const user = await db.orm.public.Users.where({ id: userId }).select("role").first();
            
            isAuth = true;
            isAdmin = user?.role === "admin";
        } catch (error) {
            // Токен просрочен или невалиден — ничего не делаем, просто считаем, что не авторизован
        }
    }

    return <HeaderClient isAuth={isAuth} isAdmin={isAdmin} />;
}