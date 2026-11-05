import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetBookingData() {
    return useQuery({
        queryKey: ["bookingData"],
        queryFn: async () => {
            const res = await fetch("/api/public/booking-data");
            if(!res.ok) throw new Error("Ошибка данных");
            return res.json();
        }
    })
}

export function useCreateAppointment() {
    return useMutation({
        mutationKey: ["createAppointment"],
        mutationFn: async (data: { doctorId: string, serviceId: string, date: string, comment: string }) => {
            const res = await fetch("/api/public/appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const json = await res.json();
            if(!res.ok) throw new Error(json.message || "Ошибка записи");
            return json;
        }
    })
}