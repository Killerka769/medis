import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FEATURED_SERVICE_SLUG } from "@/src/lib/content/featured";
import { getPublicService, getPublicServices } from "@/src/lib/data/public";
import { DoctorMiniAvatar, MediaPlaceholder } from "../../components/MediaPlaceholder";
import { TrackedContactLink } from "../../components/TrackedContactLink";
import styles from "./ServiceDetail.module.scss";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    try {
        const { services } = await getPublicServices();
        return services.map((service: { slug: string }) => ({ slug: service.slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await getPublicService(slug).catch(() => null);
    if (!data) return { title: "Услуга не найдена" };

    const title = data.service.title;
    const description = data.service.description || `Запись на услугу «${data.service.title}» в клинике Медис, Махачкала.`;

    return {
        title,
        description,
        alternates: { canonical: `/services/${slug}` },
        openGraph: {
            title,
            description,
            images: [{ url: data.service.imageUrl || "/hero-v2.webp" }],
            url: `https://medis05.ru/services/${slug}`,
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const data = await getPublicService(slug).catch(() => null);
    if (!data) notFound();

    const { service, doctors } = data;
    const isUnique = service.slug === FEATURED_SERVICE_SLUG;

    return (
        <main className={styles.page}>
            <div className={styles.breadcrumbs}>
                <Link href="/">Главная</Link> / <Link href="/services">Услуги</Link> / <span>{service.title}</span>
            </div>

            <div className={styles.layout}>
                <div className={styles.mainContent}>
                    {isUnique && <span className={styles.uniquePlaque}>Уникальная методика</span>}
                    <h1 className={styles.title}>{service.title}</h1>
                    <p className={styles.category}>{service.category?.title}</p>

                    {service.imageUrl ? (
                        <img src={service.imageUrl} alt={service.title} className={styles.image} />
                    ) : (
                        <div className={styles.imageFallback}>
                            <MediaPlaceholder kind="clinic" title={service.title} />
                        </div>
                    )}

                    <div className={styles.content}>
                        {service.content || service.description || "Описание услуги скоро появится."}
                    </div>

                    {!isUnique && (
                    <div className={styles.infoBlocks}>
                        <div className={styles.infoBlock}>
                            <h2>Что входит</h2>
                            <p>
                                {service.description || "Консультация врача, осмотр и рекомендации по лечению. Точный состав приёма уточнит специалист на месте."}
                            </p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h2>Как подготовиться</h2>
                            <p>
                                Возьмите паспорт. На анализы крови лучше приходить натощак, если врач не указал иное. О переносе записи предупредите администратора заранее по телефону +7 928 555-88-18.
                            </p>
                        </div>
                    </div>
                    )}

                    {doctors.length > 0 && (
                        <div className={`${styles.doctorsBlock} ${isUnique ? styles.uniqueDoctor : ""}`}>
                            <h2 className={styles.subTitle}>
                                {isUnique ? "Проводит врач" : "Эту услугу оказывают:"}
                            </h2>
                            <div className={styles.doctorsGrid}>
                                {doctors.map((doc: any) => (
                                    <Link href={`/doctors/${doc.slug}`} key={doc.id} className={styles.doctorMini}>
                                        {doc.photoUrl ? <img src={doc.photoUrl} alt={doc.name} /> : <DoctorMiniAvatar name={doc.name} />}
                                        <div className={styles.docMeta}>
                                            <p className={styles.docName}>{doc.name}</p>
                                            <p className={styles.docSpec}>{doc.specialization}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.priceCard}>
                        <p className={styles.priceLabel}>Стоимость:</p>
                        <p className={styles.priceValue}>
                            {service.price == null ? "По запросу" : service.price === 0 ? "Бесплатно" : (service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽`)}
                        </p>
                        {service.duration && <p className={styles.duration}>~{service.duration} минут</p>}

                        <Link href={`/appointments?service=${service.id}`} className={styles.btnPrimary}>
                            Записаться на прием
                        </Link>
                        <TrackedContactLink href="tel:+79285558818" className={styles.btnCall}>Позвонить</TrackedContactLink>

                        {/* Только платный приём — блок ОМС скрыт
                        <p className={`${styles.omsInfo} ${service.isOms ? styles.omsYes : styles.omsNo}`}>
                            {service.isOms ? "Доступно по ОМС" : "Оказывается на платной основе"}
                        </p>
                        */}
                        <p className={styles.omsInfo}>Оказывается на платной основе</p>
                    </div>
                </aside>
            </div>
        </main>
    );
}
