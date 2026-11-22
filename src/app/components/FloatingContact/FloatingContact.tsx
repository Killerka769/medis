"use client"

import { usePathname } from "next/navigation";
import styles from "./FloatingContact.module.scss";

export function FloatingContact() {
    const pathname = usePathname();

    if (
        pathname.startsWith("/admin") ||
        pathname.startsWith("/login") ||
        pathname.startsWith("/register") ||
        pathname.startsWith("/appointments") ||
        pathname.startsWith("/contacts")
    ) {
        return null;
    }

    return (
        <div className={styles.wrap}>
            <a href="tel:+79285558818" className={`${styles.btn} ${styles.phone}`} aria-label="Позвонить">
                тел
            </a>
            {/* <a href="https://t.me/medis" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.tg}`} aria-label="Написать в мессенджер">TG</a> */}
            <a href="https://wa.me/79285558818" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.wa}`} aria-label="Написать в чат">
                WA
            </a>
            {/* <a href="https://www.instagram.com/medis.medcentr" target="_blank" rel="noreferrer" className={`${styles.btn} ${styles.ig}`} aria-label="Соцсеть клиники">
                IG
            </a> */}
        </div>
    );
}
