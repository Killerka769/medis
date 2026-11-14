import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type NotificationPayload = {
    id?: string;
    title: string;
    text: string;
    isFullScreen: string;
    isActive: string;
    expiresAt: string;
    durationMs: string;
};

export function useGetNotifications() {
    return useQuery({
        queryKey: ["notificationsQuery"],
        queryFn: async () => {
            const response = await fetch("/api/admin/notifications");
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка загрузки уведомлений");
            }
            return response.json();
        },
    });
}

export function useCreateNotification() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: NotificationPayload) => {
            const response = await fetch("/api/admin/notifications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка создания уведомления");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["notificationsQuery"] }),
    });
}

export function usePutNotification() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: NotificationPayload) => {
            const response = await fetch("/api/admin/notifications", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка обновления уведомления");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["notificationsQuery"] }),
    });
}

export function useDeleteNotification() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/notifications", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка удаления уведомления");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["notificationsQuery"] }),
    });
}
