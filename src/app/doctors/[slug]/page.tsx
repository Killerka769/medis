import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublicDoctor, getPublicDoctors } from "@/src/lib/data/public";
import { getDoctorTags } from "@/src/lib/content/doctorTags";
import { DoctorAvatar } from "../../components/DoctorAvatar";
import { JsonLd } from "../../components/JsonLd";
import { TrackedContactLink } from "../../components/TrackedContactLink";
import { physicianJsonLd } from "@/src/lib/seo";
import styles from "./DoctorDetail.module.scss";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    try {
        const { doctors } = await getPublicDoctors();
        return doctors.map((doctor: { slug: string }) => ({ slug: doctor.slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await getPublicDoctor(slug).catch(() => null);
    if (!data) return { title: "Врач не найден" };

    const title = `${data.doctor.name} — ${data.doctor.specialization}`;
    const description = data.doctor.bio || `Запись к врачу ${data.doctor.name}, ${data.doctor.specialization}. Клиника Медис, Махачкала.`;

    return {
        title,
        description,
        alternates: { canonical: `/doctors/${slug}` },
        openGraph: {
            title,
            description,
            images: [{ url: data.doctor.photoUrl || "/hero-v2.webp" }],
            url: `https://medis05.ru/doctors/${slug}`,
        },
    };
}

export default async function DoctorDetailPage({ params }: Props) {
    const { slug } = await params;
    const data = await getPublicDoctor(slug).catch(() => null);
    if (!data) notFound();

    const { doctor, services } = data;
    const certificates = Array.isArray(doctor.certificates) ? doctor.certificates : [];
    const educationRaw = doctor.education as any;
    const education = typeof educationRaw === "string" ? educationRaw : (educationRaw?.text || "");
    const tags = getDoctorTags(doctor);

    return (
        <main className={styles.page}>
            <JsonLd data={physicianJsonLd(doctor)} />
            <div className={styles.breadcrumbs}>
                <Link href="/">Главная</Link> / <Link href="/doctors">Врачи</Link> / <span>{doctor.name}</span>
            </div>

            <div className={styles.profileCard}>
                <div className={styles.avatarWrap}>
                    {doctor.photoUrl ? (
                        <img src={doctor.photoUrl} alt={doctor.name} />
                    ) : (
                        <DoctorAvatar name={doctor.name} className={styles.avatarSvg} />
                    )}
                </div>

                <div className={styles.infoWrap}>
                    <h1 className={styles.name}>{doctor.name}</h1>
                    <p className={styles.spec}>{doctor.specialization}</p>

                    <div className={styles.badges}>
                        {doctor.experienceYears > 0 && <span className={styles.badge}>Стаж: {doctor.experienceYears} лет</span>}
                        {tags.map((tag) => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>

                    {doctor.bio && <p className={styles.cardBio}>{doctor.bio}</p>}

                    <div className={styles.actions}>
                        <Link href={`/appointments?doctor=${doctor.id}`} className={styles.btnPrimary}>
                            Записаться к врачу
                        </Link>
                        <TrackedContactLink href="tel:+79285558818" className={styles.phoneLink}>
                            +7 928 555-88-18
                        </TrackedContactLink>
                    </div>
                </div>
            </div>

            <div className={styles.detailsGrid}>
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
                                        {srv.price == null ? "По запросу" : srv.price === 0 ? "Бесплатно" : `${srv.price} ₽`}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.bottomCta}>
                <h2>Записаться к врачу</h2>
                <p>Оставьте заявку — администратор подтвердит удобное время приёма.</p>
                <div className={styles.actions}>
                    <Link href={`/appointments?doctor=${doctor.id}`} className={styles.btnPrimary}>
                        Записаться к {doctor.name}
                    </Link>
                    <TrackedContactLink href="tel:+79285558818" className={styles.phoneLink}>
                        +7 928 555-88-18
                    </TrackedContactLink>
                </div>
            </div>
        </main>
    );
}
