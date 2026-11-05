"use client"

import { use, useState } from "react";
import { useGetPublicProduct, useCreateProductRequest } from "@/src/lib/ReactQuery/query/public/products/query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import styles from "./ProductDetail.module.scss";

const requestSchema = z.object({
    name: z.string().min(2, "Введите имя"),
    phone: z.string().min(1, "Введите телефон"),
    comment: z.string()
});
type TRequestSchema = z.infer<typeof requestSchema>;

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { data, isLoading, isError } = useGetPublicProduct(slug);
    const createRequest = useCreateProductRequest();
    const [isSuccess, setIsSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<TRequestSchema>({
        resolver: zodResolver(requestSchema),
        defaultValues: { name: "", phone: "", comment: "" }
    });

    if (isLoading) return <div className={styles.loading}>Загрузка...</div>;
    if (isError || !data) return <div className={styles.error}>Товар не найден</div>;

    const { product } = data;

    async function onSubmit(formData: TRequestSchema) {
        createRequest.mutate({ 
            productId: product.id, 
            name: formData.name, 
            phone: formData.phone, 
            comment: formData.comment 
        }, {
            onSuccess: () => setIsSuccess(true)
        });
    }

    // Парсим картинки (если они есть)
    const images = Array.isArray(product.images) ? product.images : [];

    return (
        <main className={styles.page}>
            <div className={styles.breadcrumbs}>
                <Link href="/">Главная</Link> / <Link href="/shop">Магазин</Link> / <span>{product.title}</span>
            </div>

            <div className={styles.layout}>
                {/* Информация о товаре */}
                <div className={styles.productInfo}>
                    <div className={styles.mainImage}>
                        {product.imageUrl ? (
                            <img src={product.imageUrl} alt={product.title} />
                        ) : (
                            <div className={styles.placeholder}>Нет фото</div>
                        )}
                    </div>
                    
                    {images.length > 0 && (
                        <div className={styles.thumbnails}>
                            {images.map((img: string, i: number) => (
                                <img key={i} src={img} alt={`${product.title} ${i}`} className={styles.thumb} />
                            ))}
                        </div>
                    )}

                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.category}>{product.category?.title}</p>
                    <p className={styles.price}>{product.price} ₽</p>

                    <div className={styles.description}>
                        <h3>Описание</h3>
                        <p>{product.content || product.description || "Описание товара скоро появится."}</p>
                    </div>
                </div>

                {/* Форма заявки */}
                <aside className={styles.sidebar}>
                    <div className={styles.formCard}>
                        <h3 className={styles.formTitle}>Оставить заявку</h3>
                        <p className={styles.formSubtitle}>Мы свяжемся с вами для уточнения деталей</p>

                        {isSuccess ? (
                            <div className={styles.successMsg}>
                                ✅ Заявка отправлена! Администратор свяжется с вами.
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.field}>
                                    <input className={styles.input} type="text" placeholder="Ваше имя" {...register("name")} />
                                    {errors.name && <span className={styles.error}>{errors.name.message}</span>}
                                </div>
                                <div className={styles.field}>
                                    <input className={styles.input} type="tel" placeholder="Телефон" {...register("phone")} />
                                    {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
                                </div>
                                <div className={styles.field}>
                                    <textarea className={styles.textarea} rows={3} placeholder="Комментарий (необязательно)" {...register("comment")} />
                                </div>

                                {createRequest.isError && (
                                    <div className={styles.serverError}>{(createRequest.error as Error).message}</div>
                                )}

                                <button type="submit" className={styles.btnSubmit} disabled={createRequest.isPending}>
                                    {createRequest.isPending ? "Отправка..." : "Отправить заявку"}
                                </button>
                            </form>
                        )}
                    </div>
                </aside>
            </div>
        </main>
    );
}