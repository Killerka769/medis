import styles from "./Skeleton.module.scss";

type CardVariant = "service" | "doctor" | "product" | "article";

export function Skeleton({ className = "" }: { className?: string }) {
    return <div className={`${styles.bone} ${className}`} />;
}

export function SkeletonCard({ variant = "product" }: { variant?: CardVariant }) {
    if (variant === "service") {
        return (
            <div className={`${styles.card} ${styles.service}`}>
                <Skeleton className={styles.icon} />
                <Skeleton className={styles.title} />
                <Skeleton className={styles.line} />
                <Skeleton className={styles.lineShort} />
                <div className={styles.footer}>
                    <Skeleton className={styles.price} />
                    <Skeleton className={styles.more} />
                </div>
            </div>
        );
    }

    if (variant === "doctor") {
        return (
            <div className={`${styles.card} ${styles.doctor}`}>
                <Skeleton className={styles.photo} />
                <div className={styles.body}>
                    <Skeleton className={styles.title} />
                    <Skeleton className={styles.lineShort} />
                    <Skeleton className={styles.chip} />
                    <Skeleton className={styles.btn} />
                </div>
            </div>
        );
    }

    return (
        <div className={`${styles.card} ${styles[variant]}`}>
            <Skeleton className={styles.cover} />
            <div className={styles.body}>
                <Skeleton className={styles.chip} />
                <Skeleton className={styles.title} />
                {variant === "article" && <Skeleton className={styles.line} />}
                <div className={styles.footer}>
                    <Skeleton className={styles.price} />
                    <Skeleton className={styles.more} />
                </div>
            </div>
        </div>
    );
}

export function SkeletonGrid({ variant = "product", count = 6 }: { variant?: CardVariant; count?: number }) {
    return (
        <div className={styles.grid}>
            {Array.from({ length: count }, (_, i) => (
                <SkeletonCard key={i} variant={variant} />
            ))}
        </div>
    );
}

export function CatalogLoading({ variant, count = 6 }: { variant: CardVariant; count?: number }) {
    return (
        <main className={styles.page}>
            <div className={styles.pageHeader}>
                <Skeleton className={styles.headBadge} />
                <Skeleton className={styles.headTitle} />
                <Skeleton className={styles.headSub} />
            </div>
            {variant !== "doctor" && (
                <div className={styles.filters}>
                    <Skeleton className={styles.filter} />
                    <Skeleton className={styles.filter} />
                    <Skeleton className={styles.filter} />
                    <Skeleton className={styles.filterWide} />
                </div>
            )}
            <SkeletonGrid variant={variant} count={count} />
        </main>
    );
}

export function HomeLoading() {
    return (
        <main className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.heroText}>
                    <Skeleton className={styles.headBadge} />
                    <Skeleton className={styles.heroTitle} />
                    <Skeleton className={styles.heroTitle} />
                    <Skeleton className={styles.headSub} />
                    <div className={styles.heroBtns}>
                        <Skeleton className={styles.heroBtn} />
                        <Skeleton className={styles.heroBtn} />
                    </div>
                </div>
                <Skeleton className={styles.heroImage} />
            </div>
            <section className={styles.section}>
                <Skeleton className={styles.sectionTitle} />
                <SkeletonGrid variant="service" count={3} />
            </section>
            <section className={styles.section}>
                <Skeleton className={styles.sectionTitle} />
                <SkeletonGrid variant="doctor" count={3} />
            </section>
            <section className={styles.section}>
                <Skeleton className={styles.sectionTitle} />
                <SkeletonGrid variant="article" count={3} />
            </section>
        </main>
    );
}
