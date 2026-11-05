"use client"
import { Controller, useForm } from "react-hook-form";
import styles from "./LoginPage.module.scss";
import { usePhoneMask } from "@/src/lib/hooks/usePhoneMask";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "@/src/lib/ReactQuery/query/auth/login/query";
import { useRouter } from "next/navigation";
import Link from "next/link";

const loginSchema = z.object({
    phone: z.string().min(4, "Введите номер телефона"),
    password: z.string().min(6, "Введите пароль")
})

type TLoginSchema = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const router = useRouter();
    const phoneMask = usePhoneMask();
    const loginMutation = useLogin();

    const { control, register, handleSubmit, formState: { errors } } = useForm<TLoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: "",
            password: ""
        }
    })

    async function onSubmit(data: TLoginSchema) {
        loginMutation.mutate(data, {
            onSuccess: () => router.push("/profile")
        })
    }

    return (
        <main className={styles.page}>
            <section className={styles.card}>
                <h1 className={styles.title}>Авторизация</h1>
                <p className={styles.subtitle}>
                    Войдите, чтобы записаться на приём и управлять записями
                </p>

                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

                    {loginMutation.isError && (
                        <p className={styles.serverError}>
                            {(loginMutation.error as Error).message}
                        </p>
                    )}

                    <button
                        className={styles.button}
                        type="submit"
                        disabled={loginMutation.isPending}
                    >
                        {loginMutation.isPending ? "Вход..." : "Войти"}
                    </button>

                    <p className={styles.footerText}>
                        Нет аккаунта? <Link className={styles.link} href="/register">Зарегистрироваться</Link>
                    </p>
                </form>
            </section>
        </main>
    )
}