"use client"

import { useState } from "react";
import styles from "./Faq.module.scss";

const items = [
    {
        q: "Как подготовиться к анализам и приёму?",
        a: "На большинство анализов крови приходите натощак (не есть 8–12 часов, воду можно). Возьмите паспорт. Если нужна особая подготовка — администратор подскажет при подтверждении записи.",
    },
    {
        q: "Можно ли прийти с ребёнком?",
        a: "Да. Детей можно привести на приём, а также подождать в зоне ожидания. Если нужен детский специалист — уточните по телефону +7 928 555-88-18.",
    },
    {
        q: "Есть ли парковка у клиники?",
        a: "Да, рядом с клиникой на ул. Ахульго, 77 есть места для автомобилей. Если возникнут сложности с проездом, администратор подскажет ориентир.",
    },
    {
        q: "Как отменить или перенести запись?",
        a: "Отменить запись можно в личном кабинете или по телефону клиники. Лучше предупредить заранее, чтобы мы предложили другое удобное время.",
    },
    {
        q: "Работаете ли вы в выходные?",
        a: "Клиника открыта ежедневно, включая выходные, с 09:00 до 23:00. Запись — по предварительной заявке на сайте или по телефону.",
    },
];

export function Faq() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className={styles.list}>
            {items.map((item, i) => {
                const isOpen = open === i;
                return (
                    <div key={item.q} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
                        <button
                            type="button"
                            className={styles.question}
                            onClick={() => setOpen(isOpen ? null : i)}
                            aria-expanded={isOpen}
                        >
                            <span>{item.q}</span>
                            <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                        </button>
                        {isOpen && <p className={styles.answer}>{item.a}</p>}
                    </div>
                );
            })}
        </div>
    );
}
