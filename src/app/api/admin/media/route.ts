import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET(req: NextRequest) {
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
    const { searchParams } = new URL(req.url);
    const folderParam = searchParams.get("folder");
    const folder = (folderParam && folderParam !== "null" && folderParam !== "undefined") ? folderParam : "";
    const files = await fs.readdir(path.join(process.cwd(), "public", "uploads", folder), { withFileTypes: true });
    const serializedFiles = files.map(file => ({
        name: file.name,
        isFolder: file.isDirectory(),
        path: `${folder}/${file.name}`,
        url: folder ? `/uploads/${folder}/${file.name}` : `/uploads/${file.name}`,
    }));
    console.log(serializedFiles);
    return NextResponse.json(serializedFiles);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка медиатеки сервера" }, { status: 500 });
    }
}

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
        const formdata = await req.formData();
        const file = formdata.get("file") as File;
        const folderParam = formdata.get("folder") as string | null;
        const folder = (folderParam && folderParam !== "null" && folderParam !== "undefined") ? folderParam : "";
        if(!file) return NextResponse.json({ message: "Файл не найден" }, { status: 400 });
        const byffer = Buffer.from(await file.arrayBuffer());
        await fs.mkdir(path.join(process.cwd(), "public", "uploads", folder), { recursive: true });
        await fs.writeFile(path.join(process.cwd(), "public", "uploads", folder, file.name), byffer);
        return NextResponse.json({ 
            message: "Файл успешно загружен",
            file: {
                name: file.name,
                isFolder: false,
                path: folder ? `${folder}/${file.name}` : file.name,
                url: folder ? `/uploads/${folder}/${file.name}` : `/uploads/${file.name}`
            }
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка медиатеки сервера" }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
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
        
        const { path: itemPath, isFolder } = await req.json();
        if(!itemPath) return NextResponse.json({ message: "Путь не передан" }, { status: 400 });

        const fullPath = path.join(process.cwd(), "public", "uploads", itemPath);

        if (!fullPath.startsWith(path.join(process.cwd(), "public", "uploads"))) {
            return NextResponse.json({ message: "Недопустимый путь" }, { status: 400 });
        }

        if (isFolder) {
            await fs.rm(fullPath, { recursive: true, force: true });
        } else {
            await fs.unlink(fullPath);
        }

        return NextResponse.json({ message: "Успешно удалено" }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Ошибка удаления" }, { status: 500 });
    }
}