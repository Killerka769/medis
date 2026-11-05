import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";

const SECRET_KEY = new TextEncoder().encode(process.env.SECRET_KEY);

export async function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if(pathname.startsWith("/admin")){
        const token = req.cookies.get("token")?.value;

        if(!token) return NextResponse.redirect(new URL("/login", req.url));

        try {
            const { payload } = await jwtVerify(token, SECRET_KEY);
            const userRole = String(payload.role).toLowerCase();
            if(userRole !== "admin") {
                return NextResponse.redirect(new URL("/profile", req.url));
            }
        } catch (error) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*']
}