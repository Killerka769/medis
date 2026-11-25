"use client"

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { YANDEX_METRIKA_ID } from "@/src/lib/metrika";

export function YandexMetrikaHits() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const skipInitialHit = useRef(true);

    useEffect(() => {
        const query = searchParams.toString();
        const url = `${window.location.origin}${pathname}${query ? `?${query}` : ""}`;

        if (skipInitialHit.current) {
            skipInitialHit.current = false;
            return;
        }

        window.ym?.(YANDEX_METRIKA_ID, "hit", url);
    }, [pathname, searchParams]);

    return null;
}
