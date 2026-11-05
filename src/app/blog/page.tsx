"use client"

import { useState } from "react";
import { useGetPublicArticles } from "@/src/lib/ReactQuery/query/public/articles/query";
import Link from "next/link";
import styles from "./BlogPage.module.scss";

export default function BlogCatalogPage() {
    const { data, isLoading, isError } = useGetPublicArticles();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    if (isLoading) return <div className={styles.loading}>Загрузка блога...</div>;
    if (isError || !data) return <div className={styles.error}>Ошибка загрузки</div>;

    const filteredArticles = activeCategory 
        ? data.articles.filter((a: any) => a.categoryId === activeCategory)
        : data.articles;

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Блог о здоровье</h1>
                <p className={styles.subtitle}>Полезные статьи от врачей клиники «Медис»</p>
            </div>

            <div className={styles.filters}>
                <button 
                    className={`${styles.filterBtn} ${!activeCategory ? styles.active : ""}`}
                    onClick={() => setActiveCategory(null)}
                >
                    Все статьи
                </button>
                {data.categories.map((cat: any) => (
                    <button 
                        key={cat.id}
                        className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ""}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {filteredArticles.map((article: any) => (
                    <Link href={`/blog/${article.slug}`} key={article.id} className={styles.card}>
                        <div className={styles.imageWrap}>
                            {article.coverUrl ? (
                                <img src={article.coverUrl} alt={article.title} />
                            ) : (
                                <div className={styles.placeholder}></div>
                            )}
                        </div>
                        <div className={styles.content}>
                            <span className={styles.category}>{article.category?.title || "Статья"}</span>
                            <h3 className={styles.cardTitle}>{article.title}</h3>
                            <p className={styles.excerpt}>{article.excerpt || "Читайте подробнее в статье..."}</p>
                            <div className={styles.bottom}>
                                <span className={styles.date}>{new Date(article.publishedAt || article.createdAt).toLocaleDateString("ru-RU")}</span>
                                <span className={styles.readMore}>Читать →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}