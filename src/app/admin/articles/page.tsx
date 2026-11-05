"use client"

import { useDeleteArticles, useGetArticles, usePostArticles, usePutArticles } from "@/src/lib/ReactQuery/query/admin/articles/query";
import { useGetArticleCategory } from "@/src/lib/ReactQuery/query/admin/article-categories/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../../components/ui/Modal/Modal";
import { useState } from "react";
import { TArticles } from "@/src/types";
import styles from "./ArticlesPage.module.scss";
import { useRouter } from "next/navigation";

const articleSchema = z.object({
    title: z.string().min(1, "Заголовок обязателен"),
    content: z.string().min(1, "Контент обязателен"),
    excerpt: z.string(),
    coverUrl: z.string(),
    categoryId: z.string(),
    status: z.enum(["draft", "published"])
})
type TArticleSchema = z.infer<typeof articleSchema>;

const articleUpdateSchema = articleSchema.extend({
    id: z.string()
})
type TArticleUpdateSchema = z.infer<typeof articleUpdateSchema>;

export default function ArticlesPage() {
    const router = useRouter();
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);
    const createArticle = usePostArticles();
    const getArticles = useGetArticles();
    const putArticle = usePutArticles();
    const deleteArticle = useDeleteArticles();
    const getCategories = useGetArticleCategory();

    const { register, reset, handleSubmit, formState: { errors } } = useForm<TArticleSchema>({
        resolver: zodResolver(articleSchema),
        defaultValues: { title: "", content: "", excerpt: "", coverUrl: "", categoryId: "", status: "draft" }
    })

    const { register: registerPut, reset: resetPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut } } = useForm<TArticleUpdateSchema>({
        resolver: zodResolver(articleUpdateSchema),
        defaultValues: { id: "", title: "", content: "", excerpt: "", coverUrl: "", categoryId: "", status: "draft" }
    })

    async function onSubmit(data: TArticleSchema) {
        createArticle.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpenPost(false);
            }
        })
    }

    async function onSubmitPut(data: TArticleUpdateSchema) {
        putArticle.mutate(data, {
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
                    <button className={styles.backBtn} onClick={() => router.back()}>← Назад</button>
                    <h1 className={styles.title}>Управление статьями</h1>
                </div>
                <button className={styles.createBtn} onClick={() => setIsOpenPost(true)}>+ Создать статью</button>
            </div>

            {getArticles.isLoading && <p className={styles.loading}>Загрузка статей...</p>}
            {getArticles.isError && <p className={styles.serverError}>{(getArticles.error as Error).message}</p>}
            {getArticles.data && getArticles.data.length === 0 && <p className={styles.empty}>Статей пока нет. Создайте первую.</p>}

            {getArticles.data && getArticles.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Заголовок</th>
                                <th>Категория</th>
                                <th>Статус</th>
                                <th>Дата публикации</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getArticles.data.map((article: TArticles) => (
                                <tr key={article.id}>
                                    <td>{article.title}</td>
                                    <td>{article.categoryId ?? "—"}</td>
                                    <td>
                                        <span className={`${styles.status} ${article.status === "published" ? styles.statusActive : styles.statusInactive}`}>
                                            {article.status === "published" ? "Опубликована" : "Черновик"}
                                        </span>
                                    </td>
                                    <td>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("ru-RU") : "—"}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => {
                                                resetPut({
                                                    id: String(article.id),
                                                    title: article.title,
                                                    content: article.content,
                                                    excerpt: article.excerpt ?? "",
                                                    coverUrl: article.coverUrl ?? "",
                                                    categoryId: article.categoryId ?? "",
                                                    status: article.status as "draft" | "published"
                                                });
                                                setIsOpenPut(true);
                                            }}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Удалить статью?")) deleteArticle.mutate({ id: String(article.id) })
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
                <h3 className={styles.modalTitle}>Создание статьи</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="title">Заголовок</label>
                        <input className={styles.input} type="text" id="title" {...register("title")} />
                        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="excerpt">Краткое описание</label>
                        <textarea className={styles.textarea} id="excerpt" rows={2} {...register("excerpt")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="content">Контент (markdown)</label>
                        <textarea className={styles.textarea} id="content" rows={8} {...register("content")} />
                        {errors.content && <p className={styles.error}>{errors.content.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="coverUrl">Обложка (URL)</label>
                        <input className={styles.input} type="text" id="coverUrl" {...register("coverUrl")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="categoryId">Категория</label>
                        <select className={styles.select} id="categoryId" {...register("categoryId")}>
                            <option value="">Без категории</option>
                            {getCategories.data?.map((cat: { id: string, title: string }) => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="status">Статус</label>
                        <select className={styles.select} id="status" {...register("status")}>
                            <option value="draft">Черновик</option>
                            <option value="published">Опубликована</option>
                        </select>
                    </div>

                    {createArticle.isError && <p className={styles.serverError}>{(createArticle.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createArticle.isPending}>
                            {createArticle.isPending ? "Создание..." : "Создать"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPost(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Редактирование статьи</h3>
                <form className={styles.form} onSubmit={handleSubmitPut(onSubmitPut)}>
                    <input type="hidden" {...registerPut("id")} />
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="titlePut">Заголовок</label>
                        <input className={styles.input} type="text" id="titlePut" {...registerPut("title")} />
                        {errorsPut.title && <p className={styles.error}>{errorsPut.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="excerptPut">Краткое описание</label>
                        <textarea className={styles.textarea} id="excerptPut" rows={2} {...registerPut("excerpt")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="contentPut">Контент (markdown)</label>
                        <textarea className={styles.textarea} id="contentPut" rows={8} {...registerPut("content")} />
                        {errorsPut.content && <p className={styles.error}>{errorsPut.content.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="coverUrlPut">Обложка (URL)</label>
                        <input className={styles.input} type="text" id="coverUrlPut" {...registerPut("coverUrl")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="categoryIdPut">Категория</label>
                        <select className={styles.select} id="categoryIdPut" {...registerPut("categoryId")}>
                            <option value="">Без категории</option>
                            {getCategories.data?.map((cat: { id: string, title: string }) => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="statusPut">Статус</label>
                        <select className={styles.select} id="statusPut" {...registerPut("status")}>
                            <option value="draft">Черновик</option>
                            <option value="published">Опубликована</option>
                        </select>
                    </div>

                    {putArticle.isError && <p className={styles.serverError}>{(putArticle.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putArticle.isPending}>
                            {putArticle.isPending ? "Сохранение..." : "Сохранить"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    )
}