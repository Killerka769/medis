(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/ReactQuery/query/public/products/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateProductRequest",
    ()=>useCreateProductRequest,
    "useGetPublicProduct",
    ()=>useGetPublicProduct,
    "useGetPublicProducts",
    ()=>useGetPublicProducts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
function useGetPublicProducts() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "publicProducts"
        ],
        queryFn: {
            "useGetPublicProducts.useQuery": async ()=>{
                const res = await fetch("/api/public/products");
                if (!res.ok) throw new Error("Ошибка загрузки товаров");
                return res.json();
            }
        }["useGetPublicProducts.useQuery"]
    });
}
_s(useGetPublicProducts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetPublicProduct(slug) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "publicProduct",
            slug
        ],
        queryFn: {
            "useGetPublicProduct.useQuery": async ()=>{
                const res = await fetch(`/api/public/products/${slug}`);
                if (!res.ok) throw new Error("Ошибка загрузки товара");
                return res.json();
            }
        }["useGetPublicProduct.useQuery"],
        enabled: !!slug
    });
}
_s1(useGetPublicProduct, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateProductRequest() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "createProductRequest"
        ],
        mutationFn: {
            "useCreateProductRequest.useMutation": async (data)=>{
                const res = await fetch("/api/public/product-requests", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const json = await res.json();
                if (!res.ok) throw new Error(json.message || "Ошибка заявки");
                return json;
            }
        }["useCreateProductRequest.useMutation"]
    });
}
_s2(useCreateProductRequest, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/shop/[slug]/ProductDetail.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "breadcrumbs": "ProductDetail-module-scss-module__8XAfHW__breadcrumbs",
  "btnSubmit": "ProductDetail-module-scss-module__8XAfHW__btnSubmit",
  "category": "ProductDetail-module-scss-module__8XAfHW__category",
  "description": "ProductDetail-module-scss-module__8XAfHW__description",
  "error": "ProductDetail-module-scss-module__8XAfHW__error",
  "field": "ProductDetail-module-scss-module__8XAfHW__field",
  "form": "ProductDetail-module-scss-module__8XAfHW__form",
  "formCard": "ProductDetail-module-scss-module__8XAfHW__formCard",
  "formSubtitle": "ProductDetail-module-scss-module__8XAfHW__formSubtitle",
  "formTitle": "ProductDetail-module-scss-module__8XAfHW__formTitle",
  "input": "ProductDetail-module-scss-module__8XAfHW__input",
  "layout": "ProductDetail-module-scss-module__8XAfHW__layout",
  "mainImage": "ProductDetail-module-scss-module__8XAfHW__mainImage",
  "page": "ProductDetail-module-scss-module__8XAfHW__page",
  "placeholder": "ProductDetail-module-scss-module__8XAfHW__placeholder",
  "price": "ProductDetail-module-scss-module__8XAfHW__price",
  "productInfo": "ProductDetail-module-scss-module__8XAfHW__productInfo",
  "serverError": "ProductDetail-module-scss-module__8XAfHW__serverError",
  "sidebar": "ProductDetail-module-scss-module__8XAfHW__sidebar",
  "successMsg": "ProductDetail-module-scss-module__8XAfHW__successMsg",
  "textarea": "ProductDetail-module-scss-module__8XAfHW__textarea",
  "thumb": "ProductDetail-module-scss-module__8XAfHW__thumb",
  "thumbnails": "ProductDetail-module-scss-module__8XAfHW__thumbnails",
  "title": "ProductDetail-module-scss-module__8XAfHW__title",
});
}),
"[project]/src/app/shop/[slug]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$products$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ReactQuery/query/public/products/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/shop/[slug]/ProductDetail.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const requestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Введите имя"),
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Введите телефон"),
    comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
});
function ProductDetailPage({ params }) {
    _s();
    const { slug } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"])(params);
    const { data, isLoading, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$products$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPublicProduct"])(slug);
    const createRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$products$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateProductRequest"])();
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { register, handleSubmit, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(requestSchema),
        defaultValues: {
            name: "",
            phone: "",
            comment: ""
        }
    });
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
        children: "Загрузка..."
    }, void 0, false, {
        fileName: "[project]/src/app/shop/[slug]/page.tsx",
        lineNumber: 29,
        columnNumber: 27
    }, this);
    if (isError || !data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
        children: "Товар не найден"
    }, void 0, false, {
        fileName: "[project]/src/app/shop/[slug]/page.tsx",
        lineNumber: 30,
        columnNumber: 34
    }, this);
    const { product } = data;
    async function onSubmit(formData) {
        createRequest.mutate({
            productId: product.id,
            name: formData.name,
            phone: formData.phone,
            comment: formData.comment
        }, {
            onSuccess: ()=>setIsSuccess(true)
        });
    }
    // Парсим картинки (если они есть)
    const images = Array.isArray(product.images) ? product.images : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Главная"
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/shop",
                        children: "Магазин"
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 49
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 85
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].productInfo,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainImage,
                                children: product.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: product.imageUrl,
                                    alt: product.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].placeholder,
                                    children: "Нет фото"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumbnails,
                                children: images.map((img, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img,
                                        alt: `${product.title} ${i}`,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].thumb
                                    }, i, false, {
                                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                        lineNumber: 68,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                children: product.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].category,
                                children: product.category?.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].price,
                                children: [
                                    product.price,
                                    " ₽"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "Описание"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: product.content || product.description || "Описание товара скоро появится."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formTitle,
                                    children: "Оставить заявку"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSubtitle,
                                    children: "Мы свяжемся с вами для уточнения деталей"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                isSuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successMsg,
                                    children: "✅ Заявка отправлена! Администратор свяжется с вами."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                                    onSubmit: handleSubmit(onSubmit),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                    type: "text",
                                                    placeholder: "Ваше имя",
                                                    ...register("name")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 37
                                                }, this),
                                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                    children: errors.name.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                    type: "tel",
                                                    placeholder: "Телефон",
                                                    ...register("phone")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 37
                                                }, this),
                                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                    children: errors.phone.message
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 54
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                                rows: 3,
                                                placeholder: "Комментарий (необязательно)",
                                                ...register("comment")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 33
                                        }, this),
                                        createRequest.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serverError,
                                            children: createRequest.error.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$shop$2f5b$slug$5d2f$ProductDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSubmit,
                                            disabled: createRequest.isPending,
                                            children: createRequest.isPending ? "Отправка..." : "Отправить заявку"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                            lineNumber: 111,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/shop/[slug]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/shop/[slug]/page.tsx",
                            lineNumber: 85,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/shop/[slug]/page.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/shop/[slug]/page.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/shop/[slug]/page.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_s(ProductDetailPage, "5uoYje3KOKn6oJCv83LB290CHus=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$products$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetPublicProduct"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$products$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateProductRequest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ProductDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ProductDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_476a40ed._.js.map