"use client"

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useGetPublicNotifications } from "@/src/lib/ReactQuery/query/public/notifications/query";
import type { TNotification } from "@/src/types";
import styles from "./NotificationsHost.module.scss";

const STORAGE_KEY = "medis-dismissed-notifications";

function readDismissed(): string[] {
    try {
        return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "[]");
    } catch {
        return [];
    }
}

export function NotificationsHost() {
    const pathname = usePathname();
    const { data } = useGetPublicNotifications();
    const [dismissed, setDismissed] = useState<string[]>([]);
    const [visibleToasts, setVisibleToasts] = useState<string[]>([]);

    useEffect(() => {
        setDismissed(readDismissed());
    }, []);

    const items: TNotification[] = (data?.notifications || []).filter(
        (item: TNotification) => !dismissed.includes(item.id)
    );
    const modal = items.find((item) => item.isFullScreen);
    const toasts = items.filter((item) => !item.isFullScreen);

    useEffect(() => {
        setVisibleToasts(toasts.map((item) => item.id));
        const timers = toasts.map((item) =>
            window.setTimeout(() => {
                dismiss(item.id);
            }, item.durationMs || 10000)
        );
        return () => timers.forEach((timer) => window.clearTimeout(timer));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toasts.map((item) => item.id).join(",")]);

    if (pathname.startsWith("/admin")) return null;

    function dismiss(id: string) {
        const next = Array.from(new Set([...readDismissed(), id]));
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setDismissed(next);
        setVisibleToasts((current) => current.filter((item) => item !== id));
    }

    return (
        <>
            {modal && (
                <div className={styles.backdrop} role="dialog" aria-modal="true" aria-labelledby="notice-title">
                    <div className={styles.modal}>
                        <h2 id="notice-title" className={styles.modalTitle}>{modal.title}</h2>
                        <p className={styles.modalText}>{modal.text}</p>
                        <button type="button" className={styles.closeBtn} onClick={() => dismiss(modal.id)}>
                            Закрыть
                        </button>
                    </div>
                </div>
            )}
            <div className={styles.toasts} aria-live="polite">
                {toasts.filter((item) => visibleToasts.includes(item.id)).map((item) => (
                    <aside key={item.id} className={styles.toast}>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                        <button type="button" className={styles.toastClose} onClick={() => dismiss(item.id)} aria-label="Закрыть">
                            ×
                        </button>
                    </aside>
                ))}
            </div>
        </>
    );
}
