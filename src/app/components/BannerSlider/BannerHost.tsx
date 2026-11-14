"use client"

import { usePathname } from "next/navigation";
import { useGetPublicBanners } from "@/src/lib/ReactQuery/query/public/banners/query";
import { BannerSlider } from "./BannerSlider";

export function BannerHost() {
    const pathname = usePathname();
    const { data } = useGetPublicBanners(pathname || "/");

    if (!data?.banners?.length) return null;
    return (
        <div style={{ maxWidth: 1200, margin: "24px auto 0", padding: "0 20px", width: "100%" }}>
            <BannerSlider banners={data.banners} />
        </div>
    );
}
