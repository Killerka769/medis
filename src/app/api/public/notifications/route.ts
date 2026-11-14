import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const now = Date.now();
        const items = await db.orm.public.Notification.where({ isActive: true }).all();
        const notifications = items.filter((item: { expiresAt: string | null }) => {
            if (!item.expiresAt) return true;
            const expires = new Date(item.expiresAt).getTime();
            return !Number.isNaN(expires) && expires > now;
        });
        return NextResponse.json({ notifications }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка получения уведомлений" }, { status: 500 });
    }
}
