import styles from "./TrustBlock.module.scss";

const items = [
    {
        title: "Лицензия",
        text: "Медицинская деятельность по лицензии № ЛО-05-01-002258 от 21.11.2019 г., выдана Министерством здравоохранения Республики Дагестан.",
        icon: "cross",
    },
    {
        title: "Опытные врачи",
        text: "Специалисты с многолетним стажем, учёной степенью и регулярным повышением квалификации.",
        icon: "user",
    },
    {
        title: "Безопасность данных",
        text: "Персональные данные и сведения о здоровье обрабатываются конфиденциально, по 152-ФЗ.",
        icon: "lock",
    },
];

export function TrustBlock() {
    return (
        <div className={styles.grid}>
            {items.map((item) => (
                <div key={item.title} className={styles.card}>
                    <span className={styles.icon} aria-hidden>
                        {item.icon === "cross" && (
                            <svg viewBox="0 0 24 24" fill="none"><path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7V3z" fill="currentColor"/></svg>
                        )}
                        {item.icon === "user" && (
                            <svg viewBox="0 0 24 24" fill="none"><path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5z" fill="currentColor"/></svg>
                        )}
                        {item.icon === "lock" && (
                            <svg viewBox="0 0 24 24" fill="none"><path d="M7 10V8a5 5 0 1110 0v2h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h1zm2 0h6V8a3 3 0 10-6 0v2z" fill="currentColor"/></svg>
                        )}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    );
}
