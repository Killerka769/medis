"use client"

import { use } from "react";
import { useGetPublicService } from "@/src/lib/ReactQuery/query/public/services/query";
import Link from "next/link";
import styles from "./ServiceDetail.module.scss";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { data, isLoading, isError } = useGetPublicService(slug);

    if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
    if (isError || !data) return <div className={styles.error}>Услуга не найдена</div>;

    const { service, doctors } = data;

    return (
        <main className={styles.page}>
            <div className={styles.breadcrumbs}>
                <Link href="/">Главная</Link> / <Link href="/services">Услуги</Link> / <span>{service.title}</span>
            </div>

            <div className={styles.layout}>
                {/* Основная информация */}
                <div className={styles.mainContent}>
                    <h1 className={styles.title}>{service.title}</h1>
                    <p className={styles.category}>{service.category?.title}</p>
                    
                    {service.imageUrl && (
                        <img src={service.imageUrl} alt={service.title} className={styles.image} />
                    )}

                    <div className={styles.content}>
                        {/* Если контент в markdown, здесь позже можно подключить react-markdown */}
                        {service.content || service.description || "Описание услуги скоро появится."}
                    </div>

                    {doctors.length > 0 && (
                        <div className={styles.doctorsBlock}>
                            <h2 className={styles.subTitle}>Эту услугу оказывают:</h2>
                            <div className={styles.doctorsGrid}>
                                {doctors.map((doc: any) => (
                                    <Link href={`/doctors/${doc.slug}`} key={doc.id} className={styles.doctorMini}>
                                        {doc.photoUrl ? <img src={doc.photoUrl} alt={doc.name} /> : <div className={styles.avatarPlaceholder}>{doc.name[0]}</div>}
                                        <div>
                                            <p className={styles.docName}>{doc.name}</p>
                                            <p className={styles.docSpec}>{doc.specialization}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Сайдбар с ценой и кнопкой */}
                <aside className={styles.sidebar}>
                    <div className={styles.priceCard}>
                        <p className={styles.priceLabel}>Стоимость:</p>
                        <p className={styles.priceValue}>
                            {service.price ? (service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽`) : "По запросу"}
                        </p>
                        {service.duration && <p className={styles.duration}>~{service.duration} минут</p>}
                        
                        <Link href={`/appointments?service=${service.id}`} className={styles.btnPrimary}>
                            Записаться на прием
                        </Link>
                        
                        <p className={styles.omsInfo}>
                            {service.isOms ? "Доступно по ОМС" : "Оказывается на платной основе"}
                        </p>
                    </div>
                </aside>
            </div>
        </main>
    );
}