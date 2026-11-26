import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/src/lib/ReactQuery/ReactQueryProvider";
import { Header } from "./components/ui/layout/Header/Header";
import { Footer } from "./components/ui/layout/Footer/Footer";
import { FloatingContact } from "./components/FloatingContact/FloatingContact";
import { SiteChrome } from "./components/ui/layout/SiteChrome";
import { YandexMetrika } from "./components/YandexMetrika/YandexMetrika";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/src/lib/seo";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const viewport: Viewport = {
    themeColor: "#93C572",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL("https://medis05.ru"),
    title: {
        default: SITE_TITLE,
        template: "%s | Медис",
    },
    description: SITE_DESCRIPTION,
    applicationName: "Медис",
    keywords: [
        "Медис",
        "клиника Махачкала",
        "медицинский центр Махачкала",
        "уролог Махачкала",
        "гинеколог Махачкала",
        "УЗИ Махачкала",
        "запись к врачу",
        "Ахульго 77",
    ],
    authors: [{ name: "ООО МЕДИС" }],
    creator: "ООО МЕДИС",
    publisher: "ООО МЕДИС",
    robots: { index: true, follow: true },
    verification: {
        yandex: "8c61ad6064277264",
        google: "b77N_8Kd6CSVi2KN0oexc1pZ_v0PCVxZuPtAUP9tNWo",
    },
    alternates: { canonical: "/" },
    icons: {
        icon: [{ url: "/logo.webp", type: "image/webp" }, { url: "/icon-192.webp", sizes: "192x192" }],
        shortcut: "/logo.webp",
        apple: "/icon-192.webp",
    },
    manifest: "/manifest.json",
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        siteName: "Медис",
        locale: "ru_RU",
        type: "website",
        images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Медицинский центр Медис" }],
    },
    twitter: {
        card: "summary_large_image",
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [OG_IMAGE],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <head>
                <meta name="geo.region" content="RU-DA" />
                <meta name="geo.placename" content="Махачкала" />
                <meta name="format-detection" content="telephone=yes" />
            </head>
            <body className={inter.className}>
                <YandexMetrika />
                <ReactQueryProvider>
                    <SiteChrome header={<Header />} footer={<Footer />}>
                        {children}
                    </SiteChrome>
                    <FloatingContact />
                </ReactQueryProvider>
            </body>
        </html>
    );
}
