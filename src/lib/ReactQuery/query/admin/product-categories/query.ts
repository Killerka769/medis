import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetProductCategory() {
    return useQuery({
        queryKey: ["productCategoryQuery"],
        queryFn: async () => {
            const response = await fetch("/api/admin/product-categories", { method: "GET" })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса категорий товаров");
            }
            return response.json();
        }
    })
}

export function useCreateProductCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productCategoryMutation"],
        mutationFn: async (data: { title: string, sortOrder: string, isActive: string }) => {
            const response = await fetch("/api/admin/product-categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка создания категории товаров");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productCategoryQuery"] })
    })
}

export function usePutProductCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productCategoryMutationPut"],
        mutationFn: async (data: { id: string, title: string, sortOrder: string, isActive: string }) => {
            const response = await fetch("/api/admin/product-categories", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка обновления категории товаров");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productCategoryQuery"] })
    })
}

export function useDeleteProductCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["productCategoryMutationDelete"],
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/product-categories", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка удаления категории товаров");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["productCategoryQuery"] })
    })
}