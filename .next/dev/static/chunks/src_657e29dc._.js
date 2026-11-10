(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/ReactQuery/query/public/appointments/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateAppointment",
    ()=>useCreateAppointment,
    "useGetBookingData",
    ()=>useGetBookingData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
function useGetBookingData() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "bookingData"
        ],
        queryFn: {
            "useGetBookingData.useQuery": async ()=>{
                const res = await fetch("/api/public/booking-data");
                if (!res.ok) throw new Error("Ошибка данных");
                return res.json();
            }
        }["useGetBookingData.useQuery"]
    });
}
_s(useGetBookingData, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateAppointment() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "createAppointment"
        ],
        mutationFn: {
            "useCreateAppointment.useMutation": async (data)=>{
                const res = await fetch("/api/public/appointments", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const json = await res.json();
                if (!res.ok) throw new Error(json.message || "Ошибка записи");
                return json;
            }
        }["useCreateAppointment.useMutation"]
    });
}
_s1(useCreateAppointment, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/appointments/AppointmentsPage.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "agreement": "AppointmentsPage-module-scss-module__qUn0nG__agreement",
  "agreementCheckbox": "AppointmentsPage-module-scss-module__qUn0nG__agreementCheckbox",
  "authActions": "AppointmentsPage-module-scss-module__qUn0nG__authActions",
  "btnPrimary": "AppointmentsPage-module-scss-module__qUn0nG__btnPrimary",
  "btnSecondary": "AppointmentsPage-module-scss-module__qUn0nG__btnSecondary",
  "contacts": "AppointmentsPage-module-scss-module__qUn0nG__contacts",
  "container": "AppointmentsPage-module-scss-module__qUn0nG__container",
  "error": "AppointmentsPage-module-scss-module__qUn0nG__error",
  "fadeIn": "AppointmentsPage-module-scss-module__qUn0nG__fadeIn",
  "field": "AppointmentsPage-module-scss-module__qUn0nG__field",
  "form": "AppointmentsPage-module-scss-module__qUn0nG__form",
  "formSection": "AppointmentsPage-module-scss-module__qUn0nG__formSection",
  "infoSection": "AppointmentsPage-module-scss-module__qUn0nG__infoSection",
  "input": "AppointmentsPage-module-scss-module__qUn0nG__input",
  "label": "AppointmentsPage-module-scss-module__qUn0nG__label",
  "loading": "AppointmentsPage-module-scss-module__qUn0nG__loading",
  "page": "AppointmentsPage-module-scss-module__qUn0nG__page",
  "phone": "AppointmentsPage-module-scss-module__qUn0nG__phone",
  "serverError": "AppointmentsPage-module-scss-module__qUn0nG__serverError",
  "subtitle": "AppointmentsPage-module-scss-module__qUn0nG__subtitle",
  "successCard": "AppointmentsPage-module-scss-module__qUn0nG__successCard",
  "successIcon": "AppointmentsPage-module-scss-module__qUn0nG__successIcon",
  "textarea": "AppointmentsPage-module-scss-module__qUn0nG__textarea",
  "title": "AppointmentsPage-module-scss-module__qUn0nG__title",
});
}),
"[project]/src/app/appointments/AppointmentsContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppointmentsContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$appointments$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ReactQuery/query/public/appointments/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/appointments/AppointmentsPage.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const bookingSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    doctorId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Выберите врача"),
    serviceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Выберите услугу"),
    date: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Укажите дату и время"),
    comment: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    agree: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].boolean().refine((val)=>val === true, "Необходимо согласие")
});
function AppointmentsContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { data: bookingData, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$appointments$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetBookingData"])();
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$appointments$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAppointment"])();
    const [isSuccess, setIsSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAuth, setIsAuth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { register, handleSubmit, formState: { errors }, setValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(bookingSchema),
        defaultValues: {
            doctorId: "",
            serviceId: "",
            date: "",
            comment: "",
            agree: false
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentsContent.useEffect": ()=>{
            fetch("/api/profile").then({
                "AppointmentsContent.useEffect": (res)=>setIsAuth(res.ok)
            }["AppointmentsContent.useEffect"]).catch({
                "AppointmentsContent.useEffect": ()=>setIsAuth(false)
            }["AppointmentsContent.useEffect"]);
        }
    }["AppointmentsContent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentsContent.useEffect": ()=>{
            const doc = searchParams.get("doctor");
            const srv = searchParams.get("service");
            if (doc) setValue("doctorId", doc);
            if (srv) setValue("serviceId", srv);
        }
    }["AppointmentsContent.useEffect"], [
        searchParams,
        setValue
    ]);
    async function onSubmit(data) {
        const { agree: _agree, ...payload } = data;
        createMutation.mutate(payload, {
            onSuccess: ()=>setIsSuccess(true)
        });
    }
    if (isAuth === null || isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
        children: "Загрузка формы..."
    }, void 0, false, {
        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
        lineNumber: 54,
        columnNumber: 46
    }, this);
    if (!isAuth) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Войдите, чтобы записаться"
                    }, void 0, false, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 60,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Запись на прием доступна в личном кабинете. Если аккаунта ещё нет — регистрация займёт минуту."
                    }, void 0, false, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "tel:+79285558818",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phone,
                        children: "+7 (928) 555-88-18"
                    }, void 0, false, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].authActions,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/login",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary,
                                children: "Войти"
                            }, void 0, false, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnSecondary,
                                children: "Создать аккаунт"
                            }, void 0, false, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 63,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                lineNumber: 59,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
            lineNumber: 58,
            columnNumber: 13
        }, this);
    }
    if (isSuccess) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successCard,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].successIcon,
                        children: "✓"
                    }, void 0, false, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Заявка принята"
                    }, void 0, false, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Администратор свяжется с вами, чтобы подтвердить удобное время приёма."
                    }, void 0, false, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/profile"),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary,
                        children: "Перейти в профиль"
                    }, void 0, false, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                lineNumber: 75,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
            lineNumber: 74,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].infoSection,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Запись на прием"
                        }, void 0, false, {
                            fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].subtitle,
                            children: "Выберите удобное время и специалиста. Мы позаботимся о вашем здоровье."
                        }, void 0, false, {
                            fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contacts,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Или запишитесь по телефону:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                    lineNumber: 92,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "tel:+79285558818",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phone,
                                    children: "+7 (928) 555-88-18"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                    lineNumber: 93,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formSection,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Специалист"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 100,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        ...register("doctorId"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— Выберите врача —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                                lineNumber: 102,
                                                columnNumber: 33
                                            }, this),
                                            bookingData?.doctors.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: doc.id,
                                                    children: [
                                                        doc.name,
                                                        " (",
                                                        doc.specialization,
                                                        ")"
                                                    ]
                                                }, doc.id, true, {
                                                    fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this),
                                    errors.doctorId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                        children: errors.doctorId.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 107,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Услуга"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 111,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        ...register("serviceId"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "— Выберите услугу —"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                                lineNumber: 113,
                                                columnNumber: 33
                                            }, this),
                                            bookingData?.services.map((srv)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: srv.id,
                                                    children: srv.title
                                                }, srv.id, false, {
                                                    fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 37
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 112,
                                        columnNumber: 29
                                    }, this),
                                    errors.serviceId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                        children: errors.serviceId.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 118,
                                        columnNumber: 50
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Желаемая дата и время"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 122,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "datetime-local",
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                        ...register("date")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 123,
                                        columnNumber: 29
                                    }, this),
                                    errors.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                        children: errors.date.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 124,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 121,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                        children: "Комментарий (необязательно)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textarea,
                                        rows: 3,
                                        placeholder: "Опишите жалобы или пожелания",
                                        ...register("comment")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 129,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, this),
                            createMutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serverError,
                                children: createMutation.error.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 133,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].agreementCheckbox,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "agree",
                                        ...register("agree")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 137,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "agree",
                                        children: [
                                            "Я согласен на обработку персональных данных и принимаю условия",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy",
                                                target: "_blank",
                                                children: "Политики конфиденциальности"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                                lineNumber: 140,
                                                columnNumber: 33
                                            }, this),
                                            " и",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/consent",
                                                target: "_blank",
                                                children: "Согласия на обработку ПД"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                                lineNumber: 141,
                                                columnNumber: 33
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 136,
                                columnNumber: 25
                            }, this),
                            errors.agree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                children: errors.agree.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 144,
                                columnNumber: 42
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$appointments$2f$AppointmentsPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnPrimary,
                                disabled: createMutation.isPending,
                                children: createMutation.isPending ? "Отправка..." : "Записаться на прием"
                            }, void 0, false, {
                                fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                                lineNumber: 146,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
            lineNumber: 87,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/appointments/AppointmentsContent.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
_s(AppointmentsContent, "RKD1SRo/LQ3weLLdZhn6EonPF1c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$appointments$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetBookingData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$public$2f$appointments$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateAppointment"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = AppointmentsContent;
var _c;
__turbopack_context__.k.register(_c, "AppointmentsContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_657e29dc._.js.map