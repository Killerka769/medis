import { Suspense } from "react";
import type { Metadata } from "next";
import AppointmentsContent from "./AppointmentsContent";
import styles from "./AppointmentsPage.module.scss";

export const metadata: Metadata = {
    title: "Запись на прием",
    description: "Онлайн-запись к врачу клиники Медис в Махачкале. Телефон +7 928 555-88-18.",
    alternates: { canonical: "/appointments" },
    robots: { index: true, follow: true },
    openGraph: {
        title: "Запись на прием",
        description: "Онлайн-запись в клинику Медис, Махачкала.",
        images: [{ url: "/hero-v2.webp" }],
        url: "https://medis05.ru/appointments",
    },
};

export default function AppointmentsPage() {
    return (
        <Suspense fallback={<div className={styles.loading}>Загрузка формы...</div>}>
            <AppointmentsContent />
        </Suspense>
    );
}