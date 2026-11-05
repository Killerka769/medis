"use client"

import { useDeleteServices, useGetServices, usePostServices, usePutServices } from "@/src/lib/ReactQuery/query/admin/services/query";
import { useGetServiceCategory } from "@/src/lib/ReactQuery/query/admin/service-categories/query";
import { useGetDoctors } from "@/src/lib/ReactQuery/query/admin/doctors/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../../components/ui/Modal/Modal";
import { useState } from "react";
import { TServices, TDoctors, TServiceCategory } from "@/src/types";
import styles from "./ServicesPage.module.scss";
import { useRouter } from "next/navigation";

const servicesSchema = z.object({
    title: z.string().min(1, "Название обязательно"),
    description: z.string(),
    content: z.string(),
    price: z.string(),
    priceFrom: z.enum(["true", "false"]),
    categoryId: z.string().min(1, "Выберите категорию"),
    isOms: z.enum(["true", "false"]),
    duration: z.string(),
    imageUrl: z.string(),
    isActive: z.enum(["true", "false"]),
    doctorIds: z.array(z.string()),
});
type TServicesSchema = z.infer<typeof servicesSchema>;

const servicesUpdateSchema = servicesSchema.extend({
    id: z.string()
});
type TServicesUpdateSchema = z.infer<typeof servicesUpdateSchema>;

export default function ServicesPage() {
    const router = useRouter();
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);
    
    const servicesPost = usePostServices();
    const servicesPut = usePutServices();
    const servicesDelete = useDeleteServices();
    const servicesGet = useGetServices();
    const doctorsGet = useGetDoctors();
    const categoryGet = useGetServiceCategory();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TServicesSchema>({
        resolver: zodResolver(servicesSchema),
        defaultValues: { title: "", description: "", content: "", price: "", priceFrom: "false", categoryId: "", isOms: "false", duration: "", imageUrl: "", isActive: "true", doctorIds: [] }
    });

    const { register: registerPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut }, reset: resetPut } = useForm<TServicesUpdateSchema>({
        resolver: zodResolver(servicesUpdateSchema),
        defaultValues: { id: "", title: "", description: "", content: "", price: "", priceFrom: "false", categoryId: "", isOms: "false", duration: "", imageUrl: "", isActive: "true", doctorIds: [] }
    });

    async function onSubmit(data: TServicesSchema) {
        servicesPost.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpenPost(false);
            }
        });
    }

    async function onSubmitPut(data: TServicesUpdateSchema) {
        servicesPut.mutate(data, {
            onSuccess: () => {
                resetPut();
                setIsOpenPut(false);
            }
        });
    }

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button className={styles.backBtn} onClick={() => router.back()}>← Назад</button>
                    <h1 className={styles.title}>Управление услугами</h1>
                </div>
                <button className={styles.createBtn} onClick={() => setIsOpenPost(true)}>+ Создать услугу</button>
            </div>

            {servicesGet.isLoading && <p className={styles.loading}>Загрузка услуг...</p>}
            {servicesGet.isError && <p className={styles.serverError}>{(servicesGet.error as Error).message}</p>}
            {servicesGet.data && servicesGet.data.length === 0 && <p className={styles.empty}>Услуг пока нет. Создайте первую.</p>}

            {servicesGet.data && servicesGet.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Категория</th>
                                <th>Врачи</th>
                                <th>Цена</th>
                                <th>ОМС</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {servicesGet.data.map((service: TServices) => {
                                const catTitle = categoryGet.data?.find((c: TServiceCategory) => c.id === service.categoryId)?.title || "—";
                                const doctorNames = service.doctors?.map((ds: any) => {
                                    const doc = doctorsGet.data?.find((d: TDoctors) => d.id === ds.doctorId);
                                    return doc ? doc.name : "";
                                }).filter(Boolean).join(", ") || "—";
                                return (
                                    <tr key={service.id}>
                                        <td>{service.title}</td>
                                        <td>{catTitle}</td>
                                        <td>{doctorNames}</td>
                                        <td>{service.price ? (service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽`) : "По запросу"}</td>
                                        <td>{service.isOms ? "Да" : "Нет"}</td>
                                        <td>
                                            <span className={`${styles.status} ${service.isActive ? styles.statusActive : styles.statusInactive}`}>
                                                {service.isActive ? "Активна" : "Скрыта"}
                                            </span>
                                        </td>
                                        <td>
                                            <div className={styles.actions}>
                                                <button className={styles.iconBtn} onClick={() => {

                                                    resetPut({
                                                        id: String(service.id),
                                                        title: service.title,
                                                        description: service.description ?? "",
                                                        content: service.content ?? "",
                                                        price: String(service.price ?? ""),
                                                        priceFrom: String(service.priceFrom) as "true" | "false",
                                                        categoryId: service.categoryId,
                                                        isOms: String(service.isOms) as "true" | "false",
                                                        duration: String(service.duration ?? ""),
                                                        imageUrl: service.imageUrl ?? "",
                                                        isActive: String(service.isActive) as "true" | "false",
                                                        doctorIds: service.doctors ? service.doctors.map((d: any) => d.doctorId) : []
                                                    });
                                                    setIsOpenPut(true);
                                                }}>✏️</button>
                                                <button className={styles.iconBtn} onClick={() => {
                                                    if (confirm("Удалить услугу навсегда?")) servicesDelete.mutate({ id: String(service.id) })
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

            {/* Модалка СОЗДАНИЯ */}
            <Modal isOpen={isOpenPost} onClose={() => setIsOpenPost(false)}>
                <h3 className={styles.modalTitle}>Создание услуги</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <label className={styles.label}>Название</label>
                        <input className={styles.input} type="text" {...register("title")} />
                        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Краткое описание</label>
                        <textarea className={styles.textarea} rows={2} {...register("description")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Контент (markdown)</label>
                        <textarea className={styles.textarea} rows={4} {...register("content")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Цена (₽)</label>
                        <input className={styles.input} type="number" {...register("price")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Цена "от"</label>
                        <select className={styles.select} {...register("priceFrom")}>
                            <option value="false">Нет</option>
                            <option value="true">Да</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Категория</label>
                        <select className={styles.select} {...register("categoryId")}>
                            <option value="">Выберите категорию</option>
                            {categoryGet.data?.map((cat: TServiceCategory) => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                        </select>
                        {errors.categoryId && <p className={styles.error}>{errors.categoryId.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>ОМС</label>
                        <select className={styles.select} {...register("isOms")}>
                            <option value="false">Нет</option>
                            <option value="true">Да</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Длительность (мин)</label>
                        <input className={styles.input} type="number" {...register("duration")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Картинка (URL)</label>
                        <input className={styles.input} type="text" {...register("imageUrl")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Активна</label>
                        <select className={styles.select} {...register("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Врачи</label>
                        <div className={styles.checkboxGroup}>
                            {doctorsGet.data?.map((doctor: TDoctors) => (
                                <label key={doctor.id} className={styles.checkboxLabel}>
                                    <input type="checkbox" value={doctor.id} {...register("doctorIds")} />
                                    {doctor.name}
                                </label>
                            ))}
                        </div>
                    </div>

                    {servicesPost.isError && <p className={styles.serverError}>{(servicesPost.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={servicesPost.isPending}>
                            {servicesPost.isPending ? "Создание..." : "Создать"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPost(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>

            {/* Модалка РЕДАКТИРОВАНИЯ */}
            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Редактирование услуги</h3>
                <form className={styles.form} onSubmit={handleSubmitPut(onSubmitPut)}>
                    <input type="hidden" {...registerPut("id")} />
                    <div className={styles.field}>
                        <label className={styles.label}>Название</label>
                        <input className={styles.input} type="text" {...registerPut("title")} />
                        {errorsPut.title && <p className={styles.error}>{errorsPut.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Краткое описание</label>
                        <textarea className={styles.textarea} rows={2} {...registerPut("description")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Контент (markdown)</label>
                        <textarea className={styles.textarea} rows={4} {...registerPut("content")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Цена (₽)</label>
                        <input className={styles.input} type="number" {...registerPut("price")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Цена "от"</label>
                        <select className={styles.select} {...registerPut("priceFrom")}>
                            <option value="false">Нет</option>
                            <option value="true">Да</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Категория</label>
                        <select className={styles.select} {...registerPut("categoryId")}>
                            <option value="">Выберите категорию</option>
                            {categoryGet.data?.map((cat: TServiceCategory) => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                        </select>
                        {errorsPut.categoryId && <p className={styles.error}>{errorsPut.categoryId.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>ОМС</label>
                        <select className={styles.select} {...registerPut("isOms")}>
                            <option value="false">Нет</option>
                            <option value="true">Да</option>
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Длительность (мин)</label>
                        <input className={styles.input} type="number" {...registerPut("duration")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Картинка (URL)</label>
                        <input className={styles.input} type="text" {...registerPut("imageUrl")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label}>Активна</label>
                        <select className={styles.select} {...registerPut("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label}>Врачи</label>
                        <div className={styles.checkboxGroup}>
                            {doctorsGet.data?.map((doctor: TDoctors) => (
                                <label key={doctor.id} className={styles.checkboxLabel}>
                                    <input type="checkbox" value={doctor.id} {...registerPut("doctorIds")} />
                                    {doctor.name}
                                </label>
                            ))}
                        </div>
                    </div>

                    {servicesPut.isError && <p className={styles.serverError}>{(servicesPut.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={servicesPut.isPending}>
                            {servicesPut.isPending ? "Сохранение..." : "Сохранить"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    );
}