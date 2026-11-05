import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type TServicePayload = {
    title: string;
    description: string;
    content: string;
    price: string;
    priceFrom: string;
    categoryId: string;
    isOms: string;
    duration: string;
    imageUrl: string;
    isActive: string;
    doctorIds: string[];
};

export function useGetServices() {
    return useQuery({
        queryKey: ["servicesGet"],
        queryFn: async () => {
            const response = await fetch("/api/admin/services", { method: "GET" });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса получения сервисов");
            }
            return response.json();
        }
    })
}

export function usePostServices() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["servicesPost"],
        mutationFn: async (data: TServicePayload) => {
            const response = await fetch("/api/admin/services", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса создания сервиса");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["servicesGet"] })
    })
}

export function usePutServices() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["servicesPut"],
        mutationFn: async (data: TServicePayload & { id: string }) => {
            const response = await fetch("/api/admin/services", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса обновления сервиса");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["servicesGet"] })
    })
}

export function useDeleteServices() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["servicesDelete"],
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/services", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса удаления сервиса");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["servicesGet"] })
    })
}