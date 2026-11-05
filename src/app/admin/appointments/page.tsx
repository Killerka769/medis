"use client"

import { useDeleteAppointments, useGetAppointments, usePutAppointments } from "@/src/lib/ReactQuery/query/admin/appointments/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../../components/ui/Modal/Modal";
import { useState } from "react";
import { TAppointments } from "@/src/types";
import styles from "./AppointmentsPage.module.scss";
import { useRouter } from "next/navigation";

const appointmentUpdateSchema = z.object({
    id: z.string(),
    status: z.enum(["pending", "confirmed", "cancelled", "completed", "no_show"]),
    adminComment: z.string()
});
type TAppointmentUpdateSchema = z.infer<typeof appointmentUpdateSchema>;

const statusLabels: Record<string, string> = {
    pending: "Ожидает",
    confirmed: "Подтвержден",
    cancelled: "Отменен",
    completed: "Завершен",
    no_show: "Не пришел"
};

const statusClasses: Record<string, string> = {
    pending: styles.statusPending,
    confirmed: styles.statusConfirmed,
    cancelled: styles.statusCancelled,
    completed: styles.statusCompleted,
    no_show: styles.statusNoShow
};

export default function AppointmentsPage() {
    const router = useRouter();
    const [isOpenPut, setIsOpenPut] = useState(false);
    
    const appointmentsGet = useGetAppointments();
    const appointmentsPut = usePutAppointments();
    const appointmentsDelete = useDeleteAppointments(); // Не забудь добавить этот хук (код ниже)

    const { register: registerPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut }, reset: resetPut } = useForm<TAppointmentUpdateSchema>({
        resolver: zodResolver(appointmentUpdateSchema),
        defaultValues: { id: "", status: "pending", adminComment: "" }
    });

    async function onSubmitPut(data: TAppointmentUpdateSchema) {
        appointmentsPut.mutate(data, {
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
                    <h1 className={styles.title}>Управление записями</h1>
                </div>
            </div>

            {appointmentsGet.isLoading && <p className={styles.loading}>Загрузка записей...</p>}
            {appointmentsGet.isError && <p className={styles.serverError}>{(appointmentsGet.error as Error).message}</p>}
            {appointmentsGet.data && appointmentsGet.data.length === 0 && <p className={styles.empty}>Записей пока нет.</p>}

            {appointmentsGet.data && appointmentsGet.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Дата</th>
                                <th>Пациент</th>
                                <th>Врач</th>
                                <th>Услуга</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointmentsGet.data.map((appoint: TAppointments) => (
                                <tr key={appoint.id}>
                                    <td>{formatDate(appoint.date)}</td>
                                    <td>
                                        {appoint.patient?.username || "—"}
                                        <br/>
                                        <span className={styles.phone}>{appoint.patient?.phone || ""}</span>
                                    </td>
                                    <td>{appoint.doctor?.name || "—"}</td>
                                    <td>{appoint.service?.title || "—"}</td>
                                    <td>
                                        <span className={`${styles.status} ${statusClasses[appoint.status]}`}>
                                            {statusLabels[appoint.status]}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => {
                                                resetPut({
                                                    id: String(appoint.id),
                                                    status: appoint.status,
                                                    adminComment: appoint.adminComment ?? ""
                                                });
                                                setIsOpenPut(true);
                                            }}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Удалить запись?")) appointmentsDelete.mutate({ id: String(appoint.id) })
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
                <h3 className={styles.modalTitle}>Редактирование записи</h3>
                <form className={styles.form} onSubmit={handleSubmitPut(onSubmitPut)}>
                    <input type="hidden" {...registerPut("id")} />
                    
                    <div className={styles.field}>
                        <label className={styles.label}>Статус</label>
                        <select className={styles.select} {...registerPut("status")}>
                            <option value="pending">Ожидает</option>
                            <option value="confirmed">Подтвержден</option>
                            <option value="cancelled">Отменен</option>
                            <option value="completed">Завершен</option>
                            <option value="no_show">Не пришел</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Комментарий админа</label>
                        <textarea className={styles.textarea} rows={3} {...registerPut("adminComment")} />
                    </div>

                    {appointmentsPut.isError && <p className={styles.serverError}>{(appointmentsPut.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={appointmentsPut.isPending}>
                            {appointmentsPut.isPending ? "Сохранение..." : "Сохранить"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    );
}