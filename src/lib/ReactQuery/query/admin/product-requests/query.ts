import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetProductRequests() {
    return useQuery({
        queryKey: ["productRequestsGet"],
        queryFn: async () => {
            const response = await fetch("/api/admin/product-requests", { method: "GET" });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса получения заявок");
            }
            return response.json();
        }
    })
}

export function usePutProductRequests() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productRequestsPut"],
        mutationFn: async (data: { id: string, status: string }) => {
            const response = await fetch("/api/admin/product-requests", {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса обновления заявки")
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productRequestsGet"] })
    })
}

export function useDeleteProductRequests() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productRequestsDelete"],
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/product-requests", {
                method: "DELETE",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса удаления заявки")
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productRequestsGet"] })
    })
}