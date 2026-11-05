(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/ReactQuery/query/admin/users/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteUser",
    ()=>useDeleteUser,
    "useGetUser",
    ()=>useGetUser,
    "useGetUsers",
    ()=>useGetUsers,
    "usePutUser",
    ()=>usePutUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
;
function useGetUsers() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "usersGet"
        ],
        queryFn: {
            "useGetUsers.useQuery": async ()=>{
                const response = await fetch("/api/admin/users", {
                    method: "GET"
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка получения пользователей");
                }
                return response.json();
            }
        }["useGetUsers.useQuery"]
    });
}
_s(useGetUsers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useGetUser(id) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "userGet",
            id
        ],
        queryFn: {
            "useGetUser.useQuery": async ()=>{
                const response = await fetch(`/api/admin/users/${id}`);
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка получения пользователя");
                }
                return response.json();
            }
        }["useGetUser.useQuery"],
        enabled: !!id
    });
}
_s1(useGetUser, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePutUser() {
    _s2();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "userPut"
        ],
        mutationFn: {
            "usePutUser.useMutation": async (data)=>{
                const { id, ...payload } = data;
                const response = await fetch(`/api/admin/users/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка обновления пользователя");
                }
                return response.json();
            }
        }["usePutUser.useMutation"],
        onSuccess: {
            "usePutUser.useMutation": (_, variables)=>{
                client.invalidateQueries({
                    queryKey: [
                        "usersGet"
                    ]
                });
                client.invalidateQueries({
                    queryKey: [
                        "userGet",
                        variables.id
                    ]
                });
            }
        }["usePutUser.useMutation"]
    });
}
_s2(usePutUser, "N9hHMCery2qbpCs8Wlv5Qz9CRK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteUser() {
    _s3();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "userDelete"
        ],
        mutationFn: {
            "useDeleteUser.useMutation": async (id)=>{
                const response = await fetch(`/api/admin/users/${id}`, {
                    method: "DELETE"
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка удаления пользователя");
                }
                return response.json();
            }
        }["useDeleteUser.useMutation"],
        onSuccess: {
            "useDeleteUser.useMutation": ()=>client.invalidateQueries({
                    queryKey: [
                        "usersGet"
                    ]
                })
        }["useDeleteUser.useMutation"]
    });
}
_s3(useDeleteUser, "N9hHMCery2qbpCs8Wlv5Qz9CRK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/ui/Modal/Modal.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "Modal-module-scss-module__EJwFSG__content",
  "dialog": "Modal-module-scss-module__EJwFSG__dialog",
});
}),
"[project]/src/app/components/ui/Modal/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Modal$2f$Modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Modal/Modal.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Modal({ children, isOpen, onClose }) {
    _s();
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const dialog = modalRef.current;
            if (!dialog) return;
            if (isOpen) {
                if (!dialog.open) dialog.showModal();
            } else {
                if (dialog.open) dialog.close();
            }
            return ({
                "Modal.useEffect": ()=>{
                    if (dialog.open) dialog.close();
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dialog", {
        ref: modalRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Modal$2f$Modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dialog,
        onClose: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Modal$2f$Modal$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/components/ui/Modal/Modal.tsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/Modal/Modal.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(Modal, "iXNJws+mDn9J+ZcpHudMXHGV85c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/users/UsersPage.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "UsersPage-module-scss-module__gIf3ha__actions",
  "backBtn": "UsersPage-module-scss-module__gIf3ha__backBtn",
  "banBtn": "UsersPage-module-scss-module__gIf3ha__banBtn",
  "cancelBtn": "UsersPage-module-scss-module__gIf3ha__cancelBtn",
  "empty": "UsersPage-module-scss-module__gIf3ha__empty",
  "error": "UsersPage-module-scss-module__gIf3ha__error",
  "field": "UsersPage-module-scss-module__gIf3ha__field",
  "form": "UsersPage-module-scss-module__gIf3ha__form",
  "header": "UsersPage-module-scss-module__gIf3ha__header",
  "headerLeft": "UsersPage-module-scss-module__gIf3ha__headerLeft",
  "input": "UsersPage-module-scss-module__gIf3ha__input",
  "label": "UsersPage-module-scss-module__gIf3ha__label",
  "loading": "UsersPage-module-scss-module__gIf3ha__loading",
  "modalActions": "UsersPage-module-scss-module__gIf3ha__modalActions",
  "modalTitle": "UsersPage-module-scss-module__gIf3ha__modalTitle",
  "page": "UsersPage-module-scss-module__gIf3ha__page",
  "phone": "UsersPage-module-scss-module__gIf3ha__phone",
  "serverError": "UsersPage-module-scss-module__gIf3ha__serverError",
  "status": "UsersPage-module-scss-module__gIf3ha__status",
  "statusActive": "UsersPage-module-scss-module__gIf3ha__statusActive",
  "statusInactive": "UsersPage-module-scss-module__gIf3ha__statusInactive",
  "submitBtn": "UsersPage-module-scss-module__gIf3ha__submitBtn",
  "table": "UsersPage-module-scss-module__gIf3ha__table",
  "tableWrap": "UsersPage-module-scss-module__gIf3ha__tableWrap",
  "title": "UsersPage-module-scss-module__gIf3ha__title",
  "unbanBtn": "UsersPage-module-scss-module__gIf3ha__unbanBtn",
});
}),
"[project]/src/lib/ReactQuery/query/admin/users/ban/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBannedUsers",
    ()=>useBannedUsers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useBannedUsers() {
    _s();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "userBannedMutation"
        ],
        mutationFn: {
            "useBannedUsers.useMutation": async (data)=>{
                const response = await fetch("/api/admin/users/ban", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка запроса бана/разбана пользователя");
                }
                return response.json();
            }
        }["useBannedUsers.useMutation"],
        onSuccess: {
            "useBannedUsers.useMutation": ()=>client.invalidateQueries({
                    queryKey: [
                        "usersGet"
                    ]
                })
        }["useBannedUsers.useMutation"]
    });
}
_s(useBannedUsers, "N9hHMCery2qbpCs8Wlv5Qz9CRK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/users/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UsersPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ReactQuery/query/admin/users/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ui/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/admin/users/UsersPage.module.scss [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$ban$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ReactQuery/query/admin/users/ban/query.ts [app-client] (ecmascript)");
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
;
;
const banSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    isBanned: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "true",
        "false"
    ]),
    bannedUntil: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    banReason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Укажите причину")
});
function UsersPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isOpenBan, setIsOpenBan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const usersGet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUsers"])();
    const banUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$ban$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBannedUsers"])();
    const deleteUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteUser"])();
    const { register, handleSubmit, formState: { errors }, reset, watch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(banSchema),
        defaultValues: {
            id: "",
            isBanned: "false",
            bannedUntil: "",
            banReason: ""
        }
    });
    const isBannedWatch = watch("isBanned");
    async function onSubmit(data) {
        const payload = {
            id: data.id,
            isBanned: data.isBanned,
            bannedUntil: data.isBanned === "true" ? data.bannedUntil : "",
            banReason: data.isBanned === "true" ? data.banReason : ""
        };
        banUser.mutate(payload, {
            onSuccess: ()=>{
                reset();
                setIsOpenBan(false);
            }
        });
    }
    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString("ru-RU", {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    function getBanStatus(user) {
        if (user.isBanned) {
            if (user.bannedUntil) return `До ${formatDate(user.bannedUntil)}`;
            return "Навсегда";
        }
        return "Активен";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].headerLeft,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].backBtn,
                            onClick: ()=>router.back(),
                            children: "← Назад"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/users/page.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                            children: "Пользователи"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/users/page.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/users/page.tsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/users/page.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            usersGet.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                children: "Загрузка пользователей..."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/users/page.tsx",
                lineNumber: 73,
                columnNumber: 36
            }, this),
            usersGet.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serverError,
                children: usersGet.error.message
            }, void 0, false, {
                fileName: "[project]/src/app/admin/users/page.tsx",
                lineNumber: 74,
                columnNumber: 34
            }, this),
            usersGet.data && usersGet.data.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                children: "Пользователей пока нет."
            }, void 0, false, {
                fileName: "[project]/src/app/admin/users/page.tsx",
                lineNumber: 75,
                columnNumber: 61
            }, this),
            usersGet.data && usersGet.data.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tableWrap,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].table,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Имя"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Контакты"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Роль"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Статус"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 85,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        children: "Действия"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/users/page.tsx",
                                lineNumber: 81,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/users/page.tsx",
                            lineNumber: 80,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: usersGet.data.map((user)=>{
                                const banStatus = getBanStatus(user);
                                const isBanned = banStatus !== "Активен";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/admin/users/${user.id}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].userLink,
                                                children: user.username || "—"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/users/page.tsx",
                                            lineNumber: 96,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: [
                                                user.email,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/admin/users/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].phone,
                                                    children: user.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/users/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/users/page.tsx",
                                            lineNumber: 101,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: user.role === "admin" ? "Админ" : "Пациент"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/users/page.tsx",
                                            lineNumber: 106,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].status} ${isBanned ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusInactive : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].statusActive}`,
                                                children: banStatus
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/users/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                                children: [
                                                    !isBanned ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].banBtn,
                                                        onClick: ()=>{
                                                            reset({
                                                                id: user.id,
                                                                isBanned: "true",
                                                                bannedUntil: "",
                                                                banReason: ""
                                                            });
                                                            setIsOpenBan(true);
                                                        },
                                                        children: "Забанить"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 53
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].unbanBtn,
                                                        onClick: ()=>{
                                                            reset({
                                                                id: user.id,
                                                                isBanned: "false",
                                                                bannedUntil: "",
                                                                banReason: "Разбан"
                                                            });
                                                            setIsOpenBan(true);
                                                        },
                                                        children: "Разбанить"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                                        onClick: ()=>{
                                                            if (confirm("Удалить пользователя? Все его записи и заявки будут удалены безвозвратно!")) {
                                                                deleteUser.mutate(user.id);
                                                            }
                                                        },
                                                        children: "🗑️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/users/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, user.id, true, {
                                    fileName: "[project]/src/app/admin/users/page.tsx",
                                    lineNumber: 95,
                                    columnNumber: 37
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/users/page.tsx",
                            lineNumber: 89,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/users/page.tsx",
                    lineNumber: 79,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/users/page.tsx",
                lineNumber: 78,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ui$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpenBan,
                onClose: ()=>setIsOpenBan(false),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalTitle,
                        children: isBannedWatch === "true" ? "Блокировка пользователя" : "Разблокировка пользователя"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/users/page.tsx",
                        lineNumber: 142,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].form,
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                ...register("id")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/users/page.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                ...register("isBanned")
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/users/page.tsx",
                                lineNumber: 147,
                                columnNumber: 21
                            }, this),
                            isBannedWatch === "true" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Причина бана"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                type: "text",
                                                ...register("banReason"),
                                                placeholder: "Например: Спам"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 33
                                            }, this),
                                            errors.banReason && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                                children: errors.banReason.message
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 54
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].field,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
                                                children: "Забанить до (пусто = навсегда)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                                                type: "date",
                                                ...register("bannedUntil")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/users/page.tsx",
                                                lineNumber: 158,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true),
                            banUser.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].serverError,
                                children: banUser.error.message
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/users/page.tsx",
                                lineNumber: 163,
                                columnNumber: 41
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].modalActions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submitBtn,
                                        type: "submit",
                                        disabled: banUser.isPending,
                                        children: banUser.isPending ? "Сохранение..." : isBannedWatch === "true" ? "Забанить" : "Разбанить"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 166,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$users$2f$UsersPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cancelBtn,
                                        type: "button",
                                        onClick: ()=>setIsOpenBan(false),
                                        children: "Отмена"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/users/page.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/users/page.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/users/page.tsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/users/page.tsx",
                lineNumber: 141,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/users/page.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(UsersPage, "XUZ1Ujp7hQTPicItGI3KdjekSzs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetUsers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$ban$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBannedUsers"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$users$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteUser"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = UsersPage;
var _c;
__turbopack_context__.k.register(_c, "UsersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_3283a562._.js.map