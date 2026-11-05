"use client"

import { useRouter } from "next/navigation"
import styles from "./LogoutButton.module.scss"

export function LogoutButton() {
    const router = useRouter()

    async function onLeave() {
        await fetch("/api/auth/logout", { method: "DELETE" })
        router.refresh()
        router.push("/login")
    }

    return (
        <button className={styles.button} onClick={onLeave}>
            Выйти
        </button>
    )
}