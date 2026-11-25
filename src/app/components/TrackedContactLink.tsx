"use client"

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { reachGoal } from "@/src/lib/metrika";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode;
};

export function TrackedContactLink({ onClick, href, children, ...rest }: Props) {
    return (
        <a
            href={href}
            {...rest}
            onClick={(event) => {
                reachGoal("phone_click", { href: typeof href === "string" ? href : undefined });
                onClick?.(event);
            }}
        >
            {children}
        </a>
    );
}
