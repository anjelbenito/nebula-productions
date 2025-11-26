module.exports = [
"[project]/nebula-productions-app/src/app/favicon.ico.mjs { IMAGE => \"[project]/nebula-productions-app/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/nebula-productions-app/src/app/favicon.ico.mjs { IMAGE => \"[project]/nebula-productions-app/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/nebula-productions-app/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/nebula-productions-app/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nebula-productions-app/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nebula-productions-app/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/nebula-productions-app/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
const portfolioData = {
    sophia: {
        name: "Sophia Romero",
        role: "Concept Artist, Illustrator, and Animator",
        description: "Sophia specializes in early visual development...",
        images: [
            "/images/sophia_01.jpg",
            "/images/sophia_02.jpg",
            "/images/sophia_03.jpg"
        ]
    },
    anjelika: {
        name: "Anjelika Benito",
        role: "Concept Artist, Illustrator, and Animator",
        description: "Anjelika’s portfolio highlights versatile artistic skills...",
        images: [
            "/images/anjelika_01.jpg",
            "/images/anjelika_02.jpg",
            "/images/anjelika_03.jpg"
        ]
    },
    matthew: {
        name: "Matthew Castro",
        role: "3D Artist, 3D Environment, Video Editor",
        description: "Matthew's specialization is in designing and rendering full 3D environments...",
        images: [
            "/images/matthew_01.jpg",
            "/images/matthew_02.jpg",
            "/images/matthew_03.jpg"
        ]
    },
    charie: {
        name: "Charie Tubil",
        role: "Content Developer",
        description: "Charie focuses on narrative and informational structure...",
        images: [
            "/images/charie_01.jpg",
            "/images/charie_02.jpg",
            "/images/charie_03.jpg"
        ]
    },
    zelene: {
        name: "Zelene Plazuelo",
        role: "3D Artist, Illustrator, and Animator",
        description: "Zelene focuses on 3D modeling and texturing...",
        images: [
            "/images/zelene_01.jpg",
            "/images/zelene_02.jpg",
            "/images/zelene_03.jpg"
        ]
    },
    allana: {
        name: "Allana Marcelo",
        role: "Concept Artist, Illustrator, and Animator",
        description: "Allana manages the bridge between initial concept art and final sequences.",
        images: [
            "/images/allana_01.jpg",
            "/images/allana_02.jpg",
            "/images/allana_03.jpg"
        ]
    }
};
function PortfolioPage({ params }) {
    // normalize incoming id:
    const rawId = String(params?.id ?? "");
    const id = decodeURIComponent(rawId).trim().replace(/^\/+|\/+$/g, "").toLowerCase();
    const data = portfolioData[id];
    // Helpful debug + fallback if not found
    if (!data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen flex items-center justify-center p-6 bg-[#020202]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-white",
                        children: "Portfolio not found"
                    }, void 0, false, {
                        fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-2",
                        children: "The member you requested does not exist."
                    }, void 0, false, {
                        fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 text-sm text-gray-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Debug: params.id (raw) = ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-black/40 px-2 py-0.5 rounded",
                                        children: rawId
                                    }, void 0, false, {
                                        fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 55
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Debug: normalized id = ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "bg-black/40 px-2 py-0.5 rounded",
                                        children: id
                                    }, void 0, false, {
                                        fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 53
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#works",
                                    className: "text-primary-purple hover:underline",
                                    children: "Back to Works"
                                }, void 0, false, {
                                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                    lineNumber: 66,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                        lineNumber: 62,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
            lineNumber: 55,
            columnNumber: 13
        }, this);
    }
    // Render portfolio when found
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "py-16 px-6 bg-[#06070a] min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto bg-mid-gray/80 p-8 rounded-xl shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b border-light-gray/20 pb-4 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/#works",
                            className: "px-4 py-2 bg-primary-purple/50 text-white rounded-full hover:bg-primary-purple transition text-sm",
                            children: "← Back to Works"
                        }, void 0, false, {
                            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-extrabold text-white",
                            children: "Member Portfolio"
                        }, void 0, false, {
                            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 84,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-extrabold text-white mb-2",
                    children: data.name
                }, void 0, false, {
                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 87,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-primary-purple mb-8",
                    children: data.role
                }, void 0, false, {
                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold text-white mb-4 border-b border-light-gray/20 pb-2",
                            children: "Description"
                        }, void 0, false, {
                            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-400 leading-relaxed",
                            children: data.description
                        }, void 0, false, {
                            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 92,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-semibold text-white mb-6 border-b border-light-gray/20 pb-2",
                            children: "Member's Work"
                        }, void 0, false, {
                            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: data.images.map((src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded overflow-hidden bg-black/40",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: src,
                                        alt: `${data.name} work ${idx + 1}`,
                                        width: 800,
                                        height: 600,
                                        className: "object-cover w-full h-48"
                                    }, void 0, false, {
                                        fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 33
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$nebula$2d$productions$2d$app$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center pt-4 text-gray-500 text-sm",
                    children: "End of Dedicated Portfolio View"
                }, void 0, false, {
                    fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
            lineNumber: 79,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
}),
"[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/nebula-productions-app/src/app/portfolios/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12177be7._.js.map