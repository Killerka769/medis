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
"[project]/src/app/services/ServicesCatalog.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesCatalog",
    ()=>ServicesCatalog
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServicesCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServicesCatalog() from the server but ServicesCatalog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/services/ServicesCatalog.tsx <module evaluation>", "ServicesCatalog");
}),
"[project]/src/app/services/ServicesCatalog.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServicesCatalog",
    ()=>ServicesCatalog
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServicesCatalog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServicesCatalog() from the server but ServicesCatalog is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/services/ServicesCatalog.tsx", "ServicesCatalog");
}),
"[project]/src/app/services/ServicesCatalog.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/services/ServicesCatalog.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/services/ServicesCatalog.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/services/ServicesPage.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

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
"[project]/src/app/services/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ServicesCatalogPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/public.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/services/ServicesCatalog.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/services/ServicesPage.module.scss [app-rsc] (css module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
const metadata = {
    title: "Услуги клиники Медис в Махачкале",
    description: "Приёмы, диагностика и анализы в медицинском центре «Медис». Цены открыты, запись онлайн.",
    openGraph: {
        title: "Услуги клиники Медис",
        description: "Приёмы, диагностика и анализы. Запись онлайн в Махачкале.",
        images: [
            {
                url: "/hero.webp"
            }
        ]
    }
};
async function ServicesCatalogPage() {
    let data;
    try {
        data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicServices"])();
    } catch  {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesPage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].error,
                children: "Ошибка загрузки"
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 21,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/services/page.tsx",
            lineNumber: 21,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f$ServicesCatalog$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServicesCatalog"], {
        services: data.services,
        categories: data.categories
    }, void 0, false, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 24,
        columnNumber: 12
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/services/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__71d8bc99._.js.map