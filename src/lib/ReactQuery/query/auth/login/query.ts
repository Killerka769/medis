import { useMutation } from "@tanstack/react-query";

export function useLogin() {
    return useMutation({
        mutationKey: ["loginMutation"],
        mutationFn: async (data : { phone : string, password : string }) => {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса логина");
            }
            return response.json();
        }
    })
}