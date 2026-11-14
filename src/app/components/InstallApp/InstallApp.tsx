"use client"

import { useEffect, useState } from "react";
import styles from "./InstallApp.module.scss";

type PromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export function InstallApp() {
    const [promptEvent, setPromptEvent] = useState<PromptEvent | null>(null);
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        const onPrompt = (event: Event) => {
            event.preventDefault();
            setPromptEvent(event as PromptEvent);
        };
        window.addEventListener("beforeinstallprompt", onPrompt);
        return () => window.removeEventListener("beforeinstallprompt", onPrompt);
    }, []);

    async function handleClick() {
        if (promptEvent) {
            await promptEvent.prompt();
            await promptEvent.userChoice;
            setPromptEvent(null);
            return;
        }
        setShowHint((open) => !open);
    }

    return (
        <div className={styles.wrap}>
            <button type="button" className={styles.btn} onClick={handleClick}>
                Установить приложение
            </button>
            {showHint && !promptEvent && (
                <p className={styles.hint}>
                    В Chrome или Safari откройте меню браузера и выберите «Добавить на главный экран» / «Установить приложение».
                </p>
            )}
        </div>
    );
}
