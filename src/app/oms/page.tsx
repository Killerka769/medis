"use client"

import { useGetOmsServices } from "@/src/lib/ReactQuery/query/public/oms/query";
import Link from "next/link";
import styles from "./OmsPage.module.scss";

export default function OmsPage() {
    const { data, isLoading } = useGetOmsServices();

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Медицинская помощь по ОМС</h1>
                <p className={styles.subtitle}>Бесплатное обследование и лечение по полису обязательного медицинского страхования</p>
            </div>

            <div className={styles.layout}>
                {/* Левая колонка: Информация */}
                <div className={styles.infoCol}>
                    <div className={styles.card}>
                        <h2>Что такое ОМС?</h2>
                        <p>
                            ОМС (Обязательное медицинское страхование) — это система, которая гарантирует гражданам РФ бесплатную медицинскую помощь за счет средств страховых взносов. 
                            Каждый человек, имеющий полис ОМС, может получить помощь в нашей клинике бесплатно.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h2>Как записаться?</h2>
                        <ol className={styles.stepsList}>
                            <li>
                                <span className={styles.stepNum}>1</span>
                                <div>
                                    <strong>Подготовьте документы</strong>
                                    <p>Вам понадобится паспорт и действующий полис ОМС.</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.stepNum}>2</span>
                                <div>
                                    <strong>Выберите услугу</strong>
                                    <p>Ознакомьтесь со списком доступных услуг ниже.</p>
                                </div>
                            </li>
                            <li>
                                <span className={styles.stepNum}>3</span>
                                <div>
                                    <strong>Запишитесь на прием</strong>
                                    <p>Позвоните по телефону <a href="tel:+79285558818">+7 (928) 555-88-18</a> или запишитесь через сайт.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>

                {/* Правая колонка: Список услуг */}
                <div className={styles.servicesCol}>
                    <h2 className={styles.servicesTitle}>Доступные услуги по ОМС</h2>
                    
                    {isLoading ? (
                        <p>Загрузка услуг...</p>
                    ) : data?.services && data.services.length > 0 ? (
                        <div className={styles.servicesList}>
                            {data.services.map((service: any) => (
                                <div key={service.id} className={styles.serviceItem}>
                                    <div>
                                        <h3 className={styles.serviceName}>{service.title}</h3>
                                        <p className={styles.serviceCat}>{service.category?.title}</p>
                                    </div>
                                    <Link href={`/appointments?service=${service.id}`} className={styles.btnSmall}>
                                        Записаться
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.empty}>
                            <p>В данный момент услуги по ОМС не оказываются.</p>
                            <p>Пожалуйста, уточните информацию по телефону.</p>
                        </div>
                    )}

                    <div className={styles.contactBox}>
                        <h3>Остались вопросы?</h3>
                        <p>Наш администратор поможет подобрать услугу и расскажет о деталях.</p>
                        <a href="tel:+79285558818" className={styles.btnCall}>Позвонить в клинику</a>
                    </div>
                </div>
            </div>
        </main>
    );
}