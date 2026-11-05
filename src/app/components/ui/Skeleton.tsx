import styles from "./Skeleton.module.scss";

export function Skeleton({ className = "" }: { className?: string }) {
    return <div className={`${styles.skeleton} ${className}`}></div>;
}

export function SkeletonCard() {
    return (
        <div className={styles.card}>
            <Skeleton className={styles.image} />
            <div className={styles.content}>
                <Skeleton className={styles.title} />
                <Skeleton className={styles.text} />
                <Skeleton className={styles.textShort} />
            </div>
        </div>
    );
}

export function SkeletonGrid() {
    return (
        <div className={styles.grid}>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    );
}