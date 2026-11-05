module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/src/prisma/contract.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"schemaVersion":"1","targetFamily":"sql","target":"postgres","profileHash":"3916f444a8a17ad749191acf9e08dad97d1a327b88c2f1d45d12f240296aa8b2","roots":{"users":{"model":"Users","namespace":"public"}},"domain":{"namespaces":{"public":{"enum":{"UserRole":{"codecId":"pg/text@1","members":[{"name":"Patient","value":"patient"},{"name":"Doctor","value":"doctor"},{"name":"Admin","value":"admin"}]}},"models":{"Users":{"fields":{"createdAt":{"nullable":false,"type":{"codecId":"pg/timestamptz-string@1","kind":"scalar"}},"email":{"nullable":false,"type":{"codecId":"pg/text@1","kind":"scalar"}},"id":{"nullable":false,"type":{"codecId":"pg/uuid@1","kind":"scalar"}},"password":{"nullable":false,"type":{"codecId":"pg/text@1","kind":"scalar"}},"phone":{"nullable":false,"type":{"codecId":"pg/text@1","kind":"scalar"}},"role":{"nullable":false,"type":{"codecId":"pg/text@1","kind":"scalar"},"valueSet":{"entityKind":"enum","entityName":"UserRole","namespaceId":"public","plane":"domain"}},"updatedAt":{"nullable":false,"type":{"codecId":"pg/timestamptz-string@1","kind":"scalar"}},"username":{"nullable":true,"type":{"codecId":"pg/text@1","kind":"scalar"}}},"relations":{},"storage":{"fields":{"createdAt":{"column":"createdAt"},"email":{"column":"email"},"id":{"column":"id"},"password":{"column":"password"},"phone":{"column":"phone"},"role":{"column":"role"},"updatedAt":{"column":"updatedAt"},"username":{"column":"username"}},"namespaceId":"public","table":"users"}}}}}},"storage":{"namespaces":{"public":{"entries":{"table":{"users":{"checks":[{"expression":"\"role\" IN ('patient', 'doctor', 'admin')","name":"users_role_check_323ff4a9","prefix":"users_role_check"}],"columns":{"createdAt":{"codecId":"pg/timestamptz-string@1","default":{"expression":"now()","kind":"function"},"nativeType":"timestamptz","nullable":false},"email":{"codecId":"pg/text@1","nativeType":"text","nullable":false},"id":{"codecId":"pg/uuid@1","nativeType":"uuid","nullable":false},"password":{"codecId":"pg/text@1","nativeType":"text","nullable":false},"phone":{"codecId":"pg/text@1","nativeType":"text","nullable":false},"role":{"codecId":"pg/text@1","default":{"kind":"literal","value":"patient"},"nativeType":"text","nullable":false,"valueSet":{"entityKind":"valueSet","entityName":"UserRole","namespaceId":"public","plane":"storage"}},"updatedAt":{"codecId":"pg/timestamptz-string@1","nativeType":"timestamptz","nullable":false},"username":{"codecId":"pg/text@1","nativeType":"text","nullable":true}},"foreignKeys":[],"indexes":[],"primaryKey":{"columns":["id"]},"uniques":[{"columns":["email"]},{"columns":["phone"]}]}},"valueSet":{"UserRole":{"kind":"valueSet","values":["patient","doctor","admin"]}}},"id":"public","kind":"postgres-schema"}},"storageHash":"fc4c6fc041fdaa5af3ed8386a81553ca1077e4bcd3ba65bef89ce65208eba263"},"execution":{"executionHash":"a99328058156336970409f55a6b3c1416a432c68807c6d4c7c7de6a173060e02","mutations":{"defaults":[{"onCreate":{"id":"uuidv4","kind":"generator"},"ref":{"column":"id","namespace":"public","table":"users"}},{"onCreate":{"id":"timestampNow","kind":"generator"},"onUpdate":{"id":"timestampNow","kind":"generator"},"ref":{"column":"updatedAt","namespace":"public","table":"users"}}]}},"capabilities":{"postgres":{"distinctOn":true,"jsonAgg":true,"lateral":true,"limit":true,"orderBy":true,"returning":true},"sql":{"checkConstraint":true,"defaultInInsert":true,"enums":true,"insertOnConflictSkip":true,"insertOnConflictWithoutTarget":true,"lateral":true,"returning":true,"scalarList":true}},"extensions":{},"meta":{},"_generated":{"warning":"⚠️  GENERATED FILE - DO NOT EDIT","message":"This file is automatically generated by \"prisma contract emit\".","regenerate":"To regenerate, run: prisma contract emit"}});}),
"[project]/src/prisma/composer.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "appContract",
    ()=>appContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/orm.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__dataContract$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-route] (ecmascript) <export n as dataContract>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/prisma/contract.json (json)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__dataContract$3e$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__dataContract$3e$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const appContract = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__n__as__dataContract$3e$__["dataContract"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__["default"]);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/service.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$nextjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer/dist/nextjs.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/orm.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__postgres$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/composer-prisma-cloud/dist/orm-postgres-ChW2Ewj7-Dnas0G3L.mjs [app-route] (ecmascript) <export i as postgres>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/prisma/composer.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__postgres$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__postgres$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("service.ts")}`;
    }
};
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compute"])({
    name: "app",
    deps: {
        database: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2d$prisma$2d$cloud$2f$dist$2f$orm$2d$postgres$2d$ChW2Ewj7$2d$Dnas0G3L$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__i__as__postgres$3e$__["postgres"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$composer$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appContract"])
    },
    build: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$composer$2f$dist$2f$nextjs$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
        module: __TURBOPACK__import$2e$meta__.url,
        appDir: "."
    })
});
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/prisma/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "connectDatabase",
    ()=>connectDatabase,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@prisma/orm-postgres/dist/runtime.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$temporal$2d$polyfill$2f$global$2e$esm$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/temporal-polyfill/global.esm.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/service.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/prisma/contract.json (json)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
function loadComposerDatabase() {
    try {
        return __TURBOPACK__imported__module__$5b$project$5d2f$service$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].load().database.client;
    } catch  {
        return undefined;
    }
}
const db = loadComposerDatabase() ?? (process.env.DATABASE_URL ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    contractJson: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__["default"],
    url: process.env.DATABASE_URL
}) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$orm$2d$postgres$2f$dist$2f$runtime$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    contractJson: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$contract$2e$json__$28$json$29$__["default"]
}));
let connection;
function connectDatabase() {
    connection ??= db.connect().then(()=>undefined).catch((error)=>{
        connection = undefined;
        throw error;
    });
    return connection;
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/app/api/auth/register/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/prisma/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
async function POST(req) {
    try {
        const { email, phone, username, password } = await req.json();
        if (!email || !phone || !username || !password) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Не полные поля"
        }, {
            status: 400
        });
        const existsEmail = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].orm.public.Users.where({
            email
        }).first();
        if (existsEmail) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Такая почта уже используется!"
        }, {
            status: 409
        });
        const existsPhone = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].orm.public.Users.where({
            phone
        }).first();
        if (existsPhone) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Такой номер уже используется!"
        }, {
            status: 409
        });
        const hashPassword = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, 10);
        const newUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$prisma$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].orm.public.Users.create({
            email,
            phone,
            username,
            password: hashPassword
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Успешная регистрация!"
        }, {
            status: 201
        });
    } catch (error) {
        console.log(error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Ошибка сервера регистрации"
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4edf197d._.js.map