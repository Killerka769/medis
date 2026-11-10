import type { Metadata } from "next";
import { getPublicArticles } from "@/src/lib/data/public";
import { BlogCatalog } from "./BlogCatalog";
import styles from "./BlogPage.module.scss";

export const metadata: Metadata = {
    title: "Блог о здоровье | Медис",
    description: "Полезные статьи от врачей клиники «Медис» в Махачкале.",
    openGraph: {
        title: "Блог о здоровье | Медис",
        description: "Полезные статьи от врачей клиники «Медис».",
        images: [{ url: "/hero.webp" }],
    },
};

export default async function BlogCatalogPage() {
    let data;
    try {
        data = await getPublicArticles();
    } catch {
        return <main className={styles.page}><div className={styles.error}>Ошибка загрузки</div></main>;
    }

    return <BlogCatalog articles={data.articles} categories={data.categories} />;
}
