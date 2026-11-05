import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetServiceCategory() {
    return useQuery({
        queryKey: ["serviceCategoryQuery"],
        queryFn: async ()=> {
            const response = await fetch("/api/admin/service-categories", {
                method: "GET",
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на создание категории услуги");
            }
            return response.json();
        }
    })
}

export function useCreateServiceCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["serviceCategoryMutation"],
        mutationFn: async (data : { title: string, sortOrder: string, isActive: string })=>{
            const response = await fetch("/api/admin/service-categories", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на создание категории услуги");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["serviceCategoryQuery"] })
    })
}

export function usePutServiceCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["serviceCategoryMutationPut"],
        mutationFn: async (data : { id: string, title: string, sortOrder: string, isActive: string })=>{
            const response = await fetch("/api/admin/service-categories", {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на обновление категории услуги");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["serviceCategoryQuery"] })
    })
}

export function useDeleteServiceCategory() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["serviceCategoryMutationDelete"],
        mutationFn: async (data : { id: string })=>{
            const response = await fetch("/api/admin/service-categories", {
                method: "DELETE",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса на удаление категории услуги");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["serviceCategoryQuery"] })
    })
}