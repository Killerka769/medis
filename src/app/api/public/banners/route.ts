import { db } from "@/src/prisma/db";
import { NextRequest, NextResponse } from "next/server";

function matchesPage(pages: string, pathname: string) {
    const list = (pages || "/")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    if (!list.length) return pathname === "/";
    return list.some((page) => page === "*" || page === pathname);
}

export async function GET(req: NextRequest) {
    try {
        const pathname = req.nextUrl.searchParams.get("page") || "/";
        const banners = await db.orm.public.Banner
            .where({ isActive: true })
            .orderBy((b) => b.sortOrder.asc())
            .all();
        const filtered = banners.filter((banner: { pages: string }) => matchesPage(banner.pages, pathname));
        return NextResponse.json({ banners: filtered }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка получения баннеров" }, { status: 500 });
    }
}
