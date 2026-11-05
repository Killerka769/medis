"use client"

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link"; // <-- Обязательно добавь Link
import { useGetBookingData, useCreateAppointment } from "@/src/lib/ReactQuery/query/public/appointments/query";
import styles from "./AppointmentsPage.module.scss";

const bookingSchema = z.object({
    doctorId: z.string().min(1, "Выберите врача"),
    serviceId: z.string().min(1, "Выберите услугу"),
    date: z.string().min(1, "Укажите дату и время"),
    comment: z.string(),
    agree: z.boolean().refine(val => val === true, "Необходимо согласие") // <-- Валидация чекбокса
});
type TBookingSchema = z.infer<typeof bookingSchema>;

export default function AppointmentsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: bookingData, isLoading } = useGetBookingData();
    const createMutation = useCreateAppointment();
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm<TBookingSchema>({
        resolver: zodResolver(bookingSchema),
        defaultValues: { doctorId: "", serviceId: "", date: "", comment: "", agree: false }
    });

    useEffect(() => {
        const doc = searchParams.get("doctor");
        const srv = searchParams.get("service");
        if (doc) setValue("doctorId", doc);
        if (srv) setValue("serviceId", srv);
    }, [searchParams, setValue]);

    async function onSubmit(data: TBookingSchema) {
        // Убираем "agree" из данных перед отправкой (чтобы не сохранялось в БД)
        const { agree, ...payload } = data;
        createMutation.mutate(payload, {
            onSuccess: () => setIsSuccess(true)
        });
    }

    if (isLoading) return <div className={styles.loading}>Загрузка формы...</div>;

    if (isSuccess) {
        return (
            <main className={styles.page}>
                <div className={styles.successCard}>
                    <div className={styles.successIcon}>✓</div>
                    <h2>Вы успешно записаны!</h2>
                    <p>Наш администратор свяжется с вами в ближайшее время для подтверждения.</p>
                    <button onClick={() => router.push("/profile")} className={styles.btnPrimary}>Перейти в профиль</button>
                </div>
            </main>
        );
    }

    return (
        <main className={styles.page}>
            <div className={styles.container}>
                <div className={styles.infoSection}>
                    <h1 className={styles.title}>Запись на прием</h1>
                    <p className={styles.subtitle}>Выберите удобное время и специалиста. Мы позаботимся о вашем здоровье.</p>
                    <div className={styles.contacts}>
                        <p>Или запишитесь по телефону:</p>
                        <a href="tel:+79285558818" className={styles.phone}>+7 (928) 555-88-18</a>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.field}>
                            <label className={styles.label}>Специалист</label>
                            <select className={styles.input} {...register("doctorId")}>
                                <option value="">— Выберите врача —</option>
                                {bookingData?.doctors.map((doc: any) => (
                                    <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialization})</option>
                                ))}
                            </select>
                            {errors.doctorId && <span className={styles.error}>{errors.doctorId.message}</span>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Услуга</label>
                            <select className={styles.input} {...register("serviceId")}>
                                <option value="">— Выберите услугу —</option>
                                {bookingData?.services.map((srv: any) => (
                                    <option key={srv.id} value={srv.id}>{srv.title}</option>
                                ))}
                            </select>
                            {errors.serviceId && <span className={styles.error}>{errors.serviceId.message}</span>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Желаемая дата и время</label>
                            <input type="datetime-local" className={styles.input} {...register("date")} />
                            {errors.date && <span className={styles.error}>{errors.date.message}</span>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Комментарий (необязательно)</label>
                            <textarea className={styles.textarea} rows={3} placeholder="Опишите жалобы или пожелания" {...register("comment")} />
                        </div>

                        {createMutation.isError && (
                            <div className={styles.serverError}>{(createMutation.error as Error).message}</div>
                        )}

                        {/* ЧЕКБОКС СОГЛАСИЯ */}
                        <div className={styles.agreementCheckbox}>
                            <input type="checkbox" id="agree" {...register("agree")} />
                            <label htmlFor="agree">
                                Я согласен на обработку персональных данных и принимаю условия{" "}
                                <Link href="/privacy" target="_blank">Политики конфиденциальности</Link> и{" "}
                                <Link href="/consent" target="_blank">Согласия на обработку ПД</Link>.
                            </label>
                        </div>
                        {errors.agree && <span className={styles.error} style={{ marginTop: "-10px" }}>{errors.agree.message}</span>}

                        <button type="submit" className={styles.btnPrimary} disabled={createMutation.isPending}>
                            {createMutation.isPending ? "Отправка..." : "Записаться на прием"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}