"use client"

import { useEffect } from "react";
import styles from "./HomePage.module.scss";
import Link from "next/link";
import Image from "next/image";
import { VisitSteps } from "./components/home/VisitSteps";
import { TrustBlock } from "./components/home/TrustBlock";
import { Faq } from "./components/home/Faq";
import { MediaPlaceholder } from "./components/MediaPlaceholder";
import { DoctorAvatar } from "./components/DoctorAvatar";

export function HomeView({ data }: { data: any }) {
    useEffect(() => {
        const nodes = Array.from(document.querySelectorAll(`.${styles.reveal}`));
        if (!nodes.length) return;

        const show = (el: Element) => el.classList.add(styles.animateIn);

        if (typeof IntersectionObserver === "undefined") {
            nodes.forEach(show);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    show(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

        nodes.forEach((el) => {
            observer.observe(el);
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) show(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>

                <div className={styles.heroImage}>
                    <div className={styles.heroImageWrapper}>
                        <Image
                            src="/hero.webp"
                            width={960}
                            height={720}
                            priority
                            sizes="(max-width: 768px) 100vw, 520px"
                            className={styles.heroImg}
                            alt="Клиника Медис"
                        />
                    </div>
                </div>

                <div className={styles.heroContent}>
                    <div className={styles.heroBadge}>Медицинский центр «Медис»</div>
                    <h1 className={styles.heroTitle}>
                        Забота о вашем здоровье <br />
                        <span className={styles.heroAccent}>в Махачкале</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Современная клиника с опытными врачами и оборудованием. Работаем ежедневно с 09:00 до 23:00.
                    </p>
                    <div className={styles.heroMeta}>
                        <span>09:00–23:00</span>
                        <span>ул. Ахульго, 77</span>
                        <span>Запись онлайн</span>
                    </div>
                    <div className={styles.heroActions}>
                        <Link href="/appointments" className={styles.btnPrimary}>
                            Записаться на прием
                        </Link>
                        <Link href="/services" className={styles.btnSecondary}>
                            Все услуги
                        </Link>
                    </div>
                </div>
            </section>

            {data.services && data.services.length > 0 && (
                <section className={`${styles.section} ${styles.reveal}`}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Наши услуги</h2>
                        <Link href="/services" className={styles.linkAll}>Все услуги →</Link>
                    </div>
                    <div className={styles.servicesGrid}>
                        {data.services.map((service: any) => (
                            <Link href={`/services/${service.slug}`} key={service.id} className={styles.serviceCard}>
                                <div className={styles.serviceTop}>
                                    <MediaPlaceholder kind="service" />
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceCategory}>{service.category?.title}</p>
                                </div>
                                <div className={styles.serviceBottom}>
                                    <div className={styles.servicePrice}>
                                        {service.price == null ? "По запросу" : service.price === 0 ? "Бесплатно" : (service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽`)}
                                    </div>
                                    <span className={styles.serviceArrow}>→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

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
                                        <DoctorAvatar name={doctor.name} />
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

            <section className={`${styles.section} ${styles.reveal}`}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Как проходит визит</h2>
                </div>
                <VisitSteps />
            </section>

            <section className={`${styles.ctaSection} ${styles.reveal}`}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Не откладывайте здоровье на потом</h2>
                    <p className={styles.ctaSubtitle}>
                        Оставьте заявку — администратор подберёт удобное время и подтвердит запись звонком.
                    </p>
                    <Link href="/appointments" className={styles.btnCta}>
                        Записаться на прием
                    </Link>
                </div>
            </section>

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
                                        <MediaPlaceholder kind="article" title={article.title} />
                                    )}
                                </div>
                                <div className={styles.articleInfo}>
                                    <span className={styles.articleCategory}>{article.category?.title || "Статья"}</span>
                                    <h3 className={styles.articleTitle}>{article.title}</h3>
                                    <p className={styles.articleDate} suppressHydrationWarning>
                                        {new Date(article.publishedAt || article.createdAt).toLocaleDateString("ru-RU")}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            <section className={`${styles.section} ${styles.reveal}`}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
                </div>
                <div className={styles.featuresGrid}>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon} aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l2.2 6.6H21l-5.4 4 2.1 6.4L12 16.8 6.3 20l2.1-6.4L3 9.6h6.8L12 3z" fill="currentColor"/></svg>
                        </span>
                        <h3>Профессионализм</h3>
                        <p>Специалисты различных областей медицины. Большинство докторов имеют ученую степень и применяют инновационные методы.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon} aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16v3H4V7zm2 5h12v7H6v-7zm5-9h2v3h-2V3z" fill="currentColor"/></svg>
                        </span>
                        <h3>Современное оборудование</h3>
                        <p>Передовое, высокотехнологичное оборудование экспертного класса. Точная диагностика в кратчайшие сроки.</p>
                    </div>
                    <div className={styles.featureItem}>
                        <span className={styles.featureIcon} aria-hidden>
                            <svg viewBox="0 0 24 24" fill="none"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zm.8 4h-1.6v5l3.6 2.2.8-1.3-2.8-1.7V8z" fill="currentColor"/></svg>
                        </span>
                        <h3>Ежедневно с 09:00 до 23:00</h3>
                        <p>Клиника открыта семь дней в неделю. Вы можете получить помощь в удобное время, в том числе вечером и в выходные.</p>
                    </div>
                </div>
            </section>

            <section className={`${styles.section} ${styles.reveal}`}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Доверие и безопасность</h2>
                </div>
                <TrustBlock />
            </section>

            <section className={`${styles.section} ${styles.reveal}`}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Частые вопросы</h2>
                </div>
                <Faq />
            </section>

            <section className={`${styles.section} ${styles.reveal}`}>
                <div className={styles.contactHeader}>
                    <h2 className={styles.sectionTitle}>Как нас найти</h2>
                    <p className={styles.contactSubtitle}>г. Махачкала, ул. Ахульго, 77 · Пн–Вс: 09:00 – 23:00</p>
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
