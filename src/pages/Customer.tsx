import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Customer.tsx");const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport8_react_jsxDevRuntime["Fragment"];import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=56fe86c3";
import { ArrowLeft, ArrowUpRight, Check, CircleAlert, Laptop, MapPin, Monitor, Smartphone, X } from "/src/lib/lucide-react.tsx";
import { Link, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=56fe86c3";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "/src/lib/recharts.tsx";
import { apiGet } from "/src/lib/api.ts";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { PageIntro, SectionLabel } from "/src/components/AppShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Customer.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
var _s = $RefreshSig$();
export default function Customer() {
	_s();
	const { id = "cus_maya" } = useParams();
	const detail = useQuery({
		queryKey: [
			"support",
			"customer",
			id
		],
		queryFn: () => apiGet(`/support/customers/${id}`),
		retry: false
	});
	const data = detail.data;
	const customer = data?.customer;
	const memories = data?.memories ?? [];
	const history = [
		{
			day: "Apr 28",
			score: 36
		},
		{
			day: "May 05",
			score: 42
		},
		{
			day: "May 12",
			score: 52
		},
		{
			day: "May 19",
			score: 49
		},
		{
			day: "May 26",
			score: 68
		},
		{
			day: "Jun 02",
			score: 76
		},
		{
			day: "Jun 18",
			score: customer?.frustration_index ?? 86
		}
	];
	return /* @__PURE__ */ _jsxDEV("div", {
		"data-testid": "customer-page",
		"x-file-name": "Customer",
		"x-line-number": "18",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Customer_18_9",
		"x-dynamic": "true",
		"x-source-type": "computed",
		"x-source-editable": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(Link, {
				to: "/inbox",
				"data-testid": "back-to-inbox-link",
				className: "mb-5 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground",
				children: [/* @__PURE__ */ _jsxDEV(ArrowLeft, { size: 13 }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 44,
					columnNumber: 356
				}, this), " Back to inbox"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 205
			}, this),
			/* @__PURE__ */ _jsxDEV(PageIntro, {
				eyebrow: "Customer memory profile",
				title: customer?.name ?? "Loading profile…",
				description: customer ? `${customer.company} · Last contact ${new Date(customer.last_contact_at).toLocaleDateString("en-US", {
					month: "short",
					day: "numeric"
				})}. Four layers of context, in one view.` : "Retrieving durable customer context.",
				action: customer ? /* @__PURE__ */ _jsxDEV(Badge, {
					variant: customer.frustration_index > 75 ? "destructive" : "secondary",
					"x-file-name": "Customer",
					"x-line-number": "18",
					"x-column": "589",
					"x-component": "Badge",
					"x-id": "Customer_18_589",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: customer.frustration_index > 75 ? "Needs human attention" : "Healthy relationship"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 47,
					columnNumber: 109
				}, this) : undefined,
				"x-file-name": "Customer",
				"x-line-number": "18",
				"x-column": "237",
				"x-component": "PageIntro",
				"x-id": "Customer_18_237",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 400
			}, this),
			customer ? /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "grid grid-cols-1 gap-6 lg:grid-cols-12",
				"x-file-name": "Customer",
				"x-line-number": "19",
				"x-column": "18",
				"x-component": "div",
				"x-id": "Customer_19_18",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-6 lg:col-span-4",
					"data-testid": "customer-profile-card",
					"x-file-name": "Customer",
					"x-line-number": "19",
					"x-column": "74",
					"x-component": "section",
					"x-id": "Customer_19_74",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-start justify-between",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "181",
							"x-component": "div",
							"x-id": "Customer_19_181",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("img", {
								src: customer.avatar_url,
								alt: "",
								className: "h-16 w-16 rounded-full object-cover grayscale-[15%]",
								"data-testid": "customer-avatar",
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "231",
								"x-component": "img",
								"x-id": "Customer_19_231",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 580
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "text-right",
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "365",
								"x-component": "div",
								"x-id": "Customer_19_365",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "393",
									"x-component": "div",
									"x-id": "Customer_19_393",
									"x-dynamic": "false",
									children: "Customer ID"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 974
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-1 font-mono text-[11px]",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "496",
									"x-component": "div",
									"x-id": "Customer_19_496",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "customer",
									"x-source-path": "id",
									"x-source-editable": "false",
									children: customer.id
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 1193
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 48,
								columnNumber: 830
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 414
						}, this),
						/* @__PURE__ */ _jsxDEV("h2", {
							className: "mt-5 font-serif text-3xl",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "571",
							"x-component": "h2",
							"x-id": "Customer_19_571",
							"x-dynamic": "true",
							"x-source-type": "unknown",
							"x-source-var": "customer",
							"x-source-path": "name",
							"x-source-editable": "false",
							children: customer.name
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 1476
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-1 text-sm text-muted-foreground",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "632",
							"x-component": "div",
							"x-id": "Customer_19_632",
							"x-dynamic": "true",
							"x-source-type": "unknown",
							"x-source-var": "customer",
							"x-source-path": "email",
							"x-source-editable": "false",
							children: customer.email
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 1746
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5 text-xs",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "706",
							"x-component": "div",
							"x-id": "Customer_19_706",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "787",
									"x-component": "div",
									"x-id": "Customer_19_787",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "792",
										"x-component": "SectionLabel",
										"x-id": "Customer_19_792",
										"x-dynamic": "false",
										children: "Plan"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 2349
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "font-medium",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "825",
										"x-component": "div",
										"x-id": "Customer_19_825",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "customer",
										"x-source-path": "plan",
										"x-source-editable": "false",
										children: customer.plan
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 2507
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 2228
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "881",
									"x-component": "div",
									"x-id": "Customer_19_881",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "886",
										"x-component": "SectionLabel",
										"x-id": "Customer_19_886",
										"x-dynamic": "false",
										children: "Open tickets"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 2894
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "font-medium",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "927",
										"x-component": "div",
										"x-id": "Customer_19_927",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "customer",
										"x-source-path": "open_ticket_count",
										"x-source-editable": "false",
										children: customer.open_ticket_count
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 3060
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 2773
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "996",
									"x-component": "div",
									"x-id": "Customer_19_996",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "1001",
										"x-component": "SectionLabel",
										"x-id": "Customer_19_1001",
										"x-dynamic": "false",
										children: "Location"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 3473
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-1",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "1038",
										"x-component": "div",
										"x-id": "Customer_19_1038",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "customer",
										"x-source-path": "location",
										"x-source-editable": "false",
										children: [/* @__PURE__ */ _jsxDEV(MapPin, {
											size: 12,
											"x-file-name": "Customer",
											"x-line-number": "19",
											"x-column": "1079",
											"x-component": "MapPin",
											"x-id": "Customer_19_1079",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 48,
											columnNumber: 3894
										}, this), customer.location]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 3637
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 3352
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "1130",
									"x-component": "div",
									"x-id": "Customer_19_1130",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "1135",
										"x-component": "SectionLabel",
										"x-id": "Customer_19_1135",
										"x-dynamic": "false",
										children: "Risk score"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 4189
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "font-medium text-[#d46444]",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "1174",
										"x-component": "div",
										"x-id": "Customer_19_1174",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "customer",
										"x-source-path": "frustration_index",
										"x-source-editable": "false",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Customer",
											"x-line-number": "19",
											"x-column": "1174",
											"x-component": "div",
											"x-id": "Customer_19_1174_expr0",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "customer",
											"x-source-path": "frustration_index",
											"x-source-editable": "false",
											children: customer.frustration_index
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 48,
											columnNumber: 4624
										}, this), "/100"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 4355
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 48,
									columnNumber: 4066
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 2031
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "mt-6 border-t border-border pt-5",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "1268",
							"x-component": "div",
							"x-id": "Customer_19_1268",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "1318",
								"x-component": "SectionLabel",
								"x-id": "Customer_19_1318",
								"x-dynamic": "false",
								children: "Environment"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 476
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "space-y-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "1358",
								"x-component": "div",
								"x-id": "Customer_19_1358",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "1454",
										"x-component": "div",
										"x-id": "Customer_19_1454",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "customer",
										"x-source-path": "device",
										"x-source-editable": "false",
										children: [/* @__PURE__ */ _jsxDEV(Laptop, {
											size: 13,
											className: "text-primary",
											"x-file-name": "Customer",
											"x-line-number": "19",
											"x-column": "1495",
											"x-component": "Laptop",
											"x-id": "Customer_19_1495",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 50,
											columnNumber: 1112
										}, this), customer.device]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 857
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "1563",
										"x-component": "div",
										"x-id": "Customer_19_1563",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "customer",
										"x-source-path": "operating_system",
										"x-source-editable": "false",
										children: [/* @__PURE__ */ _jsxDEV(Monitor, {
											size: 13,
											className: "text-primary",
											"x-file-name": "Customer",
											"x-line-number": "19",
											"x-column": "1604",
											"x-component": "Monitor",
											"x-id": "Customer_19_1604",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 50,
											columnNumber: 1566
										}, this), customer.operating_system]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 1301
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex items-center gap-2",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "1683",
										"x-component": "div",
										"x-id": "Customer_19_1683",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "customer",
										"x-source-path": "app_version",
										"x-source-editable": "false",
										children: [
											/* @__PURE__ */ _jsxDEV(Smartphone, {
												size: 13,
												className: "text-primary",
												"x-file-name": "Customer",
												"x-line-number": "19",
												"x-column": "1724",
												"x-component": "Smartphone",
												"x-id": "Customer_19_1724",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 50,
												columnNumber: 2027
											}, this),
											"App version ",
											/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Customer",
												"x-line-number": "19",
												"x-column": "1683",
												"x-component": "div",
												"x-id": "Customer_19_1683_expr2",
												"x-dynamic": "true",
												"x-source-type": "unknown",
												"x-source-var": "customer",
												"x-source-path": "app_version",
												"x-source-editable": "false",
												children: customer.app_version
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 50,
												columnNumber: 2213
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 1767
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 643
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 308
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 189
				}, this), /* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-5 lg:col-span-8",
					"data-testid": "frustration-timeline",
					"x-file-name": "Customer",
					"x-line-number": "19",
					"x-column": "1835",
					"x-component": "section",
					"x-id": "Customer_19_1835",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "mb-5 flex items-start justify-between",
						"x-file-name": "Customer",
						"x-line-number": "19",
						"x-column": "1941",
						"x-component": "div",
						"x-id": "Customer_19_1941",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "1996",
							"x-component": "div",
							"x-id": "Customer_19_1996",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(SectionLabel, {
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "2001",
									"x-component": "SectionLabel",
									"x-id": "Customer_19_2001",
									"x-dynamic": "false",
									children: "Sentiment memory"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 826
								}, this),
								/* @__PURE__ */ _jsxDEV("h2", {
									className: "font-serif text-2xl",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "2046",
									"x-component": "h2",
									"x-id": "Customer_19_2046",
									"x-dynamic": "false",
									children: "Frustration timeline"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 998
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "mt-1 text-xs text-muted-foreground",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "2107",
									"x-component": "p",
									"x-id": "Customer_19_2107",
									"x-dynamic": "false",
									children: "Escalation signals across the customer relationship."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 1176
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 703
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center gap-2 text-[#d46444]",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "2219",
							"x-component": "div",
							"x-id": "Customer_19_2219",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(CircleAlert, {
								size: 16,
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "2275",
								"x-component": "CircleAlert",
								"x-id": "Customer_19_2275",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 1578
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-xs",
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "2300",
								"x-component": "span",
								"x-id": "Customer_19_2300",
								"x-dynamic": "true",
								"x-source-type": "unknown",
								"x-source-var": "customer",
								"x-source-path": "frustration_index",
								"x-source-editable": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									"data-ve-dynamic": "true",
									"x-excluded": "true",
									style: { display: "contents" },
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "2300",
									"x-component": "span",
									"x-id": "Customer_19_2300_expr0",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "customer",
									"x-source-path": "frustration_index",
									"x-source-editable": "false",
									children: customer.frustration_index
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 52,
									columnNumber: 1991
								}, this), " current"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 52,
								columnNumber: 1729
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 52,
							columnNumber: 1404
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 530
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "h-[260px]",
						"x-file-name": "Customer",
						"x-line-number": "19",
						"x-column": "2391",
						"x-component": "div",
						"x-id": "Customer_19_2391",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV(ResponsiveContainer, {
							width: "100%",
							height: "100%",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "2418",
							"x-component": "ResponsiveContainer",
							"x-id": "Customer_19_2418",
							"x-dynamic": "false",
							children: /* @__PURE__ */ _jsxDEV(AreaChart, {
								data: history,
								margin: {
									top: 10,
									right: 8,
									left: -25,
									bottom: 0
								},
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "2466",
								"x-component": "AreaChart",
								"x-id": "Customer_19_2466",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("defs", {
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "2545",
										"x-component": "defs",
										"x-id": "Customer_19_2545",
										"x-dynamic": "false",
										children: /* @__PURE__ */ _jsxDEV("linearGradient", {
											id: "customerFrustration",
											x1: "0",
											y1: "0",
											x2: "0",
											y2: "1",
											"x-file-name": "Customer",
											"x-line-number": "19",
											"x-column": "2551",
											"x-component": "linearGradient",
											"x-id": "Customer_19_2551",
											"x-dynamic": "false",
											children: [/* @__PURE__ */ _jsxDEV("stop", {
												offset: "0%",
												stopColor: "#d46444",
												stopOpacity: .2,
												"x-file-name": "Customer",
												"x-line-number": "19",
												"x-column": "2620",
												"x-component": "stop",
												"x-id": "Customer_19_2620",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 59,
												columnNumber: 465
											}, this), /* @__PURE__ */ _jsxDEV("stop", {
												offset: "100%",
												stopColor: "#d46444",
												stopOpacity: 0,
												"x-file-name": "Customer",
												"x-line-number": "19",
												"x-column": "2678",
												"x-component": "stop",
												"x-id": "Customer_19_2678",
												"x-dynamic": "false"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 59,
												columnNumber: 642
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 59,
											columnNumber: 267
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 142
									}, this),
									/* @__PURE__ */ _jsxDEV(CartesianGrid, {
										strokeDasharray: "2 4",
										vertical: false,
										stroke: "var(--border)",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "2760",
										"x-component": "CartesianGrid",
										"x-id": "Customer_19_2760",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 843
									}, this),
									/* @__PURE__ */ _jsxDEV(XAxis, {
										dataKey: "day",
										axisLine: false,
										tickLine: false,
										tick: {
											fontSize: 10,
											fill: "var(--muted-foreground)"
										},
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "2839",
										"x-component": "XAxis",
										"x-id": "Customer_19_2839",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 1050
									}, this),
									/* @__PURE__ */ _jsxDEV(YAxis, {
										domain: [0, 100],
										axisLine: false,
										tickLine: false,
										tick: {
											fontSize: 10,
											fill: "var(--muted-foreground)"
										},
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "2953",
										"x-component": "YAxis",
										"x-id": "Customer_19_2953",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 62,
										columnNumber: 142
									}, this),
									/* @__PURE__ */ _jsxDEV(Tooltip, { contentStyle: {
										background: "var(--surface)",
										border: "1px solid var(--border)",
										fontSize: 11
									} }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 65,
										columnNumber: 142
									}, this),
									/* @__PURE__ */ _jsxDEV(Area, {
										dataKey: "score",
										type: "monotone",
										stroke: "#d46444",
										fill: "url(#customerFrustration)",
										strokeWidth: 2,
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "3179",
										"x-component": "Area",
										"x-id": "Customer_19_3179",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 22
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 641
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 459
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 314
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 302
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 19
			}, this), /* @__PURE__ */ _jsxDEV("div", {
				className: "mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2",
				"x-file-name": "Customer",
				"x-line-number": "19",
				"x-column": "3341",
				"x-component": "div",
				"x-id": "Customer_19_3341",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-5",
					"data-testid": "solution-ledger",
					"x-file-name": "Customer",
					"x-line-number": "19",
					"x-column": "3401",
					"x-component": "section",
					"x-id": "Customer_19_3401",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "mb-5 flex items-start justify-between",
						"x-file-name": "Customer",
						"x-line-number": "19",
						"x-column": "3488",
						"x-component": "div",
						"x-id": "Customer_19_3488",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "3543",
							"x-component": "div",
							"x-id": "Customer_19_3543",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "3548",
								"x-component": "SectionLabel",
								"x-id": "Customer_19_3548",
								"x-dynamic": "false",
								children: "Solution ledger"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 986
							}, this), /* @__PURE__ */ _jsxDEV("h2", {
								className: "font-serif text-2xl",
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "3592",
								"x-component": "h2",
								"x-id": "Customer_19_3592",
								"x-dynamic": "false",
								children: "What to remember"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 1157
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 863
						}, this), /* @__PURE__ */ _jsxDEV(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-1 rounded-md",
							"data-testid": "add-memory-button",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "3655",
							"x-component": "Button",
							"x-id": "Customer_19_3655",
							"x-dynamic": "false",
							children: ["Add memory ", /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
								size: 13,
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "3763",
								"x-component": "ArrowUpRight",
								"x-id": "Customer_19_3763",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 1566
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 1337
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 690
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-3",
						"x-file-name": "Customer",
						"x-line-number": "19",
						"x-column": "3804",
						"x-component": "div",
						"x-id": "Customer_19_3804",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: memories.filter((memory) => memory.layer === "solutions").map((memory) => /* @__PURE__ */ _jsxDEV("div", {
							className: "flex gap-3 border-b border-border pb-3 last:border-0 last:pb-0",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "3906",
							"x-component": "div",
							"x-id": "Customer_19_3906",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${memory.outcome === "worked" ? "bg-[#e1efdc] text-[#5d8559]" : "bg-[#fbe5de] text-[#bd5c3f]"}`,
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "4002",
								"x-component": "div",
								"x-id": "Customer_19_4002",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: memory.outcome === "worked" ? /* @__PURE__ */ _jsxDEV(Check, { size: 12 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 2597
								}, this) : /* @__PURE__ */ _jsxDEV(X, { size: 12 }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 2619
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 2214
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "4261",
								"x-component": "div",
								"x-id": "Customer_19_4261",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "text-sm font-medium",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "4266",
										"x-component": "div",
										"x-id": "Customer_19_4266",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-path": "title",
										"x-source-editable": "false",
										"x-array-item-param": "memory",
										children: memory.title
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 2764
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-1 text-xs leading-5 text-muted-foreground",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "4323",
										"x-component": "p",
										"x-id": "Customer_19_4323",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-path": "detail",
										"x-source-editable": "false",
										"x-array-item-param": "memory",
										children: memory.detail
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 3046
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "mt-2 font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
										"x-file-name": "Customer",
										"x-line-number": "19",
										"x-column": "4402",
										"x-component": "div",
										"x-id": "Customer_19_4402",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-path": "source",
										"x-source-editable": "false",
										"x-array-item-param": "memory",
										children: memory.source
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 3349
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 2641
							}, this)]
						}, memory.id, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 2e3
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 1734
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 481
				}, this), /* @__PURE__ */ _jsxDEV("section", {
					className: "border border-border bg-surface p-5",
					"data-testid": "ticket-history",
					"x-file-name": "Customer",
					"x-line-number": "19",
					"x-column": "4543",
					"x-component": "section",
					"x-id": "Customer_19_4543",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						className: "mb-5",
						"x-file-name": "Customer",
						"x-line-number": "19",
						"x-column": "4629",
						"x-component": "div",
						"x-id": "Customer_19_4629",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "4651",
							"x-component": "SectionLabel",
							"x-id": "Customer_19_4651",
							"x-dynamic": "false",
							children: "Ticket history"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 4064
						}, this), /* @__PURE__ */ _jsxDEV("h2", {
							className: "font-serif text-2xl",
							"x-file-name": "Customer",
							"x-line-number": "19",
							"x-column": "4694",
							"x-component": "h2",
							"x-id": "Customer_19_4694",
							"x-dynamic": "false",
							children: "Every contact, connected"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 4234
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 3924
					}, this), /* @__PURE__ */ _jsxDEV("div", {
						className: "space-y-2",
						"x-file-name": "Customer",
						"x-line-number": "19",
						"x-column": "4765",
						"x-component": "div",
						"x-id": "Customer_19_4765",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: (data?.tickets ?? []).map((ticket) => /* @__PURE__ */ _jsxDEV(Link, {
							to: `/inbox?ticket=${ticket.id}`,
							"data-testid": `customer-ticket-${ticket.id}`,
							className: "flex items-center justify-between border-b border-border py-3 transition-colors duration-200 hover:bg-surface-muted",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "5060",
								"x-component": "div",
								"x-id": "Customer_19_5060",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "text-sm font-medium",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "5065",
									"x-component": "div",
									"x-id": "Customer_19_5065",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-path": "subject",
									"x-source-editable": "false",
									"x-array-item-param": "ticket",
									children: ticket.subject
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 5006
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-1 font-mono text-[9px] uppercase text-muted-foreground",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "5124",
									"x-component": "div",
									"x-id": "Customer_19_5124",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-path": "id",
									"x-source-editable": "false",
									"x-array-item-param": "ticket",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Customer",
											"x-line-number": "19",
											"x-column": "5124",
											"x-component": "div",
											"x-id": "Customer_19_5124_expr0",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-path": "id",
											"x-source-editable": "false",
											"x-array-item-param": "ticket",
											children: ticket.id
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 69,
											columnNumber: 5589
										}, this),
										" · ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Customer",
											"x-line-number": "19",
											"x-column": "5124",
											"x-component": "div",
											"x-id": "Customer_19_5124_expr2",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: new Date(ticket.updated_at).toLocaleDateString()
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 271
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 69,
									columnNumber: 5292
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 69,
								columnNumber: 4883
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2",
								"x-file-name": "Customer",
								"x-line-number": "19",
								"x-column": "5275",
								"x-component": "div",
								"x-id": "Customer_19_5275",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(Badge, {
									variant: ticket.status === "resolved" ? "secondary" : "outline",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "5316",
									"x-component": "Badge",
									"x-id": "Customer_19_5316",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-path": "status",
									"x-source-editable": "false",
									"x-array-item-param": "ticket",
									children: ticket.status
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 424
								}, this), /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
									size: 14,
									className: "text-muted-foreground",
									"x-file-name": "Customer",
									"x-line-number": "19",
									"x-column": "5411",
									"x-component": "ArrowUpRight",
									"x-id": "Customer_19_5411",
									"x-dynamic": "true",
									"x-source-type": "external",
									"x-source-editable": "false",
									"x-array-item-param": "ticket"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 73,
									columnNumber: 747
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 73,
								columnNumber: 265
							}, this)]
						}, ticket.id, true, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 4654
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 4422
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 3716
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 303
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 17
			}, this) : /* @__PURE__ */ _jsxDEV("div", {
				className: "border border-border bg-surface p-10 text-sm text-muted-foreground",
				"data-testid": "customer-loading-state",
				"x-file-name": "Customer",
				"x-line-number": "19",
				"x-column": "5514",
				"x-component": "div",
				"x-id": "Customer_19_5514",
				"x-dynamic": "false",
				children: "This profile is not available yet."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 1055
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 44,
		columnNumber: 10
	}, this);
}
_s(Customer, "flqc3QpNB9iq15Fv3k2+IoU7IYI=", false, function() {
	return [useParams, useQuery];
});
_c = Customer;
var _c;
$RefreshReg$(_c, "Customer");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Customer.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Customer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Customer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Customer.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTttQkFBMUU7VUFBMkU7V0FBQTtXQUFBO1dBQUEsU0FBQXJCLFNBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtxQkFBQ29CLE9BQU81QztVQUFHOzs7OztVQUFBO1VBQUc7V0FBQTtXQUFBO1dBQUEsU0FBQXdCLFNBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO3FCQUFDLElBQUlWLEtBQUs4QixPQUFPRSxVQUFVLENBQUMsQ0FBQzlCLG1CQUFtQjtVQUFFOzs7OztTQUFLOzs7OztnQkFBTTs7Ozs7aUJBQUMsd0JBQUMsT0FBRDtRQUFLLFdBQVU7UUFBeUI7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUF4QyxDQUF5Qyx3QkFBQyxPQUFEO1NBQU8sU0FBUzRCLE9BQU9HLFdBQVcsYUFBYSxjQUFjO1NBQVU7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7bUJBQUVILE9BQU9HO1FBQWM7Ozs7a0JBQUMsd0JBQUMsY0FBRDtTQUFjLE1BQU07U0FBSSxXQUFVO1NBQXVCO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtRQUFBOzs7O2dCQUFROzs7OztlQUFPO1NBQS9sQkgsT0FBTzVDOzs7O2FBQXdsQixDQUFDO0tBQU87Ozs7YUFBVTs7Ozs7WUFBTTs7Ozs7V0FBQzs7OztjQUFNLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO0lBQXFFLGVBQVk7SUFBd0I7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUM7R0FBdUM7Ozs7O0VBQ25pTDs7Ozs7O0FBQ1AiLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIkFycm93TGVmdCIsIkFycm93VXBSaWdodCIsIkNoZWNrIiwiQ2lyY2xlQWxlcnQiLCJMYXB0b3AiLCJNYXBQaW4iLCJNb25pdG9yIiwiU21hcnRwaG9uZSIsIlgiLCJMaW5rIiwidXNlUGFyYW1zIiwiQXJlYSIsIkFyZWFDaGFydCIsIkNhcnRlc2lhbkdyaWQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiVG9vbHRpcCIsIlhBeGlzIiwiWUF4aXMiLCJhcGlHZXQiLCJCYWRnZSIsIkJ1dHRvbiIsIlBhZ2VJbnRybyIsIlNlY3Rpb25MYWJlbCIsIkN1c3RvbWVyIiwiaWQiLCJkZXRhaWwiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJyZXRyeSIsImRhdGEiLCJjdXN0b21lciIsIm1lbW9yaWVzIiwiaGlzdG9yeSIsImRheSIsInNjb3JlIiwiZnJ1c3RyYXRpb25faW5kZXgiLCJuYW1lIiwiY29tcGFueSIsIkRhdGUiLCJsYXN0X2NvbnRhY3RfYXQiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJtb250aCIsInVuZGVmaW5lZCIsImF2YXRhcl91cmwiLCJlbWFpbCIsInBsYW4iLCJvcGVuX3RpY2tldF9jb3VudCIsImxvY2F0aW9uIiwiZGlzcGxheSIsImRldmljZSIsIm9wZXJhdGluZ19zeXN0ZW0iLCJhcHBfdmVyc2lvbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImZvbnRTaXplIiwiZmlsbCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJmaWx0ZXIiLCJtZW1vcnkiLCJsYXllciIsIm1hcCIsIm91dGNvbWUiLCJ0aXRsZSIsInNvdXJjZSIsInRpY2tldHMiLCJ0aWNrZXQiLCJzdWJqZWN0IiwidXBkYXRlZF9hdCIsInN0YXR1cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDdXN0b21lci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBBcnJvd0xlZnQsIEFycm93VXBSaWdodCwgQ2hlY2ssIENpcmNsZUFsZXJ0LCBMYXB0b3AsIE1hcFBpbiwgTW9uaXRvciwgU21hcnRwaG9uZSwgWCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBBcmVhLCBBcmVhQ2hhcnQsIENhcnRlc2lhbkdyaWQsIFJlc3BvbnNpdmVDb250YWluZXIsIFRvb2x0aXAsIFhBeGlzLCBZQXhpcyB9IGZyb20gXCJAL2xpYi9yZWNoYXJ0c1wiO1xuaW1wb3J0IHsgYXBpR2V0IH0gZnJvbSBcIkAvbGliL2FwaVwiO1xuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2JhZGdlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgUGFnZUludHJvLCBTZWN0aW9uTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL0FwcFNoZWxsXCI7XG5pbXBvcnQgdHlwZSB7IEN1c3RvbWVyRGV0YWlsIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWVyKCkge1xuICBjb25zdCB7IGlkID0gXCJjdXNfbWF5YVwiIH0gPSB1c2VQYXJhbXMoKTtcbiAgY29uc3QgZGV0YWlsID0gdXNlUXVlcnkoeyBxdWVyeUtleTogW1wic3VwcG9ydFwiLCBcImN1c3RvbWVyXCIsIGlkXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PEN1c3RvbWVyRGV0YWlsPihgL3N1cHBvcnQvY3VzdG9tZXJzLyR7aWR9YCksIHJldHJ5OiBmYWxzZSB9KTtcbiAgY29uc3QgZGF0YSA9IGRldGFpbC5kYXRhO1xuICBjb25zdCBjdXN0b21lciA9IGRhdGE/LmN1c3RvbWVyO1xuICBjb25zdCBtZW1vcmllcyA9IGRhdGE/Lm1lbW9yaWVzID8/IFtdO1xuICBjb25zdCBoaXN0b3J5ID0gW3sgZGF5OiBcIkFwciAyOFwiLCBzY29yZTogMzYgfSwgeyBkYXk6IFwiTWF5IDA1XCIsIHNjb3JlOiA0MiB9LCB7IGRheTogXCJNYXkgMTJcIiwgc2NvcmU6IDUyIH0sIHsgZGF5OiBcIk1heSAxOVwiLCBzY29yZTogNDkgfSwgeyBkYXk6IFwiTWF5IDI2XCIsIHNjb3JlOiA2OCB9LCB7IGRheTogXCJKdW4gMDJcIiwgc2NvcmU6IDc2IH0sIHsgZGF5OiBcIkp1biAxOFwiLCBzY29yZTogY3VzdG9tZXI/LmZydXN0cmF0aW9uX2luZGV4ID8/IDg2IH1dO1xuICByZXR1cm4gPGRpdiBkYXRhLXRlc3RpZD1cImN1c3RvbWVyLXBhZ2VcIj48TGluayB0bz1cIi9pbmJveFwiIGRhdGEtdGVzdGlkPVwiYmFjay10by1pbmJveC1saW5rXCIgY2xhc3NOYW1lPVwibWItNSBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6dGV4dC1mb3JlZ3JvdW5kXCI+PEFycm93TGVmdCBzaXplPXsxM30gLz4gQmFjayB0byBpbmJveDwvTGluaz48UGFnZUludHJvIGV5ZWJyb3c9XCJDdXN0b21lciBtZW1vcnkgcHJvZmlsZVwiIHRpdGxlPXtjdXN0b21lcj8ubmFtZSA/PyBcIkxvYWRpbmcgcHJvZmlsZeKAplwifSBkZXNjcmlwdGlvbj17Y3VzdG9tZXIgPyBgJHtjdXN0b21lci5jb21wYW55fSDCtyBMYXN0IGNvbnRhY3QgJHtuZXcgRGF0ZShjdXN0b21lci5sYXN0X2NvbnRhY3RfYXQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgbW9udGg6IFwic2hvcnRcIiwgZGF5OiBcIm51bWVyaWNcIiB9KX0uIEZvdXIgbGF5ZXJzIG9mIGNvbnRleHQsIGluIG9uZSB2aWV3LmAgOiBcIlJldHJpZXZpbmcgZHVyYWJsZSBjdXN0b21lciBjb250ZXh0LlwifSBhY3Rpb249e2N1c3RvbWVyID8gPEJhZGdlIHZhcmlhbnQ9e2N1c3RvbWVyLmZydXN0cmF0aW9uX2luZGV4ID4gNzUgPyBcImRlc3RydWN0aXZlXCIgOiBcInNlY29uZGFyeVwifT57Y3VzdG9tZXIuZnJ1c3RyYXRpb25faW5kZXggPiA3NSA/IFwiTmVlZHMgaHVtYW4gYXR0ZW50aW9uXCIgOiBcIkhlYWx0aHkgcmVsYXRpb25zaGlwXCJ9PC9CYWRnZT4gOiB1bmRlZmluZWR9IC8+XG4gICAge2N1c3RvbWVyID8gPD48ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6Z3JpZC1jb2xzLTEyXCI+PHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctc3VyZmFjZSBwLTYgbGc6Y29sLXNwYW4tNFwiIGRhdGEtdGVzdGlkPVwiY3VzdG9tZXItcHJvZmlsZS1jYXJkXCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPjxpbWcgc3JjPXtjdXN0b21lci5hdmF0YXJfdXJsfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoLTE2IHctMTYgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciBncmF5c2NhbGUtWzE1JV1cIiBkYXRhLXRlc3RpZD1cImN1c3RvbWVyLWF2YXRhclwiIC8+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+PGRpdiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPkN1c3RvbWVyIElEPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC0xIGZvbnQtbW9ubyB0ZXh0LVsxMXB4XVwiPntjdXN0b21lci5pZH08L2Rpdj48L2Rpdj48L2Rpdj48aDIgY2xhc3NOYW1lPVwibXQtNSBmb250LXNlcmlmIHRleHQtM3hsXCI+e2N1c3RvbWVyLm5hbWV9PC9oMj48ZGl2IGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57Y3VzdG9tZXIuZW1haWx9PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTIgZ2FwLTQgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwdC01IHRleHQteHNcIj48ZGl2PjxTZWN0aW9uTGFiZWw+UGxhbjwvU2VjdGlvbkxhYmVsPjxkaXYgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj57Y3VzdG9tZXIucGxhbn08L2Rpdj48L2Rpdj48ZGl2PjxTZWN0aW9uTGFiZWw+T3BlbiB0aWNrZXRzPC9TZWN0aW9uTGFiZWw+PGRpdiBjbGFzc05hbWU9XCJmb250LW1lZGl1bVwiPntjdXN0b21lci5vcGVuX3RpY2tldF9jb3VudH08L2Rpdj48L2Rpdj48ZGl2PjxTZWN0aW9uTGFiZWw+TG9jYXRpb248L1NlY3Rpb25MYWJlbD48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+PE1hcFBpbiBzaXplPXsxMn0gLz57Y3VzdG9tZXIubG9jYXRpb259PC9kaXY+PC9kaXY+PGRpdj48U2VjdGlvbkxhYmVsPlJpc2sgc2NvcmU8L1NlY3Rpb25MYWJlbD48ZGl2IGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtWyNkNDY0NDRdXCI+e2N1c3RvbWVyLmZydXN0cmF0aW9uX2luZGV4fS8xMDA8L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTYgYm9yZGVyLXQgYm9yZGVyLWJvcmRlciBwdC01XCI+PFNlY3Rpb25MYWJlbD5FbnZpcm9ubWVudDwvU2VjdGlvbkxhYmVsPjxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPjxMYXB0b3Agc2l6ZT17MTN9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+e2N1c3RvbWVyLmRldmljZX08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yXCI+PE1vbml0b3Igc2l6ZT17MTN9IGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeVwiIC8+e2N1c3RvbWVyLm9wZXJhdGluZ19zeXN0ZW19PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPjxTbWFydHBob25lIHNpemU9ezEzfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiAvPkFwcCB2ZXJzaW9uIHtjdXN0b21lci5hcHBfdmVyc2lvbn08L2Rpdj48L2Rpdj48L2Rpdj48L3NlY3Rpb24+PHNlY3Rpb24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctc3VyZmFjZSBwLTUgbGc6Y29sLXNwYW4tOFwiIGRhdGEtdGVzdGlkPVwiZnJ1c3RyYXRpb24tdGltZWxpbmVcIj48ZGl2IGNsYXNzTmFtZT1cIm1iLTUgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj48ZGl2PjxTZWN0aW9uTGFiZWw+U2VudGltZW50IG1lbW9yeTwvU2VjdGlvbkxhYmVsPjxoMiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtMnhsXCI+RnJ1c3RyYXRpb24gdGltZWxpbmU8L2gyPjxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Fc2NhbGF0aW9uIHNpZ25hbHMgYWNyb3NzIHRoZSBjdXN0b21lciByZWxhdGlvbnNoaXAuPC9wPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bI2Q0NjQ0NF1cIj48Q2lyY2xlQWxlcnQgc2l6ZT17MTZ9IC8+PHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHNcIj57Y3VzdG9tZXIuZnJ1c3RyYXRpb25faW5kZXh9IGN1cnJlbnQ8L3NwYW4+PC9kaXY+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJoLVsyNjBweF1cIj48UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+PEFyZWFDaGFydCBkYXRhPXtoaXN0b3J5fSBtYXJnaW49e3sgdG9wOiAxMCwgcmlnaHQ6IDgsIGxlZnQ6IC0yNSwgYm90dG9tOiAwIH19PjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD1cImN1c3RvbWVyRnJ1c3RyYXRpb25cIiB4MT1cIjBcIiB5MT1cIjBcIiB4Mj1cIjBcIiB5Mj1cIjFcIj48c3RvcCBvZmZzZXQ9XCIwJVwiIHN0b3BDb2xvcj1cIiNkNDY0NDRcIiBzdG9wT3BhY2l0eT17MC4yfSAvPjxzdG9wIG9mZnNldD1cIjEwMCVcIiBzdG9wQ29sb3I9XCIjZDQ2NDQ0XCIgc3RvcE9wYWNpdHk9ezB9IC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMiA0XCIgdmVydGljYWw9e2ZhbHNlfSBzdHJva2U9XCJ2YXIoLS1ib3JkZXIpXCIgLz48WEF4aXMgZGF0YUtleT1cImRheVwiIGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSB0aWNrPXt7IGZvbnRTaXplOiAxMCwgZmlsbDogXCJ2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKVwiIH19IC8+PFlBeGlzIGRvbWFpbj17WzAsIDEwMF19IGF4aXNMaW5lPXtmYWxzZX0gdGlja0xpbmU9e2ZhbHNlfSB0aWNrPXt7IGZvbnRTaXplOiAxMCwgZmlsbDogXCJ2YXIoLS1tdXRlZC1mb3JlZ3JvdW5kKVwiIH19IC8+PFRvb2x0aXAgY29udGVudFN0eWxlPXt7IGJhY2tncm91bmQ6IFwidmFyKC0tc3VyZmFjZSlcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCB2YXIoLS1ib3JkZXIpXCIsIGZvbnRTaXplOiAxMSB9fSAvPjxBcmVhIGRhdGFLZXk9XCJzY29yZVwiIHR5cGU9XCJtb25vdG9uZVwiIHN0cm9rZT1cIiNkNDY0NDRcIiBmaWxsPVwidXJsKCNjdXN0b21lckZydXN0cmF0aW9uKVwiIHN0cm9rZVdpZHRoPXsyfSAvPjwvQXJlYUNoYXJ0PjwvUmVzcG9uc2l2ZUNvbnRhaW5lcj48L2Rpdj48L3NlY3Rpb24+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC02IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLTYgbGc6Z3JpZC1jb2xzLTJcIj48c2VjdGlvbiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJvcmRlciBiZy1zdXJmYWNlIHAtNVwiIGRhdGEtdGVzdGlkPVwic29sdXRpb24tbGVkZ2VyXCI+PGRpdiBjbGFzc05hbWU9XCJtYi01IGZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCI+PGRpdj48U2VjdGlvbkxhYmVsPlNvbHV0aW9uIGxlZGdlcjwvU2VjdGlvbkxhYmVsPjxoMiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtMnhsXCI+V2hhdCB0byByZW1lbWJlcjwvaDI+PC9kaXY+PEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZVwiIHNpemU9XCJzbVwiIGNsYXNzTmFtZT1cImdhcC0xIHJvdW5kZWQtbWRcIiBkYXRhLXRlc3RpZD1cImFkZC1tZW1vcnktYnV0dG9uXCI+QWRkIG1lbW9yeSA8QXJyb3dVcFJpZ2h0IHNpemU9ezEzfSAvPjwvQnV0dG9uPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+e21lbW9yaWVzLmZpbHRlcigobWVtb3J5KSA9PiBtZW1vcnkubGF5ZXIgPT09IFwic29sdXRpb25zXCIpLm1hcCgobWVtb3J5KSA9PiA8ZGl2IGtleT17bWVtb3J5LmlkfSBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGJvcmRlci1iIGJvcmRlci1ib3JkZXIgcGItMyBsYXN0OmJvcmRlci0wIGxhc3Q6cGItMFwiPjxkaXYgY2xhc3NOYW1lPXtgbXQtMC41IGZsZXggaC01IHctNSBzaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsICR7bWVtb3J5Lm91dGNvbWUgPT09IFwid29ya2VkXCIgPyBcImJnLVsjZTFlZmRjXSB0ZXh0LVsjNWQ4NTU5XVwiIDogXCJiZy1bI2ZiZTVkZV0gdGV4dC1bI2JkNWMzZl1cIn1gfT57bWVtb3J5Lm91dGNvbWUgPT09IFwid29ya2VkXCIgPyA8Q2hlY2sgc2l6ZT17MTJ9IC8+IDogPFggc2l6ZT17MTJ9IC8+fTwvZGl2PjxkaXY+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e21lbW9yeS50aXRsZX08L2Rpdj48cCBjbGFzc05hbWU9XCJtdC0xIHRleHQteHMgbGVhZGluZy01IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnttZW1vcnkuZGV0YWlsfTwvcD48ZGl2IGNsYXNzTmFtZT1cIm10LTIgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnttZW1vcnkuc291cmNlfTwvZGl2PjwvZGl2PjwvZGl2Pil9PC9kaXY+PC9zZWN0aW9uPjxzZWN0aW9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYm9yZGVyIGJnLXN1cmZhY2UgcC01XCIgZGF0YS10ZXN0aWQ9XCJ0aWNrZXQtaGlzdG9yeVwiPjxkaXYgY2xhc3NOYW1lPVwibWItNVwiPjxTZWN0aW9uTGFiZWw+VGlja2V0IGhpc3Rvcnk8L1NlY3Rpb25MYWJlbD48aDIgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTJ4bFwiPkV2ZXJ5IGNvbnRhY3QsIGNvbm5lY3RlZDwvaDI+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj57KGRhdGE/LnRpY2tldHMgPz8gW10pLm1hcCgodGlja2V0KSA9PiA8TGluayB0bz17YC9pbmJveD90aWNrZXQ9JHt0aWNrZXQuaWR9YH0ga2V5PXt0aWNrZXQuaWR9IGRhdGEtdGVzdGlkPXtgY3VzdG9tZXItdGlja2V0LSR7dGlja2V0LmlkfWB9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItYm9yZGVyIHB5LTMgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGhvdmVyOmJnLXN1cmZhY2UtbXV0ZWRcIj48ZGl2PjxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bVwiPnt0aWNrZXQuc3ViamVjdH08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPnt0aWNrZXQuaWR9IMK3IHtuZXcgRGF0ZSh0aWNrZXQudXBkYXRlZF9hdCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9PC9kaXY+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPjxCYWRnZSB2YXJpYW50PXt0aWNrZXQuc3RhdHVzID09PSBcInJlc29sdmVkXCIgPyBcInNlY29uZGFyeVwiIDogXCJvdXRsaW5lXCJ9Pnt0aWNrZXQuc3RhdHVzfTwvQmFkZ2U+PEFycm93VXBSaWdodCBzaXplPXsxNH0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCIgLz48L2Rpdj48L0xpbms+KX08L2Rpdj48L3NlY3Rpb24+PC9kaXY+PC8+IDogPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJvcmRlciBiZy1zdXJmYWNlIHAtMTAgdGV4dC1zbSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIiBkYXRhLXRlc3RpZD1cImN1c3RvbWVyLWxvYWRpbmctc3RhdGVcIj5UaGlzIHByb2ZpbGUgaXMgbm90IGF2YWlsYWJsZSB5ZXQuPC9kaXY+fVxuICA8L2Rpdj47XG59Il0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9wYWdlcy9DdXN0b21lci50c3gifQ==