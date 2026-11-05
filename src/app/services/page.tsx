"use client"

import { useState } from "react";
import { useGetPublicServices } from "@/src/lib/ReactQuery/query/public/services/query"; 
import Link from "next/link";
import styles from "./ServicesPage.module.scss";

export default function ServicesCatalogPage() {
    const { data, isLoading, isError } = useGetPublicServices();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    if (isLoading) return <div className={styles.loading}>Загрузка услуг...</div>;
    if (isError || !data) return <div className={styles.error}>Ошибка загрузки</div>;

    const filteredServices = activeCategory 
        ? data.services.filter((s: any) => s.categoryId === activeCategory)
        : data.services;

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Наши услуги</h1>
                <p className={styles.subtitle}>Широкий спектр медицинских услуг для всей семьи</p>
            </div>

            {/* Фильтры по категориям */}
            <div className={styles.filters}>
                <button 
                    className={`${styles.filterBtn} ${!activeCategory ? styles.active : ""}`}
                    onClick={() => setActiveCategory(null)}
                >
                    Все услуги
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

            {/* Сетка услуг */}
            <div className={styles.grid}>
                {filteredServices.map((service: any) => (
                    <Link href={`/services/${service.slug}`} key={service.id} className={styles.card}>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardDesc}>{service.description || "Подробнее на странице услуги"}</p>
                        <div className={styles.cardBottom}>
                            <span className={styles.price}>
                                {service.price ? (service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽`) : "По запросу"}
                            </span>
                            <span className={styles.more}>Подробнее →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}