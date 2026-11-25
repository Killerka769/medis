import type { MetadataRoute } from "next";
import { db } from "@/src/prisma/db";
import { SITE_URL } from "@/src/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticPages: { path: string; changeFrequency: "daily" | "weekly" | "monthly" | "yearly"; priority: number }[] = [
        { path: "", changeFrequency: "daily", priority: 1 },
        { path: "/services", changeFrequency: "weekly", priority: 0.9 },
        { path: "/doctors", changeFrequency: "weekly", priority: 0.9 },
        { path: "/contacts", changeFrequency: "monthly", priority: 0.8 },
        { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
        { path: "/shop", changeFrequency: "weekly", priority: 0.6 },
        { path: "/appointments", changeFrequency: "monthly", priority: 0.8 },
        { path: "/licenses", changeFrequency: "yearly", priority: 0.4 },
        { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
        { path: "/consent", changeFrequency: "yearly", priority: 0.3 },
        { path: "/agreement", changeFrequency: "yearly", priority: 0.3 },
        { path: "/cookie", changeFrequency: "yearly", priority: 0.3 },
    ];
    const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
        url: `${SITE_URL}${page.path || "/"}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
    }));

    try {
        const [services, doctors, articles, products] = await Promise.all([
            db.orm.public.Service.where({ isActive: true }).all(),
            db.orm.public.Doctor.where({ isActive: true }).all(),
            db.orm.public.Article.where({ status: "published" }).all(),
            db.orm.public.Product.where({ isActive: true }).all(),
        ]);

        const dynamicRoutes: MetadataRoute.Sitemap = [
            ...services.map((item: { slug: string; updatedAt?: string }) => ({
                url: `${SITE_URL}/services/${item.slug}`,
                lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.8,
            })),
            ...doctors.map((item: { slug: string; updatedAt?: string }) => ({
                url: `${SITE_URL}/doctors/${item.slug}`,
                lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.7,
            })),
            ...articles.map((item: { slug: string; updatedAt?: string }) => ({
                url: `${SITE_URL}/blog/${item.slug}`,
                lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
                changeFrequency: "monthly" as const,
                priority: 0.6,
            })),
            ...products.map((item: { slug: string; updatedAt?: string }) => ({
                url: `${SITE_URL}/shop/${item.slug}`,
                lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.5,
            })),
        ];

        return [...staticRoutes, ...dynamicRoutes];
    } catch {
        return staticRoutes;
    }
}
