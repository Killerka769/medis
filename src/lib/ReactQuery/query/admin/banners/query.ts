import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type BannerPayload = {
    id?: string;
    imageUrl: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    sortOrder: string;
    isActive: string;
    pages: string;
    intervalMs: string;
};

export function useGetBanners() {
    return useQuery({
        queryKey: ["bannersQuery"],
        queryFn: async () => {
            const response = await fetch("/api/admin/banners");
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка загрузки баннеров");
            }
            return response.json();
        },
    });
}

export function useCreateBanner() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: BannerPayload) => {
            const response = await fetch("/api/admin/banners", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка создания баннера");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["bannersQuery"] }),
    });
}

export function usePutBanner() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: BannerPayload) => {
            const response = await fetch("/api/admin/banners", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка обновления баннера");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["bannersQuery"] }),
    });
}

export function useDeleteBanner() {
    const client = useQueryClient();
    return useMutation({
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/banners", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка удаления баннера");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["bannersQuery"] }),
    });
}
