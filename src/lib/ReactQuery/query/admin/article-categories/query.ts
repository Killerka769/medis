import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetArticleCategory() {
    return useQuery({
        queryKey: ["articleCategoryQuery"],
        queryFn: async ()=> {
            const response = await fetch("/api/admin/article-categories", {
                method: "GET",
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на создание категории блога");
            }
            return response.json();
        }
    })
}

export function useCreateArticleCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["articleCategoryMutation"],
        mutationFn: async (data : { title: string, sortOrder: string, isActive: string })=>{
            const response = await fetch("/api/admin/article-categories", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на создание категории блога");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["articleCategoryQuery"] })
    })
}

export function usePutArticleCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["articleCategoryMutationPut"],
        mutationFn: async (data : { id: string, title: string, sortOrder: string, isActive: string })=>{
            const response = await fetch("/api/admin/article-categories", {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на удаление категории блога");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["articleCategoryQuery"] })
    })
}

export function useDeleteArticleCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["articleCategoryMutationDelete"],
        mutationFn: async (data : { id: string })=>{
            const response = await fetch("/api/admin/article-categories", {
                method: "DELETE",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на обновление категории блога");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["articleCategoryQuery"] })
    })
}