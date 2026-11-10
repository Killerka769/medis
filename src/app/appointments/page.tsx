import { Suspense } from "react";
import type { Metadata } from "next";
import AppointmentsContent from "./AppointmentsContent";
import styles from "./AppointmentsPage.module.scss";

export const metadata: Metadata = {
    title: "Запись на прием | Медис",
    description: "Запишитесь к врачу клиники «Медис» в Махачкале онлайн или по телефону +7 (928) 555-88-18.",
    openGraph: {
        title: "Запись на прием | Медис",
        description: "Онлайн-запись в клинику Медис, Махачкала.",
        images: [{ url: "/hero.webp" }],
    },
};

export default function AppointmentsPage() {
    return (
        <Suspense fallback={<div className={styles.loading}>Загрузка формы...</div>}>
            <AppointmentsContent />
        </Suspense>
    );
}