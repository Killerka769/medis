"use client"

import { useState } from "react";
import { z } from "zod"
import Modal from "../../components/ui/Modal/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateServiceCategory, useDeleteServiceCategory, useGetServiceCategory, usePutServiceCategory } from "@/src/lib/ReactQuery/query/admin/service-categories/query";
import { TServiceCategory } from "@/src/types";
import styles from "./ServiceCategoriesPage.module.scss";
import { useRouter } from "next/navigation";

const serviceCategorySchema = z.object({
    title: z.string().min(1, "Введите название"),
    sortOrder: z.string(),
    isActive: z.enum(["true", "false"]),
})
type TServiceCategorySchema = z.infer<typeof serviceCategorySchema>;

const serviceCategoryPutSchema = z.object({
    id: z.string(),
    title: z.string().min(1, "Введите название"),
    sortOrder: z.string(),
    isActive: z.enum(["true", "false"]),
})
type TServiceCategoryPutSchema = z.infer<typeof serviceCategoryPutSchema>;

export default function ServiceCategoriesPage() {
    const router = useRouter();
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);

    const createServiceCategory = useCreateServiceCategory();
    const deleteServiceCategory = useDeleteServiceCategory();
    const putServiceCategory = usePutServiceCategory();
    const serviceCategory = useGetServiceCategory();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TServiceCategorySchema>({
        resolver: zodResolver(serviceCategorySchema),
        defaultValues: { title: "", sortOrder: "0", isActive: "true" }
    })

    const {
        register: registerPut,
        handleSubmit: handleSubmitPut,
        formState: { errors: errorsPut },
        reset: resetPut
    } = useForm<TServiceCategoryPutSchema>({
        resolver: zodResolver(serviceCategoryPutSchema),
        defaultValues: { id: "", title: "", sortOrder: "0", isActive: "true" }
    })

    function onSubmit(data: TServiceCategorySchema) {
        createServiceCategory.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpenCreate(false);
            }
        })
    }

    function handleEditClick(service: TServiceCategory) {
        resetPut({
            id: service.id,
            title: service.title,
            sortOrder: String(service.sortOrder),
            isActive: String(service.isActive) as "true" | "false"
        });
        setIsOpenPut(true);
    }

    function onSubmitPut(data: TServiceCategoryPutSchema) {
        putServiceCategory.mutate(data, {
            onSuccess: () => {
                resetPut();
                setIsOpenPut(false);
            }
        })
    }

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button className={styles.backBtn} onClick={() => router.back()}>
                        ← Назад
                    </button>
                    <h1 className={styles.title}>Управление категориями услуг</h1>
                </div>

                <button className={styles.createBtn} onClick={() => setIsOpenCreate(true)}>
                    + Создать категорию
                </button>
            </div>

            {serviceCategory.isLoading && <p className={styles.loading}>Загрузка категорий...</p>}

            {serviceCategory.data && serviceCategory.data.length === 0 && (
                <p className={styles.empty}>Категорий пока нет. Создайте первую.</p>
            )}

            {serviceCategory.data && serviceCategory.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Сортировка</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceCategory.data.map((service: TServiceCategory) => (
                                <tr key={service.id}>
                                    <td>{service.title}</td>
                                    <td>{service.sortOrder}</td>
                                    <td>
                                        <span className={`${styles.status} ${service.isActive ? styles.statusActive : styles.statusInactive}`}>
                                            {service.isActive ? "Активно" : "Неактивна"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => handleEditClick(service)}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Удалить категорию?")) deleteServiceCategory.mutate({ id: service.id })
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
                <h3 className={styles.modalTitle}>Новая категория</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="title">Название</label>
                        <input className={styles.input} type="text" id="title" maxLength={30} {...register("title")} />
                        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="sortOrder">Сортировка</label>
                        <input className={styles.input} type="number" id="sortOrder" {...register("sortOrder")} />
                        {errors.sortOrder && <p className={styles.error}>{errors.sortOrder.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="isActive">Активный</label>
                        <select className={styles.select} id="isActive" {...register("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    {createServiceCategory.isError && (
                        <p className={styles.serverError}>{(createServiceCategory.error as Error).message}</p>
                    )}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createServiceCategory.isPending}>
                            {createServiceCategory.isPending ? "Создание..." : "Создать"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenCreate(false)}>
                            Отмена
                        </button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Изменить категорию</h3>
                <form className={styles.form} onSubmit={handleSubmitPut(onSubmitPut)}>
                    <input type="hidden" {...registerPut("id")} />
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="titlePut">Название</label>
                        <input className={styles.input} type="text" id="titlePut" maxLength={30} {...registerPut("title")} />
                        {errorsPut.title && <p className={styles.error}>{errorsPut.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="sortOrderPut">Сортировка</label>
                        <input className={styles.input} type="number" id="sortOrderPut" {...registerPut("sortOrder")} />
                        {errorsPut.sortOrder && <p className={styles.error}>{errorsPut.sortOrder.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="isActivePut">Активный</label>
                        <select className={styles.select} id="isActivePut" {...registerPut("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    {putServiceCategory.isError && (
                        <p className={styles.serverError}>{(putServiceCategory.error as Error).message}</p>
                    )}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putServiceCategory.isPending}>
                            {putServiceCategory.isPending ? "Сохранение..." : "Сохранить"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>
                            Отмена
                        </button>
                    </div>
                </form>
            </Modal>
        </main>
    )
}