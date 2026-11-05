import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetUsers() {
    return useQuery({
        queryKey: ["usersGet"],
        queryFn: async () => {
            const response = await fetch("/api/admin/users", { method: "GET" });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка получения пользователей");
            }
            return response.json();
        }
    })
}

export function useGetUser(id: string) {
    return useQuery({
        queryKey: ["userGet", id],
        queryFn: async () => {
            const response = await fetch(`/api/admin/users/${id}`);
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка получения пользователя");
            }
            return response.json();
        },
        enabled: !!id
    })
}

export function usePutUser() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["userPut"],
        mutationFn: async (data: { id: string, username: string, email: string, phone: string }) => {
            const { id, ...payload } = data;
            const response = await fetch(`/api/admin/users/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка обновления пользователя");
            }
            return response.json();
        },
        onSuccess: (_, variables) => {
            client.invalidateQueries({ queryKey: ["usersGet"] });
            client.invalidateQueries({ queryKey: ["userGet", variables.id] });
        }
    })
}

export function useDeleteUser() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["userDelete"],
        mutationFn: async (id: string) => {
            const response = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка удаления пользователя");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["usersGet"] })
    })
}