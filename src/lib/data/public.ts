import { FEATURED_SERVICE_SLUG } from "@/src/lib/content/featured";
import { db } from "@/src/prisma/db";

export async function getHomeData() {
    const doctors = await db.orm.public.Doctor
        .where({ isActive: true })
        .orderBy(d => d.experienceYears.desc())
        .limit(4)
        .all();

    const services = await db.orm.public.Service
        .where({ isActive: true })
        .include("category")
        .limit(6)
        .all();

    const articles = await db.orm.public.Article
        .where({ status: "published" })
        .orderBy(a => a.publishedAt.desc())
        .include("category")
        .limit(3)
        .all();

    const banners = await db.orm.public.Banner
        .where({ isActive: true })
        .orderBy(b => b.sortOrder.asc())
        .all();

    const homeBanners = banners.filter((banner: { pages: string }) => {
        const list = (banner.pages || "/").split(",").map((item: string) => item.trim());
        return list.includes("/") || list.includes("*");
    });

    const featuredService = await db.orm.public.Service
        .where({ slug: FEATURED_SERVICE_SLUG, isActive: true })
        .first();

    return { doctors, services, articles, banners: homeBanners, featuredService };
}

export async function getPublicServices() {
    const services = await db.orm.public.Service
        .where({ isActive: true })
        .include("category")
        .all();

    const categories = await db.orm.public.ServiceCategory
        .where({ isActive: true })
        .orderBy(c => c.sortOrder.asc())
        .all();

    return { services, categories };
}

export async function getPublicService(slug: string) {
    const service = await db.orm.public.Service
        .where({ slug, isActive: true })
        .include("category")
        .first();

    if (!service) return null;

    const doctorServices = await db.orm.public.DoctorService
        .where({ serviceId: service.id })
        .include("doctor")
        .all();

    const doctors = doctorServices
        .map((ds: any) => ds.doctor)
        .filter((d: any) => d && d.isActive);

    return { service, doctors };
}

export async function getPublicDoctors() {
    const doctors = await db.orm.public.Doctor
        .where({ isActive: true })
        .orderBy(d => d.name.asc())
        .all();

    return { doctors };
}

export async function getPublicDoctor(slug: string) {
    const doctor = await db.orm.public.Doctor
        .where({ slug, isActive: true })
        .first();

    if (!doctor) return null;

    const doctorServices = await db.orm.public.DoctorService
        .where({ doctorId: doctor.id })
        .include("service")
        .all();

    const services = doctorServices
        .map((ds: any) => ds.service)
        .filter((s: any) => s && s.isActive);

    return { doctor, services };
}

export async function getPublicArticles() {
    const articles = await db.orm.public.Article
        .where({ status: "published" })
        .orderBy(a => a.publishedAt.desc())
        .include("category")
        .all();

    const categories = await db.orm.public.ArticleCategory
        .where({ isActive: true })
        .orderBy(c => c.sortOrder.asc())
        .all();

    return { articles, categories };
}

export async function getPublicArticle(slug: string) {
    const article = await db.orm.public.Article
        .where({ slug, status: "published" })
        .include("category")
        .first();

    if (!article) return null;

    const recentArticles = await db.orm.public.Article
        .where({ status: "published" })
        .orderBy(a => a.publishedAt.desc())
        .limit(3)
        .all();

    return { article, recentArticles };
}
