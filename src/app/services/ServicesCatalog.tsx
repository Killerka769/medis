"use client"

import { useState } from "react";
import Link from "next/link";
import { MediaPlaceholder } from "../components/MediaPlaceholder";
import styles from "./ServicesPage.module.scss";

export function ServicesCatalog({ services, categories }: { services: any[]; categories: any[] }) {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const filteredServices = activeCategory
        ? services.filter((s: any) => s.categoryId === activeCategory)
        : services;

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <span className={styles.badge}>Клиника</span>
                <h1 className={styles.title}>Наши услуги</h1>
                <p className={styles.subtitle}>Приёмы, диагностика и анализы — цены открыты, запись онлайн</p>
            </div>

            <div className={styles.filters}>
                <button
                    className={`${styles.filterBtn} ${!activeCategory ? styles.active : ""}`}
                    onClick={() => setActiveCategory(null)}
                >
                    Все услуги
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

            {filteredServices.length === 0 ? (
                <p className={styles.empty}>Услуг в этой категории пока нет</p>
            ) : (
                <div className={styles.grid}>
                    {filteredServices.map((service: any) => (
                        <Link href={`/services/${service.slug}`} key={service.id} className={styles.card}>
                            <MediaPlaceholder kind="service" />
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
            )}
        </main>
    );
}
