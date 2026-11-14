"use client"

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { BannerHost } from "../../BannerSlider/BannerHost";
import { NotificationsHost } from "../../NotificationsHost/NotificationsHost";

export function SiteChrome({
    header,
    footer,
    children,
}: {
    header: ReactNode;
    footer: ReactNode;
    children: ReactNode;
}) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith("/admin");

    return (
        <>
            {!isAdmin && header}
            {!isAdmin && pathname !== "/" && <BannerHost />}
            <div className="siteContent">
                {children}
            </div>
            {!isAdmin && footer}
            {!isAdmin && <NotificationsHost />}
        </>
    );
}
