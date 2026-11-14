"use client"

import { useState } from "react";
import { useGetMedia } from "@/src/lib/ReactQuery/query/admin/media/query";
import styles from "./MediaUrlField.module.scss";

export function MediaUrlField({
    value,
    onChange,
    label = "Изображение (URL или медиатека)",
}: {
    value: string;
    onChange: (url: string) => void;
    label?: string;
}) {
    const [open, setOpen] = useState(false);
    const [folder, setFolder] = useState("");
    const media = useGetMedia(folder);

    return (
        <div className={styles.wrap}>
            <label className={styles.label}>{label}</label>
            <div className={styles.row}>
                <input className={styles.input} value={value} onChange={(e) => onChange(e.target.value)} placeholder="/uploads/... или https://" />
                <button type="button" className={styles.pickBtn} onClick={() => setOpen(true)}>Медиатека</button>
            </div>
            {value && <img src={value} alt="" className={styles.preview} />}
            {open && (
                <div className={styles.picker}>
                    <div className={styles.pickerHead}>
                        <button type="button" onClick={() => setFolder("")}>Корень</button>
                        <button type="button" onClick={() => setOpen(false)}>Закрыть</button>
                    </div>
                    <div className={styles.grid}>
                        {media.data?.map((item: { name: string; isFolder: boolean; url: string; path: string }) => (
                            <button
                                type="button"
                                key={item.path}
                                className={styles.cell}
                                onClick={() => {
                                    if (item.isFolder) setFolder(item.path.replace(/^\//, ""));
                                    else {
                                        onChange(item.url);
                                        setOpen(false);
                                    }
                                }}
                            >
                                {item.isFolder ? `📁 ${item.name}` : item.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
