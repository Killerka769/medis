import { useQuery } from "@tanstack/react-query";

export function useGetPublicServices() {
    return useQuery({
        queryKey: ["publicServices"],
        queryFn: async () => {
            const res = await fetch("/api/public/services");
            if(!res.ok) throw new Error("Ошибка загрузки услуг");
            return res.json();
        }
    })
}

export function useGetPublicService(slug: string) {
    return useQuery({
        queryKey: ["publicService", slug],
        queryFn: async () => {
            const res = await fetch(`/api/public/services/${slug}`);
            if(!res.ok) throw new Error("Ошибка загрузки услуги");
            return res.json();
        },
        enabled: !!slug
    })
}