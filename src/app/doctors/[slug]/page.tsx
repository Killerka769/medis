"use client"

import { use } from "react";
import { useGetPublicDoctor } from "@/src/lib/ReactQuery/query/public/doctors/query";
import Link from "next/link";
import styles from "./DoctorDetail.module.scss";

export default function DoctorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { data, isLoading, isError } = useGetPublicDoctor(slug);

    if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
    if (isError || !data) return <div className={styles.error}>Врач не найден</div>;

    const { doctor, services } = data;

    // Парсим сертификаты, если они пришли массивом
    const certificates = Array.isArray(doctor.certificates) ? doctor.certificates : [];
    // Парсим образование (JSON)
    const education = doctor.education?.text || "";

    return (
        <main className={styles.page}>
            <div className={styles.breadcrumbs}>
                <Link href="/">Главная</Link> / <Link href="/doctors">Врачи</Link> / <span>{doctor.name}</span>
            </div>

            <div className={styles.profileCard}>
                <div className={styles.avatarWrap}>
                    {doctor.photoUrl ? (
                        <img src={doctor.photoUrl} alt={doctor.name} />
                    ) : (
                        <div className={styles.avatarPlaceholder}>{doctor.name[0]}</div>
                    )}
                </div>
                
                <div className={styles.infoWrap}>
                    <h1 className={styles.name}>{doctor.name}</h1>
                    <p className={styles.spec}>{doctor.specialization}</p>
                    
                    <div className={styles.badges}>
                        <span className={styles.badge}>Стаж: {doctor.experienceYears} лет</span>
                    </div>

                    <Link href={`/appointments?doctor=${doctor.id}`} className={styles.btnPrimary}>
                        Записаться к врачу
                    </Link>
                </div>
            </div>

            <div className={styles.detailsGrid}>
                {doctor.bio && (
                    <div className={styles.block}>
                        <h2>О враче</h2>
                        <p>{doctor.bio}</p>
                    </div>
                )}

                {education && (
                    <div className={styles.block}>
                        <h2>Образование</h2>
                        <p className={styles.preWrap}>{education}</p>
                    </div>
                )}

                {certificates.length > 0 && (
                    <div className={styles.block}>
                        <h2>Сертификаты и квалификация</h2>
                        <ul className={styles.list}>
                            {certificates.map((cert: string, i: number) => (
                                <li key={i}>{cert}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {services.length > 0 && (
                    <div className={styles.block}>
                        <h2>Оказываемые услуги</h2>
                        <div className={styles.servicesList}>
                            {services.map((srv: any) => (
                                <Link href={`/services/${srv.slug}`} key={srv.id} className={styles.serviceLink}>
                                    <span>{srv.title}</span>
                                    <span className={styles.servicePrice}>
                                        {srv.price ? `${srv.price} ₽` : "По запросу"}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}