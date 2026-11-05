import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Верхняя часть: колонки */}
                <div className={styles.top}>
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Наша клиника</h4>
                        <Link href="/services" className={styles.link}>Услуги</Link>
                        <Link href="/doctors" className={styles.link}>Врачи</Link>
                        <Link href="/blog" className={styles.link}>Статьи</Link>
                        <Link href="/about" className={styles.link}>О нас</Link>
                    </div>
                    
                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Информация</h4>
                        <Link href="/oms" className={styles.link}>Услуги по ОМС</Link>
                        <Link href="/licenses" className={styles.link}>Лицензии и реквизиты</Link>
                        <Link href="/contacts" className={styles.link}>Контакты</Link>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Дополнительно</h4>
                        <Link href="/shop" className={styles.link}>Магазин</Link>
                        <Link href="/appointments" className={styles.link}>Запись на прием</Link>
                        <Link href="/profile" className={styles.link}>Личный кабинет</Link>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.colTitle}>Контакты</h4>
                        <a href="tel:+79285558818" className={styles.phone}>+7 (928) 555-88-18</a>
                        <p className={styles.schedule}>Пн-вс: 09:00 – 23:00</p>
                        <p className={styles.address}>г. Махачкала, ул. Ахульго, 77</p>
                        
                        <div className={styles.socials}>
                            <a href="https://t.me/medis" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="Telegram">TG</a>
                            <a href="https://wa.me/79285558818" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="WhatsApp">WA</a>
                            <a href="https://vk.com/medis" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="VK">VK</a>
                        </div>
                    </div>
                </div>

                {/* Нижняя часть: копирайт и юр. инфа */}
                <div className={styles.bottom}>
                    <div className={styles.legal}>
                        <p>© {new Date().getFullYear()} Медицинский центр «Медис»</p>
                        <p>Лицензия № Л041-01172-05/00377229 от 11.11.2020 г.</p>
                        <p>Имеются противопоказания. Необходима консультация специалиста.</p>
                        <p>Материалы, размещенные на сайте, носят информационный характер и предназначены для образовательных целей.</p>
                    </div>
                    <div className={styles.metaLinks}>
                        <Link href="/privacy" className={styles.metaLink}>Политика конфиденциальности</Link>
                        <Link href="/consent" className={styles.metaLink}>Согласие на обработку ПД</Link>
                        <Link href="/agreement" className={styles.metaLink}>Пользовательское соглашение</Link>
                        <Link href="/cookie" className={styles.metaLink}>Политика Cookie</Link>
                    </div>
                </div>
            </div>
            
            {/* Большая надпись на фоне */}
            <div className={styles.watermark}>
                ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. НЕОБХОДИМА КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА
            </div>
        </footer>
    );
}