"use client"

import { useDeleteDoctors, useGetDoctors, usePostDoctors, usePutDoctors } from "@/src/lib/ReactQuery/query/admin/doctors/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import Modal from "../../components/ui/Modal/Modal";
import { useState } from "react";
import { TDoctors } from "@/src/types";
import styles from "./DoctorsPage.module.scss";
import { useRouter } from "next/navigation";

const doctorsSchema = z.object({
    name: z.string().min(1, "Имя обязательно"),
    specialization: z.string().min(1, "Специализация обязательна"),
    experienceYears: z.string().regex(/^\d+$/, "Только цифры"),
    education: z.string(),
    certificates: z.string(),
    bio: z.string(),
    photoUrl: z.string(),
    isActive: z.enum(["true", "false"])
})
type TDoctorsSchema = z.infer<typeof doctorsSchema>;

const doctorsUpdateSchema = z.object({
    id: z.string(),
    name: z.string().min(1, "Имя обязательно"),
    specialization: z.string().min(1, "Специализация обязательна"),
    experienceYears: z.string().regex(/^\d+$/, "Только цифры"),
    education: z.string(),
    certificates: z.string(),
    bio: z.string(),
    photoUrl: z.string(),
    isActive: z.enum(["true", "false"])
})
type TDoctorsUpdateSchema = z.infer<typeof doctorsUpdateSchema>;

export default function DoctorsPage() {
    const router = useRouter();
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);
    const createDoctors = usePostDoctors();
    const getDoctors = useGetDoctors();
    const putDoctors = usePutDoctors();
    const deleteDoctors = useDeleteDoctors();

    const { register: registerPut, reset: resetPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut } } = useForm<TDoctorsUpdateSchema>({
        resolver: zodResolver(doctorsUpdateSchema),
        defaultValues: {
            id: "", name: "", specialization: "", experienceYears: "",
            education: "", certificates: "", bio: "", photoUrl: "", isActive: "true"
        }
    })

    async function onSubmitPut(data: TDoctorsUpdateSchema) {
        putDoctors.mutate(data, {
            onSuccess: () => {
                resetPut();
                setIsOpenPut(false);
            }
        })
    }

    const { register, reset, handleSubmit, formState: { errors } } = useForm<TDoctorsSchema>({
        resolver: zodResolver(doctorsSchema),
        defaultValues: {
            name: "", specialization: "", experienceYears: "",
            education: "", certificates: "", bio: "", photoUrl: "", isActive: "true"
        }
    })

    async function onSubmit(data: TDoctorsSchema) {
        createDoctors.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpenPost(false);
            }
        })
    }

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button className={styles.backBtn} onClick={() => router.back()}>← Назад</button>
                    <h1 className={styles.title}>Управление врачами</h1>
                </div>
                <button className={styles.createBtn} onClick={() => setIsOpenPost(true)}>+ Создать врача</button>
            </div>

            {getDoctors.isLoading && <p className={styles.loading}>Загрузка врачей...</p>}
            {getDoctors.isError && <p className={styles.serverError}>{(getDoctors.error as Error).message}</p>}
            {getDoctors.data && getDoctors.data.length === 0 && <p className={styles.empty}>Врачей пока нет. Создайте первого.</p>}

            {getDoctors.data && getDoctors.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Специализация</th>
                                <th>Стаж</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getDoctors.data.map((doctor: TDoctors) => (
                                <tr key={doctor.id}>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialization}</td>
                                    <td>{doctor.experienceYears}</td>
                                    <td>
                                        <span className={`${styles.status} ${doctor.isActive ? styles.statusActive : styles.statusInactive}`}>
                                            {doctor.isActive ? "Активен" : "Скрыт"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => {
                                                resetPut({
                                                    id: String(doctor.id),
                                                    name: doctor.name,
                                                    specialization: doctor.specialization,
                                                    experienceYears: String(doctor.experienceYears ?? ""),
                                                    certificates: Array.isArray(doctor.certificates) ? doctor.certificates.join("\n") : (doctor.certificates ?? ""),
                                                    education: (doctor.education as unknown as { text: string })?.text ?? "",
                                                    bio: doctor.bio ?? "",
                                                    photoUrl: doctor.photoUrl ?? "",
                                                    isActive: String(doctor.isActive) as "true" | "false"
                                                });
                                                setIsOpenPut(true);
                                            }}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Скрыть врача?")) deleteDoctors.mutate({ id: String(doctor.id) })
                                            }}>🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <Modal isOpen={isOpenPost} onClose={() => setIsOpenPost(false)}>
                <h3 className={styles.modalTitle}>Создание врача</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="name">Имя</label>
                        <input className={styles.input} type="text" id="name" {...register("name")} />
                        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="specialization">Специализация</label>
                        <input className={styles.input} type="text" id="specialization" {...register("specialization")} />
                        {errors.specialization && <p className={styles.error}>{errors.specialization.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="experienceYears">Стаж (лет)</label>
                        <input className={styles.input} type="number" id="experienceYears" {...register("experienceYears")} />
                        {errors.experienceYears && <p className={styles.error}>{errors.experienceYears.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="education">Образование</label>
                        <textarea className={styles.textarea} id="education" rows={3} {...register("education")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="certificates">Сертификаты (каждый с новой строки)</label>
                        <textarea className={styles.textarea} id="certificates" rows={3} {...register("certificates")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="bio">Био</label>
                        <textarea className={styles.textarea} id="bio" rows={3} {...register("bio")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="photoUrl">Фото (URL)</label>
                        <input className={styles.input} type="text" id="photoUrl" {...register("photoUrl")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="isActive">Активен</label>
                        <select className={styles.select} id="isActive" {...register("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    {createDoctors.isError && <p className={styles.serverError}>{(createDoctors.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createDoctors.isPending}>
                            {createDoctors.isPending ? "Создание..." : "Создать"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPost(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Редактирование врача</h3>
                <form className={styles.form} onSubmit={handleSubmitPut(onSubmitPut)}>
                    <input type="hidden" {...registerPut("id")} />
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="namePut">Имя</label>
                        <input className={styles.input} type="text" id="namePut" {...registerPut("name")} />
                        {errorsPut.name && <p className={styles.error}>{errorsPut.name.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="specializationPut">Специализация</label>
                        <input className={styles.input} type="text" id="specializationPut" {...registerPut("specialization")} />
                        {errorsPut.specialization && <p className={styles.error}>{errorsPut.specialization.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="experienceYearsPut">Стаж (лет)</label>
                        <input className={styles.input} type="number" id="experienceYearsPut" {...registerPut("experienceYears")} />
                        {errorsPut.experienceYears && <p className={styles.error}>{errorsPut.experienceYears.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="educationPut">Образование</label>
                        <textarea className={styles.textarea} id="educationPut" rows={3} {...registerPut("education")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="certificatesPut">Сертификаты (каждый с новой строки)</label>
                        <textarea className={styles.textarea} id="certificatesPut" rows={3} {...registerPut("certificates")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="bioPut">Био</label>
                        <textarea className={styles.textarea} id="bioPut" rows={3} {...registerPut("bio")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="photoUrlPut">Фото (URL)</label>
                        <input className={styles.input} type="text" id="photoUrlPut" {...registerPut("photoUrl")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="isActivePut">Активен</label>
                        <select className={styles.select} id="isActivePut" {...registerPut("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    {putDoctors.isError && <p className={styles.serverError}>{(putDoctors.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putDoctors.isPending}>
                            {putDoctors.isPending ? "Сохранение..." : "Сохранить"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    )
}