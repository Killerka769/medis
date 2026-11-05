import { useQuery } from "@tanstack/react-query";

export function useGetOmsServices() {
    return useQuery({
        queryKey: ["omsServices"],
        queryFn: async () => {
            const res = await fetch("/api/public/oms");
            if (!res.ok) throw new Error("Ошибка загрузки");
            return res.json();
        }
    })
}