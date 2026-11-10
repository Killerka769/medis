import type { Metadata } from "next";
import { getPublicServices } from "@/src/lib/data/public";
import { ServicesCatalog } from "./ServicesCatalog";
import styles from "./ServicesPage.module.scss";

export const metadata: Metadata = {
    title: "Услуги клиники Медис в Махачкале",
    description: "Приёмы, диагностика и анализы в медицинском центре «Медис». Цены открыты, запись онлайн.",
    openGraph: {
        title: "Услуги клиники Медис",
        description: "Приёмы, диагностика и анализы. Запись онлайн в Махачкале.",
        images: [{ url: "/hero.webp" }],
    },
};

export default async function ServicesCatalogPage() {
    let data;
    try {
        data = await getPublicServices();
    } catch {
        return <main className={styles.page}><div className={styles.error}>Ошибка загрузки</div></main>;
    }

    return <ServicesCatalog services={data.services} categories={data.categories} />;
}
