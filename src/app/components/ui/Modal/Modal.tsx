"use client"

import { useEffect, useRef } from "react"
import styles from "./Modal.module.scss"

export default function Modal({ children, isOpen, onClose }: { children: React.ReactNode, isOpen: boolean, onClose: () => void }) {
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        const dialog = modalRef.current
        if (!dialog) return

        if (isOpen) {
            if (!dialog.open) dialog.showModal()
        } else {
            if (dialog.open) dialog.close()
        }

        return () => {
            if (dialog.open) dialog.close()
        }
    }, [isOpen])

    return (
        <dialog ref={modalRef} className={styles.dialog} onClose={onClose}>
            <div className={styles.content}>
                {children}
            </div>
        </dialog>
    )
}