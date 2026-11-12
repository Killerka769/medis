import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/src/lib/ReactQuery/ReactQueryProvider";
import { Header } from "./components/ui/layout/Header/Header";
import { Footer } from "./components/ui/layout/Footer/Footer";
import { FloatingContact } from "./components/FloatingContact/FloatingContact";
import { SiteChrome } from "./components/ui/layout/SiteChrome";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Медис — клиника в Махачкале",
  description: "Современный медицинский центр. Запись на прием онлайн.",
  icons: {
    icon: [{ url: "/logo.webp", type: "image/webp" }],
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
  openGraph: {
    title: "Медис — клиника в Махачкале",
    description: "Современный медицинский центр. Запись на прием онлайн.",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/hero.webp" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
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
