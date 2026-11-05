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
        const doctors = await db.orm.public.Doctor.orderBy((u) => u.name.asc()).all();
        return NextResponse.json(doctors, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка получения докторов" }, { status: 500 })
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
        const { name, specialization, experienceYears, education, certificates, bio, photoUrl, isActive } = await req.json();
        if(!name || !specialization) return NextResponse.json({ message: "Заполните имя и специализацию" }, { status: 400 });
        const slug = await generateSlug(name);
        const newDoctor = await db.orm.public.Doctor.create({ name, slug, bio: bio || null, photoUrl: photoUrl || null, isActive: isActive === true || isActive === "true", experienceYears: Number(experienceYears) || 0, specialization, education: education ? { text: education.trim() } : null, certificates: certificates ? certificates.split("\n").map((s: string) => s.trim()).filter(Boolean) : [] });
        return NextResponse.json({ message: "Доктор успешно создан", doctor: newDoctor }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка создания доктора" }, { status: 500 })
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
        const { id, name, specialization, experienceYears, education, certificates, bio, photoUrl, isActive } = await req.json();
        if(!id || !name || !specialization) return NextResponse.json({ message: "Заполните имя и специализацию" }, { status: 400 });
        const slug = await generateSlug(name);
        const updateDoctor = await db.orm.public.Doctor.where({ id }).update({ name, slug, bio: bio || null, photoUrl: photoUrl || null, isActive: isActive === true || isActive === "true", experienceYears: Number(experienceYears) || 0, specialization, education: education ? { text: education.trim() } : null, certificates: certificates ? certificates.split("\n").map((s: string) => s.trim()).filter(Boolean) : [] });
        return NextResponse.json({ message: "Доктор успешно обновлен", doctor: updateDoctor }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка обновления доктора" }, { status: 500 })
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
        await db.orm.public.Doctor.where({ id }).update({ isActive: false });
        return NextResponse.json({ message: "Успешное удаление врача" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка удаления доктора" }, { status: 500 })
    }
}