"use client"

import { useState } from "react";
import { z } from "zod"
import Modal from "../../components/ui/Modal/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    useCreateProductCategory,
    useDeleteProductCategory,
    useGetProductCategory,
    usePutProductCategory
} from "@/src/lib/ReactQuery/query/admin/product-categories/query";
import { TProductCategory } from "@/src/types";
import styles from "./ProductCategoriesPage.module.scss";
import { useRouter } from "next/navigation";

const productCategorySchema = z.object({
    title: z.string().min(1, "Введите название"),
    sortOrder: z.string(),
    isActive: z.enum(["true", "false"]),
})
type TProductCategorySchema = z.infer<typeof productCategorySchema>;

const productCategoryPutSchema = z.object({
    id: z.string(),
    title: z.string().min(1, "Введите название"),
    sortOrder: z.string(),
    isActive: z.enum(["true", "false"]),
})
type TProductCategoryPutSchema = z.infer<typeof productCategoryPutSchema>;

export default function ProductCategoriesPage() {
    const router = useRouter();
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);

    const createProductCategory = useCreateProductCategory();
    const deleteProductCategory = useDeleteProductCategory();
    const putProductCategory = usePutProductCategory();
    const productCategory = useGetProductCategory();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TProductCategorySchema>({
        resolver: zodResolver(productCategorySchema),
        defaultValues: { title: "", sortOrder: "0", isActive: "true" }
    })

    const {
        register: registerPut,
        handleSubmit: handleSubmitPut,
        formState: { errors: errorsPut },
        reset: resetPut
    } = useForm<TProductCategoryPutSchema>({
        resolver: zodResolver(productCategoryPutSchema),
        defaultValues: { id: "", title: "", sortOrder: "0", isActive: "true" }
    })

    function onSubmit(data: TProductCategorySchema) {
        createProductCategory.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpenCreate(false);
            }
        })
    }

    function handleEditClick(category: TProductCategory) {
        resetPut({
            id: category.id,
            title: category.title,
            sortOrder: String(category.sortOrder),
            isActive: String(category.isActive) as "true" | "false"
        });
        setIsOpenPut(true);
    }

    function onSubmitPut(data: TProductCategoryPutSchema) {
        putProductCategory.mutate(data, {
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
                    <h1 className={styles.title}>Управление категориями товаров</h1>
                </div>

                <button className={styles.createBtn} onClick={() => setIsOpenCreate(true)}>
                    + Создать категорию
                </button>
            </div>

            {productCategory.isLoading && <p className={styles.loading}>Загрузка категорий...</p>}

            {productCategory.data && productCategory.data.length === 0 && (
                <p className={styles.empty}>Категорий пока нет. Создайте первую.</p>
            )}

            {productCategory.data && productCategory.data.length > 0 && (
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
                            {productCategory.data.map((category: TProductCategory) => (
                                <tr key={category.id}>
                                    <td>{category.title}</td>
                                    <td>{category.sortOrder}</td>
                                    <td>
                                        <span className={`${styles.status} ${category.isActive ? styles.statusActive : styles.statusInactive}`}>
                                            {category.isActive ? "Активно" : "Неактивна"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => handleEditClick(category)}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Удалить категорию?")) deleteProductCategory.mutate({ id: category.id })
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

                    {createProductCategory.isError && (
                        <p className={styles.serverError}>{(createProductCategory.error as Error).message}</p>
                    )}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createProductCategory.isPending}>
                            {createProductCategory.isPending ? "Создание..." : "Создать"}
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

                    {putProductCategory.isError && (
                        <p className={styles.serverError}>{(putProductCategory.error as Error).message}</p>
                    )}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putProductCategory.isPending}>
                            {putProductCategory.isPending ? "Сохранение..." : "Сохранить"}
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