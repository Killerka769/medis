import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Контакты",
    description: "Адрес, телефон и режим работы медицинского центра Медис в Махачкале. ул. Ахульго, 77.",
    alternates: { canonical: "/contacts" },
    openGraph: {
        title: "Контакты клиники Медис",
        description: "ул. Ахульго, 77. Телефон +7 928 555-88-18.",
        images: [{ url: "/hero-v2.webp" }],
        url: "https://medis05.ru/contacts",
    },
};

export default function ContactsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
