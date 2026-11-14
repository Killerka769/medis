import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Магазин",
    description: "Товары медицинского центра Медис в Махачкале. Заявка без онлайн-оплаты.",
    alternates: { canonical: "/shop" },
    openGraph: {
        title: "Магазин клиники Медис",
        description: "Товары клиники Медис. Заявка онлайн.",
        images: [{ url: "/hero-v2.webp" }],
        url: "https://medis05.ru/shop",
    },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return children;
}
