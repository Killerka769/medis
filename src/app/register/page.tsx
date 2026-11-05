"use client"
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "@/src/lib/ReactQuery/query/auth/register/query";
import { useRouter } from "next/navigation";
import styles from "./RegisterPage.module.scss";
import { isValidPhone } from "@/src/lib/utils/phone";
import Link from "next/link";
import { usePhoneMask } from "@/src/lib/hooks/usePhoneMask";

const registerSchema = z.object({
    email: z.string().min(6, "Введите почту").email("Некорректная почта"),
    phone: z.string().superRefine((val, ctx) => {
        const result = isValidPhone(val)
        if (!result.valid) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: result.error! })
        }
      }),
    username: z.string().min(3, "Имя от 3 символов"),
    password: z.string().min(6, "Пароль от 6 символов"),
    rePassword: z.string(),
    agree: z.boolean().refine(val => val === true, "Необходимо согласие") // <-- Валидация
}).superRefine((data, ctx) => {
    if (data.password !== data.rePassword) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Пароли не совпадают!", path: ['rePassword'] });
    }
})

type TRegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const router = useRouter();
    const registerMutation = useRegister();
    const phoneMask = usePhoneMask()

    const { register, handleSubmit, formState: { errors }, control } = useForm<TRegisterSchema>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            phone: "",
            username: "",
            password: "",
            rePassword: "",
            agree: false
        }
    })

    async function onSubmit(data: TRegisterSchema) {
        const { rePassword, agree, ...rest } = data; // Убираем agree перед отправкой
        const payload = {
            ...rest,
            phone: phoneMask.getRawValue(),
        }
        registerMutation.mutate(payload, {
            onSuccess: () => router.push("/login")
        })
    }

    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <h1 className={styles.title}>Регистрация</h1>
                <p className={styles.subtitle}>
                    Создайте аккаунт, чтобы записаться на приём и получать напоминания
                </p>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Почта</label>
                        <input
                            className={styles.input}
                            type="email"
                            id="email"
                            placeholder="example@mail.ru"
                            {...register("email")}
                        />
                        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="phone">Номер телефона</label>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => (
                            <input
                                className={styles.input}
                                type="tel"
                                id="phone"
                                placeholder="+7 (928) 555-88-18"
                                value={phoneMask.value}
                                onChange={(e) => {
                                phoneMask.handleChange(e)
                                field.onChange(e.target.value)
                                }}
                                onBlur={field.onBlur}
                            />
                            )}
                        />
                        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="username">Имя</label>
                        <input
                            className={styles.input}
                            type="text"
                            id="username"
                            placeholder="Как к вам обращаться"
                            {...register("username")}
                        />
                        {errors.username && <p className={styles.error}>{errors.username.message}</p>}
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="password">Пароль</label>
                        <input
                            className={styles.input}
                            type="password"
                            id="password"
                            placeholder="Минимум 6 символов"
                            {...register("password")}
                        />
                        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="rePassword">Повторите пароль</label>
                        <input
                            className={styles.input}
                            type="password"
                            id="rePassword"
                            placeholder="Ещё раз"
                            {...register("rePassword")}
                        />
                        {errors.rePassword && <p className={styles.error}>{errors.rePassword.message}</p>}
                    </div>

                    {/* ЧЕКБОКС СОГЛАСИЯ */}
                    <div className={styles.agreementCheckbox}>
                        <input type="checkbox" id="agree" {...register("agree")} />
                        <label htmlFor="agree">
                            Я согласен на обработку персональных данных и принимаю условия{" "}
                            <Link href="/privacy" target="_blank">Политики конфиденциальности</Link> и{" "}
                            <Link href="/consent" target="_blank">Согласия на обработку ПД</Link>.
                        </label>
                    </div>
                    {errors.agree && <p className={styles.error} style={{ marginTop: "-10px" }}>{errors.agree.message}</p>}

                    {registerMutation.isError && (
                        <p className={styles.serverError}>
                            {(registerMutation.error as Error).message}
                        </p>
                    )}

                    <button
                        className={styles.button}
                        type="submit"
                        disabled={registerMutation.isPending}
                    >
                        {registerMutation.isPending ? "Регистрация..." : "Зарегистрироваться"}
                    </button>

                    <p className={styles.footerText}>
                        Уже есть аккаунт? <Link className={styles.link} href="/login">Войти</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}