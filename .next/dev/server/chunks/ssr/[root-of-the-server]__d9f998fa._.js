module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/data/public.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getHomeData",
    ()=>getHomeData,
    "getPublicArticle",
    ()=>getPublicArticle,
    "getPublicArticles",
    ()=>getPublicArticles,
    "getPublicDoctor",
    ()=>getPublicDoctor,
    "getPublicDoctors",
    ()=>getPublicDoctors,
    "getPublicService",
    ()=>getPublicService,
    "getPublicServices",
    ()=>getPublicServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/prisma/db.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function getHomeData() {
    const doctors = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Doctor.where({
        isActive: true
    }).orderBy((d)=>d.experienceYears.desc()).limit(4).all();
    const services = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Service.where({
        isActive: true
    }).include("category").limit(6).all();
    const articles = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Article.where({
        status: "published"
    }).orderBy((a)=>a.publishedAt.desc()).include("category").limit(3).all();
    return {
        doctors,
        services,
        articles
    };
}
async function getPublicServices() {
    const services = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Service.where({
        isActive: true
    }).include("category").all();
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.ServiceCategory.where({
        isActive: true
    }).orderBy((c)=>c.sortOrder.asc()).all();
    return {
        services,
        categories
    };
}
async function getPublicService(slug) {
    const service = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Service.where({
        slug,
        isActive: true
    }).include("category").first();
    if (!service) return null;
    const doctorServices = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.DoctorService.where({
        serviceId: service.id
    }).include("doctor").all();
    const doctors = doctorServices.map((ds)=>ds.doctor).filter((d)=>d && d.isActive);
    return {
        service,
        doctors
    };
}
async function getPublicDoctors() {
    const doctors = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Doctor.where({
        isActive: true
    }).orderBy((d)=>d.name.asc()).all();
    return {
        doctors
    };
}
async function getPublicDoctor(slug) {
    const doctor = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Doctor.where({
        slug,
        isActive: true
    }).first();
    if (!doctor) return null;
    const doctorServices = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.DoctorService.where({
        doctorId: doctor.id
    }).include("service").all();
    const services = doctorServices.map((ds)=>ds.service).filter((s)=>s && s.isActive);
    return {
        doctor,
        services
    };
}
async function getPublicArticles() {
    const articles = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Article.where({
        status: "published"
    }).orderBy((a)=>a.publishedAt.desc()).include("category").all();
    const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.ArticleCategory.where({
        isActive: true
    }).orderBy((c)=>c.sortOrder.asc()).all();
    return {
        articles,
        categories
    };
}
async function getPublicArticle(slug) {
    const article = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Article.where({
        slug,
        status: "published"
    }).include("category").first();
    if (!article) return null;
    const recentArticles = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].orm.public.Article.where({
        status: "published"
    }).orderBy((a)=>a.publishedAt.desc()).limit(3).all();
    return {
        article,
        recentArticles
    };
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/blog/BlogCatalog.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogCatalog",
    ()=>BlogCatalog
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BlogCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlogCatalog() from the server but BlogCatalog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/blog/BlogCatalog.tsx <module evaluation>", "BlogCatalog");
}),
"[project]/src/app/blog/BlogCatalog.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlogCatalog",
    ()=>BlogCatalog
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BlogCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BlogCatalog() from the server but BlogCatalog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/blog/BlogCatalog.tsx", "BlogCatalog");
}),
"[project]/src/app/blog/BlogCatalog.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/blog/BlogCatalog.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/blog/BlogCatalog.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/blog/BlogPage.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "BlogPage-module-scss-module__cg7Tpq__active",
  "bottom": "BlogPage-module-scss-module__cg7Tpq__bottom",
  "card": "BlogPage-module-scss-module__cg7Tpq__card",
  "cardTitle": "BlogPage-module-scss-module__cg7Tpq__cardTitle",
  "category": "BlogPage-module-scss-module__cg7Tpq__category",
  "content": "BlogPage-module-scss-module__cg7Tpq__content",
  "date": "BlogPage-module-scss-module__cg7Tpq__date",
  "empty": "BlogPage-module-scss-module__cg7Tpq__empty",
  "error": "BlogPage-module-scss-module__cg7Tpq__error",
  "excerpt": "BlogPage-module-scss-module__cg7Tpq__excerpt",
  "filterBtn": "BlogPage-module-scss-module__cg7Tpq__filterBtn",
  "filters": "BlogPage-module-scss-module__cg7Tpq__filters",
  "grid": "BlogPage-module-scss-module__cg7Tpq__grid",
  "header": "BlogPage-module-scss-module__cg7Tpq__header",
  "imageWrap": "BlogPage-module-scss-module__cg7Tpq__imageWrap",
  "loading": "BlogPage-module-scss-module__cg7Tpq__loading",
  "page": "BlogPage-module-scss-module__cg7Tpq__page",
  "placeholder": "BlogPage-module-scss-module__cg7Tpq__placeholder",
  "readMore": "BlogPage-module-scss-module__cg7Tpq__readMore",
  "subtitle": "BlogPage-module-scss-module__cg7Tpq__subtitle",
  "title": "BlogPage-module-scss-module__cg7Tpq__title",
});
}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>BlogCatalogPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/public.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/blog/BlogCatalog.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogPage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/blog/BlogPage.module.scss [app-rsc] (css module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const metadata = {
    title: "Блог о здоровье | Медис",
    description: "Полезные статьи от врачей клиники «Медис» в Махачкале.",
    openGraph: {
        title: "Блог о здоровье | Медис",
        description: "Полезные статьи от врачей клиники «Медис».",
        images: [
            {
                url: "/hero.webp"
            }
        ]
    }
};
async function BlogCatalogPage() {
    let data;
    try {
        data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicArticles"])();
    } catch  {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogPage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogPage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].error,
                children: "Ошибка загрузки"
            }, void 0, false, {
                fileName: "[project]/src/app/blog/page.tsx",
                lineNumber: 21,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/blog/page.tsx",
            lineNumber: 21,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f$BlogCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BlogCatalog"], {
        articles: data.articles,
        categories: data.categories
    }, void 0, false, {
        fileName: "[project]/src/app/blog/page.tsx",
        lineNumber: 24,
        columnNumber: 12
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/blog/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d9f998fa._.js.map