import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetDoctors() {
    return useQuery({
        queryKey: ["doctorsQuery"],
        queryFn: async () => {
            const response = await fetch("/api/admin/doctors", {
                method: "GET",
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса получения врачей");
            }
            return response.json();
        }
    })
}

export function usePostDoctors() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["doctorsPost"],
        mutationFn: async (data: { name: string, specialization: string, experienceYears: string, education: string, certificates: string, bio: string, photoUrl: string, isActive: string }) => {
            const response = await fetch("/api/admin/doctors", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса создания врача");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["doctorsQuery"] })
    })
}

export function usePutDoctors() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["doctorsPut"],
        mutationFn: async (data: { id: string, name: string, specialization: string, experienceYears: string, education: string, certificates: string, bio: string, photoUrl: string, isActive: string }) => {
            const response = await fetch("/api/admin/doctors", {
                method: "PUT",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса обновления врача");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["doctorsQuery"] })
    })
}

export function useDeleteDoctors() {
    const client = useQueryClient();
    return useMutation({
        mutationKey: ["doctorsDelete"],
        mutationFn: async (data: { id: string }) => {
            const response = await fetch("/api/admin/doctors", {
                method: "DELETE",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(data)
            });
            if(!response.ok){
                const error = await response.json();
                throw new Error(error.message || "Ошибка запроса удаления врача");
            }
            return response.json();
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["doctorsQuery"] })
    })
}