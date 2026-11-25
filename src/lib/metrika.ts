export const YANDEX_METRIKA_ID = 114683843;

type YandexMetrikaFn = (counterId: number, method: string, ...args: unknown[]) => void;

declare global {
    interface Window {
        ym?: YandexMetrikaFn;
    }
}

export function reachGoal(target: string, params?: Record<string, unknown>) {
    if (typeof window === "undefined" || typeof window.ym !== "function") return;
    if (params) {
        window.ym(YANDEX_METRIKA_ID, "reachGoal", target, params);
        return;
    }
    window.ym(YANDEX_METRIKA_ID, "reachGoal", target);
}
