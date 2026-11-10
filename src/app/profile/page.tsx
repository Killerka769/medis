"use client"

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./ProfilePage.module.scss";

export default function ProfilePage() {
    const router = useRouter();
    const queryClient = useQueryClient();
    const [tab, setTab] = useState<"appointments" | "requests">("appointments");

    const { data, isLoading } = useQuery({
        queryKey: ["myProfile"],
        queryFn: async () => {
            const res = await fetch("/api/profile");
            if (!res.ok) throw new Error("Ошибка");
            return res.json();
        }
    });

    const cancelMutation = useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch("/api/profile/cancel", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            });
            if (!res.ok) throw new Error("Ошибка отмены");
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
    const appointments = data.appointments || [];
    const productRequests = data.productRequests || [];
    const visits = appointments.filter((a: any) => a.status === "confirmed" || a.status === "completed").length;

    function formatDate(d: string) {
        return new Date(d).toLocaleDateString("ru-RU", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" });
    }

    function statusLabel(status: string) {
        if (status === "pending") return "Ожидает";
        if (status === "confirmed") return "Подтвержден";
        if (status === "completed") return "Завершен";
        if (status === "cancelled") return "Отменен";
        if (status === "no_show") return "Не пришёл";
        return status;
    }

    function requestStatus(status: string) {
        if (status === "new") return "Новая";
        if (status === "processed") return "В работе";
        if (status === "done") return "Выполнена";
        return status;
    }

    return (
        <main className={styles.page}>
            <div className={styles.grid}>
                <aside className={styles.sidebar}>
                    <div className={styles.userCard}>
                        <div className={styles.avatar}>{user.username ? user.username[0].toUpperCase() : "П"}</div>
                        <h2 className={styles.name}>{user.username || "Пациент"}</h2>
                        <p className={styles.phone}>{user.phone}</p>
                        <p className={styles.email}>{user.email}</p>
                        <p className={styles.visits}>Визитов: {visits}</p>
                        <button className={styles.logoutBtn} onClick={logout}>Выйти</button>
                    </div>
                </aside>

                <div className={styles.mainContent}>
                    <div className={styles.tabs}>
                        <button
                            type="button"
                            className={`${styles.tab} ${tab === "appointments" ? styles.tabActive : ""}`}
                            onClick={() => setTab("appointments")}
                        >
                            Мои записи
                        </button>
                        <button
                            type="button"
                            className={`${styles.tab} ${tab === "requests" ? styles.tabActive : ""}`}
                            onClick={() => setTab("requests")}
                        >
                            Мои заявки на товары
                        </button>
                    </div>

                    {tab === "appointments" && (
                        <>
                            <div className={styles.header}>
                                <h1 className={styles.title}>Мои записи</h1>
                                <Link href="/appointments" className={styles.newAppBtn}>+ Новая запись</Link>
                            </div>

                            {appointments.length === 0 ? (
                                <div className={styles.emptyState}>
                                    <h3>У вас пока нет записей</h3>
                                    <p>Выберите услугу или врача — администратор подтвердит время.</p>
                                    <Link href="/services" className={styles.btnPrimary}>Выбрать услугу</Link>
                                </div>
                            ) : (
                                <div className={styles.appointmentsList}>
                                    {appointments.map((app: any) => (
                                        <div key={app.id} className={styles.appCard}>
                                            <div className={styles.appDate}>
                                                <span className={styles.day}>{new Date(app.date).getDate()}</span>
                                                <span className={styles.month}>{new Date(app.date).toLocaleString("ru-RU", { month: "short" })}</span>
                                            </div>
                                            <div className={styles.appInfo}>
                                                <h4>{app.service?.title || "Приём специалиста"}</h4>
                                                <p className={styles.docName}>Врач: {app.doctor?.name || "Не назначен"}</p>
                                                <p className={styles.time}>{formatDate(app.date)}</p>

                                                <div className={styles.statusRow}>
                                                    <span className={`${styles.status} ${styles[app.status] || ""}`}>
                                                        {statusLabel(app.status)}
                                                    </span>

                                                    {app.status !== "cancelled" && app.status !== "completed" && (
                                                        <button
                                                            className={styles.cancelBtn}
                                                            onClick={() => { if (confirm("Отменить запись?")) cancelMutation.mutate(app.id); }}
                                                            disabled={cancelMutation.isPending && cancelMutation.variables === app.id}
                                                        >
                                                            {cancelMutation.isPending && cancelMutation.variables === app.id ? "..." : "Отменить"}
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {tab === "requests" && (
                        <>
                            <div className={styles.header}>
                                <h1 className={styles.title}>Мои заявки на товары</h1>
                                <Link href="/shop" className={styles.newAppBtn}>В магазин</Link>
                            </div>

                            {productRequests.length === 0 ? (
                                <div className={styles.emptyState}>
                                    <h3>Заявок пока нет</h3>
                                    <p>Оставьте заявку на товар — администратор свяжется с вами.</p>
                                    <Link href="/shop" className={styles.btnPrimary}>Открыть магазин</Link>
                                </div>
                            ) : (
                                <div className={styles.appointmentsList}>
                                    {productRequests.map((req: any) => (
                                        <div key={req.id} className={styles.appCard}>
                                            <div className={styles.requestIcon}>Товар</div>
                                            <div className={styles.appInfo}>
                                                <h4>{req.product?.title || "Товар"}</h4>
                                                <p>Имя: {req.name}</p>
                                                <p>Телефон: {req.phone}</p>
                                                {req.comment && <p>{req.comment}</p>}
                                                <p className={styles.time}>
                                                    {new Date(req.createdAt).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
                                                </p>
                                                <span className={`${styles.status} ${styles[req.status] || ""}`}>
                                                    {requestStatus(req.status)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
