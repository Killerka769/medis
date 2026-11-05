import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Rethink_Sans } from "next/font/google";

export function useGetMedia(folder: string) {
    return useQuery({
        queryKey: ["mediaGet", folder],
        queryFn: async () => {
            const response = await fetch(`/api/admin/media?folder=${encodeURIComponent(folder)}`, { method: "GET" });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса медиатеки");
            }
            return response.json();
        },
        enabled: true,
    })
}

export function usePostMedia() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["mediaPost"],
        mutationFn: async (data: { file: File, folder: string }) => {
            const formData = new FormData();
            formData.append("file", data.file);
            formData.append("folder", data.folder);

            const response = await fetch("/api/admin/media", {
                method: "POST",
                body: formData,
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка загрузки файла");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["mediaGet"] })
    })
}

export function useDeleteMedia() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["mediaDelete"],
        mutationFn: async (data: { path: string, isFolder: boolean }) => {
            const response = await fetch("/api/admin/media", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка удаления");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["mediaGet"] })
    })
}