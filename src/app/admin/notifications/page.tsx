"use client"

import { useState } from "react";
import { z } from "zod";
import Modal from "../../components/ui/Modal/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateNotification, useDeleteNotification, useGetNotifications, usePutNotification } from "@/src/lib/ReactQuery/query/admin/notifications/query";
import { TNotification } from "@/src/types";
import styles from "../article-categories/ArticleCategoriesPage.module.scss";
import { useRouter } from "next/navigation";

const schema = z.object({
    title: z.string().min(1, "Введите заголовок"),
    text: z.string().min(1, "Введите текст"),
    isFullScreen: z.enum(["true", "false"]),
    isActive: z.enum(["true", "false"]),
    expiresAt: z.string(),
    durationMs: z.string(),
});
type TSchema = z.infer<typeof schema>;
const putSchema = schema.extend({ id: z.string() });
type TPut = z.infer<typeof putSchema>;

const empty: TSchema = { title: "", text: "", isFullScreen: "false", isActive: "true", expiresAt: "", durationMs: "10000" };

function toLocalInput(iso: string | null) {
    if (!iso) return "";
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

export default function NotificationsPage() {
    const router = useRouter();
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);
    const createItem = useCreateNotification();
    const putItem = usePutNotification();
    const deleteItem = useDeleteNotification();
    const list = useGetNotifications();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TSchema>({
        resolver: zodResolver(schema),
        defaultValues: empty,
    });
    const { register: registerPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut }, reset: resetPut } = useForm<TPut>({
        resolver: zodResolver(putSchema),
        defaultValues: { id: "", ...empty },
    });

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button className={styles.backBtn} onClick={() => router.back()}>← Назад</button>
                    <h1 className={styles.title}>Уведомления</h1>
                </div>
                <button className={styles.createBtn} onClick={() => { reset(empty); setIsOpenCreate(true); }}>+ Создать уведомление</button>
            </div>

            {list.isLoading && <p className={styles.loading}>Загрузка...</p>}
            {list.data && list.data.length === 0 && <p className={styles.empty}>Уведомлений пока нет.</p>}

            {list.data && list.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Заголовок</th>
                                <th>Тип</th>
                                <th>Истекает</th>
                                <th>Длительность</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.data.map((item: TNotification) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.isFullScreen ? "Модалка" : "Плашка"}</td>
                                    <td>{item.expiresAt ? new Date(item.expiresAt).toLocaleString("ru-RU") : "Бессрочно"}</td>
                                    <td>{item.durationMs} мс</td>
                                    <td>
                                        <span className={`${styles.status} ${item.isActive ? styles.statusActive : styles.statusInactive}`}>
                                            {item.isActive ? "Активно" : "Скрыто"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => {
                                                resetPut({
                                                    id: item.id,
                                                    title: item.title,
                                                    text: item.text,
                                                    isFullScreen: String(item.isFullScreen) as "true" | "false",
                                                    isActive: String(item.isActive) as "true" | "false",
                                                    expiresAt: toLocalInput(item.expiresAt),
                                                    durationMs: String(item.durationMs || 10000),
                                                });
                                                setIsOpenPut(true);
                                            }}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Удалить уведомление?")) deleteItem.mutate({ id: item.id });
                                            }}>🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Modal isOpen={isOpenCreate} onClose={() => setIsOpenCreate(false)}>
                <h3 className={styles.modalTitle}>Новое уведомление</h3>
                <form className={styles.form} onSubmit={handleSubmit((data) => createItem.mutate(data, { onSuccess: () => { reset(empty); setIsOpenCreate(false); } }))}>
                    <div className={styles.field}><label className={styles.label}>Заголовок</label><input className={styles.input} {...register("title")} />{errors.title && <p className={styles.error}>{errors.title.message}</p>}</div>
                    <div className={styles.field}><label className={styles.label}>Текст</label><textarea className={styles.input} rows={4} {...register("text")} />{errors.text && <p className={styles.error}>{errors.text.message}</p>}</div>
                    <div className={styles.field}><label className={styles.label}>Показ</label>
                        <select className={styles.select} {...register("isFullScreen")}>
                            <option value="false">Плашка справа снизу</option>
                            <option value="true">Модалка на весь экран</option>
                        </select>
                    </div>
                    <div className={styles.field}><label className={styles.label}>Длительность плашки (мс)</label><input className={styles.input} type="number" {...register("durationMs")} /></div>
                    <div className={styles.field}><label className={styles.label}>Истекает</label><input className={styles.input} type="datetime-local" {...register("expiresAt")} /></div>
                    <div className={styles.field}><label className={styles.label}>Активно</label>
                        <select className={styles.select} {...register("isActive")}><option value="true">Да</option><option value="false">Нет</option></select>
                    </div>
                    {createItem.isError && <p className={styles.serverError}>{(createItem.error as Error).message}</p>}
                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createItem.isPending}>{createItem.isPending ? "Создание..." : "Создать"}</button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenCreate(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Изменить уведомление</h3>
                <form className={styles.form} onSubmit={handleSubmitPut((data) => putItem.mutate(data, { onSuccess: () => { resetPut(); setIsOpenPut(false); } }))}>
                    <input type="hidden" {...registerPut("id")} />
                    <div className={styles.field}><label className={styles.label}>Заголовок</label><input className={styles.input} {...registerPut("title")} />{errorsPut.title && <p className={styles.error}>{errorsPut.title.message}</p>}</div>
                    <div className={styles.field}><label className={styles.label}>Текст</label><textarea className={styles.input} rows={4} {...registerPut("text")} />{errorsPut.text && <p className={styles.error}>{errorsPut.text.message}</p>}</div>
                    <div className={styles.field}><label className={styles.label}>Показ</label>
                        <select className={styles.select} {...registerPut("isFullScreen")}>
                            <option value="false">Плашка справа снизу</option>
                            <option value="true">Модалка на весь экран</option>
                        </select>
                    </div>
                    <div className={styles.field}><label className={styles.label}>Длительность плашки (мс)</label><input className={styles.input} type="number" {...registerPut("durationMs")} /></div>
                    <div className={styles.field}><label className={styles.label}>Истекает</label><input className={styles.input} type="datetime-local" {...registerPut("expiresAt")} /></div>
                    <div className={styles.field}><label className={styles.label}>Активно</label>
                        <select className={styles.select} {...registerPut("isActive")}><option value="true">Да</option><option value="false">Нет</option></select>
                    </div>
                    {putItem.isError && <p className={styles.serverError}>{(putItem.error as Error).message}</p>}
                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putItem.isPending}>{putItem.isPending ? "Сохранение..." : "Сохранить"}</button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    );
}
