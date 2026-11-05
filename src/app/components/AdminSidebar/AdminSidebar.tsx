"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./AdminSidebar.module.scss";

const menuItems = [
    { path: "/admin", label: "Дашборд", icon: "📊" },
    { path: "/admin/appointments", label: "Записи", icon: "📅" },
    { path: "/admin/product-requests", label: "Заявки на товары", icon: "📦" },
    { path: "/admin/doctors", label: "Врачи", icon: "👨‍⚕️" },
    { path: "/admin/services", label: "Услуги", icon: "🩺" },
    { path: "/admin/service-categories", label: "Категории услуг", icon: "📑" },
    { path: "/admin/products", label: "Товары", icon: "💊" },
    { path: "/admin/product-categories", label: "Категории товаров", icon: "🗂️" },
    { path: "/admin/articles", label: "Статьи", icon: "📝" },
    { path: "/admin/article-categories", label: "Категории статей", icon: "📁" },
    { path: "/admin/users", label: "Пользователи", icon: "👥" },
    { path: "/admin/media", label: "Медиатека", icon: "📁" },
];

export function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className={styles.sidebar}>
            <div className={styles.logoWrap}>
                <Link href="/" className={styles.logo}>
                    Медис <span>Admin</span>
                </Link>
            </div>

            <nav className={styles.nav}>
                {menuItems.map((item) => {
                    const isActive = pathname === item.path || (pathname.startsWith(item.path) && item.path !== "/admin");
                    return (
                        <Link 
                            key={item.path} 
                            href={item.path} 
                            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
                        >
                            <span className={styles.icon}>{item.icon}</span>
                            {item.label}
                        </Link>
                    )
                })}
            </nav>

            <div className={styles.bottom}>
                <Link href="/" className={styles.siteLink} target="_blank">
                    Открыть сайт ↗
                </Link>
            </div>
        </aside>
    );
}