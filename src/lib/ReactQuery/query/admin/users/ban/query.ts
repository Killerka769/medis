import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useBannedUsers() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["userBannedMutation"],
        mutationFn: async (data: { id: string, isBanned: string, bannedUntil: string, banReason: string }) => {
            const response = await fetch("/api/admin/users/ban", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса бана/разбана пользователя");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["usersGet"] })
    })
}