"use client"

import { useGetUsers, useDeleteUser } from "@/src/lib/ReactQuery/query/admin/users/query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Modal from "../../components/ui/Modal/Modal";
import { useState } from "react";
import { TUser } from "@/src/types";
import styles from "./UsersPage.module.scss";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useBannedUsers } from "@/src/lib/ReactQuery/query/admin/users/ban/query";

const banSchema = z.object({
    id: z.string(),
    isBanned: z.enum(["true", "false"]),
    bannedUntil: z.string(),
    banReason: z.string().min(1, "Укажите причину")
});
type TBanSchema = z.infer<typeof banSchema>;

export default function UsersPage() {
    const router = useRouter();
    const [isOpenBan, setIsOpenBan] = useState(false);
    const usersGet = useGetUsers();
    const banUser = useBannedUsers();
    const deleteUser = useDeleteUser();

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<TBanSchema>({
        resolver: zodResolver(banSchema),
        defaultValues: { id: "", isBanned: "false", bannedUntil: "", banReason: "" }
    });

    const isBannedWatch = watch("isBanned");

    async function onSubmit(data: TBanSchema) {
        const payload = {
            id: data.id,
            isBanned: data.isBanned,
            bannedUntil: data.isBanned === "true" ? data.bannedUntil : "",
            banReason: data.isBanned === "true" ? data.banReason : ""
        };
        banUser.mutate(payload, {
            onSuccess: () => {
                reset();
                setIsOpenBan(false);
            }
        });
    }

    function formatDate(dateString: string) {
        return new Date(dateString).toLocaleDateString("ru-RU", { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    function getBanStatus(user: TUser) {
        if (user.isBanned) {
            if (user.bannedUntil) return `До ${formatDate(user.bannedUntil)}`;
            return "Навсегда";
        }
        return "Активен";
    }

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button className={styles.backBtn} onClick={() => router.back()}>← Назад</button>
                    <h1 className={styles.title}>Пользователи</h1>
                </div>
            </div>

            {usersGet.isLoading && <p className={styles.loading}>Загрузка пользователей...</p>}
            {usersGet.isError && <p className={styles.serverError}>{(usersGet.error as Error).message}</p>}
            {usersGet.data && usersGet.data.length === 0 && <p className={styles.empty}>Пользователей пока нет.</p>}

            {usersGet.data && usersGet.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Контакты</th>
                                <th>Роль</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersGet.data.map((user: TUser) => {
                                const banStatus = getBanStatus(user);
                                const isBanned = banStatus !== "Активен";

                                return (
                                    <tr key={user.id}>
                                        <td>
                                            <Link href={`/admin/users/${user.id}`} className={styles.userLink}>
                                                {user.username || "—"}
                                            </Link>
                                        </td>
                                        <td>
                                            {user.email}
                                            <br />
                                            <span className={styles.phone}>{user.phone}</span>
                                        </td>
                                        <td>{user.role === "admin" ? "Админ" : "Пациент"}</td>
                                        <td>
                                            <span className={`${styles.status} ${isBanned ? styles.statusInactive : styles.statusActive}`}>
                                                {banStatus}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                {!isBanned ? (
                                                    <button className={styles.banBtn} onClick={() => {
                                                        reset({ id: user.id, isBanned: "true", bannedUntil: "", banReason: "" });
                                                        setIsOpenBan(true);
                                                    }}>Забанить</button>
                                                ) : (
                                                    <button className={styles.unbanBtn} onClick={() => {
                                                        reset({ id: user.id, isBanned: "false", bannedUntil: "", banReason: "Разбан" });
                                                        setIsOpenBan(true);
                                                    }}>Разбанить</button>
                                                )}
                                                <button className={styles.deleteBtn} onClick={() => {
                                                    if(confirm("Удалить пользователя? Все его записи и заявки будут удалены безвозвратно!")) {
                                                        deleteUser.mutate(user.id);
                                                    }
                                                }}>🗑️</button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Модалка бана */}
            <Modal isOpen={isOpenBan} onClose={() => setIsOpenBan(false)}>
                <h3 className={styles.modalTitle}>
                    {isBannedWatch === "true" ? "Блокировка пользователя" : "Разблокировка пользователя"}
                </h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" {...register("id")} />
                    <input type="hidden" {...register("isBanned")} />

                    {isBannedWatch === "true" && (
                        <>
                            <div className={styles.field}>
                                <label className={styles.label}>Причина бана</label>
                                <input className={styles.input} type="text" {...register("banReason")} placeholder="Например: Спам" />
                                {errors.banReason && <p className={styles.error}>{errors.banReason.message}</p>}
                            </div>
                            <div className={styles.field}>
                                <label className={styles.label}>Забанить до (пусто = навсегда)</label>
                                <input className={styles.input} type="date" {...register("bannedUntil")} />
                            </div>
                        </>
                    )}

                    {banUser.isError && <p className={styles.serverError}>{(banUser.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={banUser.isPending}>
                            {banUser.isPending ? "Сохранение..." : (isBannedWatch === "true" ? "Забанить" : "Разбанить")}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenBan(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    );
}