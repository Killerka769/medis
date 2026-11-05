(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/AdminSidebar/AdminSidebar.module.scss [app-client] (css module)", ((__turbopack_context__) => {

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
"[project]/src/app/components/AdminSidebar/AdminSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminSidebar",
    ()=>AdminSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/AdminSidebar/AdminSidebar.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    }
];
function AdminSidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sidebar,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logoWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].logo,
                    children: [
                        "Медис ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Admin"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                            lineNumber: 28,
                            columnNumber: 27
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                children: menuItems.map((item)=>{
                    const isActive = pathname === item.path || pathname.startsWith(item.path) && item.path !== "/admin";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item.path,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navItem} ${isActive ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                                lineNumber: 41,
                                columnNumber: 29
                            }, this),
                            item.label
                        ]
                    }, item.path, true, {
                        fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                        lineNumber: 36,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AdminSidebar$2f$AdminSidebar$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].siteLink,
                    target: "_blank",
                    children: "Открыть сайт ↗"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/AdminSidebar/AdminSidebar.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(AdminSidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = AdminSidebar;
var _c;
__turbopack_context__.k.register(_c, "AdminSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_9ffac6fb._.js.map