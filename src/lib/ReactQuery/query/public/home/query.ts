import { useQuery } from "@tanstack/react-query";

export function useGetHomeData() {
    return useQuery({
        queryKey: ["homeDataGet"],
        queryFn: async () => {
            const response = await fetch("/api/public/home");
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка получения данных главной");
            }
            return response.json();
        }
    })
}