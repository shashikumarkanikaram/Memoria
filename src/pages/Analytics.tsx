import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Analytics.tsx");const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=56fe86c3";
import { ArrowUpRight, BrainCircuit, Clock3, Layers3, Sparkles } from "/src/lib/lucide-react.tsx";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "/src/lib/recharts.tsx";
import { apiGet } from "/src/lib/api.ts";
import { PageIntro, SectionLabel } from "/src/components/AppShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Analytics.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
var _s = $RefreshSig$();
const fallback = {
	resolution_by_week: [
		{
			week: "W1",
			ai: 64,
			human: 36
		},
		{
			week: "W2",
			ai: 70,
			human: 30
		},
		{
			week: "W3",
			ai: 78,
			human: 22
		},
		{
			week: "W4",
			ai: 82,
			human: 18
		}
	],
	issue_breakdown: [
		{
			name: "Export timeout",
			count: 38
		},
		{
			name: "Push delays",
			count: 26
		},
		{
			name: "Invite links",
			count: 18
		},
		{
			name: "Billing",
			count: 11
		}
	],
	memory_impact: [{
		label: "With memory",
		minutes: 7,
		resolution: 82
	}, {
		label: "Without memory",
		minutes: 19,
		resolution: 56
	}],
	repeated_issues: [
		{
			issue: "Export timeout",
			contacts: 38,
			avoidance: 94
		},
		{
			issue: "Push delivery delay",
			contacts: 26,
			avoidance: 88
		},
		{
			issue: "Invite expiry",
			contacts: 18,
			avoidance: 76
		}
	]
};
export default function Analytics() {
	_s();
	const query = useQuery({
		queryKey: ["support", "analytics"],
		queryFn: () => apiGet("/support/analytics"),
		retry: false
	});
	const data = query.data ?? fallback;
	return /* @__PURE__ */ _jsxDEV("div", {
		"data-testid": "analytics-page",
		"x-file-name": "Analytics",
		"x-line-number": "10",
		"x-column": "224",
		"x-component": "div",
		"x-id": "Analytics_10_224",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(PageIntro, {
				eyebrow: "Analytics & insights",
				title: "Memory, measured.",
				description: "See where persistent context is changing the economics of support — from first reply to resolution.",
				action: /* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
					"data-testid": "analytics-period",
					"x-file-name": "Analytics",
					"x-line-number": "10",
					"x-column": "448",
					"x-component": "div",
					"x-id": "Analytics_10_448",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV(Clock3, {
						size: 13,
						"x-file-name": "Analytics",
						"x-line-number": "10",
						"x-column": "589",
						"x-component": "Clock3",
						"x-id": "Analytics_10_589",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 611
					}, this), " Last 30 days"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 352
				}, this),
				"x-file-name": "Analytics",
				"x-line-number": "10",
				"x-column": "258",
				"x-component": "PageIntro",
				"x-id": "Analytics_10_258",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 162
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 gap-6 xl:grid-cols-2",
				"x-file-name": "Analytics",
				"x-line-number": "10",
				"x-column": "632",
				"x-component": "div",
				"x-id": "Analytics_10_632",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-5",
					"data-testid": "resolution-chart-card",
					"x-file-name": "Analytics",
					"x-line-number": "10",
					"x-column": "687",
					"x-component": "section",
					"x-id": "Analytics_10_687",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-5",
							"x-file-name": "Analytics",
							"x-line-number": "10",
							"x-column": "780",
							"x-component": "div",
							"x-id": "Analytics_10_780",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(SectionLabel, {
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "802",
									"x-component": "SectionLabel",
									"x-id": "Analytics_10_802",
									"x-dynamic": "false",
									children: "Resolution mix"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 1426
								}, this),
								/* @__PURE__ */ _jsxDEV("h2", {
									className: "font-serif text-2xl",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "845",
									"x-component": "h2",
									"x-id": "Analytics_10_845",
									"x-dynamic": "false",
									children: "AI autonomy is growing"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 1596
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "mt-1 text-xs text-muted-foreground",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "908",
									"x-component": "p",
									"x-id": "Analytics_10_908",
									"x-dynamic": "false",
									children: "Resolved without human escalation, by week."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 1776
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 1286
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "h-[280px]",
							"x-file-name": "Analytics",
							"x-line-number": "10",
							"x-column": "1011",
							"x-component": "div",
							"x-id": "Analytics_10_1011",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(ResponsiveContainer, {
								width: "100%",
								height: "100%",
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "1038",
								"x-component": "ResponsiveContainer",
								"x-id": "Analytics_10_1038",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV(BarChart, {
									data: data.resolution_by_week,
									margin: {
										top: 5,
										right: 0,
										left: -25,
										bottom: 0
									},
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "1086",
									"x-component": "BarChart",
									"x-id": "Analytics_10_1086",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV(CartesianGrid, {
											strokeDasharray: "2 4",
											vertical: false,
											stroke: "var(--border)",
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "1179",
											"x-component": "CartesianGrid",
											"x-id": "Analytics_10_1179",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 73,
											columnNumber: 141
										}, this),
										/* @__PURE__ */ _jsxDEV(XAxis, {
											dataKey: "week",
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 10,
												fill: "var(--muted-foreground)"
											},
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "1258",
											"x-component": "XAxis",
											"x-id": "Analytics_10_1258",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 73,
											columnNumber: 350
										}, this),
										/* @__PURE__ */ _jsxDEV(YAxis, {
											axisLine: false,
											tickLine: false,
											tick: {
												fontSize: 10,
												fill: "var(--muted-foreground)"
											},
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "1373",
											"x-component": "YAxis",
											"x-id": "Analytics_10_1373",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 76,
											columnNumber: 142
										}, this),
										/* @__PURE__ */ _jsxDEV(Tooltip, { contentStyle: {
											background: "var(--surface)",
											border: "1px solid var(--border)",
											fontSize: 11
										} }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 79,
											columnNumber: 142
										}, this),
										/* @__PURE__ */ _jsxDEV(Bar, {
											dataKey: "ai",
											stackId: "resolution",
											fill: "#7a9b76",
											radius: [
												2,
												2,
												0,
												0
											],
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "1581",
											"x-component": "Bar",
											"x-id": "Analytics_10_1581",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 83,
											columnNumber: 20
										}, this),
										/* @__PURE__ */ _jsxDEV(Bar, {
											dataKey: "human",
											stackId: "resolution",
											fill: "#e5e2d9",
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "1659",
											"x-component": "Bar",
											"x-id": "Analytics_10_1659",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 83,
											columnNumber: 218
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 2326
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 68,
								columnNumber: 2142
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 68,
							columnNumber: 1995
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-2 flex gap-4 text-[11px] text-muted-foreground",
							"x-file-name": "Analytics",
							"x-line-number": "10",
							"x-column": "1757",
							"x-component": "div",
							"x-id": "Analytics_10_1757",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "flex items-center gap-1.5",
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "1824",
								"x-component": "span",
								"x-id": "Analytics_10_1824",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "h-2 w-2 rounded-full bg-[#7a9b76]",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "1868",
									"x-component": "span",
									"x-id": "Analytics_10_1868",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 83,
									columnNumber: 788
								}, this), "AI resolved"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 623
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "flex items-center gap-1.5",
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "1940",
								"x-component": "span",
								"x-id": "Analytics_10_1940",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "h-2 w-2 rounded-full bg-[#e5e2d9]",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "1984",
									"x-component": "span",
									"x-id": "Analytics_10_1984",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 83,
									columnNumber: 1146
								}, this), "Human escalation"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 981
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 436
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 68,
					columnNumber: 1071
				}, this), /* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-5",
					"data-testid": "memory-impact-card",
					"x-file-name": "Analytics",
					"x-line-number": "10",
					"x-column": "2077",
					"x-component": "section",
					"x-id": "Analytics_10_2077",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "mb-5",
						"x-file-name": "Analytics",
						"x-line-number": "10",
						"x-column": "2167",
						"x-component": "div",
						"x-id": "Analytics_10_2167",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "2189",
								"x-component": "SectionLabel",
								"x-id": "Analytics_10_2189",
								"x-dynamic": "false",
								children: "Memory impact"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 1716
							}, this),
							/* @__PURE__ */ _jsxDEV("h2", {
								className: "font-serif text-2xl",
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "2231",
								"x-component": "h2",
								"x-id": "Analytics_10_2231",
								"x-dynamic": "false",
								children: "Less repetition, more trust"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 1887
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-1 text-xs text-muted-foreground",
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "2299",
								"x-component": "p",
								"x-id": "Analytics_10_2299",
								"x-dynamic": "false",
								children: "Average time and resolution rate per conversation."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 2074
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 1574
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-6 pt-3",
						"x-file-name": "Analytics",
						"x-line-number": "10",
						"x-column": "2409",
						"x-component": "div",
						"x-id": "Analytics_10_2409",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [data.memory_impact.map((item, index) => /* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Analytics",
							"x-line-number": "10",
							"x-column": "2482",
							"x-component": "div",
							"x-id": "Analytics_10_2482",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mb-2 flex items-center justify-between text-sm",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "2504",
									"x-component": "div",
									"x-id": "Analytics_10_2504",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "flex items-center gap-2 font-medium",
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "2568",
										"x-component": "span",
										"x-id": "Analytics_10_2568",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: [index === 0 ? /* @__PURE__ */ _jsxDEV(BrainCircuit, {
											size: 15,
											className: "text-primary",
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "2637",
											"x-component": "BrainCircuit",
											"x-id": "Analytics_10_2637",
											"x-dynamic": "true",
											"x-source-type": "external",
											"x-source-var": "data",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 83,
											columnNumber: 3111
										}, this) : /* @__PURE__ */ _jsxDEV(Layers3, {
											size: 15,
											className: "text-muted-foreground",
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "2691",
											"x-component": "Layers3",
											"x-id": "Analytics_10_2691",
											"x-dynamic": "true",
											"x-source-type": "external",
											"x-source-var": "data",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 83,
											columnNumber: 3409
										}, this), item.label]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 83,
										columnNumber: 2871
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-xs text-muted-foreground",
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "2766",
										"x-component": "span",
										"x-id": "Analytics_10_2766",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "data",
										"x-source-path": "memory_impact.minutes",
										"x-source-editable": "false",
										"x-array-var": "data",
										"x-array-item-param": "item",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "2766",
											"x-component": "span",
											"x-id": "Analytics_10_2766_expr0",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "data",
											"x-source-path": "memory_impact.minutes",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item",
											children: item.minutes
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 83,
											columnNumber: 4062
										}, this), " min avg"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 83,
										columnNumber: 3723
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 83,
									columnNumber: 2687
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "h-3 bg-surface-muted",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "2859",
									"x-component": "div",
									"x-id": "Analytics_10_2859",
									"x-dynamic": "false",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: `h-full ${index === 0 ? "bg-primary" : "bg-[#d8d3c8]"}`,
										style: { width: `${item.resolution}%` },
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "2897",
										"x-component": "div",
										"x-id": "Analytics_10_2897",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 85,
										columnNumber: 507
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 85,
									columnNumber: 349
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-2 flex justify-between text-xs text-muted-foreground",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "3019",
									"x-component": "div",
									"x-id": "Analytics_10_3019",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "3092",
										"x-component": "span",
										"x-id": "Analytics_10_3092",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "data",
										"x-source-path": "memory_impact.resolution",
										"x-source-editable": "false",
										"x-array-var": "data",
										"x-array-item-param": "item",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "3092",
											"x-component": "span",
											"x-id": "Analytics_10_3092_expr0",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "data",
											"x-source-path": "memory_impact.resolution",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "item",
											children: item.resolution
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 87,
											columnNumber: 629
										}, this), "% resolved"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 87,
										columnNumber: 339
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "3132",
										"x-component": "span",
										"x-id": "Analytics_10_3132",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: index === 0 ? "+26 pts" : "baseline"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 89,
										columnNumber: 351
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 87,
									columnNumber: 146
								}, this)
							]
						}, item.label, true, {
							fileName: _jsxFileName,
							lineNumber: 83,
							columnNumber: 2545
						}, this)), /* @__PURE__ */ _jsxDEV("div", {
							className: "mt-4 border-t border-border pt-4 text-xs leading-5 text-muted-foreground",
							"x-file-name": "Analytics",
							"x-line-number": "10",
							"x-column": "3197",
							"x-component": "div",
							"x-id": "Analytics_10_3197",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(Sparkles, {
									size: 14,
									className: "mb-2 text-primary",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "3287",
									"x-component": "Sparkles",
									"x-id": "Analytics_10_3287",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 797
								}, this),
								"Memory-assisted conversations resolve ",
								/* @__PURE__ */ _jsxDEV("strong", {
									className: "text-foreground",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "3377",
									"x-component": "strong",
									"x-id": "Analytics_10_3377",
									"x-dynamic": "false",
									children: "2.7× faster"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 1012
								}, this),
								" and prevent repeated fixes from being suggested."
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 587
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 83,
						columnNumber: 2302
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 1360
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 898
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "mt-6 border border-border bg-surface p-5",
				"data-testid": "repeated-issues-table",
				"x-file-name": "Analytics",
				"x-line-number": "10",
				"x-column": "3510",
				"x-component": "div",
				"x-id": "Analytics_10_3510",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "mb-5 flex items-end justify-between",
					"x-file-name": "Analytics",
					"x-line-number": "10",
					"x-column": "3604",
					"x-component": "div",
					"x-id": "Analytics_10_3604",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Analytics",
						"x-line-number": "10",
						"x-column": "3657",
						"x-component": "div",
						"x-id": "Analytics_10_3657",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
							"x-file-name": "Analytics",
							"x-line-number": "10",
							"x-column": "3662",
							"x-component": "SectionLabel",
							"x-id": "Analytics_10_3662",
							"x-dynamic": "false",
							children: "Pattern library"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 1780
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "font-serif text-2xl",
							"x-file-name": "Analytics",
							"x-line-number": "10",
							"x-column": "3706",
							"x-component": "h2",
							"x-id": "Analytics_10_3706",
							"x-dynamic": "false",
							children: "Most repeated issues"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 1953
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 1655
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
						"x-file-name": "Analytics",
						"x-line-number": "10",
						"x-column": "3773",
						"x-component": "span",
						"x-id": "Analytics_10_3773",
						"x-dynamic": "false",
						children: "Memory avoidance rate"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 2139
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 1482
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "divide-y divide-border",
					"x-file-name": "Analytics",
					"x-line-number": "10",
					"x-column": "3894",
					"x-component": "div",
					"x-id": "Analytics_10_3894",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: data.repeated_issues.map((issue) => /* @__PURE__ */ _jsxDEV("div", {
						className: "grid grid-cols-[1fr_90px_140px] items-center gap-4 py-4 text-sm",
						"x-file-name": "Analytics",
						"x-line-number": "10",
						"x-column": "3971",
						"x-component": "div",
						"x-id": "Analytics_10_3971",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "font-medium",
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "4070",
								"x-component": "div",
								"x-id": "Analytics_10_4070",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "data",
								"x-source-path": "repeated_issues.issue",
								"x-source-editable": "false",
								"x-array-var": "data",
								"x-array-item-param": "issue",
								children: issue.issue
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 2845
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "font-mono text-xs text-muted-foreground",
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "4118",
								"x-component": "div",
								"x-id": "Analytics_10_4118",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "data",
								"x-source-path": "repeated_issues.contacts",
								"x-source-editable": "false",
								"x-array-var": "data",
								"x-array-item-param": "issue",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									"data-ve-dynamic": "true",
									"x-excluded": "true",
									style: { display: "contents" },
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "4118",
									"x-component": "div",
									"x-id": "Analytics_10_4118_expr0",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "data",
									"x-source-path": "repeated_issues.contacts",
									"x-source-editable": "false",
									"x-array-var": "data",
									"x-array-item-param": "issue",
									children: issue.contacts
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 89,
									columnNumber: 3515
								}, this), " contacts"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 3174
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Analytics",
								"x-line-number": "10",
								"x-column": "4206",
								"x-component": "div",
								"x-id": "Analytics_10_4206",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "mb-1 flex justify-between text-[10px] text-muted-foreground",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "4211",
									"x-component": "div",
									"x-id": "Analytics_10_4211",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "4288",
										"x-component": "span",
										"x-id": "Analytics_10_4288",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "data",
										"x-source-path": "repeated_issues.avoidance",
										"x-source-editable": "false",
										"x-array-var": "data",
										"x-array-item-param": "issue",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Analytics",
											"x-line-number": "10",
											"x-column": "4288",
											"x-component": "span",
											"x-id": "Analytics_10_4288_expr0",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "data",
											"x-source-path": "repeated_issues.avoidance",
											"x-source-editable": "false",
											"x-array-var": "data",
											"x-array-item-param": "issue",
											children: issue.avoidance
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 91,
											columnNumber: 958
										}, this), "% avoided"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 91,
										columnNumber: 666
									}, this), /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
										size: 12,
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "4327",
										"x-component": "ArrowUpRight",
										"x-id": "Analytics_10_4327",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "data",
										"x-source-editable": "false",
										"x-array-var": "data",
										"x-array-item-param": "issue"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 93,
										columnNumber: 352
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 91,
									columnNumber: 469
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "h-1 bg-surface-muted",
									"x-file-name": "Analytics",
									"x-line-number": "10",
									"x-column": "4359",
									"x-component": "div",
									"x-id": "Analytics_10_4359",
									"x-dynamic": "false",
									children: /* @__PURE__ */ _jsxDEV("div", {
										className: "h-full bg-[#7a9b76]",
										style: { width: `${issue.avoidance}%` },
										"x-file-name": "Analytics",
										"x-line-number": "10",
										"x-column": "4397",
										"x-component": "div",
										"x-id": "Analytics_10_4397",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 93,
										columnNumber: 787
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 93,
									columnNumber: 629
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 91,
								columnNumber: 344
							}, this)
						]
					}, issue.issue, true, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 2626
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 89,
					columnNumber: 2381
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 89,
				columnNumber: 1268
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 68,
		columnNumber: 10
	}, this);
}
_s(Analytics, "c7fxJWDO4uMGjIdKMJSj1aiS9wg=", false, function() {
	return [useQuery];
});
_c = Analytics;
var _c;
$RefreshReg$(_c, "Analytics");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Analytics.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Analytics.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Analytics.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Analytics.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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Ozs7a0JBQUMsd0JBQUMsT0FBRDtTQUFLLFdBQVU7U0FBc0I7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO21CQUFDLHdCQUFDLE9BQUQ7VUFBSyxXQUFVO1VBQXNCLE9BQU8sRUFBRW1CLE9BQU8sR0FBR3JCLE1BQU1FLFVBQVMsR0FBSTtVQUFFO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtTQUFBOzs7OztRQUFROzs7O2dCQUFNOzs7Ozs7TUFBTTtRQUFqZ0JGLE1BQU1BOzs7O1lBQTJmLENBQUM7SUFBTzs7OztZQUFNOzs7Ozs7RUFBTTs7Ozs7O0FBQUUiLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIkFycm93VXBSaWdodCIsIkJyYWluQ2lyY3VpdCIsIkNsb2NrMyIsIkxheWVyczMiLCJTcGFya2xlcyIsIkJhciIsIkJhckNoYXJ0IiwiQ2FydGVzaWFuR3JpZCIsIlJlc3BvbnNpdmVDb250YWluZXIiLCJUb29sdGlwIiwiWEF4aXMiLCJZQXhpcyIsImFwaUdldCIsIlBhZ2VJbnRybyIsIlNlY3Rpb25MYWJlbCIsImZhbGxiYWNrIiwicmVzb2x1dGlvbl9ieV93ZWVrIiwid2VlayIsImFpIiwiaHVtYW4iLCJpc3N1ZV9icmVha2Rvd24iLCJuYW1lIiwiY291bnQiLCJtZW1vcnlfaW1wYWN0IiwibGFiZWwiLCJtaW51dGVzIiwicmVzb2x1dGlvbiIsInJlcGVhdGVkX2lzc3VlcyIsImlzc3VlIiwiY29udGFjdHMiLCJhdm9pZGFuY2UiLCJBbmFseXRpY3MiLCJxdWVyeSIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJldHJ5IiwiZGF0YSIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImZvbnRTaXplIiwiZmlsbCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJkaXNwbGF5Iiwid2lkdGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQW5hbHl0aWNzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEFycm93VXBSaWdodCwgQnJhaW5DaXJjdWl0LCBDbG9jazMsIExheWVyczMsIFNwYXJrbGVzIH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQmFyLCBCYXJDaGFydCwgQ2FydGVzaWFuR3JpZCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgVG9vbHRpcCwgWEF4aXMsIFlBeGlzIH0gZnJvbSBcIkAvbGliL3JlY2hhcnRzXCI7XG5pbXBvcnQgeyBhcGlHZXQgfSBmcm9tIFwiQC9saWIvYXBpXCI7XG5pbXBvcnQgeyBQYWdlSW50cm8sIFNlY3Rpb25MYWJlbCB9IGZyb20gXCJAL2NvbXBvbmVudHMvQXBwU2hlbGxcIjtcbmltcG9ydCB0eXBlIHsgQW5hbHl0aWNzUmVzcG9uc2UgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuY29uc3QgZmFsbGJhY2s6IEFuYWx5dGljc1Jlc3BvbnNlID0geyByZXNvbHV0aW9uX2J5X3dlZWs6IFt7IHdlZWs6IFwiVzFcIiwgYWk6IDY0LCBodW1hbjogMzYgfSwgeyB3ZWVrOiBcIlcyXCIsIGFpOiA3MCwgaHVtYW46IDMwIH0sIHsgd2VlazogXCJXM1wiLCBhaTogNzgsIGh1bWFuOiAyMiB9LCB7IHdlZWs6IFwiVzRcIiwgYWk6IDgyLCBodW1hbjogMTggfV0sIGlzc3VlX2JyZWFrZG93bjogW3sgbmFtZTogXCJFeHBvcnQgdGltZW91dFwiLCBjb3VudDogMzggfSwgeyBuYW1lOiBcIlB1c2ggZGVsYXlzXCIsIGNvdW50OiAyNiB9LCB7IG5hbWU6IFwiSW52aXRlIGxpbmtzXCIsIGNvdW50OiAxOCB9LCB7IG5hbWU6IFwiQmlsbGluZ1wiLCBjb3VudDogMTEgfV0sIG1lbW9yeV9pbXBhY3Q6IFt7IGxhYmVsOiBcIldpdGggbWVtb3J5XCIsIG1pbnV0ZXM6IDcsIHJlc29sdXRpb246IDgyIH0sIHsgbGFiZWw6IFwiV2l0aG91dCBtZW1vcnlcIiwgbWludXRlczogMTksIHJlc29sdXRpb246IDU2IH1dLCByZXBlYXRlZF9pc3N1ZXM6IFt7IGlzc3VlOiBcIkV4cG9ydCB0aW1lb3V0XCIsIGNvbnRhY3RzOiAzOCwgYXZvaWRhbmNlOiA5NCB9LCB7IGlzc3VlOiBcIlB1c2ggZGVsaXZlcnkgZGVsYXlcIiwgY29udGFjdHM6IDI2LCBhdm9pZGFuY2U6IDg4IH0sIHsgaXNzdWU6IFwiSW52aXRlIGV4cGlyeVwiLCBjb250YWN0czogMTgsIGF2b2lkYW5jZTogNzYgfV0gfTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQW5hbHl0aWNzKCkgeyBjb25zdCBxdWVyeSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcInN1cHBvcnRcIiwgXCJhbmFseXRpY3NcIl0sIHF1ZXJ5Rm46ICgpID0+IGFwaUdldDxBbmFseXRpY3NSZXNwb25zZT4oXCIvc3VwcG9ydC9hbmFseXRpY3NcIiksIHJldHJ5OiBmYWxzZSB9KTsgY29uc3QgZGF0YSA9IHF1ZXJ5LmRhdGEgPz8gZmFsbGJhY2s7IHJldHVybiA8ZGl2IGRhdGEtdGVzdGlkPVwiYW5hbHl0aWNzLXBhZ2VcIj48UGFnZUludHJvIGV5ZWJyb3c9XCJBbmFseXRpY3MgJiBpbnNpZ2h0c1wiIHRpdGxlPVwiTWVtb3J5LCBtZWFzdXJlZC5cIiBkZXNjcmlwdGlvbj1cIlNlZSB3aGVyZSBwZXJzaXN0ZW50IGNvbnRleHQgaXMgY2hhbmdpbmcgdGhlIGVjb25vbWljcyBvZiBzdXBwb3J0IOKAlCBmcm9tIGZpcnN0IHJlcGx5IHRvIHJlc29sdXRpb24uXCIgYWN0aW9uPXs8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgZGF0YS10ZXN0aWQ9XCJhbmFseXRpY3MtcGVyaW9kXCI+PENsb2NrMyBzaXplPXsxM30gLz4gTGFzdCAzMCBkYXlzPC9kaXY+fSAvPjxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiB4bDpncmlkLWNvbHMtMlwiPjxzZWN0aW9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYm9yZGVyIGJnLXN1cmZhY2UgcC01XCIgZGF0YS10ZXN0aWQ9XCJyZXNvbHV0aW9uLWNoYXJ0LWNhcmRcIj48ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj48U2VjdGlvbkxhYmVsPlJlc29sdXRpb24gbWl4PC9TZWN0aW9uTGFiZWw+PGgyIGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC0yeGxcIj5BSSBhdXRvbm9teSBpcyBncm93aW5nPC9oMj48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+UmVzb2x2ZWQgd2l0aG91dCBodW1hbiBlc2NhbGF0aW9uLCBieSB3ZWVrLjwvcD48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImgtWzI4MHB4XVwiPjxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj48QmFyQ2hhcnQgZGF0YT17ZGF0YS5yZXNvbHV0aW9uX2J5X3dlZWt9IG1hcmdpbj17eyB0b3A6IDUsIHJpZ2h0OiAwLCBsZWZ0OiAtMjUsIGJvdHRvbTogMCB9fT48Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIyIDRcIiB2ZXJ0aWNhbD17ZmFsc2V9IHN0cm9rZT1cInZhcigtLWJvcmRlcilcIiAvPjxYQXhpcyBkYXRhS2V5PVwid2Vla1wiIGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSB0aWNrPXt7IGZvbnRTaXplOiAxMCwgZmlsbDogXCJ2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKVwiIH19IC8+PFlBeGlzIGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSB0aWNrPXt7IGZvbnRTaXplOiAxMCwgZmlsbDogXCJ2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKVwiIH19IC8+PFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmQ6IFwidmFyKC0tc3VyZmFjZSlcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB2YXIoLS1ib3JkZXIpXCIsIGZvbnRTaXplOiAxMSB9fSAvPjxCYXIgZGF0YUtleT1cImFpXCIgc3RhY2tJZD1cInJlc29sdXRpb25cIiBmaWxsPVwiIzdhOWI3NlwiIHJhZGl1cz17WzIsIDIsIDAsIDBdfSAvPjxCYXIgZGF0YUtleT1cImh1bWFuXCIgc3RhY2tJZD1cInJlc29sdXRpb25cIiBmaWxsPVwiI2U1ZTJkOVwiIC8+PC9CYXJDaGFydD48L1Jlc3BvbnNpdmVDb250YWluZXI+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggZ2FwLTQgdGV4dC1bMTFweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+PHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPjxzcGFuIGNsYXNzTmFtZT1cImgtMiB3LTIgcm91bmRlZC1mdWxsIGJnLVsjN2E5Yjc2XVwiIC8+QUkgcmVzb2x2ZWQ8L3NwYW4+PHNwYW4gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTEuNVwiPjxzcGFuIGNsYXNzTmFtZT1cImgtMiB3LTIgcm91bmRlZC1mdWxsIGJnLVsjZTVlMmQ5XVwiIC8+SHVtYW4gZXNjYWxhdGlvbjwvc3Bhbj48L2Rpdj48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctc3VyZmFjZSBwLTVcIiBkYXRhLXRlc3RpZD1cIm1lbW9yeS1pbXBhY3QtY2FyZFwiPjxkaXYgY2xhc3NOYW1lPVwibWItNVwiPjxTZWN0aW9uTGFiZWw+TWVtb3J5IGltcGFjdDwvU2VjdGlvbkxhYmVsPjxoMiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtMnhsXCI+TGVzcyByZXBldGl0aW9uLCBtb3JlIHRydXN0PC9oMj48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+QXZlcmFnZSB0aW1lIGFuZCByZXNvbHV0aW9uIHJhdGUgcGVyIGNvbnZlcnNhdGlvbi48L3A+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTYgcHQtM1wiPntkYXRhLm1lbW9yeV9pbXBhY3QubWFwKChpdGVtLCBpbmRleCkgPT4gPGRpdiBrZXk9e2l0ZW0ubGFiZWx9PjxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1zbVwiPjxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGZvbnQtbWVkaXVtXCI+e2luZGV4ID09PSAwID8gPEJyYWluQ2lyY3VpdCBzaXplPXsxNX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCIgLz4gOiA8TGF5ZXJzMyBzaXplPXsxNX0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz59e2l0ZW0ubGFiZWx9PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntpdGVtLm1pbnV0ZXN9IG1pbiBhdmc8L3NwYW4+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJoLTMgYmctc3VyZmFjZS1tdXRlZFwiPjxkaXYgY2xhc3NOYW1lPXtgaC1mdWxsICR7aW5kZXggPT09IDAgPyBcImJnLXByaW1hcnlcIiA6IFwiYmctWyNkOGQzYzhdXCJ9YH0gc3R5bGU9e3sgd2lkdGg6IGAke2l0ZW0ucmVzb2x1dGlvbn0lYCB9fSAvPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtMiBmbGV4IGp1c3RpZnktYmV0d2VlbiB0ZXh0LXhzIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPjxzcGFuPntpdGVtLnJlc29sdXRpb259JSByZXNvbHZlZDwvc3Bhbj48c3Bhbj57aW5kZXggPT09IDAgPyBcIisyNiBwdHNcIiA6IFwiYmFzZWxpbmVcIn08L3NwYW4+PC9kaXY+PC9kaXY+KX08ZGl2IGNsYXNzTmFtZT1cIm10LTQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwdC00IHRleHQteHMgbGVhZGluZy01IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPjxTcGFya2xlcyBzaXplPXsxNH0gY2xhc3NOYW1lPVwibWItMiB0ZXh0LXByaW1hcnlcIiAvPk1lbW9yeS1hc3Npc3RlZCBjb252ZXJzYXRpb25zIHJlc29sdmUgPHN0cm9uZyBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmRcIj4yLjfDlyBmYXN0ZXI8L3N0cm9uZz4gYW5kIHByZXZlbnQgcmVwZWF0ZWQgZml4ZXMgZnJvbSBiZWluZyBzdWdnZXN0ZWQuPC9kaXY+PC9kaXY+PC9zZWN0aW9uPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibXQtNiBib3JkZXIgYm9yZGVyLWJvcmRlciBiZy1zdXJmYWNlIHAtNVwiIGRhdGEtdGVzdGlkPVwicmVwZWF0ZWQtaXNzdWVzLXRhYmxlXCI+PGRpdiBjbGFzc05hbWU9XCJtYi01IGZsZXggaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlblwiPjxkaXY+PFNlY3Rpb25MYWJlbD5QYXR0ZXJuIGxpYnJhcnk8L1NlY3Rpb25MYWJlbD48aDIgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTJ4bFwiPk1vc3QgcmVwZWF0ZWQgaXNzdWVzPC9oMj48L2Rpdj48c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPk1lbW9yeSBhdm9pZGFuY2UgcmF0ZTwvc3Bhbj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1ib3JkZXJcIj57ZGF0YS5yZXBlYXRlZF9pc3N1ZXMubWFwKChpc3N1ZSkgPT4gPGRpdiBrZXk9e2lzc3VlLmlzc3VlfSBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1bMWZyXzkwcHhfMTQwcHhdIGl0ZW1zLWNlbnRlciBnYXAtNCBweS00IHRleHQtc21cIj48ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtXCI+e2lzc3VlLmlzc3VlfTwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e2lzc3VlLmNvbnRhY3RzfSBjb250YWN0czwvZGl2PjxkaXY+PGRpdiBjbGFzc05hbWU9XCJtYi0xIGZsZXgganVzdGlmeS1iZXR3ZWVuIHRleHQtWzEwcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPjxzcGFuPntpc3N1ZS5hdm9pZGFuY2V9JSBhdm9pZGVkPC9zcGFuPjxBcnJvd1VwUmlnaHQgc2l6ZT17MTJ9IC8+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJoLTEgYmctc3VyZmFjZS1tdXRlZFwiPjxkaXYgY2xhc3NOYW1lPVwiaC1mdWxsIGJnLVsjN2E5Yjc2XVwiIHN0eWxlPXt7IHdpZHRoOiBgJHtpc3N1ZS5hdm9pZGFuY2V9JWAgfX0gLz48L2Rpdj48L2Rpdj48L2Rpdj4pfTwvZGl2PjwvZGl2PjwvZGl2PiB9Il0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9wYWdlcy9BbmFseXRpY3MudHN4In0=