import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPublicService } from "@/src/lib/data/public";
import { DoctorMiniAvatar, MediaPlaceholder } from "../../components/MediaPlaceholder";
import styles from "./ServiceDetail.module.scss";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const data = await getPublicService(slug).catch(() => null);
    if (!data) return { title: "Услуга не найдена | Медис" };

    const title = `${data.service.title} | Медис`;
    const description = data.service.description || `Запись на услугу «${data.service.title}» в клинике Медис, Махачкала.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [{ url: data.service.imageUrl || "/hero.webp" }],
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const data = await getPublicService(slug).catch(() => null);
    if (!data) notFound();

    const { service, doctors } = data;

    return (
        <main className={styles.page}>
            <div className={styles.breadcrumbs}>
                <Link href="/">Главная</Link> / <Link href="/services">Услуги</Link> / <span>{service.title}</span>
            </div>

            <div className={styles.layout}>
                <div className={styles.mainContent}>
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
                                Возьмите паспорт и полис ОМС (если есть). На анализы крови лучше приходить натощак, если врач не указал иное. О переносе записи предупредите администратора заранее по телефону +7 (928) 555-88-18.
                            </p>
                        </div>
                    </div>

                    {doctors.length > 0 && (
                        <div className={styles.doctorsBlock}>
                            <h2 className={styles.subTitle}>Эту услугу оказывают:</h2>
                            <div className={styles.doctorsGrid}>
                                {doctors.map((doc: any) => (
                                    <Link href={`/doctors/${doc.slug}`} key={doc.id} className={styles.doctorMini}>
                                        {doc.photoUrl ? <img src={doc.photoUrl} alt={doc.name} /> : <DoctorMiniAvatar name={doc.name} />}
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
                        <a href="tel:+79285558818" className={styles.btnCall}>Позвонить</a>

                        <p className={`${styles.omsInfo} ${service.isOms ? styles.omsYes : styles.omsNo}`}>
                            {service.isOms ? "Доступно по ОМС" : "Оказывается на платной основе"}
                        </p>
                    </div>
                </aside>
            </div>
        </main>
    );
}
