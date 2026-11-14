import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [doctors, services, links] = await Promise.all([
            db.orm.public.Doctor.where({ isActive: true }).orderBy((d) => d.name.asc()).all(),
            db.orm.public.Service.where({ isActive: true }).include("category").all(),
            db.orm.public.DoctorService.all(),
        ]);

        type DoctorRow = (typeof doctors)[number];
        const doctorsById = new Map(doctors.map((doctor) => [doctor.id, doctor]));
        const doctorsByService: Record<string, DoctorRow[]> = {};

        for (const link of links) {
            const doctor = doctorsById.get(link.doctorId);
            if (!doctor) continue;
            if (!doctorsByService[link.serviceId]) doctorsByService[link.serviceId] = [];
            doctorsByService[link.serviceId].push(doctor);
        }

        for (const list of Object.values(doctorsByService)) {
            list.sort((a, b) => a.name.localeCompare(b.name, "ru"));
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
                doctors: doctorsByService[service.id] || [],
            }));

        return NextResponse.json({ doctors, services: servicesWithDoctors });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка загрузки" }, { status: 500 });
    }
}
