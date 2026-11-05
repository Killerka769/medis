import { useQuery } from "@tanstack/react-query";

export function useGetPublicArticles() {
    return useQuery({
        queryKey: ["publicArticles"],
        queryFn: async () => {
            const res = await fetch("/api/public/articles");
            if (!res.ok) throw new Error("Ошибка загрузки статей");
            return res.json();
        }
    })
}

export function useGetPublicArticle(slug: string) {
    return useQuery({
        queryKey: ["publicArticle", slug],
        queryFn: async () => {
            const res = await fetch(`/api/public/articles/${slug}`);
            if (!res.ok) throw new Error("Ошибка загрузки статьи");
            return res.json();
        },
        enabled: !!slug
    })
}