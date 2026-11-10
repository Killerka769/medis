"use client"

import { useState } from "react";
import Link from "next/link";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import styles from "./BlogPage.module.scss";

export function BlogCatalog({ articles, categories }: { articles: any[]; categories: any[] }) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredArticles = activeCategory
        ? articles.filter((a: any) => a.categoryId === activeCategory)
        : articles;

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <span className={styles.badge}>Блог</span>
                <h1 className={styles.title}>Статьи о здоровье</h1>
                <p className={styles.subtitle}>Полезные материалы от врачей клиники «Медис»</p>
            </div>

            <div className={styles.filters}>
                <button
                    className={`${styles.filterBtn} ${!activeCategory ? styles.active : ""}`}
                    onClick={() => setActiveCategory(null)}
                >
                    Все статьи
                </button>
                {categories.map((cat: any) => (
                    <button
                        key={cat.id}
                        className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ""}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

            {filteredArticles.length === 0 ? (
                <p className={styles.empty}>Статей в этой категории пока нет</p>
            ) : (
                <div className={styles.grid}>
                    {filteredArticles.map((article: any) => (
                        <Link href={`/blog/${article.slug}`} key={article.id} className={styles.card}>
                            <div className={styles.imageWrap}>
                                {article.coverUrl ? (
                                    <img src={article.coverUrl} alt={article.title} />
                                ) : (
                                    <MediaPlaceholder kind="article" title={article.title} />
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
            )}
        </main>
    );
}
