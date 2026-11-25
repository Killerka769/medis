import { Suspense } from "react";
import type { Metadata } from "next";
import { getHomeData } from "@/src/lib/data/public";
import { HomeView } from "./HomeView";
import { HomeLoading } from "./components/ui/Skeleton";
import { JsonLd } from "./components/JsonLd";
import { jsonLd } from "@/src/lib/seo";
import styles from "./HomePage.module.scss";

export const metadata: Metadata = {
    title: { absolute: "Медицинский центр Медис в Махачкале" },
    description: "Платный приём врачей, УЗИ и процедуры в Махачкале. Запись онлайн, ежедневно с 09:00 до 23:00. ул. Ахульго, 77.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Медицинский центр Медис в Махачкале",
        description: "Запись к врачу онлайн. ул. Ахульго, 77. Ежедневно с 09:00 до 23:00.",
        images: [{ url: "/hero-v2.webp" }],
        locale: "ru_RU",
        type: "website",
        url: "https://medis05.ru",
    },
};

async function HomeContent() {
    let data;
    try {
        data = await getHomeData();
    } catch {
        return <main className={styles.page}><div className={styles.error}>Ошибка загрузки данных</div></main>;
    }

    return <HomeView data={data} />;
}

export default function HomePage() {
    return (
        <>
            <JsonLd data={jsonLd} />
            <Suspense fallback={<HomeLoading />}>
                <HomeContent />
            </Suspense>
        </>
    );
}
