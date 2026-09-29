import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/AppShell.tsx");const useState = __vite__cjsImport2_react["useState"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];import { NavLink, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=56fe86c3";
import { Bell, BookOpen, ChartNoAxesCombined, ChevronRight, CircleHelp, Inbox, LayoutDashboard, MessageSquareText, Moon, Plus, Search, Sparkles, Sun, UsersRound } from "/src/lib/lucide-react.tsx";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=56fe86c3";
var _jsxFileName = "/app/frontend/src/components/AppShell.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
var _s = $RefreshSig$();
const navItems = [
	{
		to: "/",
		label: "Overview",
		icon: LayoutDashboard
	},
	{
		to: "/inbox",
		label: "Unified inbox",
		icon: Inbox
	},
	{
		to: "/customer/cus_maya",
		label: "Customer memory",
		icon: UsersRound
	},
	{
		to: "/analytics",
		label: "Analytics",
		icon: ChartNoAxesCombined
	},
	{
		to: "/feedback",
		label: "Feedback ledger",
		icon: BookOpen
	}
];
export default function AppShell({ children }) {
	_s();
	const location = useLocation();
	const [dark, setDark] = useState(false);
	const current = navItems.find((item) => location.pathname.startsWith(item.to) && item.to !== "/") ?? navItems[0];
	return /* @__PURE__ */ _jsxDEV("div", {
		className: dark ? "dark min-h-svh bg-background text-foreground" : "min-h-svh bg-background text-foreground",
		"x-file-name": "AppShell",
		"x-line-number": "19",
		"x-column": "4",
		"x-component": "div",
		"x-id": "AppShell_19_4",
		"x-dynamic": "false",
		children: /* @__PURE__ */ _jsxDEV("div", {
			className: "flex min-h-svh",
			"x-file-name": "AppShell",
			"x-line-number": "20",
			"x-column": "6",
			"x-component": "div",
			"x-id": "AppShell_20_6",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("aside", {
				className: "hidden w-64 shrink-0 flex-col justify-between border-r border-[#3a5547] bg-[#203d30] px-5 py-6 text-[#f5f5ed] md:flex",
				"data-testid": "sidebar-navigation",
				"x-file-name": "AppShell",
				"x-line-number": "21",
				"x-column": "8",
				"x-component": "aside",
				"x-id": "AppShell_21_8",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					"x-file-name": "AppShell",
					"x-line-number": "22",
					"x-column": "10",
					"x-component": "div",
					"x-id": "AppShell_22_10",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-12 flex items-center gap-3 px-2",
							"data-testid": "brand-mark",
							"x-file-name": "AppShell",
							"x-line-number": "23",
							"x-column": "12",
							"x-component": "div",
							"x-id": "AppShell_23_12",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#d46444] text-sm font-bold text-white",
								"x-file-name": "AppShell",
								"x-line-number": "24",
								"x-column": "14",
								"x-component": "div",
								"x-id": "AppShell_24_14",
								"x-dynamic": "false",
								children: "M"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 38,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "AppShell",
								"x-line-number": "25",
								"x-column": "14",
								"x-component": "div",
								"x-id": "AppShell_25_14",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-serif text-xl tracking-tight",
									"x-file-name": "AppShell",
									"x-line-number": "25",
									"x-column": "19",
									"x-component": "div",
									"x-id": "AppShell_25_19",
									"x-dynamic": "false",
									children: "memoria"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 134
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "font-mono text-[9px] uppercase tracking-[0.22em] text-[#a7b8ab]",
									"x-file-name": "AppShell",
									"x-line-number": "25",
									"x-column": "83",
									"x-component": "div",
									"x-id": "AppShell_25_83",
									"x-dynamic": "false",
									children: "support OS"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 312
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 39,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-4 px-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#8fa596]",
							"x-file-name": "AppShell",
							"x-line-number": "27",
							"x-column": "12",
							"x-component": "div",
							"x-id": "AppShell_27_12",
							"x-dynamic": "false",
							children: "Workspace"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("nav", {
							className: "space-y-1",
							"aria-label": "Primary navigation",
							"x-file-name": "AppShell",
							"x-line-number": "28",
							"x-column": "12",
							"x-component": "nav",
							"x-id": "AppShell_28_12",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: navItems.map(({ to, label, icon: Icon }) => /* @__PURE__ */ _jsxDEV(NavLink, {
								to,
								"data-testid": `nav-${label.toLowerCase().replaceAll(" ", "-")}`,
								className: ({ isActive }) => `group flex items-center justify-between rounded-md px-3 py-2.5 text-sm transition-colors duration-200 ${isActive ? "bg-[#315944] text-white" : "text-[#b6c5ba] hover:bg-[#2b4d3b] hover:text-white"}`,
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "flex items-center gap-3",
									"x-file-name": "AppShell",
									"x-line-number": "31",
									"x-column": "18",
									"x-component": "span",
									"x-id": "AppShell_31_18",
									"x-dynamic": "true",
									"x-source-type": "prop",
									"x-source-var": "label",
									"x-source-editable": "false",
									children: [/* @__PURE__ */ _jsxDEV(Icon, {
										size: 16,
										strokeWidth: 1.8,
										"x-file-name": "AppShell",
										"x-line-number": "31",
										"x-column": "60",
										"x-component": "Icon",
										"x-id": "AppShell_31_60",
										"x-dynamic": "true"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 243
									}, this), label]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 19
								}, this), label === "Unified inbox" && /* @__PURE__ */ _jsxDEV("span", {
									className: "rounded-full bg-[#d46444] px-1.5 py-0.5 font-mono text-[10px] text-white",
									"x-file-name": "AppShell",
									"x-line-number": "32",
									"x-column": "48",
									"x-component": "span",
									"x-id": "AppShell_32_48",
									"x-dynamic": "false",
									children: "3"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 49
								}, this)]
							}, to, true, {
								fileName: _jsxFileName,
								lineNumber: 47,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 42,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "my-8 border-t border-[#3a5547]",
							"x-file-name": "AppShell",
							"x-line-number": "36",
							"x-column": "12",
							"x-component": "div",
							"x-id": "AppShell_36_12",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-3 px-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#8fa596]",
							"x-file-name": "AppShell",
							"x-line-number": "37",
							"x-column": "12",
							"x-component": "div",
							"x-id": "AppShell_37_12",
							"x-dynamic": "false",
							children: "Memory health"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "rounded-md border border-[#3a5547] bg-[#284a38] p-3",
							"data-testid": "memory-health-card",
							"x-file-name": "AppShell",
							"x-line-number": "38",
							"x-column": "12",
							"x-component": "div",
							"x-id": "AppShell_38_12",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mb-2 flex items-center justify-between text-xs",
									"x-file-name": "AppShell",
									"x-line-number": "39",
									"x-column": "14",
									"x-component": "div",
									"x-id": "AppShell_39_14",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "AppShell",
										"x-line-number": "39",
										"x-column": "78",
										"x-component": "span",
										"x-id": "AppShell_39_78",
										"x-dynamic": "false",
										children: "Retrieval quality"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 57,
										columnNumber: 193
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-[#b7d49b]",
										"x-file-name": "AppShell",
										"x-line-number": "39",
										"x-column": "108",
										"x-component": "span",
										"x-id": "AppShell_39_108",
										"x-dynamic": "false",
										children: "98.4%"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 57,
										columnNumber: 338
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 57,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "h-1.5 overflow-hidden rounded-full bg-[#1c3328]",
									"x-file-name": "AppShell",
									"x-line-number": "40",
									"x-column": "14",
									"x-component": "div",
									"x-id": "AppShell_40_14",
									"x-dynamic": "false",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "h-full w-[98%] rounded-full bg-[#9bbb83]",
										"x-file-name": "AppShell",
										"x-line-number": "40",
										"x-column": "79",
										"x-component": "div",
										"x-id": "AppShell_40_79",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 58,
										columnNumber: 194
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2 flex items-center gap-1.5 text-[10px] text-[#a7b8ab]",
									"x-file-name": "AppShell",
									"x-line-number": "41",
									"x-column": "14",
									"x-component": "div",
									"x-id": "AppShell_41_14",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "h-1.5 w-1.5 rounded-full bg-[#9bbb83]",
										"x-file-name": "AppShell",
										"x-line-number": "41",
										"x-column": "89",
										"x-component": "span",
										"x-id": "AppShell_41_89",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 204
									}, this), "All memory layers online"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 36,
					columnNumber: 11
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-4",
					"x-file-name": "AppShell",
					"x-line-number": "44",
					"x-column": "10",
					"x-component": "div",
					"x-id": "AppShell_44_10",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "rounded-md border border-[#3a5547] p-3 text-xs text-[#bdcabe]",
						"x-file-name": "AppShell",
						"x-line-number": "45",
						"x-column": "12",
						"x-component": "div",
						"x-id": "AppShell_45_12",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-2 flex items-center gap-2 text-white",
								"x-file-name": "AppShell",
								"x-line-number": "45",
								"x-column": "91",
								"x-component": "div",
								"x-id": "AppShell_45_91",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(CircleHelp, {
									size: 14,
									"x-file-name": "AppShell",
									"x-line-number": "45",
									"x-column": "148",
									"x-component": "CircleHelp",
									"x-id": "AppShell_45_148",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 377
								}, this), "Need a hand?"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 206
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "leading-relaxed",
								"x-file-name": "AppShell",
								"x-line-number": "45",
								"x-column": "190",
								"x-component": "p",
								"x-id": "AppShell_45_190",
								"x-dynamic": "false",
								children: "Learn how memory context changes a support reply."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 542
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								className: "mt-3 flex items-center gap-1 text-[#b7d49b] transition-transform duration-200 hover:translate-x-1",
								"data-testid": "learn-memory-button",
								"x-file-name": "AppShell",
								"x-line-number": "45",
								"x-column": "274",
								"x-component": "button",
								"x-id": "AppShell_45_274",
								"x-dynamic": "false",
								children: ["View guide ", /* @__PURE__ */ _jsxDEV(ChevronRight, { size: 12 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 1022
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 740
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 13
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "flex items-center gap-3 border-t border-[#3a5547] pt-4",
						"x-file-name": "AppShell",
						"x-line-number": "46",
						"x-column": "12",
						"x-component": "div",
						"x-id": "AppShell_46_12",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex h-8 w-8 items-center justify-center rounded-full bg-[#e2c7a5] font-serif text-sm text-[#203d30]",
								"x-file-name": "AppShell",
								"x-line-number": "46",
								"x-column": "84",
								"x-component": "div",
								"x-id": "AppShell_46_84",
								"x-dynamic": "false",
								children: "JA"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 199
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "min-w-0",
								"x-file-name": "AppShell",
								"x-line-number": "46",
								"x-column": "210",
								"x-component": "div",
								"x-id": "AppShell_46_210",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "truncate text-xs font-medium",
									"x-file-name": "AppShell",
									"x-line-number": "46",
									"x-column": "235",
									"x-component": "div",
									"x-id": "AppShell_46_235",
									"x-dynamic": "false",
									children: "Jordan Avery"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 580
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "text-[10px] text-[#91a496]",
									"x-file-name": "AppShell",
									"x-line-number": "46",
									"x-column": "299",
									"x-component": "div",
									"x-id": "AppShell_46_299",
									"x-dynamic": "false",
									children: "Support lead"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 64,
									columnNumber: 760
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 439
							}, this),
							/* @__PURE__ */ _jsxDEV("button", {
								className: "ml-auto text-[#91a496] hover:text-white",
								"data-testid": "profile-menu-button",
								"aria-label": "Open profile menu",
								"x-file-name": "AppShell",
								"x-line-number": "46",
								"x-column": "367",
								"x-component": "button",
								"x-id": "AppShell_46_367",
								"x-dynamic": "false",
								children: "•••"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 64,
								columnNumber: 944
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 64,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 35,
				columnNumber: 9
			}, this), /* @__PURE__ */ _jsxDEV("main", {
				className: "min-w-0 flex-1",
				"x-file-name": "AppShell",
				"x-line-number": "49",
				"x-column": "8",
				"x-component": "main",
				"x-id": "AppShell_49_8",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("header", {
						className: "flex h-[72px] items-center justify-between border-b border-border bg-surface px-5 md:px-9",
						"data-testid": "top-header",
						"x-file-name": "AppShell",
						"x-line-number": "50",
						"x-column": "10",
						"x-component": "header",
						"x-id": "AppShell_50_10",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "AppShell",
							"x-line-number": "51",
							"x-column": "12",
							"x-component": "div",
							"x-id": "AppShell_51_12",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
								"x-file-name": "AppShell",
								"x-line-number": "51",
								"x-column": "17",
								"x-component": "div",
								"x-id": "AppShell_51_17",
								"x-dynamic": "true",
								"x-source-type": "unknown",
								"x-source-var": "current",
								"x-source-path": "label",
								"x-source-editable": "false",
								children: ["Support workspace / ", /* @__PURE__ */ _jsxDEV("span", {
									"data-ve-dynamic": "true",
									"x-excluded": "true",
									style: { display: "contents" },
									"x-file-name": "AppShell",
									"x-line-number": "51",
									"x-column": "17",
									"x-component": "div",
									"x-id": "AppShell_51_17_expr1",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "current",
									"x-source-path": "label",
									"x-source-editable": "false",
									children: current.label
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 448
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 132
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "mt-1 hidden text-sm text-muted-foreground sm:block",
								"x-file-name": "AppShell",
								"x-line-number": "51",
								"x-column": "146",
								"x-component": "div",
								"x-id": "AppShell_51_146",
								"x-dynamic": "false",
								children: [
									"Tuesday, 18 June 2024 ",
									/* @__PURE__ */ _jsxDEV("span", {
										className: "mx-2 text-border",
										"x-file-name": "AppShell",
										"x-line-number": "51",
										"x-column": "236",
										"x-component": "span",
										"x-id": "AppShell_51_236",
										"x-dynamic": "false",
										children: "·"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 71,
										columnNumber: 466
									}, this),
									" Live operations"
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 260
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 sm:gap-4",
							"x-file-name": "AppShell",
							"x-line-number": "52",
							"x-column": "12",
							"x-component": "div",
							"x-id": "AppShell_52_12",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("button", {
									className: "hidden items-center gap-2 rounded-md border border-border bg-surface-muted px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground sm:flex",
									"data-testid": "global-search-button",
									"x-file-name": "AppShell",
									"x-line-number": "52",
									"x-column": "62",
									"x-component": "button",
									"x-id": "AppShell_52_62",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV(Search, { size: 14 }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 72,
											columnNumber: 533
										}, this),
										" Search ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono text-[10px]",
											"x-file-name": "AppShell",
											"x-line-number": "52",
											"x-column": "329",
											"x-component": "span",
											"x-id": "AppShell_52_329",
											"x-dynamic": "false",
											children: "⌘K"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 72,
											columnNumber: 561
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 177
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									className: "relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground",
									"data-testid": "notifications-button",
									"aria-label": "Notifications",
									"x-file-name": "AppShell",
									"x-line-number": "52",
									"x-column": "387",
									"x-component": "button",
									"x-id": "AppShell_52_387",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(Bell, {
										size: 17,
										"x-file-name": "AppShell",
										"x-line-number": "52",
										"x-column": "578",
										"x-component": "Bell",
										"x-id": "AppShell_52_578",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 72,
										columnNumber: 1046
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#d46444]",
										"x-file-name": "AppShell",
										"x-line-number": "52",
										"x-column": "596",
										"x-component": "span",
										"x-id": "AppShell_52_596",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 72,
										columnNumber: 1181
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 736
								}, this),
								/* @__PURE__ */ _jsxDEV("button", {
									onClick: () => setDark((value) => !value),
									className: "rounded-md p-2 text-muted-foreground transition-colors hover:bg-surface-muted hover:text-foreground",
									"data-testid": "theme-toggle-button",
									"aria-label": "Toggle theme",
									"x-file-name": "AppShell",
									"x-line-number": "52",
									"x-column": "690",
									"x-component": "button",
									"x-id": "AppShell_52_690",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: dark ? /* @__PURE__ */ _jsxDEV(Sun, {
										size: 17,
										"x-file-name": "AppShell",
										"x-line-number": "52",
										"x-column": "921",
										"x-component": "Sun",
										"x-id": "AppShell_52_921",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 72,
										columnNumber: 1790
									}, this) : /* @__PURE__ */ _jsxDEV(Moon, {
										size: 17,
										"x-file-name": "AppShell",
										"x-line-number": "52",
										"x-column": "941",
										"x-component": "Moon",
										"x-id": "AppShell_52_941",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 72,
										columnNumber: 1926
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 1392
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 72,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "border-b border-border bg-surface px-5 py-3 md:hidden",
						"x-file-name": "AppShell",
						"x-line-number": "54",
						"x-column": "10",
						"x-component": "div",
						"x-id": "AppShell_54_10",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "flex gap-2 overflow-x-auto",
							"x-file-name": "AppShell",
							"x-line-number": "54",
							"x-column": "81",
							"x-component": "div",
							"x-id": "AppShell_54_81",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: navItems.map(({ to, label, icon: Icon }) => /* @__PURE__ */ _jsxDEV(NavLink, {
								to,
								"data-testid": `mobile-nav-${label.toLowerCase().replaceAll(" ", "-")}`,
								className: ({ isActive }) => `flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-xs ${isActive ? "bg-primary text-primary-foreground" : "bg-surface-muted text-muted-foreground"}`,
								children: [/* @__PURE__ */ _jsxDEV(Icon, {
									size: 14,
									"x-file-name": "AppShell",
									"x-line-number": "54",
									"x-column": "455",
									"x-component": "Icon",
									"x-id": "AppShell_54_455",
									"x-dynamic": "true"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 178
								}, this), label]
							}, to, true, {
								fileName: _jsxFileName,
								lineNumber: 78,
								columnNumber: 19
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 196
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 74,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "mx-auto max-w-[1440px] p-5 md:p-9",
						"x-file-name": "AppShell",
						"x-line-number": "55",
						"x-column": "10",
						"x-component": "div",
						"x-id": "AppShell_55_10",
						"x-dynamic": "true",
						"x-source-type": "prop",
						"x-source-var": "children",
						"x-source-editable": "false",
						children
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 81,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 67,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 33,
		columnNumber: 10
	}, this);
}
_s(AppShell, "qU5+80peH2frE3XwMtraTpBNHeA=", false, function() {
	return [useLocation];
});
_c = AppShell;
export function PageIntro({ eyebrow, title, description, action }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mb-8 flex flex-col justify-between gap-5 border-b border-border pb-7 sm:flex-row sm:items-end",
		"x-file-name": "AppShell",
		"x-line-number": "63",
		"x-column": "9",
		"x-component": "div",
		"x-id": "AppShell_63_9",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "action",
		"x-source-editable": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			"x-file-name": "AppShell",
			"x-line-number": "63",
			"x-column": "120",
			"x-component": "div",
			"x-id": "AppShell_63_120",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary",
					"x-file-name": "AppShell",
					"x-line-number": "63",
					"x-column": "125",
					"x-component": "div",
					"x-id": "AppShell_63_125",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "eyebrow",
					"x-source-editable": "false",
					children: [/* @__PURE__ */ _jsxDEV(Sparkles, {
						size: 13,
						"x-file-name": "AppShell",
						"x-line-number": "63",
						"x-column": "233",
						"x-component": "Sparkles",
						"x-id": "AppShell_63_233",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 715
					}, this), eyebrow]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 422
				}, this),
				/* @__PURE__ */ _jsxDEV("h1", {
					className: "font-serif text-4xl tracking-tight text-foreground md:text-5xl",
					"data-testid": "page-title",
					"x-file-name": "AppShell",
					"x-line-number": "63",
					"x-column": "270",
					"x-component": "h1",
					"x-id": "AppShell_63_270",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "title",
					"x-source-editable": "false",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 873
				}, this),
				/* @__PURE__ */ _jsxDEV("p", {
					className: "mt-3 max-w-2xl text-sm leading-6 text-muted-foreground",
					"data-testid": "page-description",
					"x-file-name": "AppShell",
					"x-line-number": "63",
					"x-column": "386",
					"x-component": "p",
					"x-id": "AppShell_63_386",
					"x-dynamic": "true",
					"x-source-type": "prop",
					"x-source-var": "description",
					"x-source-editable": "false",
					children: description
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 1171
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 97,
			columnNumber: 301
		}, this), action]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 97,
		columnNumber: 10
	}, this);
}
_c2 = PageIntro;
export function SectionLabel({ children }) {
	return /* @__PURE__ */ _jsxDEV("div", {
		className: "mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
		"x-file-name": "AppShell",
		"x-line-number": "67",
		"x-column": "9",
		"x-component": "div",
		"x-id": "AppShell_67_9",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "children",
		"x-source-editable": "false",
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 104,
		columnNumber: 10
	}, this);
}
_c3 = SectionLabel;
var _c, _c2, _c3;
$RefreshReg$(_c, "AppShell");
$RefreshReg$(_c2, "PageIntro");
$RefreshReg$(_c3, "SectionLabel");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/AppShell.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/AppShell.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/AppShell.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/AppShell.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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O1dBQ0g7Ozs7OztDQUNGOzs7OztBQUVUOzs7OztBQUVBLE9BQU8sU0FBU2dCLFVBQVUsRUFBRUMsU0FBU0MsT0FBT0MsYUFBYUMsVUFBdUY7Q0FDOUksT0FBTyx3QkFBQyxPQUFEO0VBQUssV0FBVTtFQUErRjtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7WUFBOUcsQ0FBK0csd0JBQUMsT0FBRDtHQUFJO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUFKO0lBQUssd0JBQUMsT0FBRDtLQUFLLFdBQVU7S0FBNEY7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQTNHLENBQTRHLHdCQUFDLFVBQUQ7TUFBVSxNQUFNO01BQUc7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO0tBQUE7Ozs7ZUFBSUgsT0FBYTs7Ozs7O0lBQUMsd0JBQUMsTUFBRDtLQUFJLFdBQVU7S0FBaUUsZUFBWTtLQUFZO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFFQztJQUFVOzs7OztJQUFDLHdCQUFDLEtBQUQ7S0FBRyxXQUFVO0tBQXlELGVBQVk7S0FBa0I7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQUVDO0lBQWU7Ozs7O0dBQU07Ozs7O1lBQUVDLE1BQVk7Ozs7OztBQUMzZ0I7O0FBRUEsT0FBTyxTQUFTQyxhQUFhLEVBQUVyQixZQUFxQztDQUNsRSxPQUFPLHdCQUFDLE9BQUQ7RUFBSyxXQUFVO0VBQThFO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFFQTtDQUFjOzs7OztBQUN0SCIsIm5hbWVzIjpbIk5hdkxpbmsiLCJ1c2VMb2NhdGlvbiIsIkJlbGwiLCJCb29rT3BlbiIsIkNoYXJ0Tm9BeGVzQ29tYmluZWQiLCJDaGV2cm9uUmlnaHQiLCJDaXJjbGVIZWxwIiwiSW5ib3giLCJMYXlvdXREYXNoYm9hcmQiLCJNZXNzYWdlU3F1YXJlVGV4dCIsIk1vb24iLCJQbHVzIiwiU2VhcmNoIiwiU3BhcmtsZXMiLCJTdW4iLCJVc2Vyc1JvdW5kIiwidXNlU3RhdGUiLCJuYXZJdGVtcyIsInRvIiwibGFiZWwiLCJpY29uIiwiQXBwU2hlbGwiLCJjaGlsZHJlbiIsImxvY2F0aW9uIiwiZGFyayIsInNldERhcmsiLCJjdXJyZW50IiwiZmluZCIsIml0ZW0iLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJtYXAiLCJJY29uIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwiaXNBY3RpdmUiLCJkaXNwbGF5IiwidmFsdWUiLCJQYWdlSW50cm8iLCJleWVicm93IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsIlNlY3Rpb25MYWJlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJBcHBTaGVsbC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2TGluaywgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQmVsbCwgQm9va09wZW4sIENoYXJ0Tm9BeGVzQ29tYmluZWQsIENoZXZyb25SaWdodCwgQ2lyY2xlSGVscCwgSW5ib3gsIExheW91dERhc2hib2FyZCwgTWVzc2FnZVNxdWFyZVRleHQsIE1vb24sIFBsdXMsIFNlYXJjaCwgU3BhcmtsZXMsIFN1biwgVXNlcnNSb3VuZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB0eXBlIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBuYXZJdGVtcyA9IFtcbiAgeyB0bzogXCIvXCIsIGxhYmVsOiBcIk92ZXJ2aWV3XCIsIGljb246IExheW91dERhc2hib2FyZCB9LFxuICB7IHRvOiBcIi9pbmJveFwiLCBsYWJlbDogXCJVbmlmaWVkIGluYm94XCIsIGljb246IEluYm94IH0sXG4gIHsgdG86IFwiL2N1c3RvbWVyL2N1c19tYXlhXCIsIGxhYmVsOiBcIkN1c3RvbWVyIG1lbW9yeVwiLCBpY29uOiBVc2Vyc1JvdW5kIH0sXG4gIHsgdG86IFwiL2FuYWx5dGljc1wiLCBsYWJlbDogXCJBbmFseXRpY3NcIiwgaWNvbjogQ2hhcnROb0F4ZXNDb21iaW5lZCB9LFxuICB7IHRvOiBcIi9mZWVkYmFja1wiLCBsYWJlbDogXCJGZWVkYmFjayBsZWRnZXJcIiwgaWNvbjogQm9va09wZW4gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFNoZWxsKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCBbZGFyaywgc2V0RGFya10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGN1cnJlbnQgPSBuYXZJdGVtcy5maW5kKChpdGVtKSA9PiBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKGl0ZW0udG8pICYmIGl0ZW0udG8gIT09IFwiL1wiKSA/PyBuYXZJdGVtc1swXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtkYXJrID8gXCJkYXJrIG1pbi1oLXN2aCBiZy1iYWNrZ3JvdW5kIHRleHQtZm9yZWdyb3VuZFwiIDogXCJtaW4taC1zdmggYmctYmFja2dyb3VuZCB0ZXh0LWZvcmVncm91bmRcIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc3ZoXCI+XG4gICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJoaWRkZW4gdy02NCBzaHJpbmstMCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXIgYm9yZGVyLVsjM2E1NTQ3XSBiZy1bIzIwM2QzMF0gcHgtNSBweS02IHRleHQtWyNmNWY1ZWRdIG1kOmZsZXhcIiBkYXRhLXRlc3RpZD1cInNpZGViYXItbmF2aWdhdGlvblwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyIGZsZXggaXRlbXMtY2VudGVyIGdhcC0zIHB4LTJcIiBkYXRhLXRlc3RpZD1cImJyYW5kLW1hcmtcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtOSB3LTkgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1bI2Q0NjQ0NF0gdGV4dC1zbSBmb250LWJvbGQgdGV4dC13aGl0ZVwiPk08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj48ZGl2IGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC14bCB0cmFja2luZy10aWdodFwiPm1lbW9yaWE8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yMmVtXSB0ZXh0LVsjYTdiOGFiXVwiPnN1cHBvcnQgT1M8L2Rpdj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00IHB4LTIgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC1bIzhmYTU5Nl1cIj5Xb3Jrc3BhY2U8L2Rpdj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic3BhY2UteS0xXCIgYXJpYS1sYWJlbD1cIlByaW1hcnkgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICB7bmF2SXRlbXMubWFwKCh7IHRvLCBsYWJlbCwgaWNvbjogSWNvbiB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPE5hdkxpbmsga2V5PXt0b30gdG89e3RvfSBkYXRhLXRlc3RpZD17YG5hdi0ke2xhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfWB9IGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gYGdyb3VwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLW1kIHB4LTMgcHktMi41IHRleHQtc20gdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwICR7aXNBY3RpdmUgPyBcImJnLVsjMzE1OTQ0XSB0ZXh0LXdoaXRlXCIgOiBcInRleHQtWyNiNmM1YmFdIGhvdmVyOmJnLVsjMmI0ZDNiXSBob3Zlcjp0ZXh0LXdoaXRlXCJ9YH0+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiPjxJY29uIHNpemU9ezE2fSBzdHJva2VXaWR0aD17MS44fSAvPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7bGFiZWwgPT09IFwiVW5pZmllZCBpbmJveFwiICYmIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1bI2Q0NjQ0NF0gcHgtMS41IHB5LTAuNSBmb250LW1vbm8gdGV4dC1bMTBweF0gdGV4dC13aGl0ZVwiPjM8L3NwYW4+fVxuICAgICAgICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktOCBib3JkZXItdCBib3JkZXItWyMzYTU1NDddXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMyBweC0yIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtWyM4ZmE1OTZdXCI+TWVtb3J5IGhlYWx0aDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlciBib3JkZXItWyMzYTU1NDddIGJnLVsjMjg0YTM4XSBwLTNcIiBkYXRhLXRlc3RpZD1cIm1lbW9yeS1oZWFsdGgtY2FyZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQteHNcIj48c3Bhbj5SZXRyaWV2YWwgcXVhbGl0eTwvc3Bhbj48c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bI2I3ZDQ5Yl1cIj45OC40JTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTEuNSBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1mdWxsIGJnLVsjMWMzMzI4XVwiPjxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIHctWzk4JV0gcm91bmRlZC1mdWxsIGJnLVsjOWJiYjgzXVwiIC8+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMS41IHRleHQtWzEwcHhdIHRleHQtWyNhN2I4YWJdXCI+PHNwYW4gY2xhc3NOYW1lPVwiaC0xLjUgdy0xLjUgcm91bmRlZC1mdWxsIGJnLVsjOWJiYjgzXVwiIC8+QWxsIG1lbW9yeSBsYXllcnMgb25saW5lPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGJvcmRlciBib3JkZXItWyMzYTU1NDddIHAtMyB0ZXh0LXhzIHRleHQtWyNiZGNhYmVdXCI+PGRpdiBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtd2hpdGVcIj48Q2lyY2xlSGVscCBzaXplPXsxNH0gLz5OZWVkIGEgaGFuZD88L2Rpdj48cCBjbGFzc05hbWU9XCJsZWFkaW5nLXJlbGF4ZWRcIj5MZWFybiBob3cgbWVtb3J5IGNvbnRleHQgY2hhbmdlcyBhIHN1cHBvcnQgcmVwbHkuPC9wPjxidXR0b24gY2xhc3NOYW1lPVwibXQtMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LVsjYjdkNDliXSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgaG92ZXI6dHJhbnNsYXRlLXgtMVwiIGRhdGEtdGVzdGlkPVwibGVhcm4tbWVtb3J5LWJ1dHRvblwiPlZpZXcgZ3VpZGUgPENoZXZyb25SaWdodCBzaXplPXsxMn0gLz48L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgYm9yZGVyLXQgYm9yZGVyLVsjM2E1NTQ3XSBwdC00XCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtOCB3LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1bI2UyYzdhNV0gZm9udC1zZXJpZiB0ZXh0LXNtIHRleHQtWyMyMDNkMzBdXCI+SkE8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm1pbi13LTBcIj48ZGl2IGNsYXNzTmFtZT1cInRydW5jYXRlIHRleHQteHMgZm9udC1tZWRpdW1cIj5Kb3JkYW4gQXZlcnk8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInRleHQtWzEwcHhdIHRleHQtWyM5MWE0OTZdXCI+U3VwcG9ydCBsZWFkPC9kaXY+PC9kaXY+PGJ1dHRvbiBjbGFzc05hbWU9XCJtbC1hdXRvIHRleHQtWyM5MWE0OTZdIGhvdmVyOnRleHQtd2hpdGVcIiBkYXRhLXRlc3RpZD1cInByb2ZpbGUtbWVudS1idXR0b25cIiBhcmlhLWxhYmVsPVwiT3BlbiBwcm9maWxlIG1lbnVcIj7igKLigKLigKI8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWluLXctMCBmbGV4LTFcIj5cbiAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggaC1bNzJweF0gaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItYm9yZGVyIGJnLXN1cmZhY2UgcHgtNSBtZDpweC05XCIgZGF0YS10ZXN0aWQ9XCJ0b3AtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2PjxkaXYgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlN1cHBvcnQgd29ya3NwYWNlIC8ge2N1cnJlbnQubGFiZWx9PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC0xIGhpZGRlbiB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBzbTpibG9ja1wiPlR1ZXNkYXksIDE4IEp1bmUgMjAyNCA8c3BhbiBjbGFzc05hbWU9XCJteC0yIHRleHQtYm9yZGVyXCI+wrc8L3NwYW4+IExpdmUgb3BlcmF0aW9uczwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBzbTpnYXAtNFwiPjxidXR0b24gY2xhc3NOYW1lPVwiaGlkZGVuIGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItYm9yZGVyIGJnLXN1cmZhY2UtbXV0ZWQgcHgtMyBweS0yIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1wcmltYXJ5IGhvdmVyOnRleHQtZm9yZWdyb3VuZCBzbTpmbGV4XCIgZGF0YS10ZXN0aWQ9XCJnbG9iYWwtc2VhcmNoLWJ1dHRvblwiPjxTZWFyY2ggc2l6ZT17MTR9IC8+IFNlYXJjaCA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bMTBweF1cIj7ijJhLPC9zcGFuPjwvYnV0dG9uPjxidXR0b24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcm91bmRlZC1tZCBwLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLXN1cmZhY2UtbXV0ZWQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCIgZGF0YS10ZXN0aWQ9XCJub3RpZmljYXRpb25zLWJ1dHRvblwiIGFyaWEtbGFiZWw9XCJOb3RpZmljYXRpb25zXCI+PEJlbGwgc2l6ZT17MTd9IC8+PHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMS41IHRvcC0xLjUgaC0xLjUgdy0xLjUgcm91bmRlZC1mdWxsIGJnLVsjZDQ2NDQ0XVwiIC8+PC9idXR0b24+PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXREYXJrKCh2YWx1ZSkgPT4gIXZhbHVlKX0gY2xhc3NOYW1lPVwicm91bmRlZC1tZCBwLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJnLXN1cmZhY2UtbXV0ZWQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCIgZGF0YS10ZXN0aWQ9XCJ0aGVtZS10b2dnbGUtYnV0dG9uXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSB0aGVtZVwiPntkYXJrID8gPFN1biBzaXplPXsxN30gLz4gOiA8TW9vbiBzaXplPXsxN30gLz59PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItYm9yZGVyIGJnLXN1cmZhY2UgcHgtNSBweS0zIG1kOmhpZGRlblwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMiBvdmVyZmxvdy14LWF1dG9cIj57bmF2SXRlbXMubWFwKCh7IHRvLCBsYWJlbCwgaWNvbjogSWNvbiB9KSA9PiA8TmF2TGluayBrZXk9e3RvfSB0bz17dG99IGRhdGEtdGVzdGlkPXtgbW9iaWxlLW5hdi0ke2xhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbChcIiBcIiwgXCItXCIpfWB9IGNsYXNzTmFtZT17KHsgaXNBY3RpdmUgfSkgPT4gYGZsZXggc2hyaW5rLTAgaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtbWQgcHgtMyBweS0yIHRleHQteHMgJHtpc0FjdGl2ZSA/IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiIDogXCJiZy1zdXJmYWNlLW11dGVkIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwifWB9PjxJY29uIHNpemU9ezE0fSAvPntsYWJlbH08L05hdkxpbms+KX08L2Rpdj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctWzE0NDBweF0gcC01IG1kOnAtOVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQYWdlSW50cm8oeyBleWVicm93LCB0aXRsZSwgZGVzY3JpcHRpb24sIGFjdGlvbiB9OiB7IGV5ZWJyb3c6IHN0cmluZzsgdGl0bGU6IHN0cmluZzsgZGVzY3JpcHRpb246IHN0cmluZzsgYWN0aW9uPzogUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWItOCBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtNSBib3JkZXItYiBib3JkZXItYm9yZGVyIHBiLTcgc206ZmxleC1yb3cgc206aXRlbXMtZW5kXCI+PGRpdj48ZGl2IGNsYXNzTmFtZT1cIm1iLTMgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtcHJpbWFyeVwiPjxTcGFya2xlcyBzaXplPXsxM30gLz57ZXllYnJvd308L2Rpdj48aDEgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTR4bCB0cmFja2luZy10aWdodCB0ZXh0LWZvcmVncm91bmQgbWQ6dGV4dC01eGxcIiBkYXRhLXRlc3RpZD1cInBhZ2UtdGl0bGVcIj57dGl0bGV9PC9oMT48cCBjbGFzc05hbWU9XCJtdC0zIG1heC13LTJ4bCB0ZXh0LXNtIGxlYWRpbmctNiB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLXRlc3RpZD1cInBhZ2UtZGVzY3JpcHRpb25cIj57ZGVzY3JpcHRpb259PC9wPjwvZGl2PnthY3Rpb259PC9kaXY+O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2VjdGlvbkxhYmVsKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pIHtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibWItMyBmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjE4ZW1dIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntjaGlsZHJlbn08L2Rpdj47XG59Il0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL0FwcFNoZWxsLnRzeCJ9