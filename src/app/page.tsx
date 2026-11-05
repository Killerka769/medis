"use client"

import { useEffect } from "react";
import { useGetHomeData } from "../lib/ReactQuery/query/public/home/query"; 
import styles from "./HomePage.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    const { data, isLoading, isError } = useGetHomeData();

    // Эффект появления при скролле (Intersection Observer)
    useEffect(() => {
        if (!data) return; // Ждём загрузки данных

        // Небольшая задержка, чтобы React успел отрендерить DOM
        const timer = setTimeout(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animateIn);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll(`.${styles.reveal}`).forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }, 100); // 100мс достаточно

        return () => clearTimeout(timer);
    }, [data]); 

    if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
    if (isError || !data) return <div className={styles.error}>Ошибка загрузки данных</div>;

    return (
        <main className={styles.page}>
            {/* ГЛАВНЫЙ БАННЕР */}
            <section className={styles.hero}>
                {/* Декоративные пятна на фоне */}
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>

                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>Медицинский центр «Медис»</div>
                    <h1 className={styles.heroTitle}>
                        Забота о вашем здоровье <br />
                        <span className={styles.heroAccent}>в Махачкале</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Современная клиника с опытными врачами, новейшим оборудованием и индивидуальным подходом к каждому пациенту. Мы работаем для вас 7 дней в неделю.
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/appointments" className={styles.btnPrimary}>
                            Записаться на прием
                        </Link>
                        <Link href="/services" className={styles.btnSecondary}>
                            Все услуги
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <div className={styles.heroImageWrapper}>
                        {/* Вставь сюда реальное фото клиники */}
                        <Image 
                            src="/hero.webp" // Убедись, что файл лежит в папке public (без /public в пути)
                            fill
                            className={styles.heroImg}
                            alt="Клиника Медис" 
                        />
                    </div>
                </div>
            </section>

            {/* УСЛУГИ */}
            {data.services && data.services.length > 0 && (
                <section className={`${styles.section} ${styles.reveal}`}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Наши услуги</h2>
                        <Link href="/services" className={styles.linkAll}>Все услуги →</Link>
                    </div>
                    <div className={styles.servicesGrid}>
                        {data.services.map((service: any, i: number) => (
                            <Link href={`/services/${service.slug}`} key={service.id} className={styles.serviceCard} style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className={styles.serviceTop}>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceCategory}>{service.category?.title}</p>
                                </div>
                                <div className={styles.serviceBottom}>
                                    <div className={styles.servicePrice}>
                                        {service.price ? (service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽`) : "По запросу"}
                                    </div>
                                    <span className={styles.serviceArrow}>→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* ВРАЧИ */}
            {data.doctors && data.doctors.length > 0 && (
                <section className={`${styles.section} ${styles.reveal}`}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Наши специалисты</h2>
                        <Link href="/doctors" className={styles.linkAll}>Все врачи →</Link>
                    </div>
                    <div className={styles.doctorsGrid}>
                        {data.doctors.map((doctor: any) => (
                            <Link href={`/doctors/${doctor.slug}`} key={doctor.id} className={styles.doctorCard}>
                                <div className={styles.doctorImage}>
                                    {doctor.photoUrl ? (
                                        <img src={doctor.photoUrl} alt={doctor.name} />
                                    ) : (
                                        <div className={styles.doctorPlaceholder}>
                                            {doctor.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.doctorInfo}>
                                    <h3 className={styles.doctorName}>{doctor.name}</h3>
                                    <p className={styles.doctorSpec}>{doctor.specialization}</p>
                                    <p className={styles.doctorExp}>Стаж: {doctor.experienceYears} лет</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* БЛОК CTA (Призыв к действию) */}
            <section className={`${styles.ctaSection} ${styles.reveal}`}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Не откладывайте здоровье на потом</h2>
                    <p className={styles.ctaSubtitle}>
                        Запишитесь на прием прямо сейчас. Наш администратор свяжется с вами для подтверждения удобного времени.
                    </p>
                    <Link href="/appointments" className={styles.btnCta}>
                        Записаться на прием
                    </Link>
                </div>
            </section>

            {/* БЛОГ */}
            {data.articles && data.articles.length > 0 && (
                <section className={`${styles.section} ${styles.reveal}`}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Полезные статьи</h2>
                        <Link href="/blog" className={styles.linkAll}>Все статьи →</Link>
                    </div>
                    <div className={styles.articlesGrid}>
                        {data.articles.map((article: any) => (
                            <Link href={`/blog/${article.slug}`} key={article.id} className={styles.articleCard}>
                                <div className={styles.articleImage}>
                                    {article.coverUrl ? (
                                        <img src={article.coverUrl} alt={article.title} />
                                    ) : (
                                        <div className={styles.articlePlaceholder}>
                                            {article.title.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div className={styles.articleInfo}>
                                    <span className={styles.articleCategory}>{article.category?.title || "Статья"}</span>
                                    <h3 className={styles.articleTitle}>{article.title}</h3>
                                    <p className={styles.articleDate}>{new Date(article.publishedAt || article.createdAt).toLocaleDateString("ru-RU")}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* БЛОК ПРЕИМУЩЕСТВ */}
            <section className={`${styles.section} ${styles.reveal}`}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
                </div>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>👨‍⚕️</div>
                        <h3>Профессионализм</h3>
                        <p>Специалисты различных областей медицины. Большинство докторов имеют ученую степень и применяют инновационные методы.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>🔬</div>
                        <h3>Современное оборудование</h3>
                        <p>Передовое, высокотехнологичное оборудование экспертного класса. Точная диагностика в кратчайшие сроки.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureIcon}>🕐</div>
                        <h3>Работаем 24/7</h3>
                        <p>Наша клиника открыта ежедневно с 09:00 до 23:00. Вы всегда можете получить помощь в удобное время.</p>
                    </div>
                </div>
            </section>

            {/* КАРТА И КОНТАКТЫ */}
            <section className={`${styles.section} ${styles.reveal}`}>
                <div className={styles.contactHeader}>
                    <h2 className={styles.sectionTitle}>Как нас найти</h2>
                    <p className={styles.contactSubtitle}>г. Махачкала, ул. Ахульго, 77</p>
                </div>
                <div className={styles.mapWrapper}>
                    <iframe 
                        src="https://yandex.ru/map-widget/v1/?ll=47.454760%2C42.982883&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTY3NDk5NjE0EkLQoNC-0YHRgdC40Y8sINCg0LXRgdC%2F0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCc0LDRhdCw0YfQutCw0LvQsCwg0YPQu9C40YbQsCDQkNGD0YXQu9GM0LPQviwgNzcsINCc0LXQtNC40YbQuNC90YHQutC40Lkg0YbQtdC90YLRgA%3D%3D&pt=47.454760,42.982883,pm2rdm"
                        width="100%" 
                        height="450" 
                        frameBorder="0"
                        title="Карта клиники Медис"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </main>
    );
}