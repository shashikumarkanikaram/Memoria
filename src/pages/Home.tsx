import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.tsx");const _jsxDEV = __vite__cjsImport9_react_jsxDevRuntime["jsxDEV"];import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=56fe86c3";
import { motion } from "/node_modules/.vite/deps/motion_react.js?v=56fe86c3";
import { Activity, ArrowUpRight, BrainCircuit, CircleAlert, Clock3, Gauge, MessageSquareText, ShieldCheck, TrendingDown } from "/src/lib/lucide-react.tsx";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "/src/lib/recharts.tsx";
import { apiGet } from "/src/lib/api.ts";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=56fe86c3";
import { PageIntro, SectionLabel } from "/src/components/AppShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Home.tsx";
import __vite__cjsImport9_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
var _s = $RefreshSig$();
const fallback = {
	active_sessions: 18,
	average_frustration: 47,
	resolution_rate: 82,
	memory_match_rate: 91,
	trend: [
		{
			day: "Mon",
			frustration: 54,
			resolution: 68
		},
		{
			day: "Tue",
			frustration: 51,
			resolution: 72
		},
		{
			day: "Wed",
			frustration: 48,
			resolution: 76
		},
		{
			day: "Thu",
			frustration: 45,
			resolution: 80
		},
		{
			day: "Fri",
			frustration: 47,
			resolution: 82
		},
		{
			day: "Sat",
			frustration: 42,
			resolution: 86
		},
		{
			day: "Sun",
			frustration: 39,
			resolution: 88
		}
	],
	escalations: [{
		customer: "Maya Chen",
		customer_id: "cus_maya",
		reason: "Third contact · export timeout",
		score: 86
	}, {
		customer: "Alex Morgan",
		customer_id: "cus_alex",
		reason: "Known issue · delivery delay",
		score: 64
	}]
};
const statCards = [
	{
		key: "active-sessions",
		label: "Active sessions",
		icon: Activity,
		value: (data) => data.active_sessions,
		suffix: "",
		note: "+4 since 9am",
		color: "text-primary"
	},
	{
		key: "avg-frustration",
		label: "Avg. frustration",
		icon: Gauge,
		value: (data) => data.average_frustration,
		suffix: "/100",
		note: "↓ 8% this week",
		color: "text-[#d46444]"
	},
	{
		key: "resolution-rate",
		label: "Resolution rate",
		icon: ShieldCheck,
		value: (data) => data.resolution_rate,
		suffix: "%",
		note: "+12% with memory",
		color: "text-[#6f966f]"
	},
	{
		key: "memory-matches",
		label: "Memory matches",
		icon: BrainCircuit,
		value: (data) => data.memory_match_rate,
		suffix: "%",
		note: "Across 4 layers",
		color: "text-primary"
	}
];
export default function Home() {
	_s();
	const dashboard = useQuery({
		queryKey: ["support", "dashboard"],
		queryFn: () => apiGet("/support/dashboard"),
		retry: false
	});
	const tickets = useQuery({
		queryKey: ["support", "tickets"],
		queryFn: () => apiGet("/support/tickets"),
		retry: false
	});
	const data = dashboard.data ?? fallback;
	return /* @__PURE__ */ _jsxDEV("div", {
		"data-testid": "home-page",
		"x-file-name": "Home",
		"x-line-number": "25",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Home_25_9",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(PageIntro, {
				eyebrow: "Operations hub",
				title: "Good morning, Jordan.",
				description: "A clear view of where memory is helping customers today — and where a human should step in.",
				action: /* @__PURE__ */ _jsxDEV(Link, {
					to: "/inbox",
					"data-testid": "open-inbox-button",
					children: /* @__PURE__ */ _jsxDEV(Button, {
						className: "h-10 gap-2 rounded-md bg-primary px-4 text-sm text-primary-foreground hover:bg-primary/90",
						"x-file-name": "Home",
						"x-line-number": "25",
						"x-column": "268",
						"x-component": "Button",
						"x-id": "Home_25_268",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(MessageSquareText, {
								size: 15,
								"x-file-name": "Home",
								"x-line-number": "25",
								"x-column": "378",
								"x-component": "MessageSquareText",
								"x-id": "Home_25_378",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 594
							}, this),
							" Open inbox ",
							/* @__PURE__ */ _jsxDEV(ArrowUpRight, {
								size: 15,
								"x-file-name": "Home",
								"x-line-number": "25",
								"x-column": "421",
								"x-component": "ArrowUpRight",
								"x-id": "Home_25_421",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 102,
								columnNumber: 759
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 102,
						columnNumber: 373
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 323
				}, this),
				"x-file-name": "Home",
				"x-line-number": "25",
				"x-column": "38",
				"x-component": "PageIntro",
				"x-id": "Home_25_38",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 143
			}, this),
			/* @__PURE__ */ _jsxDEV(motion.div, {
				initial: "hidden",
				animate: "show",
				variants: {
					hidden: {},
					show: { transition: { staggerChildren: .08 } }
				},
				className: "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4",
				"x-file-name": "Home",
				"x-line-number": "26",
				"x-column": "4",
				"x-component": "div",
				"x-id": "Home_26_4",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: statCards.map(({ key, label, icon: Icon, value, suffix, note, color }) => /* @__PURE__ */ _jsxDEV(motion.div, {
					variants: {
						hidden: {
							opacity: 0,
							y: 8
						},
						show: {
							opacity: 1,
							y: 0
						}
					},
					className: "border border-border bg-surface p-5 transition-colors duration-200 hover:bg-surface-muted",
					"data-testid": `metric-${key}`,
					"x-file-name": "Home",
					"x-line-number": "27",
					"x-column": "81",
					"x-component": "div",
					"x-id": "Home_27_81",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between",
							"x-file-name": "Home",
							"x-line-number": "27",
							"x-column": "307",
							"x-component": "div",
							"x-id": "Home_27_307",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Home",
								"x-line-number": "27",
								"x-column": "358",
								"x-component": "SectionLabel",
								"x-id": "Home_27_358",
								"x-dynamic": "true",
								"x-source-type": "prop",
								"x-source-var": "label",
								"x-source-editable": "false",
								children: label
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 407
							}, this), /* @__PURE__ */ _jsxDEV(Icon, {
								size: 17,
								className: color,
								strokeWidth: 1.6,
								"x-file-name": "Home",
								"x-line-number": "27",
								"x-column": "394",
								"x-component": "Icon",
								"x-id": "Home_27_394",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 627
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 248
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-5 flex items-baseline gap-1",
							"x-file-name": "Home",
							"x-line-number": "27",
							"x-column": "454",
							"x-component": "div",
							"x-id": "Home_27_454",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "font-serif text-4xl tracking-tight",
								"x-file-name": "Home",
								"x-line-number": "27",
								"x-column": "502",
								"x-component": "span",
								"x-id": "Home_27_502",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: value(data)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 951
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-xs text-muted-foreground",
								"x-file-name": "Home",
								"x-line-number": "27",
								"x-column": "575",
								"x-component": "span",
								"x-id": "Home_27_575",
								"x-dynamic": "true",
								"x-source-type": "prop",
								"x-source-var": "suffix",
								"x-source-editable": "false",
								children: suffix
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 1183
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 795
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-3 flex items-center gap-1.5 text-xs text-muted-foreground",
							"x-file-name": "Home",
							"x-line-number": "27",
							"x-column": "654",
							"x-component": "div",
							"x-id": "Home_27_654",
							"x-dynamic": "true",
							"x-source-type": "prop",
							"x-source-var": "note",
							"x-source-editable": "false",
							children: [/* @__PURE__ */ _jsxDEV(TrendingDown, {
								size: 13,
								className: color,
								"x-file-name": "Home",
								"x-line-number": "27",
								"x-column": "732",
								"x-component": "TrendingDown",
								"x-id": "Home_27_732",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 1691
							}, this), note]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 128,
							columnNumber: 1439
						}, this)
					]
				}, key, true, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 103,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "mt-6 grid grid-cols-1 gap-6 xl:grid-cols-8",
				"x-file-name": "Home",
				"x-line-number": "29",
				"x-column": "4",
				"x-component": "div",
				"x-id": "Home_29_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-5 xl:col-span-5",
					"data-testid": "frustration-trend-card",
					"x-file-name": "Home",
					"x-line-number": "30",
					"x-column": "6",
					"x-component": "section",
					"x-id": "Home_30_6",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "mb-5 flex items-start justify-between",
						"x-file-name": "Home",
						"x-line-number": "30",
						"x-column": "114",
						"x-component": "div",
						"x-id": "Home_30_114",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Home",
							"x-line-number": "30",
							"x-column": "169",
							"x-component": "div",
							"x-id": "Home_30_169",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Home",
								"x-line-number": "30",
								"x-column": "174",
								"x-component": "SectionLabel",
								"x-id": "Home_30_174",
								"x-dynamic": "false",
								children: "Live signal"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 499
							}, this), /* @__PURE__ */ _jsxDEV("h2", {
								className: "font-serif text-2xl",
								"x-file-name": "Home",
								"x-line-number": "30",
								"x-column": "214",
								"x-component": "h2",
								"x-id": "Home_30_214",
								"x-dynamic": "false",
								children: "Frustration vs resolution"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 656
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 386
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex gap-4 text-[11px] text-muted-foreground",
							"x-file-name": "Home",
							"x-line-number": "30",
							"x-column": "286",
							"x-component": "div",
							"x-id": "Home_30_286",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "flex items-center gap-1.5",
								"x-file-name": "Home",
								"x-line-number": "30",
								"x-column": "348",
								"x-component": "span",
								"x-id": "Home_30_348",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "h-2 w-2 rounded-full bg-[#d46444]",
									"x-file-name": "Home",
									"x-line-number": "30",
									"x-column": "392",
									"x-component": "span",
									"x-id": "Home_30_392",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 1158
								}, this), "Frustration"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 1005
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "flex items-center gap-1.5",
								"x-file-name": "Home",
								"x-line-number": "30",
								"x-column": "464",
								"x-component": "span",
								"x-id": "Home_30_464",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "h-2 w-2 rounded-full bg-[#7a9b76]",
									"x-file-name": "Home",
									"x-line-number": "30",
									"x-column": "508",
									"x-component": "span",
									"x-id": "Home_30_508",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 131,
									columnNumber: 1492
								}, this), "Resolution"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 1339
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 835
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 223
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "h-[260px] w-full",
						"x-file-name": "Home",
						"x-line-number": "30",
						"x-column": "591",
						"x-component": "div",
						"x-id": "Home_30_591",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							"x-file-name": "Home",
							"x-line-number": "30",
							"x-column": "625",
							"x-component": "ResponsiveContainer",
							"x-id": "Home_30_625",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(AreaChart, {
								data: data.trend,
								margin: {
									top: 8,
									right: 4,
									left: -24,
									bottom: 0
								},
								"x-file-name": "Home",
								"x-line-number": "30",
								"x-column": "673",
								"x-component": "AreaChart",
								"x-id": "Home_30_673",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("defs", {
										"x-file-name": "Home",
										"x-line-number": "30",
										"x-column": "754",
										"x-component": "defs",
										"x-id": "Home_30_754",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("linearGradient", {
											id: "frustrationFill",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											"x-file-name": "Home",
											"x-line-number": "30",
											"x-column": "760",
											"x-component": "linearGradient",
											"x-id": "Home_30_760",
											"x-dynamic": "false",
											children: [/* @__PURE__ */ _jsxDEV("stop", {
												offset: "0%",
												stopColor: "#d46444",
												stopOpacity: .18,
												"x-file-name": "Home",
												"x-line-number": "30",
												"x-column": "825",
												"x-component": "stop",
												"x-id": "Home_30_825",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 136,
												columnNumber: 429
											}, this), /* @__PURE__ */ _jsxDEV("stop", {
												offset: "100%",
												stopColor: "#d46444",
												stopOpacity: 0,
												"x-file-name": "Home",
												"x-line-number": "30",
												"x-column": "884",
												"x-component": "stop",
												"x-id": "Home_30_884",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 136,
												columnNumber: 597
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 245
										}, this), /* @__PURE__ */ _jsxDEV("linearGradient", {
											id: "resolutionFill",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											"x-file-name": "Home",
											"x-line-number": "30",
											"x-column": "959",
											"x-component": "linearGradient",
											"x-id": "Home_30_959",
											"x-dynamic": "false",
											children: [/* @__PURE__ */ _jsxDEV("stop", {
												offset: "0%",
												stopColor: "#7a9b76",
												stopOpacity: .16,
												"x-file-name": "Home",
												"x-line-number": "30",
												"x-column": "1023",
												"x-component": "stop",
												"x-id": "Home_30_1023",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 136,
												columnNumber: 964
											}, this), /* @__PURE__ */ _jsxDEV("stop", {
												offset: "100%",
												stopColor: "#7a9b76",
												stopOpacity: 0,
												"x-file-name": "Home",
												"x-line-number": "30",
												"x-column": "1082",
												"x-component": "stop",
												"x-id": "Home_30_1082",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 136,
												columnNumber: 1134
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 136,
											columnNumber: 781
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 130
									}, this),
									/* @__PURE__ */ _jsxDEV(CartesianGrid, {
										strokeDasharray: "2 4",
										vertical: false,
										stroke: "var(--border)",
										"x-file-name": "Home",
										"x-line-number": "30",
										"x-column": "1164",
										"x-component": "CartesianGrid",
										"x-id": "Home_30_1164",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 1327
									}, this),
									/* @__PURE__ */ _jsxDEV(XAxis, {
										dataKey: "day",
										axisLine: false,
										tickLine: false,
										tick: {
											fontSize: 10,
											fill: "var(--muted-foreground)"
										},
										"x-file-name": "Home",
										"x-line-number": "30",
										"x-column": "1243",
										"x-component": "XAxis",
										"x-id": "Home_30_1243",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 136,
										columnNumber: 1526
									}, this),
									/* @__PURE__ */ _jsxDEV(YAxis, {
										axisLine: false,
										tickLine: false,
										tick: {
											fontSize: 10,
											fill: "var(--muted-foreground)"
										},
										domain: [0, 100],
										"x-file-name": "Home",
										"x-line-number": "30",
										"x-column": "1357",
										"x-component": "YAxis",
										"x-id": "Home_30_1357",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 139,
										columnNumber: 132
									}, this),
									/* @__PURE__ */ _jsxDEV(Tooltip, { contentStyle: {
										background: "var(--surface)",
										border: "1px solid var(--border)",
										borderRadius: 4,
										fontSize: 11
									} }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 142,
										columnNumber: 150
									}, this),
									/* @__PURE__ */ _jsxDEV(Area, {
										type: "monotone",
										dataKey: "frustration",
										stroke: "#d46444",
										fill: "url(#frustrationFill)",
										strokeWidth: 2,
										"x-file-name": "Home",
										"x-line-number": "30",
										"x-column": "1600",
										"x-component": "Area",
										"x-id": "Home_30_1600",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 20
									}, this),
									/* @__PURE__ */ _jsxDEV(Area, {
										type: "monotone",
										dataKey: "resolution",
										stroke: "#7a9b76",
										fill: "url(#resolutionFill)",
										strokeWidth: 2,
										"x-file-name": "Home",
										"x-line-number": "30",
										"x-column": "1708",
										"x-component": "Area",
										"x-id": "Home_30_1708",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 147,
										columnNumber: 239
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 131,
								columnNumber: 1998
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 131,
							columnNumber: 1826
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 131,
						columnNumber: 1684
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 131,
					columnNumber: 7
				}, this), /* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-5 xl:col-span-3",
					"data-testid": "escalation-radar",
					"x-file-name": "Home",
					"x-line-number": "31",
					"x-column": "6",
					"x-component": "section",
					"x-id": "Home_31_6",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-5 flex items-start justify-between",
							"x-file-name": "Home",
							"x-line-number": "31",
							"x-column": "108",
							"x-component": "div",
							"x-id": "Home_31_108",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Home",
								"x-line-number": "31",
								"x-column": "163",
								"x-component": "div",
								"x-id": "Home_31_163",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "168",
									"x-component": "SectionLabel",
									"x-id": "Home_31_168",
									"x-dynamic": "false",
									children: "Needs attention"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 493
								}, this), /* @__PURE__ */ _jsxDEV("h2", {
									className: "font-serif text-2xl",
									"x-file-name": "Home",
									"x-line-number": "31",
									"x-column": "212",
									"x-component": "h2",
									"x-id": "Home_31_212",
									"x-dynamic": "false",
									children: "Escalation radar"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 148,
									columnNumber: 654
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 380
							}, this), /* @__PURE__ */ _jsxDEV(CircleAlert, {
								size: 18,
								className: "text-[#d46444]",
								"x-file-name": "Home",
								"x-line-number": "31",
								"x-column": "275",
								"x-component": "CircleAlert",
								"x-id": "Home_31_275",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 824
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 217
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "space-y-3",
							"x-file-name": "Home",
							"x-line-number": "31",
							"x-column": "333",
							"x-component": "div",
							"x-id": "Home_31_333",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: data.escalations.map((item) => /* @__PURE__ */ _jsxDEV(Link, {
								to: `/customer/${item.customer_id}`,
								"data-testid": `escalation-${item.customer_id}`,
								className: "block border border-border p-3 transition-colors duration-200 hover:bg-surface-muted",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center justify-between",
										"x-file-name": "Home",
										"x-line-number": "31",
										"x-column": "602",
										"x-component": "div",
										"x-id": "Home_31_602",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "font-medium",
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "653",
											"x-component": "span",
											"x-id": "Home_31_653",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "data",
											"x-source-path": "escalations.customer",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item",
											children: item.customer
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 1582
										}, this), /* @__PURE__ */ _jsxDEV(Badge, {
											variant: item.score > 75 ? "destructive" : "secondary",
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "705",
											"x-component": "Badge",
											"x-id": "Home_31_705",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "data",
											"x-source-path": "escalations.score",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item",
											children: item.score
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 1902
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 1423
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "mt-2 flex items-center justify-between text-xs text-muted-foreground",
										"x-file-name": "Home",
										"x-line-number": "31",
										"x-column": "794",
										"x-component": "div",
										"x-id": "Home_31_794",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "880",
											"x-component": "span",
											"x-id": "Home_31_880",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "data",
											"x-source-path": "escalations.reason",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item",
											children: item.reason
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 2451
										}, this), /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
											size: 13,
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "906",
											"x-component": "ArrowUpRight",
											"x-id": "Home_31_906",
											"x-dynamic": "true",
											"x-source-type": "external",
											"x-source-var": "data",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 2743
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 2257
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "mt-3 h-1 bg-surface-muted",
										"x-file-name": "Home",
										"x-line-number": "31",
										"x-column": "938",
										"x-component": "div",
										"x-id": "Home_31_938",
										"x-dynamic": "false",
										children: /* @__PURE__ */ _jsxDEV("div", {
											className: `h-full ${item.score > 75 ? "bg-[#d46444]" : "bg-[#d5a76d]"}`,
											style: { width: `${item.score}%` },
											"x-file-name": "Home",
											"x-line-number": "31",
											"x-column": "981",
											"x-component": "div",
											"x-id": "Home_31_981",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 148,
											columnNumber: 3158
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 148,
										columnNumber: 3007
									}, this)
								]
							}, item.customer_id, true, {
								fileName: _jsxFileName,
								lineNumber: 148,
								columnNumber: 1213
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 148,
							columnNumber: 998
						}, this),
						/* @__PURE__ */ _jsxDEV(Link, {
							to: "/inbox",
							"data-testid": "view-all-escalations",
							className: "mt-5 flex items-center gap-1 text-xs font-medium text-primary hover:underline",
							children: ["Review all conversations ", /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
								size: 13,
								"x-file-name": "Home",
								"x-line-number": "31",
								"x-column": "1287",
								"x-component": "ArrowUpRight",
								"x-id": "Home_31_1287",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 317
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 149
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 148,
					columnNumber: 7
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 130,
				columnNumber: 5
			}, this),
			/* @__PURE__ */ _jsxDEV("section", {
				className: "mt-6 border border-border bg-surface p-5",
				"data-testid": "recent-tickets-card",
				"x-file-name": "Home",
				"x-line-number": "33",
				"x-column": "4",
				"x-component": "section",
				"x-id": "Home_33_4",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "mb-4 flex items-center justify-between",
					"x-file-name": "Home",
					"x-line-number": "33",
					"x-column": "100",
					"x-component": "div",
					"x-id": "Home_33_100",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Home",
						"x-line-number": "33",
						"x-column": "156",
						"x-component": "div",
						"x-id": "Home_33_156",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
							"x-file-name": "Home",
							"x-line-number": "33",
							"x-column": "161",
							"x-component": "SectionLabel",
							"x-id": "Home_33_161",
							"x-dynamic": "false",
							children: "Latest context"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 486
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "font-serif text-2xl",
							"x-file-name": "Home",
							"x-line-number": "33",
							"x-column": "204",
							"x-component": "h2",
							"x-id": "Home_33_204",
							"x-dynamic": "false",
							children: "Recent conversations"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 152,
							columnNumber: 646
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 373
					}, this), /* @__PURE__ */ _jsxDEV(Link, {
						to: "/inbox",
						"data-testid": "view-inbox-link",
						className: "text-xs font-medium text-primary hover:underline",
						children: "View inbox"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 820
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 152,
					columnNumber: 209
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "divide-y divide-border",
					"x-file-name": "Home",
					"x-line-number": "33",
					"x-column": "403",
					"x-component": "div",
					"x-id": "Home_33_403",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: (tickets.data ?? []).slice(0, 3).map((ticket) => /* @__PURE__ */ _jsxDEV(Link, {
						to: `/inbox?ticket=${ticket.id}`,
						"data-testid": `recent-ticket-${ticket.id}`,
						className: "grid grid-cols-1 gap-2 py-4 transition-colors duration-200 hover:bg-surface-muted md:grid-cols-[1.4fr_2fr_120px_90px] md:items-center md:px-2",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-3",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "746",
								"x-component": "div",
								"x-id": "Home_33_746",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex h-8 w-8 items-center justify-center rounded-full bg-surface-muted font-serif text-sm text-primary",
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "787",
									"x-component": "div",
									"x-id": "Home_33_787",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: ticket.customer_name.split(" ").map((part) => part[0]).join("")
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 1600
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "978",
									"x-component": "div",
									"x-id": "Home_33_978",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "text-sm font-medium",
										"x-file-name": "Home",
										"x-line-number": "33",
										"x-column": "983",
										"x-component": "div",
										"x-id": "Home_33_983",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-path": "customer_name",
										"x-source-editable": "false",
										"x-array-item-param": "ticket",
										children: ticket.customer_name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 2060
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "font-mono text-[9px] uppercase text-muted-foreground",
										"x-file-name": "Home",
										"x-line-number": "33",
										"x-column": "1048",
										"x-component": "div",
										"x-id": "Home_33_1048",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-path": "id",
										"x-source-editable": "false",
										"x-array-item-param": "ticket",
										children: ticket.id
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 152,
										columnNumber: 2348
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 1947
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 1451
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "text-sm text-muted-foreground",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "1147",
								"x-component": "div",
								"x-id": "Home_33_1147",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-path": "subject",
								"x-source-editable": "false",
								"x-array-item-param": "ticket",
								children: [ticket.subject, /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-0.5 truncate text-xs",
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "1210",
									"x-component": "div",
									"x-id": "Home_33_1210",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-path": "preview",
									"x-source-editable": "false",
									"x-array-item-param": "ticket",
									children: ticket.preview
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 2943
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 2661
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-1.5 text-xs text-muted-foreground",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "1279",
								"x-component": "div",
								"x-id": "Home_33_1279",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-path": "channel",
								"x-source-editable": "false",
								"x-array-item-param": "ticket",
								children: [/* @__PURE__ */ _jsxDEV(Clock3, {
									size: 13,
									"x-file-name": "Home",
									"x-line-number": "33",
									"x-column": "1352",
									"x-component": "Clock3",
									"x-id": "Home_33_1352",
									"x-dynamic": "true",
									"x-source-type": "external",
									"x-source-editable": "false",
									"x-array-item-param": "ticket"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 3523
								}, this), ticket.channel]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 3231
							}, this),
							/* @__PURE__ */ _jsxDEV(Badge, {
								variant: ticket.status === "open" ? "destructive" : "secondary",
								"x-file-name": "Home",
								"x-line-number": "33",
								"x-column": "1394",
								"x-component": "Badge",
								"x-id": "Home_33_1394",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-path": "status",
								"x-source-editable": "false",
								"x-array-item-param": "ticket",
								children: ticket.status
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 152,
								columnNumber: 3756
							}, this)
						]
					}, ticket.id, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 1198
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 152,
					columnNumber: 952
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 152,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 102,
		columnNumber: 10
	}, this);
}
_s(Home, "4XZQL0qSC775Ckwn7ILFKprG5Ho=", false, function() {
	return [useQuery, useQuery];
});
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Home.tsx?t=1790687473889";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Home.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Home.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Home.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QUFPQztTQUFROzs7O2lCQUFNOzs7OztnQkFBTTs7Ozs7O09BQUMsd0JBQUMsT0FBRDtRQUFLLFdBQVU7UUFBK0I7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQTlDLENBQWdERCxPQUFPTSxTQUFRLHdCQUFDLE9BQUQ7U0FBSyxXQUFVO1NBQXlCO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO21CQUFFTixPQUFPTztRQUFhOzs7O2dCQUFNOzs7Ozs7T0FBQyx3QkFBQyxPQUFEO1FBQUssV0FBVTtRQUF5RDtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBeEUsQ0FBeUUsd0JBQUMsUUFBRDtTQUFRLE1BQU07U0FBRztTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7UUFBQTs7OztrQkFBSVAsT0FBT1EsT0FBYTs7Ozs7O09BQUMsd0JBQUMsT0FBRDtRQUFPLFNBQVNSLE9BQU9TLFdBQVcsU0FBUyxnQkFBZ0I7UUFBWTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBRVQsT0FBT1M7T0FBYzs7Ozs7TUFBTztRQUE3N0JULE9BQU9DOzs7O1lBQXM3QixDQUFDO0lBQU87Ozs7WUFBVTs7Ozs7O0VBQ2wrQzs7Ozs7O0FBQ1AiLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIm1vdGlvbiIsIkFjdGl2aXR5IiwiQXJyb3dVcFJpZ2h0IiwiQnJhaW5DaXJjdWl0IiwiQ2lyY2xlQWxlcnQiLCJDbG9jazMiLCJHYXVnZSIsIk1lc3NhZ2VTcXVhcmVUZXh0IiwiU2hpZWxkQ2hlY2siLCJUcmVuZGluZ0Rvd24iLCJBcmVhIiwiQXJlYUNoYXJ0IiwiQ2FydGVzaWFuR3JpZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJUb29sdGlwIiwiWEF4aXMiLCJZQXhpcyIsImFwaUdldCIsIkJhZGdlIiwiQnV0dG9uIiwiTGluayIsIlBhZ2VJbnRybyIsIlNlY3Rpb25MYWJlbCIsImZhbGxiYWNrIiwiYWN0aXZlX3Nlc3Npb25zIiwiYXZlcmFnZV9mcnVzdHJhdGlvbiIsInJlc29sdXRpb25fcmF0ZSIsIm1lbW9yeV9tYXRjaF9yYXRlIiwidHJlbmQiLCJkYXkiLCJmcnVzdHJhdGlvbiIsInJlc29sdXRpb24iLCJlc2NhbGF0aW9ucyIsImN1c3RvbWVyIiwiY3VzdG9tZXJfaWQiLCJyZWFzb24iLCJzY29yZSIsInN0YXRDYXJkcyIsImtleSIsImxhYmVsIiwiaWNvbiIsInZhbHVlIiwiZGF0YSIsInN1ZmZpeCIsIm5vdGUiLCJjb2xvciIsIkhvbWUiLCJkYXNoYm9hcmQiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJyZXRyeSIsInRpY2tldHMiLCJoaWRkZW4iLCJzaG93IiwidHJhbnNpdGlvbiIsInN0YWdnZXJDaGlsZHJlbiIsIm1hcCIsIkljb24iLCJvcGFjaXR5IiwieSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImZvbnRTaXplIiwiZmlsbCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJpdGVtIiwid2lkdGgiLCJzbGljZSIsInRpY2tldCIsImlkIiwiY3VzdG9tZXJfbmFtZSIsInNwbGl0IiwicGFydCIsImpvaW4iLCJzdWJqZWN0IiwicHJldmlldyIsImNoYW5uZWwiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSG9tZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBBY3Rpdml0eSwgQXJyb3dVcFJpZ2h0LCBCcmFpbkNpcmN1aXQsIENpcmNsZUFsZXJ0LCBDbG9jazMsIEdhdWdlLCBNZXNzYWdlU3F1YXJlVGV4dCwgU2hpZWxkQ2hlY2ssIFRyZW5kaW5nRG93biB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IEFyZWEsIEFyZWFDaGFydCwgQ2FydGVzaWFuR3JpZCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgVG9vbHRpcCwgWEF4aXMsIFlBeGlzIH0gZnJvbSBcIkAvbGliL3JlY2hhcnRzXCI7XG5pbXBvcnQgeyBhcGlHZXQgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYmFkZ2VcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCB7IFBhZ2VJbnRybywgU2VjdGlvbkxhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9BcHBTaGVsbFwiO1xuaW1wb3J0IHR5cGUgeyBEYXNoYm9hcmRTdGF0cywgVGlja2V0IH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5cbmNvbnN0IGZhbGxiYWNrOiBEYXNoYm9hcmRTdGF0cyA9IHsgYWN0aXZlX3Nlc3Npb25zOiAxOCwgYXZlcmFnZV9mcnVzdHJhdGlvbjogNDcsIHJlc29sdXRpb25fcmF0ZTogODIsIG1lbW9yeV9tYXRjaF9yYXRlOiA5MSwgdHJlbmQ6IFt7IGRheTogXCJNb25cIiwgZnJ1c3RyYXRpb246IDU0LCByZXNvbHV0aW9uOiA2OCB9LCB7IGRheTogXCJUdWVcIiwgZnJ1c3RyYXRpb246IDUxLCByZXNvbHV0aW9uOiA3MiB9LCB7IGRheTogXCJXZWRcIiwgZnJ1c3RyYXRpb246IDQ4LCByZXNvbHV0aW9uOiA3NiB9LCB7IGRheTogXCJUaHVcIiwgZnJ1c3RyYXRpb246IDQ1LCByZXNvbHV0aW9uOiA4MCB9LCB7IGRheTogXCJGcmlcIiwgZnJ1c3RyYXRpb246IDQ3LCByZXNvbHV0aW9uOiA4MiB9LCB7IGRheTogXCJTYXRcIiwgZnJ1c3RyYXRpb246IDQyLCByZXNvbHV0aW9uOiA4NiB9LCB7IGRheTogXCJTdW5cIiwgZnJ1c3RyYXRpb246IDM5LCByZXNvbHV0aW9uOiA4OCB9XSwgZXNjYWxhdGlvbnM6IFt7IGN1c3RvbWVyOiBcIk1heWEgQ2hlblwiLCBjdXN0b21lcl9pZDogXCJjdXNfbWF5YVwiLCByZWFzb246IFwiVGhpcmQgY29udGFjdCDCtyBleHBvcnQgdGltZW91dFwiLCBzY29yZTogODYgfSwgeyBjdXN0b21lcjogXCJBbGV4IE1vcmdhblwiLCBjdXN0b21lcl9pZDogXCJjdXNfYWxleFwiLCByZWFzb246IFwiS25vd24gaXNzdWUgwrcgZGVsaXZlcnkgZGVsYXlcIiwgc2NvcmU6IDY0IH1dIH07XG5cbmNvbnN0IHN0YXRDYXJkcyA9IFtcbiAgeyBrZXk6IFwiYWN0aXZlLXNlc3Npb25zXCIsIGxhYmVsOiBcIkFjdGl2ZSBzZXNzaW9uc1wiLCBpY29uOiBBY3Rpdml0eSwgdmFsdWU6IChkYXRhOiBEYXNoYm9hcmRTdGF0cykgPT4gZGF0YS5hY3RpdmVfc2Vzc2lvbnMsIHN1ZmZpeDogXCJcIiwgbm90ZTogXCIrNCBzaW5jZSA5YW1cIiwgY29sb3I6IFwidGV4dC1wcmltYXJ5XCIgfSxcbiAgeyBrZXk6IFwiYXZnLWZydXN0cmF0aW9uXCIsIGxhYmVsOiBcIkF2Zy4gZnJ1c3RyYXRpb25cIiwgaWNvbjogR2F1Z2UsIHZhbHVlOiAoZGF0YTogRGFzaGJvYXJkU3RhdHMpID0+IGRhdGEuYXZlcmFnZV9mcnVzdHJhdGlvbiwgc3VmZml4OiBcIi8xMDBcIiwgbm90ZTogXCLihpMgOCUgdGhpcyB3ZWVrXCIsIGNvbG9yOiBcInRleHQtWyNkNDY0NDRdXCIgfSxcbiAgeyBrZXk6IFwicmVzb2x1dGlvbi1yYXRlXCIsIGxhYmVsOiBcIlJlc29sdXRpb24gcmF0ZVwiLCBpY29uOiBTaGllbGRDaGVjaywgdmFsdWU6IChkYXRhOiBEYXNoYm9hcmRTdGF0cykgPT4gZGF0YS5yZXNvbHV0aW9uX3JhdGUsIHN1ZmZpeDogXCIlXCIsIG5vdGU6IFwiKzEyJSB3aXRoIG1lbW9yeVwiLCBjb2xvcjogXCJ0ZXh0LVsjNmY5NjZmXVwiIH0sXG4gIHsga2V5OiBcIm1lbW9yeS1tYXRjaGVzXCIsIGxhYmVsOiBcIk1lbW9yeSBtYXRjaGVzXCIsIGljb246IEJyYWluQ2lyY3VpdCwgdmFsdWU6IChkYXRhOiBEYXNoYm9hcmRTdGF0cykgPT4gZGF0YS5tZW1vcnlfbWF0Y2hfcmF0ZSwgc3VmZml4OiBcIiVcIiwgbm90ZTogXCJBY3Jvc3MgNCBsYXllcnNcIiwgY29sb3I6IFwidGV4dC1wcmltYXJ5XCIgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGRhc2hib2FyZCA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcInN1cHBvcnRcIiwgXCJkYXNoYm9hcmRcIl0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDxEYXNoYm9hcmRTdGF0cz4oXCIvc3VwcG9ydC9kYXNoYm9hcmRcIiksIHJldHJ5OiBmYWxzZSB9KTtcbiAgY29uc3QgdGlja2V0cyA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcInN1cHBvcnRcIiwgXCJ0aWNrZXRzXCJdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8VGlja2V0W10+KFwiL3N1cHBvcnQvdGlja2V0c1wiKSwgcmV0cnk6IGZhbHNlIH0pO1xuICBjb25zdCBkYXRhID0gZGFzaGJvYXJkLmRhdGEgPz8gZmFsbGJhY2s7XG4gIHJldHVybiA8ZGl2IGRhdGEtdGVzdGlkPVwiaG9tZS1wYWdlXCI+PFBhZ2VJbnRybyBleWVicm93PVwiT3BlcmF0aW9ucyBodWJcIiB0aXRsZT1cIkdvb2QgbW9ybmluZywgSm9yZGFuLlwiIGRlc2NyaXB0aW9uPVwiQSBjbGVhciB2aWV3IG9mIHdoZXJlIG1lbW9yeSBpcyBoZWxwaW5nIGN1c3RvbWVycyB0b2RheSDigJQgYW5kIHdoZXJlIGEgaHVtYW4gc2hvdWxkIHN0ZXAgaW4uXCIgYWN0aW9uPXs8TGluayB0bz1cIi9pbmJveFwiIGRhdGEtdGVzdGlkPVwib3Blbi1pbmJveC1idXR0b25cIj48QnV0dG9uIGNsYXNzTmFtZT1cImgtMTAgZ2FwLTIgcm91bmRlZC1tZCBiZy1wcmltYXJ5IHB4LTQgdGV4dC1zbSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZCBob3ZlcjpiZy1wcmltYXJ5LzkwXCI+PE1lc3NhZ2VTcXVhcmVUZXh0IHNpemU9ezE1fSAvPiBPcGVuIGluYm94IDxBcnJvd1VwUmlnaHQgc2l6ZT17MTV9IC8+PC9CdXR0b24+PC9MaW5rPn0gLz5cbiAgICA8bW90aW9uLmRpdiBpbml0aWFsPVwiaGlkZGVuXCIgYW5pbWF0ZT1cInNob3dcIiB2YXJpYW50cz17eyBoaWRkZW46IHt9LCBzaG93OiB7IHRyYW5zaXRpb246IHsgc3RhZ2dlckNoaWxkcmVuOiAwLjA4IH0gfSB9fSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC00IG1kOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy00XCI+XG4gICAgICB7c3RhdENhcmRzLm1hcCgoeyBrZXksIGxhYmVsLCBpY29uOiBJY29uLCB2YWx1ZSwgc3VmZml4LCBub3RlLCBjb2xvciB9KSA9PiA8bW90aW9uLmRpdiBrZXk9e2tleX0gdmFyaWFudHM9e3sgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDggfSwgc2hvdzogeyBvcGFjaXR5OiAxLCB5OiAwIH0gfX0gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctc3VyZmFjZSBwLTUgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGhvdmVyOmJnLXN1cmZhY2UtbXV0ZWRcIiBkYXRhLXRlc3RpZD17YG1ldHJpYy0ke2tleX1gfT48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPjxTZWN0aW9uTGFiZWw+e2xhYmVsfTwvU2VjdGlvbkxhYmVsPjxJY29uIHNpemU9ezE3fSBjbGFzc05hbWU9e2NvbG9yfSBzdHJva2VXaWR0aD17MS42fSAvPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4IGl0ZW1zLWJhc2VsaW5lIGdhcC0xXCI+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTR4bCB0cmFja2luZy10aWdodFwiPnt2YWx1ZShkYXRhKX08L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3N1ZmZpeH08L3NwYW4+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj48VHJlbmRpbmdEb3duIHNpemU9ezEzfSBjbGFzc05hbWU9e2NvbG9yfSAvPntub3RlfTwvZGl2PjwvbW90aW9uLmRpdj4pfVxuICAgIDwvbW90aW9uLmRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiB4bDpncmlkLWNvbHMtOFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctc3VyZmFjZSBwLTUgeGw6Y29sLXNwYW4tNVwiIGRhdGEtdGVzdGlkPVwiZnJ1c3RyYXRpb24tdHJlbmQtY2FyZFwiPjxkaXYgY2xhc3NOYW1lPVwibWItNSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPjxkaXY+PFNlY3Rpb25MYWJlbD5MaXZlIHNpZ25hbDwvU2VjdGlvbkxhYmVsPjxoMiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtMnhsXCI+RnJ1c3RyYXRpb24gdnMgcmVzb2x1dGlvbjwvaDI+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IHRleHQtWzExcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPjxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj48c3BhbiBjbGFzc05hbWU9XCJoLTIgdy0yIHJvdW5kZWQtZnVsbCBiZy1bI2Q0NjQ0NF1cIiAvPkZydXN0cmF0aW9uPC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjVcIj48c3BhbiBjbGFzc05hbWU9XCJoLTIgdy0yIHJvdW5kZWQtZnVsbCBiZy1bIzdhOWI3Nl1cIiAvPlJlc29sdXRpb248L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJoLVsyNjBweF0gdy1mdWxsXCI+PFJlc3BvbnNpdmVDb250YWluZXIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPjxBcmVhQ2hhcnQgZGF0YT17ZGF0YS50cmVuZH0gbWFyZ2luPXt7IHRvcDogOCwgcmlnaHQ6IDQsIGxlZnQ6IC0yNCwgYm90dG9tOiAwIH19PjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImZydXN0cmF0aW9uRmlsbFwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPjxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiI2Q0NjQ0NFwiIHN0b3BPcGFjaXR5PXswLjE4fSAvPjxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjZDQ2NDQ0XCIgc3RvcE9wYWNpdHk9ezB9IC8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9XCJyZXNvbHV0aW9uRmlsbFwiIHgxPVwiMFwiIHkxPVwiMFwiIHgyPVwiMFwiIHkyPVwiMVwiPjxzdG9wIG9mZnNldD1cIjAlXCIgc3RvcENvbG9yPVwiIzdhOWI3NlwiIHN0b3BPcGFjaXR5PXswLjE2fSAvPjxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjN2E5Yjc2XCIgc3RvcE9wYWNpdHk9ezB9IC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMiA0XCIgdmVydGljYWw9e2ZhbHNlfSBzdHJva2U9XCJ2YXIoLS1ib3JkZXIpXCIgLz48WEF4aXMgZGF0YUtleT1cImRheVwiIGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSB0aWNrPXt7IGZvbnRTaXplOiAxMCwgZmlsbDogXCJ2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKVwiIH19IC8+PFlBeGlzIGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSB0aWNrPXt7IGZvbnRTaXplOiAxMCwgZmlsbDogXCJ2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKVwiIH19IGRvbWFpbj17WzAsIDEwMF19IC8+PFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmQ6IFwidmFyKC0tc3VyZmFjZSlcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB2YXIoLS1ib3JkZXIpXCIsIGJvcmRlclJhZGl1czogNCwgZm9udFNpemU6IDExIH19IC8+PEFyZWEgdHlwZT1cIm1vbm90b25lXCIgZGF0YUtleT1cImZydXN0cmF0aW9uXCIgc3Ryb2tlPVwiI2Q0NjQ0NFwiIGZpbGw9XCJ1cmwoI2ZydXN0cmF0aW9uRmlsbClcIiBzdHJva2VXaWR0aD17Mn0gLz48QXJlYSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwicmVzb2x1dGlvblwiIHN0cm9rZT1cIiM3YTliNzZcIiBmaWxsPVwidXJsKCNyZXNvbHV0aW9uRmlsbClcIiBzdHJva2VXaWR0aD17Mn0gLz48L0FyZWFDaGFydD48L1Jlc3BvbnNpdmVDb250YWluZXI+PC9kaXY+PC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctc3VyZmFjZSBwLTUgeGw6Y29sLXNwYW4tM1wiIGRhdGEtdGVzdGlkPVwiZXNjYWxhdGlvbi1yYWRhclwiPjxkaXYgY2xhc3NOYW1lPVwibWItNSBmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPjxkaXY+PFNlY3Rpb25MYWJlbD5OZWVkcyBhdHRlbnRpb248L1NlY3Rpb25MYWJlbD48aDIgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTJ4bFwiPkVzY2FsYXRpb24gcmFkYXI8L2gyPjwvZGl2PjxDaXJjbGVBbGVydCBzaXplPXsxOH0gY2xhc3NOYW1lPVwidGV4dC1bI2Q0NjQ0NF1cIiAvPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+e2RhdGEuZXNjYWxhdGlvbnMubWFwKChpdGVtKSA9PiA8TGluayB0bz17YC9jdXN0b21lci8ke2l0ZW0uY3VzdG9tZXJfaWR9YH0ga2V5PXtpdGVtLmN1c3RvbWVyX2lkfSBkYXRhLXRlc3RpZD17YGVzY2FsYXRpb24tJHtpdGVtLmN1c3RvbWVyX2lkfWB9IGNsYXNzTmFtZT1cImJsb2NrIGJvcmRlciBib3JkZXItYm9yZGVyIHAtMyB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgaG92ZXI6Ymctc3VyZmFjZS1tdXRlZFwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57aXRlbS5jdXN0b21lcn08L3NwYW4+PEJhZGdlIHZhcmlhbnQ9e2l0ZW0uc2NvcmUgPiA3NSA/IFwiZGVzdHJ1Y3RpdmVcIiA6IFwic2Vjb25kYXJ5XCJ9PntpdGVtLnNjb3JlfTwvQmFkZ2U+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPjxzcGFuPntpdGVtLnJlYXNvbn08L3NwYW4+PEFycm93VXBSaWdodCBzaXplPXsxM30gLz48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTMgaC0xIGJnLXN1cmZhY2UtbXV0ZWRcIj48ZGl2IGNsYXNzTmFtZT17YGgtZnVsbCAke2l0ZW0uc2NvcmUgPiA3NSA/IFwiYmctWyNkNDY0NDRdXCIgOiBcImJnLVsjZDVhNzZkXVwifWB9IHN0eWxlPXt7IHdpZHRoOiBgJHtpdGVtLnNjb3JlfSVgIH19IC8+PC9kaXY+PC9MaW5rPil9PC9kaXY+PExpbmsgdG89XCIvaW5ib3hcIiBkYXRhLXRlc3RpZD1cInZpZXctYWxsLWVzY2FsYXRpb25zXCIgY2xhc3NOYW1lPVwibXQtNSBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeSBob3Zlcjp1bmRlcmxpbmVcIj5SZXZpZXcgYWxsIGNvbnZlcnNhdGlvbnMgPEFycm93VXBSaWdodCBzaXplPXsxM30gLz48L0xpbms+PC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm10LTYgYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctc3VyZmFjZSBwLTVcIiBkYXRhLXRlc3RpZD1cInJlY2VudC10aWNrZXRzLWNhcmRcIj48ZGl2IGNsYXNzTmFtZT1cIm1iLTQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+PGRpdj48U2VjdGlvbkxhYmVsPkxhdGVzdCBjb250ZXh0PC9TZWN0aW9uTGFiZWw+PGgyIGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC0yeGxcIj5SZWNlbnQgY29udmVyc2F0aW9uczwvaDI+PC9kaXY+PExpbmsgdG89XCIvaW5ib3hcIiBkYXRhLXRlc3RpZD1cInZpZXctaW5ib3gtbGlua1wiIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1wcmltYXJ5IGhvdmVyOnVuZGVybGluZVwiPlZpZXcgaW5ib3g8L0xpbms+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJkaXZpZGUteSBkaXZpZGUtYm9yZGVyXCI+eyh0aWNrZXRzLmRhdGEgPz8gW10pLnNsaWNlKDAsIDMpLm1hcCgodGlja2V0KSA9PiA8TGluayB0bz17YC9pbmJveD90aWNrZXQ9JHt0aWNrZXQuaWR9YH0ga2V5PXt0aWNrZXQuaWR9IGRhdGEtdGVzdGlkPXtgcmVjZW50LXRpY2tldC0ke3RpY2tldC5pZH1gfSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0yIHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGhvdmVyOmJnLXN1cmZhY2UtbXV0ZWQgbWQ6Z3JpZC1jb2xzLVsxLjRmcl8yZnJfMTIwcHhfOTBweF0gbWQ6aXRlbXMtY2VudGVyIG1kOnB4LTJcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtOCB3LTggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBiZy1zdXJmYWNlLW11dGVkIGZvbnQtc2VyaWYgdGV4dC1zbSB0ZXh0LXByaW1hcnlcIj57dGlja2V0LmN1c3RvbWVyX25hbWUuc3BsaXQoXCIgXCIpLm1hcCgocGFydCkgPT4gcGFydFswXSkuam9pbihcIlwiKX08L2Rpdj48ZGl2PjxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPnt0aWNrZXQuY3VzdG9tZXJfbmFtZX08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57dGlja2V0LmlkfTwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57dGlja2V0LnN1YmplY3R9PGRpdiBjbGFzc05hbWU9XCJtdC0wLjUgdHJ1bmNhdGUgdGV4dC14c1wiPnt0aWNrZXQucHJldmlld308L2Rpdj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xLjUgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj48Q2xvY2szIHNpemU9ezEzfSAvPnt0aWNrZXQuY2hhbm5lbH08L2Rpdj48QmFkZ2UgdmFyaWFudD17dGlja2V0LnN0YXR1cyA9PT0gXCJvcGVuXCIgPyBcImRlc3RydWN0aXZlXCIgOiBcInNlY29uZGFyeVwifT57dGlja2V0LnN0YXR1c308L0JhZGdlPjwvTGluaz4pfTwvZGl2Pjwvc2VjdGlvbj5cbiAgPC9kaXY+O1xufSJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvSG9tZS50c3gifQ==