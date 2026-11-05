"use client"

import { useState } from "react";
import { useGetPublicProducts } from "@/src/lib/ReactQuery/query/public/products/query";
import Link from "next/link";
import styles from "./ShopPage.module.scss";

export default function ShopCatalogPage() {
    const { data, isLoading, isError } = useGetPublicProducts();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    if (isLoading) return <div className={styles.loading}>Загрузка магазина...</div>;
    if (isError || !data) return <div className={styles.error}>Ошибка загрузки</div>;

    const filteredProducts = activeCategory 
        ? data.products.filter((p: any) => p.categoryId === activeCategory)
        : data.products;

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Магазин медицинских товаров</h1>
                <p className={styles.subtitle}>Базы, расходные материалы и импланты</p>
            </div>

            <div className={styles.filters}>
                <button 
                    className={`${styles.filterBtn} ${!activeCategory ? styles.active : ""}`}
                    onClick={() => setActiveCategory(null)}
                >
                    Все товары
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
                {filteredProducts.map((product: any) => (
                    <Link href={`/shop/${product.slug}`} key={product.id} className={styles.card}>
                        <div className={styles.imageWrap}>
                            {product.imageUrl ? (
                                <img src={product.imageUrl} alt={product.title} />
                            ) : (
                                <div className={styles.placeholder}>Нет фото</div>
                            )}
                        </div>
                        <div className={styles.content}>
                            <span className={styles.category}>{product.category?.title}</span>
                            <h3 className={styles.cardTitle}>{product.title}</h3>
                            <div className={styles.bottom}>
                                <span className={styles.price}>{product.price} ₽</span>
                                <span className={styles.more}>Подробнее →</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}