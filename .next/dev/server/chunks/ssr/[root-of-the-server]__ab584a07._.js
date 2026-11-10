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
"[project]/src/app/blog/[slug]/ShareButtons.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareButtons",
    ()=>ShareButtons
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ShareButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShareButtons() from the server but ShareButtons is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/blog/[slug]/ShareButtons.tsx <module evaluation>", "ShareButtons");
}),
"[project]/src/app/blog/[slug]/ShareButtons.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareButtons",
    ()=>ShareButtons
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ShareButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ShareButtons() from the server but ShareButtons is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/blog/[slug]/ShareButtons.tsx", "ShareButtons");
}),
"[project]/src/app/blog/[slug]/ShareButtons.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/blog/[slug]/ShareButtons.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/blog/[slug]/ShareButtons.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/blog/[slug]/ArticleDetail.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "article": "ArticleDetail-module-scss-module__7FWCNq__article",
  "breadcrumbs": "ArticleDetail-module-scss-module__7FWCNq__breadcrumbs",
  "category": "ArticleDetail-module-scss-module__7FWCNq__category",
  "content": "ArticleDetail-module-scss-module__7FWCNq__content",
  "cover": "ArticleDetail-module-scss-module__7FWCNq__cover",
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
"[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ArticleDetailPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/public.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/blog/[slug]/ShareButtons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/blog/[slug]/ArticleDetail.module.scss [app-rsc] (css module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params;
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicArticle"])(slug).catch(()=>null);
    if (!data) return {
        title: "Статья не найдена | Медис"
    };
    const title = `${data.article.title} | Блог Медис`;
    const description = data.article.excerpt || data.article.title;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: data.article.coverUrl || "/hero.webp"
                }
            ]
        }
    };
}
async function ArticleDetailPage({ params }) {
    const { slug } = await params;
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicArticle"])(slug).catch(()=>null);
    if (!data) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { article, recentArticles } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].breadcrumbs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Главная"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blog",
                        children: "Блог"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 39,
                        columnNumber: 49
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 39,
                        columnNumber: 82
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].article,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].header,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].category,
                                children: article.category?.title || "Статья"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].date,
                                children: [
                                    "Опубликовано: ",
                                    new Date(article.publishedAt || article.createdAt).toLocaleDateString("ru-RU", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric"
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    article.coverUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: article.coverUrl,
                        alt: article.title,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].cover
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                        children: article.content
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].footer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Поделиться статьей:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ShareButtons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ShareButtons"], {
                                title: article.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].ctaCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Подготовлено врачами Медис"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Материал носит информационный характер. Для диагноза и лечения запишитесь на приём в клинику."
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/appointments",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].ctaBtn,
                        children: "Записаться на прием"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            recentArticles && recentArticles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].recent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].recentTitle,
                        children: "Читайте также"
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].recentGrid,
                        children: recentArticles.filter((a)=>a.id !== article.id).map((rec)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${rec.slug}`,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$blog$2f5b$slug$5d2f$ArticleDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].recCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: rec.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: new Date(rec.publishedAt || rec.createdAt).toLocaleDateString("ru-RU")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, rec.id, true, {
                                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                                lineNumber: 76,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/blog/[slug]/page.tsx",
                lineNumber: 72,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/blog/[slug]/page.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab584a07._.js.map