import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const doctors = await db.orm.public.Doctor.where({ isActive: true }).orderBy((d) => d.name.asc()).all();
        const services = await db.orm.public.Service.where({ isActive: true }).include("category").all();
        const links = await db.orm.public.DoctorService.all();

        const doctorsByService: Record<string, typeof doctors> = {};
        for (const link of links) {
            const doctor = doctors.find((item) => item.id === link.doctorId);
            if (!doctor) continue;
            const current = doctorsByService[link.serviceId] ?? [];
            if (current.some((item) => item.id === doctor.id)) continue;
            doctorsByService[link.serviceId] = current.concat(doctor);
        }

        for (const serviceId of Object.keys(doctorsByService)) {
            doctorsByService[serviceId] = [...doctorsByService[serviceId]].sort((a, b) => a.name.localeCompare(b.name, "ru"));
        }

        const servicesWithDoctors = [...services]
            .sort((a, b) => {
                const orderA = a.category?.sortOrder ?? 999;
                const orderB = b.category?.sortOrder ?? 999;
                if (orderA !== orderB) return orderA - orderB;
                return a.title.localeCompare(b.title, "ru");
            })
            .map((service) => ({
                ...service,
                doctors: doctorsByService[service.id] ?? [],
            }));

        return NextResponse.json({ doctors, services: servicesWithDoctors });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка загрузки" }, { status: 500 });
    }
}
