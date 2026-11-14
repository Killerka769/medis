(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/ReactQuery/query/admin/media/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteMedia",
    ()=>useDeleteMedia,
    "useGetMedia",
    ()=>useGetMedia,
    "usePostMedia",
    ()=>usePostMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
function useGetMedia(folder) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "mediaGet",
            folder
        ],
        queryFn: {
            "useGetMedia.useQuery": async ()=>{
                const response = await fetch(`/api/admin/media?folder=${encodeURIComponent(folder)}`, {
                    method: "GET"
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка запроса медиатеки");
                }
                return response.json();
            }
        }["useGetMedia.useQuery"],
        enabled: true
    });
}
_s(useGetMedia, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function usePostMedia() {
    _s1();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "mediaPost"
        ],
        mutationFn: {
            "usePostMedia.useMutation": async (data)=>{
                const formData = new FormData();
                formData.append("file", data.file);
                formData.append("folder", data.folder);
                const response = await fetch("/api/admin/media", {
                    method: "POST",
                    body: formData
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка загрузки файла");
                }
                return response.json();
            }
        }["usePostMedia.useMutation"],
        onSuccess: {
            "usePostMedia.useMutation": ()=>client.invalidateQueries({
                    queryKey: [
                        "mediaGet"
                    ]
                })
        }["usePostMedia.useMutation"]
    });
}
_s1(usePostMedia, "N9hHMCery2qbpCs8Wlv5Qz9CRK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteMedia() {
    _s2();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "mediaDelete"
        ],
        mutationFn: {
            "useDeleteMedia.useMutation": async (data)=>{
                const response = await fetch("/api/admin/media", {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка удаления");
                }
                return response.json();
            }
        }["useDeleteMedia.useMutation"],
        onSuccess: {
            "useDeleteMedia.useMutation": ()=>client.invalidateQueries({
                    queryKey: [
                        "mediaGet"
                    ]
                })
        }["useDeleteMedia.useMutation"]
    });
}
_s2(useDeleteMedia, "N9hHMCery2qbpCs8Wlv5Qz9CRK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/ReactQuery/query/admin/media/folder/query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePostFolder",
    ()=>usePostFolder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function usePostFolder() {
    _s();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationKey: [
            "folderMutation"
        ],
        mutationFn: {
            "usePostFolder.useMutation": async (data)=>{
                const response = await fetch("/api/admin/media/folder", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
                if (!response.ok) {
                    const error = await response.json();
                    throw new Error(error.message || "Ошибка запроса создания папки");
                }
                return response.json();
            }
        }["usePostFolder.useMutation"],
        onSuccess: {
            "usePostFolder.useMutation": ()=>client.invalidateQueries({
                    queryKey: [
                        "mediaGet"
                    ]
                })
        }["usePostFolder.useMutation"]
    });
}
_s(usePostFolder, "N9hHMCery2qbpCs8Wlv5Qz9CRK4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/media/MediaPage.module.scss [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "MediaPage-module-scss-module__ENyfTG__actions",
  "breadcrumbs": "MediaPage-module-scss-module__ENyfTG__breadcrumbs",
  "btn": "MediaPage-module-scss-module__ENyfTG__btn",
  "btnOutline": "MediaPage-module-scss-module__ENyfTG__btnOutline",
  "card": "MediaPage-module-scss-module__ENyfTG__card",
  "copyBtn": "MediaPage-module-scss-module__ENyfTG__copyBtn",
  "crumb": "MediaPage-module-scss-module__ENyfTG__crumb",
  "deleteBtn": "MediaPage-module-scss-module__ENyfTG__deleteBtn",
  "empty": "MediaPage-module-scss-module__ENyfTG__empty",
  "fileIcon": "MediaPage-module-scss-module__ENyfTG__fileIcon",
  "folderIcon": "MediaPage-module-scss-module__ENyfTG__folderIcon",
  "grid": "MediaPage-module-scss-module__ENyfTG__grid",
  "header": "MediaPage-module-scss-module__ENyfTG__header",
  "info": "MediaPage-module-scss-module__ENyfTG__info",
  "layout": "MediaPage-module-scss-module__ENyfTG__layout",
  "loading": "MediaPage-module-scss-module__ENyfTG__loading",
  "name": "MediaPage-module-scss-module__ENyfTG__name",
  "page": "MediaPage-module-scss-module__ENyfTG__page",
  "preview": "MediaPage-module-scss-module__ENyfTG__preview",
  "separator": "MediaPage-module-scss-module__ENyfTG__separator",
  "title": "MediaPage-module-scss-module__ENyfTG__title",
  "toolbar": "MediaPage-module-scss-module__ENyfTG__toolbar",
});
}),
"[project]/src/app/admin/media/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ReactQuery/query/admin/media/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$folder$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ReactQuery/query/admin/media/folder/query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/admin/media/MediaPage.module.scss [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MediaPage() {
    _s();
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const mediaGet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMedia"])(currentPath);
    const postMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostMedia"])();
    const postFolder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$folder$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostFolder"])();
    const deleteMedia = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteMedia"])(); // <-- Добавили хук
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathParts = currentPath.split("/").filter(Boolean);
    function handleBreadcrumbClick(index) {
        if (index === -1) setCurrentPath("");
        else setCurrentPath(pathParts.slice(0, index + 1).join("/"));
    }
    function handleFileUpload(e) {
        const file = e.target.files?.[0];
        if (!file) return;
        postMedia.mutate({
            file,
            folder: currentPath
        }, {
            onSuccess: ()=>{
                if (fileInputRef.current) fileInputRef.current.value = "";
            }
        });
    }
    function handleCreateFolder() {
        const name = prompt("Введите название новой папки:");
        if (!name) return;
        postFolder.mutate({
            name,
            currentPath
        });
    }
    function handleDelete(media) {
        const msg = media.isFolder ? `Удалить папку "${media.name}" и ВСЁ её содержимое?` : `Удалить файл "${media.name}"?`;
        if (confirm(msg)) {
            deleteMedia.mutate({
                path: media.path,
                isFolder: media.isFolder
            });
        }
    }
    function copyLink(url) {
        navigator.clipboard.writeText(window.location.origin + url);
        alert("Ссылка скопирована!");
    }
    function isImage(filename) {
        return /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(filename);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                    children: "Медиатека"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/media/page.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/media/page.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].layout,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toolbar,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].breadcrumbs,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        onClick: ()=>handleBreadcrumbClick(-1),
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].crumb,
                                        children: "Корень"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/media/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this),
                                    pathParts.map((part, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].separator,
                                                    children: "/"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/media/page.tsx",
                                                    lineNumber: 75,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>handleBreadcrumbClick(index),
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].crumb,
                                                    children: part
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/media/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/app/admin/media/page.tsx",
                                            lineNumber: 74,
                                            columnNumber: 29
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/media/page.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actions,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btnOutline,
                                        onClick: handleCreateFolder,
                                        disabled: postFolder.isPending,
                                        children: "+ Папка"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/media/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        ref: fileInputRef,
                                        onChange: handleFileUpload,
                                        style: {
                                            display: "none"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/media/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                                        onClick: ()=>fileInputRef.current?.click(),
                                        disabled: postMedia.isPending,
                                        children: postMedia.isPending ? "Загрузка..." : "Загрузить файл"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/media/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/media/page.tsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/media/page.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    mediaGet.isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loading,
                        children: "Загрузка файлов..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/media/page.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this) : mediaGet.data && mediaGet.data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].grid,
                        children: mediaGet.data.map((media)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].deleteBtn,
                                        onClick: ()=>handleDelete(media),
                                        title: "Удалить",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/media/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].preview,
                                        onClick: ()=>{
                                            if (media.isFolder) setCurrentPath(media.path);
                                        },
                                        style: {
                                            cursor: media.isFolder ? "pointer" : "default"
                                        },
                                        children: media.isFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].folderIcon,
                                            children: "📁"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/media/page.tsx",
                                            lineNumber: 114,
                                            columnNumber: 41
                                        }, this) : isImage(media.name) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: media.url,
                                            alt: media.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/media/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 41
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fileIcon,
                                            children: "📄"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/media/page.tsx",
                                            lineNumber: 118,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/media/page.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].info,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].name,
                                                title: media.name,
                                                children: media.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/media/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 37
                                            }, this),
                                            !media.isFolder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].copyBtn,
                                                onClick: ()=>copyLink(media.url),
                                                children: "Копировать URL"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/media/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/media/page.tsx",
                                        lineNumber: 121,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, media.name, true, {
                                fileName: "[project]/src/app/admin/media/page.tsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/media/page.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$media$2f$MediaPage$2e$module$2e$scss__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].empty,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "В этой папке пока пусто"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/media/page.tsx",
                            lineNumber: 134,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/media/page.tsx",
                        lineNumber: 133,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/media/page.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/media/page.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_s(MediaPage, "qLVCpC5sqgQvQsTulHLtDl4A9Vg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostMedia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$folder$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePostFolder"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ReactQuery$2f$query$2f$admin$2f$media$2f$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteMedia"]
    ];
});
_c = MediaPage;
var _c;
__turbopack_context__.k.register(_c, "MediaPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MutationObserver",
    ()=>MutationObserver
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/mutation.js [app-client] (ecmascript)");
;
;
;
;
//#region src/mutationObserver.ts
/**
* Observes a single mutation and derives a `MutationObserverResult` from it.
* A framework hook like `useMutation` creates one `MutationObserver` per hook
* call, keeps it stable across re-renders, calls `setOptions` when the options
* passed to the hook change, subscribes to it to re-render on updates, and
* reads `getCurrentResult()` for the value to return. Calling `mutate()`
* builds a new underlying `Mutation` in the `MutationCache` and executes it.
*
* @example
* ```ts
* const observer = new MutationObserver(queryClient, {
*   mutationFn: (variables: { title: string }) => addPost(variables),
* })
* ```
*/ var MutationObserver = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Subscribable"] {
    #client;
    #currentResult = void 0;
    #currentMutation;
    #mutateOptions;
    constructor(client, options){
        super();
        this.#client = client;
        this.setOptions(options);
        this.bindMethods();
        this.#updateResult();
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this);
        this.reset = this.reset.bind(this);
    }
    /**
	* Updates the observer's options.
	*
	* If the new `mutationKey` differs from the previous one (and both were
	* defined), the observer is reset, detaching it from the mutation it was
	* observing. Otherwise, if the currently observed mutation is still
	* `pending`, its options are updated in place as well.
	*
	* @example
	* ```ts
	* observer.setOptions({
	*   mutationFn: (variables: { title: string }) => addPost(variables),
	*   onSuccess: (data) => console.log(data),
	* })
	* ```
	*/ setOptions(options) {
        const prevOptions = this.options;
        this.options = this.#client.defaultMutationOptions(options);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowEqualObjects"])(this.options, prevOptions)) this.#client.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#currentMutation,
            observer: this
        });
        if (prevOptions?.mutationKey && this.options.mutationKey && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(prevOptions.mutationKey) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashKey"])(this.options.mutationKey)) this.reset();
        else if (this.#currentMutation?.state.status === "pending") this.#currentMutation.setOptions(this.options);
    }
    onSubscribe() {
        if (this.listeners.size === 1 && this.#currentMutation) {
            this.#currentMutation.addObserver(this);
            this.#updateResult();
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) this.#currentMutation?.removeObserver(this);
    }
    /** @internal */ onMutationUpdate(action) {
        this.#updateResult();
        this.#notify(action);
    }
    /**
	* Returns the observer's current result, derived from the observed
	* mutation's state (or the default, `idle` state if no mutation has been
	* built yet, e.g. before the first `mutate()` call or after `reset()`).
	*/ getCurrentResult() {
        return this.#currentResult;
    }
    /**
	* Detaches the observer from the mutation it is currently observing (if
	* any) and resets the observed result back to its default, `idle` state.
	*
	* This does not cancel an in-flight mutation; the mutation itself keeps
	* running to completion and its own callbacks still fire, but this
	* observer stops reflecting its state and a subsequent `mutate()` call
	* will build a brand new mutation.
	*
	* @example
	* ```ts
	* observer.reset()
	* ```
	*
	* @see {@link MutationObserver#mutate}
	*/ reset() {
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = void 0;
        this.#updateResult();
        this.#notify();
    }
    /**
	* Builds a new `Mutation` in the `MutationCache` using the observer's
	* current options, detaches this observer from any previously observed
	* mutation, attaches it to the new one, and executes it with the given
	* variables.
	*
	* The optional per-call `options` (`onSuccess`/`onError`/`onSettled`) are
	* invoked once the mutation settles, in addition to any callbacks defined
	* on the observer's own options.
	*
	* @example
	* ```ts
	* await observer.mutate(
	*   { title: 'New post' },
	*   { onSuccess: (data) => console.log(data) },
	* )
	* ```
	*/ mutate(variables, options) {
        this.#mutateOptions = options;
        this.#currentMutation?.removeObserver(this);
        this.#currentMutation = this.#client.getMutationCache().build(this.#client, this.options);
        this.#currentMutation.addObserver(this);
        return this.#currentMutation.execute(variables);
    }
    #updateResult() {
        const state = this.#currentMutation?.state ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultState"])();
        this.#currentResult = {
            ...state,
            isPending: state.status === "pending",
            isSuccess: state.status === "success",
            isError: state.status === "error",
            isIdle: state.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        };
    }
    #notify(action) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            if (this.#mutateOptions && this.hasListeners()) {
                const variables = this.#currentResult.variables;
                const onMutateResult = this.#currentResult.context;
                const context = {
                    client: this.#client,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                if (action?.type === "success") {
                    try {
                        this.#mutateOptions.onSuccess?.(action.data, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(action.data, null, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                } else if (action?.type === "error") {
                    try {
                        this.#mutateOptions.onError?.(action.error, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                    try {
                        this.#mutateOptions.onSettled?.(void 0, action.error, variables, onMutateResult, context);
                    } catch (e) {
                        Promise.reject(e);
                    }
                }
            }
            this.listeners.forEach((listener)=>{
                listener(this.#currentResult);
            });
        });
    }
};
;
 //# sourceMappingURL=mutationObserver.js.map
}),
"[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMutation",
    ()=>useMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/mutationObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-client] (ecmascript)");
"use client";
;
;
;
//#region src/useMutation.ts
/**
* Unlike queries, mutations are typically used to create/update/delete data or perform server side-effects.
* `useMutation` is the hook for that.
*
* @see {@link mutationOptions} to share these options across multiple `useMutation` call sites, or to look
* the mutation up elsewhere via its `mutationKey` (e.g. with `useMutationState`).
* @param options - The {@link UseMutationOptions} to use — everything you can pass to `useMutation`.
* @param queryClient - Use this to use a custom `QueryClient`. Otherwise, the one from the nearest context will
* be used.
* @returns `mutate`/`mutateAsync` also accept per-call `onSuccess`/`onError`/`onSettled` callbacks as a second
* argument, useful for triggering call-site side effects (e.g. navigation) without coupling them to the shared
* mutation definition. Hook-level callbacks (passed to `options`) fire for every mutation; per-call callbacks
* fire only for the latest call you've made, and only while the component is still mounted — unmounting before
* the mutation settles removes the subscription and prevents them from firing.
*
* @example
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   return (
*     <button
*       onClick={() =>
*         addMutation.mutate('Item', {
*           onError: (error) => console.error('Failed to add item:', error),
*         })
*       }
*     >
*       Add
*     </button>
*   )
* }
* ```
*
* @example
* Rendering the mutation's own state, rather than just firing it off:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   return (
*     <div>
*       {addMutation.isPending ? (
*         'Adding todo...'
*       ) : (
*         <>
*           {addMutation.isError ? (
*             <div>An error occurred: {addMutation.error.message}</div>
*           ) : null}
*           <button onClick={() => addMutation.mutate('Item')}>Add</button>
*         </>
*       )}
*     </div>
*   )
* }
* ```
*
* @example
* Optimistic update via `onMutate`, rolling back on `onError`:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodo() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onMutate: async (newTodo) => {
*       await queryClient.cancelQueries({ queryKey: ['todos'] })
*       const previousTodos = queryClient.getQueryData<Array<string>>(['todos'])
*
*       queryClient.setQueryData<Array<string>>(['todos'], (old) => [
*         ...(old ?? []),
*         newTodo,
*       ])
*
*       // Passed to `onError` as `onMutateResult` if the mutation fails.
*       return { previousTodos }
*     },
*     onError: (_err, _newTodo, onMutateResult) => {
*       queryClient.setQueryData(['todos'], onMutateResult?.previousTodos)
*     },
*     onSettled: () => {
*       queryClient.invalidateQueries({ queryKey: ['todos'] })
*     },
*   })
*
*   return (
*     <button onClick={() => addMutation.mutate('Item')}>Add</button>
*   )
* }
* ```
*
* @example
* Callbacks passed per call to `mutate` only fire for the last call — `mutateAsync` gives you a
* promise per call instead, so you can wait for all of them when they succeed:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodos() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   async function handleAddAll(todos: Array<string>) {
*     try {
*       await Promise.all(todos.map((todo) => addMutation.mutateAsync(todo)))
*     } catch (error) {
*       console.error('Failed to add todos:', error)
*     }
*   }
*
*   return (
*     <button onClick={() => handleAddAll(['Todo 1', 'Todo 2', 'Todo 3'])}>
*       Add all
*     </button>
*   )
* }
* ```
*
* @example
* If some of the mutations above can fail independently of the others, and you want to know which ones
* did — rather than losing that information the moment the first one rejects — swap `Promise.all` for
* `Promise.allSettled`:
* ```tsx
* import { useMutation, useQueryClient } from '@tanstack/react-query'
*
* function AddTodos() {
*   const queryClient = useQueryClient()
*
*   const addMutation = useMutation({
*     mutationFn: addTodo,
*     onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
*   })
*
*   async function handleAddAll(todos: Array<string>) {
*     const addResults = await Promise.allSettled(
*       todos.map((todo) => addMutation.mutateAsync(todo)),
*     )
*
*     addResults.forEach((addResult, index) => {
*       if (addResult.status === 'rejected') {
*         console.error(`Failed to add "${todos[index]}":`, addResult.reason)
*       }
*     })
*   }
*
*   return (
*     <button onClick={() => handleAddAll(['Todo 1', 'Todo 2', 'Todo 3'])}>
*       Add all
*     </button>
*   )
* }
* ```
*/ function useMutation(options, queryClient) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])(queryClient);
    const [observer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "useMutation.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutationObserver"](client, options)
    }["useMutation.useState"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useMutation.useEffect": ()=>{
            observer.setOptions(options);
        }
    }["useMutation.useEffect"], [
        observer,
        options
    ]);
    const result = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useSyncExternalStore[result]": (onStoreChange)=>observer.subscribe(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notifyManager"].batchCalls(onStoreChange))
    }["useMutation.useSyncExternalStore[result]"], [
        observer
    ]), {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"], {
        "useMutation.useSyncExternalStore[result]": ()=>observer.getCurrentResult()
    }["useMutation.useSyncExternalStore[result]"]);
    const mutate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useMutation.useCallback[mutate]": (...args)=>{
            observer.mutate(args[0], args[1]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["noop"]);
        }
    }["useMutation.useCallback[mutate]"], [
        observer
    ]);
    if (result.error && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldThrowError"])(observer.options.throwOnError, [
        result.error
    ])) throw result.error;
    return {
        ...result,
        mutate,
        mutateAsync: result.mutate
    };
}
;
 //# sourceMappingURL=useMutation.js.map
}),
]);

//# sourceMappingURL=_ffdbe918._.js.map