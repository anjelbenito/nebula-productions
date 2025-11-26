(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/portfolios/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PortfolioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
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
function PortfolioPage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(35);
    if ($[0] !== "3e51054fdae326c207b332162c9525af99c74cf6d346ad9c8cf36a98fed2b179") {
        for(let $i = 0; $i < 35; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3e51054fdae326c207b332162c9525af99c74cf6d346ad9c8cf36a98fed2b179";
    }
    const { params } = t0;
    const rawId = String(params?.id ?? "");
    let t1;
    if ($[1] !== rawId) {
        t1 = decodeURIComponent(rawId).trim().replace(/^\/+|\/+$/g, "").toLowerCase();
        $[1] = rawId;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const id = t1;
    const data = portfolioData[id];
    if (!data) {
        let t2;
        let t3;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-2xl font-semibold text-white",
                children: "Portfolio not found"
            }, void 0, false, {
                fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                lineNumber: 70,
                columnNumber: 12
            }, this);
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 mt-2",
                children: "The member you requested does not exist."
            }, void 0, false, {
                fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                lineNumber: 71,
                columnNumber: 12
            }, this);
            $[3] = t2;
            $[4] = t3;
        } else {
            t2 = $[3];
            t3 = $[4];
        }
        let t4;
        if ($[5] !== rawId) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Debug: params.id (raw) = ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "bg-black/40 px-2 py-0.5 rounded",
                        children: rawId
                    }, void 0, false, {
                        fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                        lineNumber: 80,
                        columnNumber: 42
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                lineNumber: 80,
                columnNumber: 12
            }, this);
            $[5] = rawId;
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        let t5;
        if ($[7] !== id) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    "Debug: normalized id = ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "bg-black/40 px-2 py-0.5 rounded",
                        children: id
                    }, void 0, false, {
                        fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                        lineNumber: 88,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                lineNumber: 88,
                columnNumber: 12
            }, this);
            $[7] = id;
            $[8] = t5;
        } else {
            t5 = $[8];
        }
        let t6;
        if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#works",
                    className: "text-primary-purple hover:underline",
                    children: "Back to Works"
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 96,
                    columnNumber: 34
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                lineNumber: 96,
                columnNumber: 12
            }, this);
            $[9] = t6;
        } else {
            t6 = $[9];
        }
        let t7;
        if ($[10] !== t4 || $[11] !== t5) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "min-h-screen flex items-center justify-center p-6 bg-[#020202]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        t2,
                        t3,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 text-sm text-gray-300",
                            children: [
                                t4,
                                t5,
                                t6
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 103,
                            columnNumber: 130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 103,
                    columnNumber: 93
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                lineNumber: 103,
                columnNumber: 12
            }, this);
            $[10] = t4;
            $[11] = t5;
            $[12] = t7;
        } else {
            t7 = $[12];
        }
        return t7;
    }
    let t2;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between border-b border-light-gray/20 pb-4 mb-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/#works",
                    className: "px-4 py-2 bg-primary-purple/50 text-white rounded-full hover:bg-primary-purple transition text-sm",
                    children: "← Back to Works"
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 114,
                    columnNumber: 101
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-extrabold text-white",
                    children: "Member Portfolio"
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 114,
                    columnNumber: 254
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 114,
            columnNumber: 10
        }, this);
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    let t3;
    if ($[14] !== data.name) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-extrabold text-white mb-2",
            children: data.name
        }, void 0, false, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 121,
            columnNumber: 10
        }, this);
        $[14] = data.name;
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    let t4;
    if ($[16] !== data.role) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-primary-purple mb-8",
            children: data.role
        }, void 0, false, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[16] = data.role;
        $[17] = t4;
    } else {
        t4 = $[17];
    }
    let t5;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-semibold text-white mb-4 border-b border-light-gray/20 pb-2",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] !== data.description) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mb-12",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 leading-relaxed",
                    children: data.description
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 144,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        $[19] = data.description;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-semibold text-white mb-6 border-b border-light-gray/20 pb-2",
            children: "Member's Work"
        }, void 0, false, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== data.images || $[23] !== data.name) {
        let t9;
        if ($[25] !== data.name) {
            t9 = ({
                "PortfolioPage[data.images.map()]": (src, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded overflow-hidden bg-black/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: src,
                            alt: `${data.name} work ${idx + 1}`,
                            width: 800,
                            height: 600,
                            className: "object-cover w-full h-48"
                        }, void 0, false, {
                            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                            lineNumber: 162,
                            columnNumber: 122
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                        lineNumber: 162,
                        columnNumber: 59
                    }, this)
            })["PortfolioPage[data.images.map()]"];
            $[25] = data.name;
            $[26] = t9;
        } else {
            t9 = $[26];
        }
        t8 = data.images.map(t9);
        $[22] = data.images;
        $[23] = data.name;
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[27] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mb-12",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                    lineNumber: 178,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        $[27] = t8;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    let t10;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center pt-4 text-gray-500 text-sm",
            children: "End of Dedicated Portfolio View"
        }, void 0, false, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== t3 || $[31] !== t4 || $[32] !== t6 || $[33] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "py-16 px-6 bg-[#06070a] min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto bg-mid-gray/80 p-8 rounded-xl shadow-2xl",
                children: [
                    t2,
                    t3,
                    t4,
                    t6,
                    t9,
                    t10
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/portfolios/[id]/page.tsx",
                lineNumber: 193,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/portfolios/[id]/page.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[30] = t3;
        $[31] = t4;
        $[32] = t6;
        $[33] = t9;
        $[34] = t11;
    } else {
        t11 = $[34];
    }
    return t11;
}
_c = PortfolioPage;
var _c;
__turbopack_context__.k.register(_c, "PortfolioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_portfolios_%5Bid%5D_page_tsx_4940a04c._.js.map