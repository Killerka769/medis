"use client"

import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useGetBookingData, useCreateAppointment } from "@/src/lib/ReactQuery/query/public/appointments/query";
import { reachGoal } from "@/src/lib/metrika";
import { TrackedContactLink } from "../components/TrackedContactLink";
import styles from "./AppointmentsPage.module.scss";

const bookingSchema = z.object({
    doctorId: z.string().min(1, "Выберите врача"),
    serviceId: z.string().min(1, "Выберите услугу"),
    date: z.string().min(1, "Укажите дату и время"),
    comment: z.string(),
    agree: z.boolean().refine(val => val === true, "Необходимо согласие")
});
type TBookingSchema = z.infer<typeof bookingSchema>;

export default function AppointmentsContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { data: bookingData, isLoading } = useGetBookingData();
    const createMutation = useCreateAppointment();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<TBookingSchema>({
        resolver: zodResolver(bookingSchema),
        defaultValues: { doctorId: "", serviceId: "", date: "", comment: "", agree: false }
    });
    const selectedServiceId = watch("serviceId");
    const selectedDoctorId = watch("doctorId");

    const servicesByCategory = useMemo(() => {
        const groups: { title: string; services: any[] }[] = [];
        const indexByTitle = new Map<string, number>();

        for (const service of bookingData?.services || []) {
            const title = service.category?.title || "Услуги";
            const existing = indexByTitle.get(title);
            if (existing === undefined) {
                indexByTitle.set(title, groups.length);
                groups.push({ title, services: [service] });
            } else {
                groups[existing].services.push(service);
            }
        }

        return groups;
    }, [bookingData]);

    const doctorsForService = useMemo(() => {
        if (!selectedServiceId || !bookingData?.services) return [];
        const service = bookingData.services.find((item: { id: string }) => item.id === selectedServiceId);
        const linked = (service?.doctors || []).filter((doc: { isActive?: boolean }) => doc && doc.isActive !== false);
        if (linked.length) return linked;
        return (bookingData.doctors || []).filter((doc: { isActive?: boolean }) => doc && doc.isActive !== false);
    }, [bookingData, selectedServiceId]);

    useEffect(() => {
        fetch("/api/profile")
            .then((res) => setIsAuth(res.ok))
            .catch(() => setIsAuth(false));
    }, []);

    useEffect(() => {
        const srv = searchParams.get("service");
        if (srv) setValue("serviceId", srv);
    }, [searchParams, setValue]);

    useEffect(() => {
        if (!selectedServiceId) {
            setValue("doctorId", "");
            return;
        }
        const allowed = new Set(doctorsForService.map((doc: { id: string }) => doc.id));
        const fromUrl = searchParams.get("doctor");
        if (fromUrl && allowed.has(fromUrl)) {
            setValue("doctorId", fromUrl);
            return;
        }
        if (selectedDoctorId && allowed.has(selectedDoctorId)) return;
        if (doctorsForService.length === 1) {
            setValue("doctorId", doctorsForService[0].id);
            return;
        }
        if (selectedDoctorId && !allowed.has(selectedDoctorId)) {
            setValue("doctorId", "");
        }
    }, [selectedServiceId, doctorsForService, selectedDoctorId, searchParams, setValue]);

    async function onSubmit(data: TBookingSchema) {
        const { agree: _agree, ...payload } = data;
        createMutation.mutate(payload, {
            onSuccess: () => {
                reachGoal("appointment_success", { form: "appointment" });
                setIsSuccess(true);
            }
        });
    }

    if (isAuth === null || isLoading) return <div className={styles.loading}>Загрузка формы...</div>;

    if (!isAuth) {
        return (
            <main className={styles.page}>
                <div className={styles.successCard}>
                    <h2>Войдите, чтобы записаться</h2>
                    <p>Запись на прием доступна в личном кабинете. Если аккаунта ещё нет — регистрация займёт минуту.</p>
                    <TrackedContactLink href="tel:+79285558818" className={styles.phone}>+7 928 555-88-18</TrackedContactLink>
                    <div className={styles.authActions}>
                        <Link href="/login" className={styles.btnPrimary}>Войти</Link>
                        <Link href="/register" className={styles.btnSecondary}>Создать аккаунт</Link>
                    </div>
                </div>
            </main>
        );
    }

    if (isSuccess) {
        return (
            <main className={styles.page}>
                <div className={styles.successCard}>
                    <div className={styles.successIcon}>✓</div>
                    <h2>Заявка принята</h2>
                    <p>Администратор свяжется с вами, чтобы подтвердить удобное время приёма.</p>
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
                    <p className={styles.subtitle}>Сначала выберите услугу, затем врача, который её оказывает, и оставьте комментарий при необходимости.</p>
                    <div className={styles.contacts}>
                        <p>Или запишитесь по телефону:</p>
                        <TrackedContactLink href="tel:+79285558818" className={styles.phone}>+7 928 555-88-18</TrackedContactLink>
                    </div>
                </div>

                <div className={styles.formSection}>
                    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.field}>
                            <label className={styles.label}>1. Услуга</label>
                            <select className={styles.input} {...register("serviceId")}>
                                <option value="">— Сначала выберите услугу —</option>
                                {servicesByCategory.map((group) => (
                                    <optgroup key={group.title} label={group.title}>
                                        {group.services.map((srv: any) => (
                                            <option key={srv.id} value={srv.id}>{srv.title}</option>
                                        ))}
                                    </optgroup>
                                ))}
                            </select>
                            {errors.serviceId && <span className={styles.error}>{errors.serviceId.message}</span>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>2. Врач по этой услуге</label>
                            <select className={styles.input} {...register("doctorId")} disabled={!selectedServiceId || doctorsForService.length === 0}>
                                <option value="">
                                    {!selectedServiceId
                                        ? "— Сначала выберите услугу —"
                                        : doctorsForService.length
                                            ? "— Выберите врача —"
                                            : "— Для этой услуги врачи не назначены —"}
                                </option>
                                {doctorsForService.map((doc: any) => (
                                    <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialization})</option>
                                ))}
                            </select>
                            {selectedServiceId && doctorsForService.length === 0 && (
                                <span className={styles.hint}>Для этой услуги пока нет врача. Позвоните по телефону +7 928 555-88-18.</span>
                            )}
                            {errors.doctorId && <span className={styles.error}>{errors.doctorId.message}</span>}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>3. Комментарий (необязательно)</label>
                            <textarea className={styles.textarea} rows={3} placeholder="Опишите жалобы или пожелания" {...register("comment")} />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>Желаемая дата и время</label>
                            <input type="datetime-local" className={styles.input} {...register("date")} />
                            {errors.date && <span className={styles.error}>{errors.date.message}</span>}
                        </div>

                        {createMutation.isError && (
                            <div className={styles.serverError}>{(createMutation.error as Error).message}</div>
                        )}

                        <div className={styles.agreementCheckbox}>
                            <input type="checkbox" id="agree" {...register("agree")} />
                            <label htmlFor="agree">
                                Я согласен на обработку персональных данных и принимаю условия{" "}
                                <Link href="/privacy" target="_blank">Политики конфиденциальности</Link> и{" "}
                                <Link href="/consent" target="_blank">Согласия на обработку ПД</Link>.
                            </label>
                        </div>
                        {errors.agree && <span className={styles.error}>{errors.agree.message}</span>}

                        <button
                            type="submit"
                            className={styles.btnPrimary}
                            disabled={createMutation.isPending || !selectedServiceId || doctorsForService.length === 0}
                        >
                            {createMutation.isPending ? "Отправка..." : "Записаться на прием"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
