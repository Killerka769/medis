"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.webp";
import { TrackedContactLink } from "../../../TrackedContactLink";
import styles from "./Header.module.scss";

export function HeaderClient({ isAuth, isAdmin }: { isAuth: boolean, isAdmin: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen]);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            {isOpen && <div className={styles.overlay} onClick={closeMenu} />}

            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <Image src={logo} alt="Медис" width={40} height={40} className={styles.logoImg} />
                    <span>Медис</span>
                </Link>

                <button
                    className={styles.burger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Меню"
                    aria-expanded={isOpen}
                >
                    <span className={isOpen ? styles.burgerActive : ""}></span>
                </button>

                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
                    <Link className={styles.navLink} href="/services" onClick={closeMenu}>Услуги</Link>
                    <Link className={styles.navLink} href="/doctors" onClick={closeMenu}>Врачи</Link>
                    <Link className={styles.navLink} href="/shop" onClick={closeMenu}>Магазин</Link>
                    <Link className={styles.navLink} href="/blog" onClick={closeMenu}>Блог</Link>
                    {/* Только платный приём — страница ОМС скрыта
                    <Link className={styles.navLink} href="/oms" onClick={closeMenu}>ОМС</Link>
                    */}
                    <Link className={styles.navLink} href="/contacts" onClick={closeMenu}>Контакты</Link>

                    <div className={styles.authButtons}>
                        <TrackedContactLink className={styles.btnOutline} href="tel:+79285558818" onClick={closeMenu}>
                            +7 928 555-88-18
                        </TrackedContactLink>
                        <Link className={styles.btn} href="/appointments" onClick={closeMenu}>
                            Записаться на прием
                        </Link>

                        {isAdmin && (
                            <Link className={styles.btnOutline} href="/admin" onClick={closeMenu}>
                                Дашборд
                            </Link>
                        )}

                        {isAuth ? (
                            <Link className={styles.btnOutline} href="/profile" onClick={closeMenu}>
                                Профиль
                            </Link>
                        ) : (
                            <Link className={styles.btnOutline} href="/login" onClick={closeMenu}>
                                Войти
                            </Link>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
