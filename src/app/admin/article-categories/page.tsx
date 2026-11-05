"use client"

import { useState } from "react";
import { z } from "zod"
import Modal from "../../components/ui/Modal/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    useCreateArticleCategory,
    useDeleteArticleCategory,
    useGetArticleCategory,
    usePutArticleCategory
} from "@/src/lib/ReactQuery/query/admin/article-categories/query";
import { TArticleCategory } from "@/src/types";
import styles from "./ArticleCategoriesPage.module.scss";
import { useRouter } from "next/navigation";

const articleCategorySchema = z.object({
    title: z.string().min(1, "Введите название"),
    sortOrder: z.string(),
    isActive: z.enum(["true", "false"]),
})
type TArticleCategorySchema = z.infer<typeof articleCategorySchema>;

const articleCategoryPutSchema = z.object({
    id: z.string(),
    title: z.string().min(1, "Введите название"),
    sortOrder: z.string(),
    isActive: z.enum(["true", "false"]),
})
type TArticleCategoryPutSchema = z.infer<typeof articleCategoryPutSchema>;

export default function ArticleCategoriesPage() {
    const router = useRouter();
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);

    const createArticleCategory = useCreateArticleCategory();
    const deleteArticleCategory = useDeleteArticleCategory();
    const putArticleCategory = usePutArticleCategory();
    const articleCategory = useGetArticleCategory();

    const { register, handleSubmit, formState: { errors }, reset } = useForm<TArticleCategorySchema>({
        resolver: zodResolver(articleCategorySchema),
        defaultValues: { title: "", sortOrder: "0", isActive: "true" }
    })

    const {
        register: registerPut,
        handleSubmit: handleSubmitPut,
        formState: { errors: errorsPut },
        reset: resetPut
    } = useForm<TArticleCategoryPutSchema>({
        resolver: zodResolver(articleCategoryPutSchema),
        defaultValues: { id: "", title: "", sortOrder: "0", isActive: "true" }
    })

    function onSubmit(data: TArticleCategorySchema) {
        createArticleCategory.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpenCreate(false);
            }
        })
    }

    function handleEditClick(category: TArticleCategory) {
        resetPut({
            id: category.id,
            title: category.title,
            sortOrder: String(category.sortOrder),
            isActive: String(category.isActive) as "true" | "false"
        });
        setIsOpenPut(true);
    }

    function onSubmitPut(data: TArticleCategoryPutSchema) {
        putArticleCategory.mutate(data, {
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
                    <h1 className={styles.title}>Управление категориями блога</h1>
                </div>

                <button className={styles.createBtn} onClick={() => setIsOpenCreate(true)}>
                    + Создать категорию
                </button>
            </div>

            {articleCategory.isLoading && <p className={styles.loading}>Загрузка категорий...</p>}

            {articleCategory.data && articleCategory.data.length === 0 && (
                <p className={styles.empty}>Категорий пока нет. Создайте первую.</p>
            )}

            {articleCategory.data && articleCategory.data.length > 0 && (
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
                            {articleCategory.data.map((category: TArticleCategory) => (
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
                                                if (confirm("Удалить категорию?")) deleteArticleCategory.mutate({ id: category.id })
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

                    {createArticleCategory.isError && (
                        <p className={styles.serverError}>{(createArticleCategory.error as Error).message}</p>
                    )}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createArticleCategory.isPending}>
                            {createArticleCategory.isPending ? "Создание..." : "Создать"}
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

                    {putArticleCategory.isError && (
                        <p className={styles.serverError}>{(putArticleCategory.error as Error).message}</p>
                    )}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putArticleCategory.isPending}>
                            {putArticleCategory.isPending ? "Сохранение..." : "Сохранить"}
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