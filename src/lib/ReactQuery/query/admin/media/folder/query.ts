import { useMutation, useQueryClient } from "@tanstack/react-query";

export function usePostFolder() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["folderMutation"],
        mutationFn: async (data: { name: string, currentPath: string }) => {
            const response = await fetch("/api/admin/media/folder", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса создания папки")
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["mediaGet"] })
    })
}