module.exports = [
"[project]/src/app/components/AdminSidebar/AdminSidebar.module.scss [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "AdminSidebar-module-scss-module__CfpFZa__active",
  "bottom": "AdminSidebar-module-scss-module__CfpFZa__bottom",
  "icon": "AdminSidebar-module-scss-module__CfpFZa__icon",
  "logo": "AdminSidebar-module-scss-module__CfpFZa__logo",
  "logoWrap": "AdminSidebar-module-scss-module__CfpFZa__logoWrap",
  "nav": "AdminSidebar-module-scss-module__CfpFZa__nav",
  "navItem": "AdminSidebar-module-scss-module__CfpFZa__navItem",
  "sidebar": "AdminSidebar-module-scss-module__CfpFZa__sidebar",
  "siteLink": "AdminSidebar-module-scss-module__CfpFZa__siteLink",
});
}),
"[project]/src/app/components/AdminSidebar/AdminSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSidebar",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/AdminSidebar/AdminSidebar.module.scss [app-ssr] (css module)");
"use client";
;
;
;
;
const menuItems = [
    {
        path: "/admin",
        label: "Дашборд",
        icon: "📊"
    },
    {
        path: "/admin/appointments",
        label: "Записи",
        icon: "📅"
    },
    {
        path: "/admin/product-requests",
        label: "Заявки на товары",
        icon: "📦"
    },
    {
        path: "/admin/doctors",
        label: "Врачи",
        icon: "👨‍⚕️"
    },
    {
        path: "/admin/services",
        label: "Услуги",
        icon: "🩺"
    },
    {
        path: "/admin/service-categories",
        label: "Категории услуг",
        icon: "📑"
    },
    {
        path: "/admin/products",
        label: "Товары",
        icon: "💊"
    },
    {
        path: "/admin/product-categories",
        label: "Категории товаров",
        icon: "🗂️"
    },
    {
        path: "/admin/articles",
        label: "Статьи",
        icon: "📝"
    },
    {
        path: "/admin/article-categories",
        label: "Категории статей",
        icon: "📁"
    },
    {
        path: "/admin/users",
        label: "Пользователи",
        icon: "👥"
    },
    {
        path: "/admin/media",
        label: "Медиатека",
        icon: "📁"
    }
];
function AdminSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sidebar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logoWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].logo,
                    children: [
                        "Медис ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Admin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                            lineNumber: 29,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nav,
                children: menuItems.map((item)=>{
                    const isActive = pathname === item.path || pathname.startsWith(item.path) && item.path !== "/admin";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.path,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].active : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                                lineNumber: 42,
                                columnNumber: 29
                            }, this),
                            item.label
                        ]
                    }, item.path, true, {
                        fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                        lineNumber: 37,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottom,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].siteLink,
                    target: "_blank",
                    children: "Открыть сайт ↗"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_app_components_AdminSidebar_5e406548._.js.map