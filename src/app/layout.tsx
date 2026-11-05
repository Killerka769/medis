import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/src/lib/ReactQuery/ReactQueryProvider";
import { Header } from "./components/ui/layout/Header/Header"; 
import { Footer } from "./components/ui/layout/Footer/Footer";
import { FloatingContact } from "./components/FloatingContact/FloatingContact";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Медис — клиника в Махачкале",
  description: "Современный медицинский центр. Запись на прием онлайн.",
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
          <Header />
          <div style={{ minHeight: 'calc(100vh - 160px)' }}>
            {children}
          </div>
          <Footer />
          <FloatingContact />
        </ReactQueryProvider>
      </body>
    </html>
  );
}