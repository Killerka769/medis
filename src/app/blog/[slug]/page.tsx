"use client"

import { use } from "react";
import { useGetPublicArticle } from "@/src/lib/ReactQuery/query/public/articles/query";
import Link from "next/link";
import styles from "./ArticleDetail.module.scss";

export default function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { data, isLoading, isError } = useGetPublicArticle(slug);

    if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
    if (isError || !data) return <div className={styles.error}>Статья не найдена</div>;

    const { article, recentArticles } = data;

    return (
        <main className={styles.page}>
            <div className={styles.breadcrumbs}>
                <Link href="/">Главная</Link> / <Link href="/blog">Блог</Link> / <span>{article.title}</span>
            </div>

            <article className={styles.article}>
                <header className={styles.header}>
                    <span className={styles.category}>{article.category?.title || "Статья"}</span>
                    <h1 className={styles.title}>{article.title}</h1>
                    <p className={styles.date}>
                        Опубликовано: {new Date(article.publishedAt || article.createdAt).toLocaleDateString("ru-RU", { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                </header>

                {article.coverUrl && (
                    <img src={article.coverUrl} alt={article.title} className={styles.cover} />
                )}

                <div className={styles.content}>
                    {article.content}
                </div>
                
                <div className={styles.footer}>
                    <p>Поделиться статьей:</p>
                    <div className={styles.shareBtns}>
                        <button className={styles.shareBtn}>ВК</button>
                        <button className={styles.shareBtn}>Telegram</button>
                    </div>
                </div>
            </article>

            {recentArticles && recentArticles.length > 0 && (
                <section className={styles.recent}>
                    <h2 className={styles.recentTitle}>Читайте также</h2>
                    <div className={styles.recentGrid}>
                        {recentArticles.filter((a:any) => a.id !== article.id).map((rec: any) => (
                            <Link href={`/blog/${rec.slug}`} key={rec.id} className={styles.recCard}>
                                <h3>{rec.title}</h3>
                                <span>{new Date(rec.publishedAt || rec.createdAt).toLocaleDateString("ru-RU")}</span>
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}