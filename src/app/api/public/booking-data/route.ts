import { matchDoctorsForService } from "@/src/lib/booking/matchDoctors";
import { db } from "@/src/prisma/db";
import { NextResponse } from "next/server";

function asId(value: unknown) {
    return String(value ?? "");
}

export async function GET() {
    try {
        const [doctors, services, links] = await Promise.all([
            db.orm.public.Doctor.where({ isActive: true }).orderBy((d) => d.name.asc()).all(),
            db.orm.public.Service.where({ isActive: true }).include("category").all(),
            db.orm.public.DoctorService.all(),
        ]);

        const doctorsById = new Map(doctors.map((doctor) => [asId(doctor.id), doctor]));
        const doctorsByService = new Map<string, typeof doctors>();

        for (const link of links) {
            const doctor = doctorsById.get(asId(link.doctorId));
            const serviceId = asId(link.serviceId);
            if (!doctor || !serviceId) continue;
            const current = doctorsByService.get(serviceId) ?? [];
            if (current.some((item) => asId(item.id) === asId(doctor.id))) continue;
            doctorsByService.set(serviceId, current.concat(doctor));
        }

        const servicesWithDoctors = [...services]
            .sort((a, b) => {
                const orderA = a.category?.sortOrder ?? 999;
                const orderB = b.category?.sortOrder ?? 999;
                if (orderA !== orderB) return orderA - orderB;
                return a.title.localeCompare(b.title, "ru");
            })
            .map((service) => {
                const linked = doctorsByService.get(asId(service.id)) ?? [];
                const matched = linked.length
                    ? linked
                    : matchDoctorsForService(service.category?.title || "", service.title, doctors);
                const serviceDoctors = [...(matched.length ? matched : doctors)].sort((a, b) =>
                    a.name.localeCompare(b.name, "ru"),
                );

                return {
                    id: asId(service.id),
                    title: service.title,
                    slug: service.slug,
                    price: service.price,
                    priceFrom: service.priceFrom,
                    isActive: service.isActive,
                    category: service.category
                        ? {
                            id: asId(service.category.id),
                            title: service.category.title,
                            sortOrder: service.category.sortOrder,
                        }
                        : null,
                    doctors: serviceDoctors.map((doctor) => ({
                        id: asId(doctor.id),
                        name: doctor.name,
                        specialization: doctor.specialization,
                        isActive: doctor.isActive,
                        slug: doctor.slug,
                        photoUrl: doctor.photoUrl,
                    })),
                };
            });

        return NextResponse.json({
            doctors: doctors.map((doctor) => ({
                id: asId(doctor.id),
                name: doctor.name,
                specialization: doctor.specialization,
                isActive: doctor.isActive,
                slug: doctor.slug,
                photoUrl: doctor.photoUrl,
            })),
            services: servicesWithDoctors,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Ошибка загрузки" }, { status: 500 });
    }
}
