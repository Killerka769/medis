import type { Metadata } from "next";
import { getPublicServices } from "@/src/lib/data/public";
import { ServicesCatalog } from "./ServicesCatalog";
import styles from "./ServicesPage.module.scss";

export const metadata: Metadata = {
    title: "Услуги медицинского центра в Махачкале",
    description: "Прайс на консультации, УЗИ, амбулаторные и физиопроцедуры клиники Медис. Запись онлайн.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "Услуги клиники Медис",
        description: "Приёмы, диагностика и процедуры. Запись онлайн в Махачкале.",
        images: [{ url: "/hero-v2.webp" }],
        url: "https://medis05.ru/services",
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
