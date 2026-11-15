import type { Metadata } from "next";
import Link from "next/link";
import { getPublicDoctors } from "@/src/lib/data/public";
import { getDoctorTags } from "@/src/lib/content/doctorTags";
import { DoctorAvatar } from "../components/DoctorAvatar";
import styles from "./DoctorsPage.module.scss";

export const metadata: Metadata = {
    title: "Врачи клиники в Махачкале",
    description: "Урологи, гинекологи, УЗИ-специалисты и другие врачи медицинского центра Медис. Запись на приём онлайн.",
    alternates: { canonical: "/doctors" },
    openGraph: {
        title: "Врачи клиники Медис",
        description: "Опытные специалисты. Запись на приём онлайн в Махачкале.",
        images: [{ url: "/hero-v2.webp" }],
        url: "https://medis05.ru/doctors",
    },
};

export default async function DoctorsCatalogPage() {
    let doctors: any[] = [];
    try {
        const data = await getPublicDoctors();
        doctors = data.doctors;
    } catch {
        return <main className={styles.page}><div className={styles.error}>Ошибка загрузки</div></main>;
    }

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <span className={styles.badge}>Команда</span>
                <h1 className={styles.title}>Наши специалисты</h1>
                <p className={styles.subtitle}>Опытные врачи клиники «Медис». Выберите специалиста и запишитесь онлайн</p>
            </div>

            <div className={styles.grid}>
                {doctors.map((doctor: any) => {
                    const tags = getDoctorTags(doctor);
                    return (
                    <Link href={`/doctors/${doctor.slug}`} key={doctor.id} className={styles.card}>
                        <div className={styles.imageWrap}>
                            {doctor.photoUrl ? (
                                <img src={doctor.photoUrl} alt={doctor.name} />
                            ) : (
                                <DoctorAvatar name={doctor.name} className={styles.avatarSvg} />
                            )}
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{doctor.name}</h3>
                            <p className={styles.spec}>{doctor.specialization}</p>
                            {tags.length > 0 && (
                                <div className={styles.tags}>
                                    {tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>
                            )}
                            {doctor.experienceYears > 0 && <p className={styles.exp}>Стаж: {doctor.experienceYears} лет</p>}
                            <span className={styles.btn}>Записаться</span>
                        </div>
                    </Link>
                    );
                })}
            </div>
        </main>
    );
}
