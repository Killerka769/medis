"use client"

import { useGetPublicDoctors } from "@/src/lib/ReactQuery/query/public/doctors/query"; 
import Link from "next/link";
import styles from "./DoctorsPage.module.scss";

export default function DoctorsCatalogPage() {
    const { data, isLoading, isError } = useGetPublicDoctors();

    if (isLoading) return <div className={styles.loading}>Загрузка врачей...</div>;
    if (isError || !data) return <div className={styles.error}>Ошибка загрузки</div>;

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Наши специалисты</h1>
                <p className={styles.subtitle}>Опытные врачи, готовые прийти на помощь</p>
            </div>

            <div className={styles.grid}>
                {data.doctors.map((doctor: any) => (
                    <Link href={`/doctors/${doctor.slug}`} key={doctor.id} className={styles.card}>
                        <div className={styles.imageWrap}>
                            {doctor.photoUrl ? (
                                <img src={doctor.photoUrl} alt={doctor.name} />
                            ) : (
                                <div className={styles.placeholder}>{doctor.name.charAt(0)}</div>
                            )}
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{doctor.name}</h3>
                            <p className={styles.spec}>{doctor.specialization}</p>
                            <p className={styles.exp}>Стаж: {doctor.experienceYears} лет</p>
                            <button className={styles.btn}>Подробнее</button>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}