"use client"

import { useGetMedia, usePostMedia, useDeleteMedia } from "@/src/lib/ReactQuery/query/admin/media/query"
import { usePostFolder } from "@/src/lib/ReactQuery/query/admin/media/folder/query";
import { useState, useRef } from "react";
import styles from "./MediaPage.module.scss";

type TMedia = {
    name: string;
    isFolder: boolean;
    path: string;
    url: string;
}

export default function MediaPage() {
    const [currentPath, setCurrentPath] = useState<string>("");
    const mediaGet = useGetMedia(currentPath);
    const postMedia = usePostMedia();
    const postFolder = usePostFolder();
    const deleteMedia = useDeleteMedia(); // <-- Добавили хук
    const fileInputRef = useRef<HTMLInputElement>(null);

    const pathParts = currentPath.split("/").filter(Boolean);

    function handleBreadcrumbClick(index: number) {
        if (index === -1) setCurrentPath("");
        else setCurrentPath(pathParts.slice(0, index + 1).join("/"));
    }

    function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;
        postMedia.mutate({ file, folder: currentPath }, {
            onSuccess: () => { if (fileInputRef.current) fileInputRef.current.value = ""; }
        });
    }

    function handleCreateFolder() {
        const name = prompt("Введите название новой папки:");
        if (!name) return;
        postFolder.mutate({ name, currentPath });
    }

    function handleDelete(media: TMedia) {
        const msg = media.isFolder 
            ? `Удалить папку "${media.name}" и ВСЁ её содержимое?` 
            : `Удалить файл "${media.name}"?`;
            
        if (confirm(msg)) {
            deleteMedia.mutate({ path: media.path, isFolder: media.isFolder });
        }
    }

    function copyLink(url: string) {
        navigator.clipboard.writeText(window.location.origin + url);
        alert("Ссылка скопирована!");
    }

    function isImage(filename: string) {
        return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(filename);
    }

    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Медиатека</h1>
            </div>

            <div className={styles.layout}>
                <div className={styles.toolbar}>
                    <div className={styles.breadcrumbs}>
                        <span onClick={() => handleBreadcrumbClick(-1)} className={styles.crumb}>Корень</span>
                        {pathParts.map((part, index) => (
                            <span key={index}>
                                <span className={styles.separator}>/</span>
                                <span onClick={() => handleBreadcrumbClick(index)} className={styles.crumb}>{part}</span>
                            </span>
                        ))}
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.btnOutline} onClick={handleCreateFolder} disabled={postFolder.isPending}>
                            + Папка
                        </button>
                        
                        <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: "none" }} />
                        <button className={styles.btn} onClick={() => fileInputRef.current?.click()} disabled={postMedia.isPending}>
                            {postMedia.isPending ? "Загрузка..." : "Загрузить файл"}
                        </button>
                    </div>
                </div>

                {mediaGet.isLoading ? (
                    <p className={styles.loading}>Загрузка файлов...</p>
                ) : mediaGet.data && mediaGet.data.length > 0 ? (
                    <div className={styles.grid}>
                        {mediaGet.data.map((media: TMedia) => (
                            <div key={media.name} className={styles.card}>
                                {/* Кнопка удаления */}
                                <button 
                                    className={styles.deleteBtn} 
                                    onClick={() => handleDelete(media)}
                                    title="Удалить"
                                >
                                    ✕
                                </button>

                                <div 
                                    className={styles.preview} 
                                    onClick={() => { if (media.isFolder) setCurrentPath(media.path) }}
                                    style={{ cursor: media.isFolder ? "pointer" : "default" }}
                                >
                                    {media.isFolder ? (
                                        <div className={styles.folderIcon}>📁</div>
                                    ) : isImage(media.name) ? (
                                        <img src={media.url} alt={media.name} />
                                    ) : (
                                        <div className={styles.fileIcon}>📄</div>
                                    )}
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.name} title={media.name}>{media.name}</p>
                                    {!media.isFolder && (
                                        <button className={styles.copyBtn} onClick={() => copyLink(media.url)}>
                                            Копировать URL
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.empty}>
                        <p>В этой папке пока пусто</p>
                    </div>
                )}
            </div>
        </main>
    );
}