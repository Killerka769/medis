import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublicArticle, getPublicArticles } from "@/src/lib/data/public";
import { ShareButtons } from "./ShareButtons";
import { MediaPlaceholder } from "../../components/MediaPlaceholder";
import styles from "./ArticleDetail.module.scss";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    try {
        const { articles } = await getPublicArticles();
        return articles.map((article: { slug: string }) => ({ slug: article.slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await getPublicArticle(slug).catch(() => null);
    if (!data) return { title: "Статья не найдена" };

    const title = data.article.title;
    const description = data.article.excerpt || data.article.title;

    return {
        title,
        description,
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
            title,
            description,
            images: [{ url: data.article.coverUrl || "/hero-v2.webp" }],
            url: `https://medis05.ru/blog/${slug}`,
        },
    };
}

export default async function ArticleDetailPage({ params }: Props) {
    const { slug } = await params;
    const data = await getPublicArticle(slug).catch(() => null);
    if (!data) notFound();

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
                        Опубликовано: {new Date(article.publishedAt || article.createdAt).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
                    </p>
                </header>

                {article.coverUrl ? (
                    <img src={article.coverUrl} alt={article.title} className={styles.cover} />
                ) : (
                    <div className={styles.coverFallback}>
                        <MediaPlaceholder kind="article" title={article.title} />
                    </div>
                )}

                <div className={styles.content}>
                    {article.content}
                </div>

                <div className={styles.footer}>
                    <p>Поделиться статьей:</p>
                    <ShareButtons title={article.title} />
                </div>
            </article>

            <div className={styles.ctaCard}>
                <h2>Подготовлено врачами Медис</h2>
                <p>Материал носит информационный характер. Для диагноза и лечения запишитесь на приём в клинику.</p>
                <Link href="/appointments" className={styles.ctaBtn}>Записаться на прием</Link>
            </div>

            {recentArticles && recentArticles.length > 0 && (
                <section className={styles.recent}>
                    <h2 className={styles.recentTitle}>Читайте также</h2>
                    <div className={styles.recentGrid}>
                        {recentArticles.filter((a: any) => a.id !== article.id).map((rec: any) => (
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
