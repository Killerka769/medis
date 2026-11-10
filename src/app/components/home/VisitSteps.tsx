import styles from "./VisitSteps.module.scss";

const steps = [
    {
        num: "1",
        title: "Онлайн-запись",
        text: "Выберите врача и услугу на сайте — заявка уходит администратору сразу.",
    },
    {
        num: "2",
        title: "Звонок администратора",
        text: "Мы перезвоним, подтвердим время и ответим на вопросы по подготовке.",
    },
    {
        num: "3",
        title: "Приём",
        text: "Приходите в клинику к назначенному часу. Паспорт и полис возьмите с собой.",
    },
];

export function VisitSteps() {
    return (
        <div className={styles.grid}>
            {steps.map((step) => (
                <div key={step.num} className={styles.card}>
                    <span className={styles.num}>{step.num}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                </div>
            ))}
        </div>
    );
}
