import { Suspense } from "react";
import type { Metadata } from "next";
import { getHomeData } from "@/src/lib/data/public";
import { HomeView } from "./HomeView";
import { HomeLoading } from "./components/ui/Skeleton";
import styles from "./HomePage.module.scss";

export const metadata: Metadata = {
    title: "Медис — клиника в Махачкале | Запись на прием",
    description: "Медицинский центр «Медис» в Махачкале. Приём врачей, диагностика и услуги по ОМС. Запись онлайн, работаем ежедневно с 09:00 до 23:00.",
    openGraph: {
        title: "Медис — клиника в Махачкале",
        description: "Запись к врачу онлайн. ул. Ахульго, 77. Ежедневно с 09:00 до 23:00.",
        images: [{ url: "/hero.webp" }],
        locale: "ru_RU",
        type: "website",
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
        <Suspense fallback={<HomeLoading />}>
            <HomeContent />
        </Suspense>
    );
}
