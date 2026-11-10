"use client"

import styles from "./ArticleDetail.module.scss";

export function ShareButtons({ title }: { title: string }) {
    function share(url: string) {
        window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
    }

    function onVk() {
        const page = window.location.href;
        share(`https://vk.com/share.php?url=${encodeURIComponent(page)}&title=${encodeURIComponent(title)}`);
    }

    function onTelegram() {
        const page = window.location.href;
        share(`https://t.me/share/url?url=${encodeURIComponent(page)}&text=${encodeURIComponent(title)}`);
    }

    return (
        <div className={styles.shareBtns}>
            <button type="button" className={styles.shareBtn} onClick={onVk}>ВК</button>
            <button type="button" className={styles.shareBtn} onClick={onTelegram}>TG</button>
        </div>
    );
}
