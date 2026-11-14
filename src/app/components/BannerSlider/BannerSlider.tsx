"use client"

import { useEffect, useState } from "react";
import Link from "next/link";
import type { TBanner } from "@/src/types";
import styles from "./BannerSlider.module.scss";

export function BannerSlider({ banners }: { banners: TBanner[] }) {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const items = banners.filter((banner) => banner.isActive && banner.imageUrl);

    useEffect(() => {
        if (items.length < 2 || paused) return;
        const delay = items[0]?.intervalMs || 5000;
        const timer = setInterval(() => {
            setIndex((current) => (current + 1) % items.length);
        }, delay);
        return () => clearInterval(timer);
    }, [items.length, paused, items[0]?.intervalMs]);

    if (!items.length) return null;

    const go = (dir: number) => {
        setIndex((current) => (current + dir + items.length) % items.length);
    };

    return (
        <section
            className={styles.slider}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Баннеры клиники"
        >
            <div className={styles.viewport}>
                <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
                    {items.map((banner) => (
                        <article className={styles.slide} key={banner.id}>
                            <img src={banner.imageUrl} alt={banner.title || "Баннер клиники Медис"} className={styles.image} />
                            {(banner.title || banner.subtitle || banner.buttonText) && (
                                <div className={styles.overlay}>
                                    {banner.title && <h2 className={styles.title}>{banner.title}</h2>}
                                    {banner.subtitle && <p className={styles.subtitle}>{banner.subtitle}</p>}
                                    {banner.buttonText && banner.buttonLink && (
                                        <Link href={banner.buttonLink} className={styles.btn}>
                                            {banner.buttonText}
                                        </Link>
                                    )}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
            {items.length > 1 && (
                <>
                    <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => go(-1)} aria-label="Предыдущий баннер">‹</button>
                    <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => go(1)} aria-label="Следующий баннер">›</button>
                    <div className={styles.dots}>
                        {items.map((banner, i) => (
                            <button
                                key={banner.id}
                                type="button"
                                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                                onClick={() => setIndex(i)}
                                aria-label={`Баннер ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}
