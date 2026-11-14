import { useQuery } from "@tanstack/react-query";

export function useGetPublicBanners(page: string) {
    return useQuery({
        queryKey: ["publicBanners", page],
        queryFn: async () => {
            const response = await fetch(`/api/public/banners?page=${encodeURIComponent(page)}`);
            if (!response.ok) throw new Error("Ошибка загрузки баннеров");
            return response.json();
        },
    });
}
