import { useMutation, useQuery } from "@tanstack/react-query";

export function useGetPublicProducts() {
    return useQuery({
        queryKey: ["publicProducts"],
        queryFn: async () => {
            const res = await fetch("/api/public/products");
            if (!res.ok) throw new Error("Ошибка загрузки товаров");
            return res.json();
        }
    })
}

export function useGetPublicProduct(slug: string) {
    return useQuery({
        queryKey: ["publicProduct", slug],
        queryFn: async () => {
            const res = await fetch(`/api/public/products/${slug}`);
            if (!res.ok) throw new Error("Ошибка загрузки товара");
            return res.json();
        },
        enabled: !!slug
    })
}

export function useCreateProductRequest() {
    return useMutation({
        mutationKey: ["createProductRequest"],
        mutationFn: async (data: { productId: string, name: string, phone: string, comment: string }) => {
            const res = await fetch("/api/public/product-requests", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });
            const json = await res.json();
            if (!res.ok) throw new Error(json.message || "Ошибка заявки");
            return json;
        }
    })
}