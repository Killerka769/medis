import { Suspense } from "react";
import AppointmentsContent from "./AppointmentsContent";
import styles from "./AppointmentsPage.module.scss";

export default function AppointmentsPage() {
    return (
        <Suspense fallback={<div className={styles.loading}>Загрузка формы...</div>}>
            <AppointmentsContent />
        </Suspense>
    );
}