import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type TProductPayload = {
    title: string;
    description: string;
    content: string;
    price: string;
    categoryId: string;
    imageUrl: string;

    isActive: string;
};

export function useGetProducts() {
    return useQuery({
        queryKey: ["productsQuery"],
        queryFn: async () => {
            const response = await fetch("/api/admin/products", { method: "GET" });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса получения товаров");
            }
            return response.json();
        }
    })
}

export function usePostProducts() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productsPost"],
        mutationFn: async (data: TProductPayload) => {
            const response = await fetch("/api/admin/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса создания товара");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productsQuery"] })
    })
}

export function usePutProducts() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productsPut"],
        mutationFn: async (data: TProductPayload & { id: string }) => {
            const response = await fetch("/api/admin/products", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса обновления товара");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productsQuery"] })
    })
}

export function useDeleteProducts() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productsDelete"],
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/products", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса удаления товара");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productsQuery"] })
    })
}