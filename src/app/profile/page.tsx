"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./ProfilePage.module.scss";

export default function ProfilePage() {
    const router = useRouter();
    const queryClient = useQueryClient();

    // Загружаем данные профиля и записей
    const { data, isLoading } = useQuery({
        queryKey: ["myProfile"],
        queryFn: async () => {
            const res = await fetch("/api/profile");
            if(!res.ok) throw new Error("Ошибка");
            return res.json();
        }
    });

    // Мутация для отмены
    const cancelMutation = useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch("/api/profile/cancel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });
            if(!res.ok) throw new Error("Ошибка отмены");
            return res.json();
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["myProfile"] })
    });

    async function logout() {
        await fetch("/api/auth/logout", { method: "DELETE" });
        router.push("/");
        router.refresh();
    }

    if (isLoading) return <div className={styles.loading}>Загрузка профиля...</div>;
    if (!data || !data.user) return <div className={styles.error}>Пожалуйста, войдите в аккаунт</div>;

    const user = data.user;
    const appointments = data.appointments || []; // Берем из обновленного API

    function formatDate(d: string) {
        return new Date(d).toLocaleDateString("ru-RU", { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' });
    }

    return (
        <main className={styles.page}>
            <div className={styles.grid}>
                
                {/* Левая колонка */}
                <aside className={styles.sidebar}>
                    <div className={styles.userCard}>
                        <div className={styles.avatar}>{user.username ? user.username[0].toUpperCase() : "П"}</div>
                        <h2 className={styles.name}>{user.username || "Пациент"}</h2>
                        <p className={styles.phone}>{user.phone}</p>
                        <p className={styles.email}>{user.email}</p>
                        
                        {/* <div className={styles.bonusCard}>
                            <div className={styles.bonusHeader}>
                                <span>Карта лояльности</span>
                                <span className={styles.bonusBadge}>Silver</span>
                            </div>
                            <p className={styles.bonusPoints}>250 <span>баллов</span></p>
                        </div> */}

                        <button className={styles.logoutBtn} onClick={logout}>Выйти</button>
                    </div>
                </aside>

                {/* Правая колонка */}
                <div className={styles.mainContent}>
                    <div className={styles.header}>
                        <h1 className={styles.title}>Мои записи</h1>
                        <Link href="/appointments" className={styles.newAppBtn}>+ Новая запись</Link>
                    </div>

                    {appointments.length === 0 ? (
                        <div className={styles.emptyState}>
                            <div className={styles.emptyIcon}>📅</div>
                            <h3>У вас пока нет записей</h3>
                            <Link href="/services" className={styles.btnPrimary}>Выбрать услугу</Link>
                        </div>
                    ) : (
                        <div className={styles.appointmentsList}>
                            {appointments.map((app: any) => (
                                <div key={app.id} className={styles.appCard}>
                                    <div className={styles.appDate}>
                                        <span className={styles.day}>{new Date(app.date).getDate()}</span>
                                        <span className={styles.month}>{new Date(app.date).toLocaleString('ru-RU', { month: 'short' })}</span>
                                    </div>
                                    <div className={styles.appInfo}>
                                        <h4>{app.service?.title || "Приём специалиста"}</h4>
                                        <p className={styles.docName}>Врач: {app.doctor?.name || "Не назначен"}</p>
                                        <p className={styles.time}>{formatDate(app.date)}</p>
                                        
                                        <div className={styles.statusRow}>
                                            <span className={`${styles.status} ${styles[app.status]}`}>
                                                {app.status === "pending" ? "Ожидает" : app.status === "confirmed" ? "Подтвержден" : "Отменен"}
                                            </span>
                                            
                                            {app.status !== "cancelled" && app.status !== "completed" && (
                                                <button 
                                                    className={styles.cancelBtn} 
                                                    onClick={() => { if(confirm("Отменить запись?")) cancelMutation.mutate(app.id) }}
                                                    disabled={cancelMutation.isPending}
                                                >
                                                    {cancelMutation.isPending ? "..." : "Отменить"}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}