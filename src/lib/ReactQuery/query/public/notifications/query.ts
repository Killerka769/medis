import { useQuery } from "@tanstack/react-query";

export function useGetPublicNotifications() {
    return useQuery({
        queryKey: ["publicNotifications"],
        queryFn: async () => {
            const response = await fetch("/api/public/notifications");
            if (!response.ok) throw new Error("Ошибка загрузки уведомлений");
            return response.json();
        },
    });
}
