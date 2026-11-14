import type { MetadataRoute } from "next";
import { db } from "@/src/prisma/db";
import { SITE_URL } from "@/src/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        "",
        "/services",
        "/doctors",
        "/blog",
        "/shop",
        "/contacts",
        "/appointments",
        "/licenses",
        "/privacy",
        "/consent",
        "/agreement",
        "/cookie",
    ].map((path) => ({
        url: `${SITE_URL}${path || "/"}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : 0.8,
    }));

    try {
        const [services, doctors, articles] = await Promise.all([
            db.orm.public.Service.where({ isActive: true }).all(),
            db.orm.public.Doctor.where({ isActive: true }).all(),
            db.orm.public.Article.where({ status: "published" }).all(),
        ]);

        const dynamicRoutes: MetadataRoute.Sitemap = [
            ...services.map((item: { slug: string; updatedAt?: string }) => ({
                url: `${SITE_URL}/services/${item.slug}`,
                lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
                changeFrequency: "weekly" as const,
                priority: 0.7,
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
        ];

        return [...staticRoutes, ...dynamicRoutes];
    } catch {
        return staticRoutes;
    }
}
