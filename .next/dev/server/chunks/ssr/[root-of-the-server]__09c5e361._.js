module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/app/HomeView.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeView",
    ()=>HomeView
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HomeView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HomeView() from the server but HomeView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/HomeView.tsx <module evaluation>", "HomeView");
}),
"[project]/src/app/HomeView.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomeView",
    ()=>HomeView
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HomeView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HomeView() from the server but HomeView is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/HomeView.tsx", "HomeView");
}),
"[project]/src/app/HomeView.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomeView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/HomeView.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomeView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/app/HomeView.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomeView$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/HomePage.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "animateIn": "HomePage-module-scss-module__vQrwUa__animateIn",
  "articleCard": "HomePage-module-scss-module__vQrwUa__articleCard",
  "articleCategory": "HomePage-module-scss-module__vQrwUa__articleCategory",
  "articleDate": "HomePage-module-scss-module__vQrwUa__articleDate",
  "articleImage": "HomePage-module-scss-module__vQrwUa__articleImage",
  "articleInfo": "HomePage-module-scss-module__vQrwUa__articleInfo",
  "articleTitle": "HomePage-module-scss-module__vQrwUa__articleTitle",
  "articlesGrid": "HomePage-module-scss-module__vQrwUa__articlesGrid",
  "blob1": "HomePage-module-scss-module__vQrwUa__blob1",
  "blob2": "HomePage-module-scss-module__vQrwUa__blob2",
  "btnCta": "HomePage-module-scss-module__vQrwUa__btnCta",
  "btnPrimary": "HomePage-module-scss-module__vQrwUa__btnPrimary",
  "btnSecondary": "HomePage-module-scss-module__vQrwUa__btnSecondary",
  "contactHeader": "HomePage-module-scss-module__vQrwUa__contactHeader",
  "contactSubtitle": "HomePage-module-scss-module__vQrwUa__contactSubtitle",
  "ctaContent": "HomePage-module-scss-module__vQrwUa__ctaContent",
  "ctaSection": "HomePage-module-scss-module__vQrwUa__ctaSection",
  "ctaSubtitle": "HomePage-module-scss-module__vQrwUa__ctaSubtitle",
  "ctaTitle": "HomePage-module-scss-module__vQrwUa__ctaTitle",
  "doctorCard": "HomePage-module-scss-module__vQrwUa__doctorCard",
  "doctorExp": "HomePage-module-scss-module__vQrwUa__doctorExp",
  "doctorImage": "HomePage-module-scss-module__vQrwUa__doctorImage",
  "doctorInfo": "HomePage-module-scss-module__vQrwUa__doctorInfo",
  "doctorName": "HomePage-module-scss-module__vQrwUa__doctorName",
  "doctorPlaceholder": "HomePage-module-scss-module__vQrwUa__doctorPlaceholder",
  "doctorSpec": "HomePage-module-scss-module__vQrwUa__doctorSpec",
  "doctorsGrid": "HomePage-module-scss-module__vQrwUa__doctorsGrid",
  "error": "HomePage-module-scss-module__vQrwUa__error",
  "featureIcon": "HomePage-module-scss-module__vQrwUa__featureIcon",
  "featureItem": "HomePage-module-scss-module__vQrwUa__featureItem",
  "featuresGrid": "HomePage-module-scss-module__vQrwUa__featuresGrid",
  "hero": "HomePage-module-scss-module__vQrwUa__hero",
  "heroAccent": "HomePage-module-scss-module__vQrwUa__heroAccent",
  "heroActions": "HomePage-module-scss-module__vQrwUa__heroActions",
  "heroBadge": "HomePage-module-scss-module__vQrwUa__heroBadge",
  "heroContent": "HomePage-module-scss-module__vQrwUa__heroContent",
  "heroImage": "HomePage-module-scss-module__vQrwUa__heroImage",
  "heroImageWrapper": "HomePage-module-scss-module__vQrwUa__heroImageWrapper",
  "heroImg": "HomePage-module-scss-module__vQrwUa__heroImg",
  "heroMeta": "HomePage-module-scss-module__vQrwUa__heroMeta",
  "heroShift": "HomePage-module-scss-module__vQrwUa__heroShift",
  "heroSubtitle": "HomePage-module-scss-module__vQrwUa__heroSubtitle",
  "heroTitle": "HomePage-module-scss-module__vQrwUa__heroTitle",
  "linkAll": "HomePage-module-scss-module__vQrwUa__linkAll",
  "loading": "HomePage-module-scss-module__vQrwUa__loading",
  "mapWrapper": "HomePage-module-scss-module__vQrwUa__mapWrapper",
  "page": "HomePage-module-scss-module__vQrwUa__page",
  "reveal": "HomePage-module-scss-module__vQrwUa__reveal",
  "section": "HomePage-module-scss-module__vQrwUa__section",
  "sectionHeader": "HomePage-module-scss-module__vQrwUa__sectionHeader",
  "sectionTitle": "HomePage-module-scss-module__vQrwUa__sectionTitle",
  "serviceArrow": "HomePage-module-scss-module__vQrwUa__serviceArrow",
  "serviceBottom": "HomePage-module-scss-module__vQrwUa__serviceBottom",
  "serviceCard": "HomePage-module-scss-module__vQrwUa__serviceCard",
  "serviceCategory": "HomePage-module-scss-module__vQrwUa__serviceCategory",
  "servicePrice": "HomePage-module-scss-module__vQrwUa__servicePrice",
  "serviceTitle": "HomePage-module-scss-module__vQrwUa__serviceTitle",
  "serviceTop": "HomePage-module-scss-module__vQrwUa__serviceTop",
  "servicesGrid": "HomePage-module-scss-module__vQrwUa__servicesGrid",
});
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/public.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomeView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/HomeView.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Skeleton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomePage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/HomePage.module.scss [app-rsc] (css module)");
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
const metadata = {
    title: "Медис — клиника в Махачкале | Запись на прием",
    description: "Медицинский центр «Медис» в Махачкале. Платный приём врачей, диагностика и процедуры. Запись онлайн, работаем ежедневно с 09:00 до 23:00.",
    openGraph: {
        title: "Медис — клиника в Махачкале",
        description: "Запись к врачу онлайн. ул. Ахульго, 77. Ежедневно с 09:00 до 23:00.",
        images: [
            {
                url: "/hero.webp"
            }
        ],
        locale: "ru_RU",
        type: "website"
    }
};
async function HomeContent() {
    let data;
    try {
        data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHomeData"])();
    } catch  {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomePage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomePage$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].error,
                children: "Ошибка загрузки данных"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 25,
            columnNumber: 16
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$HomeView$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomeView"], {
        data: data
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 28,
        columnNumber: 12
    }, this);
}
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Skeleton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomeLoading"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 33,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeContent, {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__09c5e361._.js.map