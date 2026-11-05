import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE() {
    try {
        (await cookies()).delete("token");
        return NextResponse.json({ message: "Успешный выход с профиля" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Ошибка при выходе с профиля!" }, { status: 500 });
    }
}