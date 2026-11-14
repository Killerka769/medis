import { DoctorAvatar } from "./DoctorAvatar";
import styles from "./MediaPlaceholder.module.scss";

type Kind = "doctor" | "product" | "article" | "service" | "clinic";

function ProductMark() {
    return (
        <svg className={styles.icon} viewBox="0 0 80 80" fill="none" aria-hidden>
            <rect x="16" y="22" width="48" height="42" rx="8" stroke="currentColor" strokeWidth="3" />
            <path d="M16 34h48" stroke="currentColor" strokeWidth="3" />
            <rect x="30" y="14" width="20" height="12" rx="4" stroke="currentColor" strokeWidth="3" />
            <path d="M40 42v12M34 48h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

function ArticleMark() {
    return (
        <svg className={styles.icon} viewBox="0 0 80 80" fill="none" aria-hidden>
            <rect x="20" y="14" width="40" height="52" rx="6" stroke="currentColor" strokeWidth="3" />
            <path d="M30 30h20M30 40h20M30 50h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <circle cx="54" cy="56" r="10" fill="#F0F7E6" stroke="currentColor" strokeWidth="3" />
            <path d="M54 51v10M49 56h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    );
}

function ServiceMark() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M10 4h4v16h-4V4zm-6 6h16v4H4v-4z" fill="currentColor" />
        </svg>
    );
}

function ClinicMark() {
    return (
        <svg className={styles.icon} viewBox="0 0 80 80" fill="none" aria-hidden>
            <rect x="18" y="18" width="44" height="44" rx="12" stroke="currentColor" strokeWidth="3" />
            <path d="M37 28h6v24h-6V28zm-9 9h24v6H28v-6z" fill="currentColor" />
        </svg>
    );
}

export function MediaPlaceholder({
    kind,
    title = "",
    className = "",
}: {
    kind: Kind;
    title?: string;
    className?: string;
}) {
    if (kind === "doctor") {
        return <DoctorAvatar name={title || "Врач"} className={className} />;
    }

    if (kind === "service") {
        return (
            <div className={`${styles.tile} ${className}`}>
                <ServiceMark />
            </div>
        );
    }

    const label = kind === "product" ? "Товар" : kind === "clinic" ? "Услуга" : "Статья";

    return (
        <div className={`${styles.wrap} ${styles[kind] || ""} ${className}`}>
            <span className={styles.glow} />
            {kind === "product" && <ProductMark />}
            {kind === "article" && <ArticleMark />}
            {kind === "clinic" && <ClinicMark />}
            <span className={styles.label}>{label}</span>
        </div>
    );
}

export function DoctorMiniAvatar({ name, className = "" }: { name: string; className?: string }) {
    return (
        <div className={`${styles.mini} ${className}`}>
            <DoctorAvatar name={name} />
        </div>
    );
}
