import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [doctors, services, links] = await Promise.all([
            db.orm.public.Doctor.where({ isActive: true }).orderBy((d) => d.name.asc()).all(),
            db.orm.public.Service.where({ isActive: true }).include("category").all(),
            db.orm.public.DoctorService.all(),
        ]);

        const doctorsById = new Map(doctors.map((doctor: { id: string }) => [doctor.id, doctor]));
        const doctorsByService: Record<string, typeof doctors> = {};

        for (const link of links as { serviceId: string; doctorId: string }[]) {
            const doctor = doctorsById.get(link.doctorId);
            if (!doctor) continue;
            if (!doctorsByService[link.serviceId]) doctorsByService[link.serviceId] = [];
            doctorsByService[link.serviceId].push(doctor);
        }

        for (const list of Object.values(doctorsByService)) {
            list.sort((a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name, "ru"));
        }

        const servicesWithDoctors = [...services]
            .sort((a: any, b: any) => {
                const orderA = a.category?.sortOrder ?? 999;
                const orderB = b.category?.sortOrder ?? 999;
                if (orderA !== orderB) return orderA - orderB;
                return String(a.title).localeCompare(String(b.title), "ru");
            })
            .map((service: { id: string }) => ({
                ...service,
                doctors: doctorsByService[service.id] || [],
            }));

        return NextResponse.json({ doctors, services: servicesWithDoctors });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка загрузки" }, { status: 500 });
    }
}
