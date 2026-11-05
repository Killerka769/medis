import { useQuery } from "@tanstack/react-query";

export function useGetPublicDoctors() {
    return useQuery({
        queryKey: ["publicDoctors"],
        queryFn: async () => {
            const res = await fetch("/api/public/doctors");
            if(!res.ok) throw new Error("Ошибка загрузки врачей");
            return res.json();
        }
    })
}

export function useGetPublicDoctor(slug: string) {
    return useQuery({
        queryKey: ["publicDoctor", slug],
        queryFn: async () => {
            const res = await fetch(`/api/public/doctors/${slug}`);
            if(!res.ok) throw new Error("Ошибка загрузки врача");
            return res.json();
        },
        enabled: !!slug
    })
}