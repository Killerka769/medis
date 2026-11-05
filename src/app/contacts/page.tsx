"use client"

import styles from "./ContactsPage.module.scss";

export default function ContactsPage() {
    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Контакты</h1>
                <p className={styles.subtitle}>Мы всегда рады помочь вам</p>
            </div>

            <div className={styles.grid}>
                {/* Блок с контактами */}
                <div className={styles.infoCard}>
                    <div className={styles.infoItem}>
                        <span className={styles.icon}>📍</span>
                        <div>
                            <h3>Адрес</h3>
                            <p>г. Махачкала, ул. Ахульго, 77</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.icon}>📞</span>
                        <div>
                            <h3>Телефон</h3>
                            <a href="tel:+79285558818" className={styles.phone}>+7 (928) 555-88-18</a>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.icon}>🕐</span>
                        <div>
                            <h3>Режим работы</h3>
                            <p>Пн-Вс: 09:00 – 23:00</p>
                            <p className={styles.muted}>По предварительной записи</p>
                        </div>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://t.me/medis" target="_blank" className={styles.socialBtn}>Telegram</a>
                        <a href="https://wa.me/79285558818" target="_blank" className={styles.socialBtn}>WhatsApp</a>
                    </div>
                </div>

                {/* Блок с картой */}
                <div className={styles.mapCard}>
                <iframe 
                    src="https://yandex.ru/map-widget/v1/?ll=47.454760%2C42.982883&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTY3NDk5NjE0EkLQoNC-0YHRgdC40Y8sINCg0LXRgdC%2F0YPQsdC70LjQutCwINCU0LDQs9C10YHRgtCw0L0sINCc0LDRhdCw0YfQutCw0LvQsCwg0YPQu9C40YbQsCDQkNGD0YXQu9GM0LPQviwgNzcsINCc0LXQtNC40YbQuNC90YHQutC40Lkg0YbQtdC90YLRgA%3D%3D&pt=47.454760,42.982883,pm2rdm"
                    width="100%" 
                    height="400" 
                    frameBorder="0"
                    title="Карта клиники Медис"
                ></iframe>
                </div>
            </div>
        </main>
    );
}