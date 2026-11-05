"use client"

import { useDeleteProductRequests, useGetProductRequests, usePutProductRequests } from "@/src/lib/ReactQuery/query/admin/product-requests/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../../components/ui/Modal/Modal";
import { useState } from "react";
import { TProductRequests } from "@/src/types";
import styles from "./ProductRequestsPage.module.scss";
import { useRouter } from "next/navigation";

const requestUpdateSchema = z.object({
    id: z.string(),
    status: z.enum(["new", "processed", "done"])
});
type TRequestUpdateSchema = z.infer<typeof requestUpdateSchema>;

const statusLabels: Record<string, string> = {
    new: "Новая",
    processed: "В обработке",
    done: "Выполнена"
};

const statusClasses: Record<string, string> = {
    new: styles.statusNew,
    processed: styles.statusProcessed,
    done: styles.statusDone
};

export default function ProductRequestsPage() {
    const router = useRouter();
    const [isOpenPut, setIsOpenPut] = useState(false);
    
    const requestsGet = useGetProductRequests();
    const requestsPut = usePutProductRequests();
    const requestsDelete = useDeleteProductRequests();

    const { register: registerPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut }, reset: resetPut } = useForm<TRequestUpdateSchema>({
        resolver: zodResolver(requestUpdateSchema),
        defaultValues: { id: "", status: "new" }
    });

    async function onSubmitPut(data: TRequestUpdateSchema) {
        requestsPut.mutate(data, {
            onSuccess: () => {
                resetPut();
                setIsOpenPut(false);
            }
        });
    }

    function formatDate(dateString: string) {
        const d = new Date(dateString);
        return d.toLocaleDateString("ru-RU", { day: '2-digit', month: '2-digit', year: 'numeric' }) + 
               " " + d.toLocaleTimeString("ru-RU", { hour: '2-digit', minute: '2-digit' });
    }

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button className={styles.backBtn} onClick={() => router.back()}>← Назад</button>
                    <h1 className={styles.title}>Заявки на товары</h1>
                </div>
            </div>

            {requestsGet.isLoading && <p className={styles.loading}>Загрузка заявок...</p>}
            {requestsGet.isError && <p className={styles.serverError}>{(requestsGet.error as Error).message}</p>}
            {requestsGet.data && requestsGet.data.length === 0 && <p className={styles.empty}>Заявок пока нет.</p>}

            {requestsGet.data && requestsGet.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Товар</th>
                                <th>Клиент</th>
                                <th>Контакт</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestsGet.data.map((request: TProductRequests) => (
                                <tr key={request.id}>
                                    <td>{formatDate(request.createdAt)}</td>
                                    <td>{request.product?.title || "—"}</td>
                                    <td>{request.name}</td>
                                    <td>
                                        {request.phone}
                                        {request.comment && <div className={styles.comment}>{request.comment}</div>}
                                    </td>
                                    <td>
                                        <span className={`${styles.status} ${statusClasses[request.status]}`}>
                                            {statusLabels[request.status]}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => {
                                                resetPut({ id: String(request.id), status: request.status });
                                                setIsOpenPut(true);
                                            }}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Удалить заявку?")) requestsDelete.mutate({ id: String(request.id) })
                                            }}>🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Обработка заявки</h3>
                <form className={styles.form} onSubmit={handleSubmitPut(onSubmitPut)}>
                    <input type="hidden" {...registerPut("id")} />
                    
                    <div className={styles.field}>
                        <label className={styles.label}>Статус</label>
                        <select className={styles.select} {...registerPut("status")}>
                            <option value="new">Новая</option>
                            <option value="processed">В обработке</option>
                            <option value="done">Выполнена</option>
                        </select>
                    </div>

                    {requestsPut.isError && <p className={styles.serverError}>{(requestsPut.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={requestsPut.isPending}>
                            {requestsPut.isPending ? "Сохранение..." : "Сохранить"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    );
}