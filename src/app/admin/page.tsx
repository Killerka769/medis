"use client"

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styles from "./Dashboard.module.scss";

export default function AdminDashboard() {
    const { data, isLoading } = useQuery({
        queryKey: ["dashboardStats"],
        queryFn: async () => {
            const res = await fetch("/api/admin/dashboard");
            return res.json();
        }
    });

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Дашборд</h1>
            <p className={styles.subtitle}>Общая статистика клиники на сегодня</p>

            {isLoading ? <p>Загрузка...</p> : (
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>📅</span>
                        <h3>Всего записей</h3>
                        <p className={styles.number}>{data.appointments || 0}</p>
                    </div>
                    
                    <Link href="/admin/appointments" className={`${styles.card} ${styles.cardAction}`}>
                        <span className={styles.cardIcon}>⏳</span>
                        <h3>Ожидают подтверждения</h3>
                        <p className={styles.number}>{data.pending || 0}</p>
                        <span className={styles.link}>Перейти →</span>
                    </Link>

                    <Link href="/admin/product-requests" className={`${styles.card} ${styles.cardAction}`}>
                        <span className={styles.cardIcon}>📦</span>
                        <h3>Новые заявки на товары</h3>
                        <p className={styles.number}>{data.requests || 0}</p>
                        <span className={styles.link}>Перейти →</span>
                    </Link>

                    <Link href="/admin/users" className={`${styles.card} ${styles.cardAction}`}>
                        <span className={styles.cardIcon}>👥</span>
                        <h3>Пользователей</h3>
                        <p className={styles.number}>{data.users || 0}</p>
                        <span className={styles.link}>Перейти →</span>
                    </Link>
                </div>
            )}
        </div>
    );
}