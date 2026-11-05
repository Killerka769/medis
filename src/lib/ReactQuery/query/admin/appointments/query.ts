import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAppointments() {
    return useQuery({
        queryKey: ["appointmentsGet"],
        queryFn: async () => {
            const response = await fetch("/api/admin/appointments", { method: "GET" });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса получения записей");
            }
            return response.json();
        }
    })
}

export function usePutAppointments() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["appointmentsPut"],
        mutationFn: async (data: { id:string, status:string, adminComment:string }) => {
            const response = await fetch("/api/admin/appointments", {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            })
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса обновления записи")
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["appointmentsGet"] })
    })
}

export function useDeleteAppointments() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["appointmentsDelete"],
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/appointments", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok) {
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса удаления записи")
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["appointmentsGet"] })
    })
}