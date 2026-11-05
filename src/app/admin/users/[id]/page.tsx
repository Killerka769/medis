"use client"

import { use } from "react";
import { useGetUser, usePutUser } from "@/src/lib/ReactQuery/query/admin/users/query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import styles from "./UserPage.module.scss";
import Link from "next/link";

const userSchema = z.object({
    username: z.string(),
    email: z.string().email("Некорректная почта"),
    phone: z.string().min(1, "Введите телефон")
});
type TUserSchema = z.infer<typeof userSchema>;

export default function UserPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);

    const userGet = useGetUser(id);
    const putUser = usePutUser();
    const [isEditing, setIsEditing] = useState(false);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TUserSchema>({
        resolver: zodResolver(userSchema),
        defaultValues: { username: "", email: "", phone: "" }
    });

    function startEdit() {
        if (userGet.data) {
            reset({
                username: userGet.data.username || "",
                email: userGet.data.email,
                phone: userGet.data.phone
            });
        }
        setIsEditing(true);
    }

    async function onSubmit(data: TUserSchema) {
        putUser.mutate({ id, ...data }, {
            onSuccess: () => setIsEditing(false)
        });
    }

    if (userGet.isLoading) return <main className={styles.page}><p className={styles.loading}>Загрузка...</p></main>;
    if (userGet.isError || !userGet.data) return <main className={styles.page}><p className={styles.serverError}>Пользователь не найден</p></main>;

    const user = userGet.data;

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/admin/users" className={styles.backBtn}>← Назад к списку</Link>
                    <h1 className={styles.title}>Профиль: {user.username || user.email}</h1>
                </div>
            </div>

            <div className={styles.grid}>
                {/* Блок с данными */}
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Данные пользователя</h2>
                    
                    {!isEditing ? (
                        <div className={styles.infoList}>
                            <p><strong>Имя:</strong> {user.username || "Не указано"}</p>
                            <p><strong>Почта:</strong> {user.email}</p>
                            <p><strong>Телефон:</strong> {user.phone}</p>
                            <p><strong>Роль:</strong> {user.role === "admin" ? "Админ" : "Пациент"}</p>
                            <p><strong>Дата регистрации:</strong> {new Date(user.createdAt).toLocaleDateString("ru-RU")}</p>
                            
                            <button className={styles.editBtn} onClick={startEdit}>Редактировать</button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.field}>
                                <label className={styles.label}>Имя</label>
                                <input className={styles.input} type="text" {...register("username")} />
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Почта</label>
                                <input className={styles.input} type="email" {...register("email")} />
                                {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Телефон</label>
                                <input className={styles.input} type="text" {...register("phone")} />
                                {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                            </div>
                            
                            {putUser.isError && <p className={styles.serverError}>{(putUser.error as Error).message}</p>}

                            <div className={styles.modalActions}>
                                <button className={styles.submitBtn} type="submit" disabled={putUser.isPending}>
                                    {putUser.isPending ? "Сохранение..." : "Сохранить"}
                                </button>
                                <button className={styles.cancelBtn} type="button" onClick={() => setIsEditing(false)}>Отмена</button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Блок с записями */}
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Записи на прием ({user.appointments?.length || 0})</h2>
                    {user.appointments && user.appointments.length > 0 ? (
                        <div className={styles.list}>
                            {user.appointments.map((app: any) => (
                                <div key={app.id} className={styles.listItem}>
                                    <div>
                                        <strong>{new Date(app.date).toLocaleDateString("ru-RU")}</strong>
                                        <div className={styles.subtext}>Статус: {app.status}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.emptyText}>Записей нет</p>
                    )}
                </div>

                {/* Блок с заявками */}
                <div className={styles.card}>
                    <h2 className={styles.cardTitle}>Заявки на товары ({user.productRequests?.length || 0})</h2>
                    {user.productRequests && user.productRequests.length > 0 ? (
                        <div className={styles.list}>
                            {user.productRequests.map((req: any) => (
                                <div key={req.id} className={styles.listItem}>
                                    <div>
                                        <strong>{req.name}</strong> ({req.phone})
                                        <div className={styles.subtext}>Статус: {req.status}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.emptyText}>Заявок нет</p>
                    )}
                </div>
            </div>
        </main>
    );
}