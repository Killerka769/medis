import { db } from "@/src/prisma/db";
import { SITE_URL } from "@/src/lib/seo";

export const dynamic = "force-dynamic";

type CategoryRow = { id: string; title: string; isActive: boolean; sortOrder: number };
type ServiceRow = {
    id: string;
    title: string;
    slug: string;
    price: number | null;
    description: string | null;
    content: string | null;
    imageUrl: string | null;
    categoryId: string;
    isActive: boolean;
};
type DoctorRow = {
    name: string;
    specialization: string;
    experienceYears: number;
    isActive: boolean;
};
type DoctorLink = { serviceId: string; doctor: DoctorRow | null };

function escapeXml(value: string) {
    return value
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;");
}

function plainText(value: string) {
    return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function absoluteUrl(url: string) {
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`;
}

function ymlDate(date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Moscow",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
    }).formatToParts(date);
    const pick = (type: string) => parts.find((part) => part.type === type)?.value || "00";
    return `${pick("year")}-${pick("month")}-${pick("day")} ${pick("hour")}:${pick("minute")}`;
}

export async function GET() {
    try {
        const [categoryRows, serviceRows, linkRows] = await Promise.all([
            db.orm.public.ServiceCategory.where({ isActive: true }).orderBy((category) => category.sortOrder.asc()).all(),
            db.orm.public.Service.where({ isActive: true }).all(),
            db.orm.public.DoctorService.include("doctor").all(),
        ]);
        const categories = categoryRows as unknown as CategoryRow[];
        const services = serviceRows as unknown as ServiceRow[];
        const links = linkRows as unknown as DoctorLink[];

        const categoryIdByUuid = new Map<string, number>();
        categories.forEach((category, index) => {
            categoryIdByUuid.set(category.id, index + 1);
        });

        const doctorsByService = new Map<string, DoctorRow[]>();
        for (const link of links) {
            if (!link.doctor || link.doctor.isActive === false) continue;
            const list = doctorsByService.get(link.serviceId) || [];
            list.push(link.doctor);
            doctorsByService.set(link.serviceId, list);
        }

        const categoriesXml = categories.map((category) => {
            const id = categoryIdByUuid.get(category.id);
            return `      <category id="${id}">${escapeXml(category.title)}</category>`;
        }).join("\n");

        const offersXml = services
            .filter((service) => service.isActive && service.price != null && categoryIdByUuid.has(service.categoryId))
            .map((service) => {
                const categoryId = categoryIdByUuid.get(service.categoryId);
                const description = plainText(service.description || service.content || service.title).slice(0, 3000);
                const picture = service.imageUrl ? `        <picture>${escapeXml(absoluteUrl(service.imageUrl))}</picture>\n` : "";
                const doctors = doctorsByService.get(service.id) || [];
                const params = doctors.map((doctor) => [
                    `        <param name="Врач">${escapeXml(doctor.name)}</param>`,
                    `        <param name="Стаж">${escapeXml(String(doctor.experienceYears))}</param>`,
                    `        <param name="Специальность">${escapeXml(doctor.specialization)}</param>`,
                ].join("\n")).join("\n");

                return [
                    `      <offer id="${escapeXml(service.id)}" available="true">`,
                    `        <name>${escapeXml(service.title)}</name>`,
                    `        <url>${escapeXml(`${SITE_URL}/services/${service.slug}`)}</url>`,
                    `        <price>${service.price}</price>`,
                    `        <currencyId>RUR</currencyId>`,
                    `        <categoryId>${categoryId}</categoryId>`,
                    picture.trimEnd(),
                    `        <description>${escapeXml(description)}</description>`,
                    params,
                    `      </offer>`,
                ].filter(Boolean).join("\n");
            }).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<yml_catalog date="${ymlDate()}">
  <shop>
    <name>Медицинский центр «Медис»</name>
    <company>ООО «МЕДИС»</company>
    <url>${SITE_URL}</url>
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    <categories>
${categoriesXml}
    </categories>
    <offers>
${offersXml}
    </offers>
  </shop>
</yml_catalog>
`;

        return new Response(xml, {
            headers: {
                "Content-Type": "application/xml; charset=utf-8",
                "Cache-Control": "no-store",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response("YML feed is unavailable", { status: 500 });
    }
}
