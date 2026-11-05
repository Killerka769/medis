import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type TArticlePayload = {
    title: string;
    content: string;
    excerpt: string;
    coverUrl: string;
    categoryId: string;
    status: string;
};

export function useGetArticles() {
    return useQuery({
        queryKey: ["articlesQuery"],
        queryFn: async () => {
            const response = await fetch("/api/admin/articles", { method: "GET" });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса получения статей");
            }
            return response.json();
        }
    })
}

export function usePostArticles() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["articlesPost"],
        mutationFn: async (data: TArticlePayload) => {
            const response = await fetch("/api/admin/articles", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса создания статьи");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["articlesQuery"] })
    })
}

export function usePutArticles() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["articlesPut"],
        mutationFn: async (data: TArticlePayload & { id: string }) => {
            const response = await fetch("/api/admin/articles", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса обновления статьи");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["articlesQuery"] })
    })
}

export function useDeleteArticles() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["articlesDelete"],
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/articles", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса удаления статьи");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["articlesQuery"] })
    })
}