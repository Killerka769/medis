module.exports = [
"[project]/src/app/services/ServicesPage.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "ServicesPage-module-scss-module__JZyE0G__active",
  "card": "ServicesPage-module-scss-module__JZyE0G__card",
  "cardBottom": "ServicesPage-module-scss-module__JZyE0G__cardBottom",
  "cardDesc": "ServicesPage-module-scss-module__JZyE0G__cardDesc",
  "cardTitle": "ServicesPage-module-scss-module__JZyE0G__cardTitle",
  "empty": "ServicesPage-module-scss-module__JZyE0G__empty",
  "error": "ServicesPage-module-scss-module__JZyE0G__error",
  "filterBtn": "ServicesPage-module-scss-module__JZyE0G__filterBtn",
  "filters": "ServicesPage-module-scss-module__JZyE0G__filters",
  "grid": "ServicesPage-module-scss-module__JZyE0G__grid",
  "header": "ServicesPage-module-scss-module__JZyE0G__header",
  "loading": "ServicesPage-module-scss-module__JZyE0G__loading",
  "more": "ServicesPage-module-scss-module__JZyE0G__more",
  "page": "ServicesPage-module-scss-module__JZyE0G__page",
  "price": "ServicesPage-module-scss-module__JZyE0G__price",
  "subtitle": "ServicesPage-module-scss-module__JZyE0G__subtitle",
  "title": "ServicesPage-module-scss-module__JZyE0G__title",
});
}),
"[project]/src/app/services/ServicesCatalog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesCatalog",
    ()=>ServicesCatalog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/services/ServicesPage.module.scss [app-ssr] (css module)");
"use client";
;
;
;
;
function ServicesCatalog({ services, categories }) {
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const filteredServices = activeCategory ? services.filter((s)=>s.categoryId === activeCategory) : services;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].badge,
                        children: "Клиника"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                        lineNumber: 18,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                        children: "Наши услуги"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                        children: "Приёмы, диагностика и анализы — цены открыты, запись онлайн"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filters,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterBtn} ${!activeCategory ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                        onClick: ()=>setActiveCategory(null),
                        children: "Все услуги"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                        lineNumber: 24,
                        columnNumber: 17
                    }, this),
                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filterBtn} ${activeCategory === cat.id ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                            onClick: ()=>setActiveCategory(cat.id),
                            children: cat.title
                        }, cat.id, false, {
                            fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            filteredServices.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].empty,
                children: "Услуг в этой категории пока нет"
            }, void 0, false, {
                fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                lineNumber: 42,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: filteredServices.map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/services/${service.slug}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                                lineNumber: 47,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardDesc,
                                children: service.description || "Подробнее на странице услуги"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                                lineNumber: 48,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardBottom,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].price,
                                        children: service.price ? service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽` : "По запросу"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                                        lineNumber: 50,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].more,
                                        children: "Подробнее →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                                        lineNumber: 53,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                                lineNumber: 49,
                                columnNumber: 29
                            }, this)
                        ]
                    }, service.id, true, {
                        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                        lineNumber: 46,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/services/ServicesCatalog.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/ServicesCatalog.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_services_8fe3e1a0._.js.map