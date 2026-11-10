(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/blog/[slug]/ArticleDetail.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "article": "ArticleDetail-module-scss-module__7FWCNq__article",
  "breadcrumbs": "ArticleDetail-module-scss-module__7FWCNq__breadcrumbs",
  "category": "ArticleDetail-module-scss-module__7FWCNq__category",
  "content": "ArticleDetail-module-scss-module__7FWCNq__content",
  "cover": "ArticleDetail-module-scss-module__7FWCNq__cover",
  "coverFallback": "ArticleDetail-module-scss-module__7FWCNq__coverFallback",
  "ctaBtn": "ArticleDetail-module-scss-module__7FWCNq__ctaBtn",
  "ctaCard": "ArticleDetail-module-scss-module__7FWCNq__ctaCard",
  "date": "ArticleDetail-module-scss-module__7FWCNq__date",
  "footer": "ArticleDetail-module-scss-module__7FWCNq__footer",
  "header": "ArticleDetail-module-scss-module__7FWCNq__header",
  "page": "ArticleDetail-module-scss-module__7FWCNq__page",
  "recCard": "ArticleDetail-module-scss-module__7FWCNq__recCard",
  "recent": "ArticleDetail-module-scss-module__7FWCNq__recent",
  "recentGrid": "ArticleDetail-module-scss-module__7FWCNq__recentGrid",
  "recentTitle": "ArticleDetail-module-scss-module__7FWCNq__recentTitle",
  "shareBtn": "ArticleDetail-module-scss-module__7FWCNq__shareBtn",
  "shareBtns": "ArticleDetail-module-scss-module__7FWCNq__shareBtns",
  "title": "ArticleDetail-module-scss-module__7FWCNq__title",
});
}),
"[project]/src/app/blog/[slug]/ShareButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareButtons",
    ()=>ShareButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/blog/[slug]/ArticleDetail.module.scss [app-client] (css module)");
"use client";
;
;
function ShareButtons({ title }) {
    function share(url) {
        window.open(url, "_blank", "noopener,noreferrer,width=600,height=500");
    }
    function onVk() {
        const page = window.location.href;
        share(`https://vk.com/share.php?url=${encodeURIComponent(page)}&title=${encodeURIComponent(title)}`);
    }
    function onTelegram() {
        const page = window.location.href;
        share(`https://t.me/share/url?url=${encodeURIComponent(page)}&text=${encodeURIComponent(title)}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareBtns,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareBtn,
                onClick: onVk,
                children: "ВК"
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/ShareButtons.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].shareBtn,
                onClick: onTelegram,
                children: "TG"
            }, void 0, false, {
                fileName: "[project]/src/app/blog/[slug]/ShareButtons.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[slug]/ShareButtons.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_c = ShareButtons;
var _c;
__turbopack_context__.k.register(_c, "ShareButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_blog_%5Bslug%5D_da9a4fa4._.js.map