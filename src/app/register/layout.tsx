import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Регистрация",
    description: "Регистрация в личном кабинете медицинского центра Медис.",
    robots: { index: false, follow: false },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
    return children;
}
