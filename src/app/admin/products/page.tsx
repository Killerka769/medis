"use client"

import { useDeleteProducts, useGetProducts, usePostProducts, usePutProducts } from "@/src/lib/ReactQuery/query/admin/products/query";
import { useGetProductCategory } from "@/src/lib/ReactQuery/query/admin/product-categories/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Modal from "../../components/ui/Modal/Modal";
import { useState } from "react";
import { TProducts } from "@/src/types";
import styles from "./ProductsPage.module.scss";
import { useRouter } from "next/navigation";

const productSchema = z.object({
    title: z.string().min(1, "Название обязательно"),
    description: z.string(),
    content: z.string(),
    price: z.string().regex(/^\d+$/, "Только цифры"),
    categoryId: z.string().min(1, "Выберите категорию"),
    imageUrl: z.string(),
    images: z.string(),
    isActive: z.enum(["true", "false"])
})
type TProductSchema = z.infer<typeof productSchema>;

const productUpdateSchema = productSchema.extend({
    id: z.string()
})
type TProductUpdateSchema = z.infer<typeof productUpdateSchema>;

export default function ProductsPage() {
    const router = useRouter();
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);
    const createProduct = usePostProducts();
    const getProducts = useGetProducts();
    const putProduct = usePutProducts();
    const deleteProduct = useDeleteProducts();
    const getCategories = useGetProductCategory();

    const { register, reset, handleSubmit, formState: { errors } } = useForm<TProductSchema>({
        resolver: zodResolver(productSchema),
        defaultValues: { title: "", description: "", content: "", price: "", categoryId: "", imageUrl: "", images: "", isActive: "true" }
    })

    const { register: registerPut, reset: resetPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut } } = useForm<TProductUpdateSchema>({
        resolver: zodResolver(productUpdateSchema),
        defaultValues: { id: "", title: "", description: "", content: "", price: "", categoryId: "", imageUrl: "", images: "", isActive: "true" }
    })

    async function onSubmit(data: TProductSchema) {
        createProduct.mutate(data, {
            onSuccess: () => {
                reset();
                setIsOpenPost(false);
            }
        })
    }

    async function onSubmitPut(data: TProductUpdateSchema) {
        putProduct.mutate(data, {
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
                    <h1 className={styles.title}>Управление товарами</h1>
                </div>
                <button className={styles.createBtn} onClick={() => setIsOpenPost(true)}>+ Создать товар</button>
            </div>

            {getProducts.isLoading && <p className={styles.loading}>Загрузка товаров...</p>}
            {getProducts.isError && <p className={styles.serverError}>{(getProducts.error as Error).message}</p>}
            {getProducts.data && getProducts.data.length === 0 && <p className={styles.empty}>Товаров пока нет. Создайте первый.</p>}

            {getProducts.data && getProducts.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Название</th>
                                <th>Цена</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getProducts.data.map((product: TProducts) => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.price} ₽</td>
                                    <td>
                                        <span className={`${styles.status} ${product.isActive ? styles.statusActive : styles.statusInactive}`}>
                                            {product.isActive ? "Активен" : "Скрыт"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => {
                                                resetPut({
                                                    id: String(product.id),
                                                    title: product.title,
                                                    description: product.description ?? "",
                                                    content: product.content ?? "",
                                                    price: String(product.price),
                                                    categoryId: product.categoryId,
                                                    imageUrl: product.imageUrl ?? "",
                                                    images: Array.isArray(product.images) ? product.images.join("\n") : "",
                                                    isActive: String(product.isActive) as "true" | "false"
                                                });
                                                setIsOpenPut(true);
                                            }}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Скрыть товар?")) deleteProduct.mutate({ id: String(product.id) })
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
                <h3 className={styles.modalTitle}>Создание товара</h3>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="title">Название</label>
                        <input className={styles.input} type="text" id="title" {...register("title")} />
                        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="description">Краткое описание</label>
                        <textarea className={styles.textarea} id="description" rows={2} {...register("description")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="content">Полное описание</label>
                        <textarea className={styles.textarea} id="content" rows={4} {...register("content")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="price">Цена (₽)</label>
                        <input className={styles.input} type="number" id="price" {...register("price")} />
                        {errors.price && <p className={styles.error}>{errors.price.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="categoryId">Категория</label>
                        <select className={styles.select} id="categoryId" {...register("categoryId")}>
                            <option value="">Выберите категорию</option>
                            {getCategories.data?.map((cat: { id: string, title: string }) => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                        </select>
                        {errors.categoryId && <p className={styles.error}>{errors.categoryId.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="imageUrl">Главная картинка (URL)</label>
                        <input className={styles.input} type="text" id="imageUrl" {...register("imageUrl")} />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="images">Доп. картинки (каждая с новой строки)</label>
                        <textarea className={styles.textarea} {...register("images")} rows={3} id="images"></textarea>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="isActive">Активен</label>
                        <select className={styles.select} id="isActive" {...register("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    {createProduct.isError && <p className={styles.serverError}>{(createProduct.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createProduct.isPending}>
                            {createProduct.isPending ? "Создание..." : "Создать"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPost(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Редактирование товара</h3>
                <form className={styles.form} onSubmit={handleSubmitPut(onSubmitPut)}>
                    <input type="hidden" {...registerPut("id")} />
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="titlePut">Название</label>
                        <input className={styles.input} type="text" id="titlePut" {...registerPut("title")} />
                        {errorsPut.title && <p className={styles.error}>{errorsPut.title.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="descriptionPut">Краткое описание</label>
                        <textarea className={styles.textarea} id="descriptionPut" rows={2} {...registerPut("description")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="contentPut">Полное описание</label>
                        <textarea className={styles.textarea} id="contentPut" rows={4} {...registerPut("content")} />
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="pricePut">Цена (₽)</label>
                        <input className={styles.input} type="number" id="pricePut" {...registerPut("price")} />
                        {errorsPut.price && <p className={styles.error}>{errorsPut.price.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="categoryIdPut">Категория</label>
                        <select className={styles.select} id="categoryIdPut" {...registerPut("categoryId")}>
                            <option value="">Выберите категорию</option>
                            {getCategories.data?.map((cat: { id: string, title: string }) => (
                                <option key={cat.id} value={cat.id}>{cat.title}</option>
                            ))}
                        </select>
                        {errorsPut.categoryId && <p className={styles.error}>{errorsPut.categoryId.message}</p>}
                    </div>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="imageUrlPut">Главная картинка (URL)</label>
                        <input className={styles.input} type="text" id="imageUrlPut" {...registerPut("imageUrl")} />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="imagesPut">Доп. картинки (каждая с новой строки)</label>
                        <textarea className={styles.textarea} id="imagesPut" rows={3} {...registerPut("images")} />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="isActivePut">Активен</label>
                        <select className={styles.select} id="isActivePut" {...registerPut("isActive")}>
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>

                    {putProduct.isError && <p className={styles.serverError}>{(putProduct.error as Error).message}</p>}

                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putProduct.isPending}>
                            {putProduct.isPending ? "Сохранение..." : "Сохранить"}
                        </button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    )
}