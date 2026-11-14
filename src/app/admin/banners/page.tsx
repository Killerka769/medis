"use client"

import { useState } from "react";
import { z } from "zod";
import Modal from "../../components/ui/Modal/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateBanner, useDeleteBanner, useGetBanners, usePutBanner } from "@/src/lib/ReactQuery/query/admin/banners/query";
import { TBanner } from "@/src/types";
import styles from "../article-categories/ArticleCategoriesPage.module.scss";
import { useRouter } from "next/navigation";
import { MediaUrlField } from "../components/MediaUrlField";

const schema = z.object({
    imageUrl: z.string().min(1, "Укажите изображение"),
    title: z.string(),
    subtitle: z.string(),
    buttonText: z.string(),
    buttonLink: z.string(),
    sortOrder: z.string(),
    isActive: z.enum(["true", "false"]),
    pages: z.string().min(1, "Укажите страницы"),
    intervalMs: z.string(),
});
type TSchema = z.infer<typeof schema>;
const putSchema = schema.extend({ id: z.string() });
type TPut = z.infer<typeof putSchema>;

const empty: TSchema = {
    imageUrl: "", title: "", subtitle: "", buttonText: "", buttonLink: "",
    sortOrder: "0", isActive: "true", pages: "/", intervalMs: "5000",
};

export default function BannersPage() {
    const router = useRouter();
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [isOpenPut, setIsOpenPut] = useState(false);
    const createBanner = useCreateBanner();
    const putBanner = usePutBanner();
    const deleteBanner = useDeleteBanner();
    const banners = useGetBanners();

    const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<TSchema>({
        resolver: zodResolver(schema),
        defaultValues: empty,
    });
    const {
        register: registerPut, handleSubmit: handleSubmitPut, formState: { errors: errorsPut },
        reset: resetPut, setValue: setValuePut, watch: watchPut,
    } = useForm<TPut>({
        resolver: zodResolver(putSchema),
        defaultValues: { id: "", ...empty },
    });

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <div className={styles.headerLeft}>
                    <button className={styles.backBtn} onClick={() => router.back()}>← Назад</button>
                    <h1 className={styles.title}>Баннеры</h1>
                </div>
                <button className={styles.createBtn} onClick={() => { reset(empty); setIsOpenCreate(true); }}>+ Создать баннер</button>
            </div>

            {banners.isLoading && <p className={styles.loading}>Загрузка...</p>}
            {banners.data && banners.data.length === 0 && <p className={styles.empty}>Баннеров пока нет.</p>}

            {banners.data && banners.data.length > 0 && (
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Превью</th>
                                <th>Заголовок</th>
                                <th>Страницы</th>
                                <th>Интервал</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {banners.data.map((banner: TBanner) => (
                                <tr key={banner.id}>
                                    <td>{banner.imageUrl ? <img src={banner.imageUrl} alt="" style={{ width: 72, height: 40, objectFit: "cover", borderRadius: 8 }} /> : "—"}</td>
                                    <td>{banner.title || "Без названия"}</td>
                                    <td>{banner.pages}</td>
                                    <td>{banner.intervalMs} мс</td>
                                    <td>
                                        <span className={`${styles.status} ${banner.isActive ? styles.statusActive : styles.statusInactive}`}>
                                            {banner.isActive ? "Активен" : "Скрыт"}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actions}>
                                            <button className={styles.iconBtn} onClick={() => {
                                                resetPut({
                                                    id: banner.id,
                                                    imageUrl: banner.imageUrl,
                                                    title: banner.title ?? "",
                                                    subtitle: banner.subtitle ?? "",
                                                    buttonText: banner.buttonText ?? "",
                                                    buttonLink: banner.buttonLink ?? "",
                                                    sortOrder: String(banner.sortOrder),
                                                    isActive: String(banner.isActive) as "true" | "false",
                                                    pages: banner.pages || "/",
                                                    intervalMs: String(banner.intervalMs || 5000),
                                                });
                                                setIsOpenPut(true);
                                            }}>✏️</button>
                                            <button className={styles.iconBtn} onClick={() => {
                                                if (confirm("Удалить баннер?")) deleteBanner.mutate({ id: banner.id });
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
                <h3 className={styles.modalTitle}>Новый баннер</h3>
                <form className={styles.form} onSubmit={handleSubmit((data) => createBanner.mutate(data, { onSuccess: () => { reset(empty); setIsOpenCreate(false); } }))}>
                    <MediaUrlField value={watch("imageUrl")} onChange={(url) => setValue("imageUrl", url, { shouldValidate: true })} />
                    {errors.imageUrl && <p className={styles.error}>{errors.imageUrl.message}</p>}
                    <div className={styles.field}><label className={styles.label}>Заголовок</label><input className={styles.input} {...register("title")} /></div>
                    <div className={styles.field}><label className={styles.label}>Подзаголовок</label><input className={styles.input} {...register("subtitle")} /></div>
                    <div className={styles.field}><label className={styles.label}>Текст кнопки</label><input className={styles.input} {...register("buttonText")} /></div>
                    <div className={styles.field}><label className={styles.label}>Ссылка кнопки</label><input className={styles.input} placeholder="/appointments" {...register("buttonLink")} /></div>
                    <div className={styles.field}><label className={styles.label}>Страницы (через запятую)</label><input className={styles.input} placeholder="/, /services, /doctors" {...register("pages")} />{errors.pages && <p className={styles.error}>{errors.pages.message}</p>}</div>
                    <div className={styles.field}><label className={styles.label}>Сортировка</label><input className={styles.input} type="number" {...register("sortOrder")} /></div>
                    <div className={styles.field}><label className={styles.label}>Интервал слайдера (мс)</label><input className={styles.input} type="number" {...register("intervalMs")} /></div>
                    <div className={styles.field}><label className={styles.label}>Активен</label>
                        <select className={styles.select} {...register("isActive")}><option value="true">Да</option><option value="false">Нет</option></select>
                    </div>
                    {createBanner.isError && <p className={styles.serverError}>{(createBanner.error as Error).message}</p>}
                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={createBanner.isPending}>{createBanner.isPending ? "Создание..." : "Создать"}</button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenCreate(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>

            <Modal isOpen={isOpenPut} onClose={() => setIsOpenPut(false)}>
                <h3 className={styles.modalTitle}>Изменить баннер</h3>
                <form className={styles.form} onSubmit={handleSubmitPut((data) => putBanner.mutate(data, { onSuccess: () => { resetPut(); setIsOpenPut(false); } }))}>
                    <input type="hidden" {...registerPut("id")} />
                    <MediaUrlField value={watchPut("imageUrl")} onChange={(url) => setValuePut("imageUrl", url, { shouldValidate: true })} />
                    {errorsPut.imageUrl && <p className={styles.error}>{errorsPut.imageUrl.message}</p>}
                    <div className={styles.field}><label className={styles.label}>Заголовок</label><input className={styles.input} {...registerPut("title")} /></div>
                    <div className={styles.field}><label className={styles.label}>Подзаголовок</label><input className={styles.input} {...registerPut("subtitle")} /></div>
                    <div className={styles.field}><label className={styles.label}>Текст кнопки</label><input className={styles.input} {...registerPut("buttonText")} /></div>
                    <div className={styles.field}><label className={styles.label}>Ссылка кнопки</label><input className={styles.input} {...registerPut("buttonLink")} /></div>
                    <div className={styles.field}><label className={styles.label}>Страницы (через запятую)</label><input className={styles.input} {...registerPut("pages")} /></div>
                    <div className={styles.field}><label className={styles.label}>Сортировка</label><input className={styles.input} type="number" {...registerPut("sortOrder")} /></div>
                    <div className={styles.field}><label className={styles.label}>Интервал слайдера (мс)</label><input className={styles.input} type="number" {...registerPut("intervalMs")} /></div>
                    <div className={styles.field}><label className={styles.label}>Активен</label>
                        <select className={styles.select} {...registerPut("isActive")}><option value="true">Да</option><option value="false">Нет</option></select>
                    </div>
                    {putBanner.isError && <p className={styles.serverError}>{(putBanner.error as Error).message}</p>}
                    <div className={styles.modalActions}>
                        <button className={styles.submitBtn} type="submit" disabled={putBanner.isPending}>{putBanner.isPending ? "Сохранение..." : "Сохранить"}</button>
                        <button className={styles.cancelBtn} type="button" onClick={() => setIsOpenPut(false)}>Отмена</button>
                    </div>
                </form>
            </Modal>
        </main>
    );
}
