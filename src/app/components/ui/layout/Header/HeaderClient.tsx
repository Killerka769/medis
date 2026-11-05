"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";
import styles from "./Header.module.scss";

export function HeaderClient({ isAuth, isAdmin }: { isAuth: boolean, isAdmin: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Эффект прилипания и изменения фона при скролле
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Закрываем меню при клике на ссылку
    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image src={logo} alt="Медис" width={40} height={40} className={styles.logoImg} />
                    <span>Медис</span>
                </Link>

                {/* Бургер для мобилок */}
                <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
                    <span className={isOpen ? styles.burgerActive : ""}></span>
                </button>

                {/* Навигация */}
                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
                    <Link className={styles.navLink} href="/services" onClick={closeMenu}>Услуги</Link>
                    <Link className={styles.navLink} href="/doctors" onClick={closeMenu}>Врачи</Link>
                    <Link className={styles.navLink} href="/shop" onClick={closeMenu}>Магазин</Link>
                    <Link className={styles.navLink} href="/blog" onClick={closeMenu}>Блог</Link>
                    <Link className={styles.navLink} href="/oms" onClick={closeMenu}>ОМС</Link>
                    <Link className={styles.navLink} href="/contacts" onClick={closeMenu}>Контакты</Link>

                    <div className={styles.authButtons}>
                        {isAdmin && (
                            <Link className={styles.btnOutline} href="/admin" onClick={closeMenu}>
                                Дашборд
                            </Link>
                        )}
                        
                        {isAuth ? (
                            <Link className={styles.btn} href="/profile" onClick={closeMenu}>
                                Профиль
                            </Link>
                        ) : (
                            <Link className={styles.btn} href="/login" onClick={closeMenu}>
                                Войти
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}