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
"[project]/src/app/services/[slug]/ServiceDetail.module.scss [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "avatarPlaceholder": "ServiceDetail-module-scss-module__7Z8h8q__avatarPlaceholder",
  "breadcrumbs": "ServiceDetail-module-scss-module__7Z8h8q__breadcrumbs",
  "btnCall": "ServiceDetail-module-scss-module__7Z8h8q__btnCall",
  "btnPrimary": "ServiceDetail-module-scss-module__7Z8h8q__btnPrimary",
  "category": "ServiceDetail-module-scss-module__7Z8h8q__category",
  "content": "ServiceDetail-module-scss-module__7Z8h8q__content",
  "docName": "ServiceDetail-module-scss-module__7Z8h8q__docName",
  "docSpec": "ServiceDetail-module-scss-module__7Z8h8q__docSpec",
  "doctorMini": "ServiceDetail-module-scss-module__7Z8h8q__doctorMini",
  "doctorsBlock": "ServiceDetail-module-scss-module__7Z8h8q__doctorsBlock",
  "doctorsGrid": "ServiceDetail-module-scss-module__7Z8h8q__doctorsGrid",
  "duration": "ServiceDetail-module-scss-module__7Z8h8q__duration",
  "image": "ServiceDetail-module-scss-module__7Z8h8q__image",
  "infoBlock": "ServiceDetail-module-scss-module__7Z8h8q__infoBlock",
  "infoBlocks": "ServiceDetail-module-scss-module__7Z8h8q__infoBlocks",
  "layout": "ServiceDetail-module-scss-module__7Z8h8q__layout",
  "mainContent": "ServiceDetail-module-scss-module__7Z8h8q__mainContent",
  "omsInfo": "ServiceDetail-module-scss-module__7Z8h8q__omsInfo",
  "omsNo": "ServiceDetail-module-scss-module__7Z8h8q__omsNo",
  "omsYes": "ServiceDetail-module-scss-module__7Z8h8q__omsYes",
  "page": "ServiceDetail-module-scss-module__7Z8h8q__page",
  "priceCard": "ServiceDetail-module-scss-module__7Z8h8q__priceCard",
  "priceLabel": "ServiceDetail-module-scss-module__7Z8h8q__priceLabel",
  "priceValue": "ServiceDetail-module-scss-module__7Z8h8q__priceValue",
  "sidebar": "ServiceDetail-module-scss-module__7Z8h8q__sidebar",
  "subTitle": "ServiceDetail-module-scss-module__7Z8h8q__subTitle",
  "title": "ServiceDetail-module-scss-module__7Z8h8q__title",
});
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>ServiceDetailPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/public.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/services/[slug]/ServiceDetail.module.scss [app-rsc] (css module)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
async function generateMetadata({ params }) {
    const { slug } = await params;
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicService"])(slug).catch(()=>null);
    if (!data) return {
        title: "Услуга не найдена | Медис"
    };
    const title = `${data.service.title} | Медис`;
    const description = data.service.description || `Запись на услугу «${data.service.title}» в клинике Медис, Махачкала.`;
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: data.service.imageUrl || "/hero.webp"
                }
            ]
        }
    };
}
async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$public$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicService"])(slug).catch(()=>null);
    if (!data) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { service, doctors } = data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].breadcrumbs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Главная"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/services",
                        children: "Услуги"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 49
                    }, this),
                    " / ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: service.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 38,
                        columnNumber: 88
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mainContent,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                                children: service.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].category,
                                children: service.category?.title
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            service.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: service.imageUrl,
                                alt: service.title,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].image
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].content,
                                children: service.content || service.description || "Описание услуги скоро появится."
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].infoBlocks,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].infoBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Что входит"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: service.description || "Консультация врача, осмотр и рекомендации по лечению. Точный состав приёма уточнит специалист на месте."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].infoBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                children: "Как подготовиться"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Возьмите паспорт и полис ОМС (если есть). На анализы крови лучше приходить натощак, если врач не указал иное. О переносе записи предупредите администратора заранее по телефону +7 (928) 555-88-18."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 63,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            doctors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].doctorsBlock,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].subTitle,
                                        children: "Эту услугу оказывают:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].doctorsGrid,
                                        children: doctors.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/doctors/${doc.slug}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].doctorMini,
                                                children: [
                                                    doc.photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: doc.photoUrl,
                                                        alt: doc.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 57
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].avatarPlaceholder,
                                                        children: doc.name[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 101
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].docName,
                                                                children: doc.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].docSpec,
                                                                children: doc.specialization
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, doc.id, true, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].sidebar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].priceCard,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].priceLabel,
                                    children: "Стоимость:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].priceValue,
                                    children: service.price ? service.priceFrom ? `от ${service.price} ₽` : `${service.price} ₽` : "По запросу"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 25
                                }, this),
                                service.duration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].duration,
                                    children: [
                                        "~",
                                        service.duration,
                                        " минут"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 93,
                                    columnNumber: 46
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/appointments?service=${service.id}`,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].btnPrimary,
                                    children: "Записаться на прием"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+79285558818",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].btnCall,
                                    children: "Позвонить"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].omsInfo} ${service.isOms ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].omsYes : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$services$2f5b$slug$5d2f$ServiceDetail$2e$module$2e$scss__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].omsNo}`,
                                    children: service.isOms ? "Доступно по ОМС" : "Оказывается на платной основе"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[slug]/page.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d125549e._.js.map