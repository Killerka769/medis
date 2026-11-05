import { useMutation } from "@tanstack/react-query";

export function useRegister() {
    return useMutation({
        mutationKey: ["registerMutation"],
        mutationFn: async (data : { email : string, phone : string, username : string, password : string }) => {
            const response = await fetch("/api/auth/register", { 
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса регистрации");
            }
            return response.json();
        }
    })
}