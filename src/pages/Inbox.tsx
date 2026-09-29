import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Inbox.tsx");const useState = __vite__cjsImport2_react["useState"];const _jsxDEV = __vite__cjsImport10_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport10_react_jsxDevRuntime["Fragment"];import { useMutation, useQuery, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=56fe86c3";
import { ArrowUpRight, Bot, CheckCircle2, ChevronRight, CircleAlert, Clock3, Mail, MessageCircle, Send, Sparkles, UserRound } from "/src/lib/lucide-react.tsx";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=56fe86c3";
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=56fe86c3";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=56fe86c3";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { Badge } from "/src/components/ui/badge.tsx";
import { Button } from "/src/components/ui/button.tsx";
import { Textarea } from "/src/components/ui/textarea.tsx";
import { PageIntro, SectionLabel } from "/src/components/AppShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Inbox.tsx";
import __vite__cjsImport10_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
var _s = $RefreshSig$();
function timeAgo(value) {
	const minutes = Math.max(1, Math.round((Date.now() - new Date(value).getTime()) / 6e4));
	return minutes < 60 ? `${minutes}m ago` : `${Math.round(minutes / 60)}h ago`;
}
export default function Inbox() {
	_s();
	const ticketsQuery = useQuery({
		queryKey: ["support", "tickets"],
		queryFn: () => apiGet("/support/tickets"),
		retry: false
	});
	const tickets = ticketsQuery.data ?? [];
	const [selectedId, setSelectedId] = useState(undefined);
	const selected = tickets.find((ticket) => ticket.id === (selectedId ?? tickets[0]?.id));
	const detailQuery = useQuery({
		queryKey: [
			"support",
			"customer",
			selected?.customer_id
		],
		queryFn: () => apiGet(`/support/customers/${selected?.customer_id}`),
		enabled: Boolean(selected?.customer_id),
		retry: false
	});
	const [message, setMessage] = useState("");
	const client = useQueryClient();
	const send = useMutation({
		mutationFn: (content) => apiPost(`/support/tickets/${selected?.id}/messages`, { message: content }),
		onSuccess: (result) => {
			setMessage("");
			client.invalidateQueries({ queryKey: ["support"] });
			toast.success(result.mode === "hindsight" ? "Reply grounded in Hindsight memory" : "Reply sent with mocked memory adapter");
		}
	});
	const memories = detailQuery.data?.memories ?? [];
	const failed = memories.filter((memory) => memory.outcome === "failed");
	const worked = memories.filter((memory) => memory.outcome === "worked");
	return /* @__PURE__ */ _jsxDEV("div", {
		"data-testid": "inbox-page",
		"x-file-name": "Inbox",
		"x-line-number": "27",
		"x-column": "9",
		"x-component": "div",
		"x-id": "Inbox_27_9",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV(PageIntro, {
			eyebrow: "Unified inbox",
			title: "Stay one step ahead.",
			description: "Every conversation opens with the customer's context already in view. No repeated questions. No failed fixes on loop.",
			action: /* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center gap-2 rounded-md border border-[#d9e5d3] bg-[#f0f6ec] px-3 py-2 text-xs text-[#557450]",
				"data-testid": "memory-status",
				"x-file-name": "Inbox",
				"x-line-number": "27",
				"x-column": "243",
				"x-component": "div",
				"x-id": "Inbox_27_243",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("span", {
					className: "h-2 w-2 rounded-full bg-[#7a9b76]",
					"x-file-name": "Inbox",
					"x-line-number": "27",
					"x-column": "393",
					"x-component": "span",
					"x-id": "Inbox_27_393",
					"x-dynamic": "false"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 610
				}, this), " Memory context active"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 350
			}, this),
			"x-file-name": "Inbox",
			"x-line-number": "27",
			"x-column": "39",
			"x-component": "PageIntro",
			"x-id": "Inbox_27_39",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 146
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "grid min-h-[640px] grid-cols-1 overflow-hidden border border-border bg-surface lg:grid-cols-[330px_1fr]",
			"x-file-name": "Inbox",
			"x-line-number": "28",
			"x-column": "4",
			"x-component": "div",
			"x-id": "Inbox_28_4",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: [/* @__PURE__ */ _jsxDEV("aside", {
				className: "border-b border-border lg:border-b-0 lg:border-r",
				"data-testid": "ticket-list",
				"x-file-name": "Inbox",
				"x-line-number": "29",
				"x-column": "6",
				"x-component": "aside",
				"x-id": "Inbox_29_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "flex items-center justify-between border-b border-border px-4 py-4",
					"x-file-name": "Inbox",
					"x-line-number": "29",
					"x-column": "100",
					"x-component": "div",
					"x-id": "Inbox_29_100",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Inbox",
						"x-line-number": "29",
						"x-column": "184",
						"x-component": "div",
						"x-id": "Inbox_29_184",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(SectionLabel, {
							"x-file-name": "Inbox",
							"x-line-number": "29",
							"x-column": "189",
							"x-component": "SectionLabel",
							"x-id": "Inbox_29_189",
							"x-dynamic": "false",
							children: "Queue"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 518
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "font-serif text-xl",
							"x-file-name": "Inbox",
							"x-line-number": "29",
							"x-column": "223",
							"x-component": "div",
							"x-id": "Inbox_29_223",
							"x-dynamic": "false",
							children: ["Open conversations ", /* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-xs text-muted-foreground",
								"x-file-name": "Inbox",
								"x-line-number": "29",
								"x-column": "278",
								"x-component": "span",
								"x-id": "Inbox_29_278",
								"x-dynamic": "true",
								"x-source-type": "unknown",
								"x-source-path": "length",
								"x-source-editable": "false",
								children: tickets.filter((t) => t.status !== "resolved").length
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 836
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 671
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 403
					}, this), /* @__PURE__ */ _jsxDEV("button", {
						className: "rounded-md p-2 text-muted-foreground hover:bg-surface-muted",
						"data-testid": "new-conversation-button",
						"aria-label": "New conversation",
						"x-file-name": "Inbox",
						"x-line-number": "29",
						"x-column": "410",
						"x-component": "button",
						"x-id": "Inbox_29_410",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV(MessageCircle, {
							size: 16,
							"x-file-name": "Inbox",
							"x-line-number": "29",
							"x-column": "558",
							"x-component": "MessageCircle",
							"x-id": "Inbox_29_558",
							"x-dynamic": "false"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 50,
							columnNumber: 1410
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 1149
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 209
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "divide-y divide-border",
					"x-file-name": "Inbox",
					"x-line-number": "29",
					"x-column": "600",
					"x-component": "div",
					"x-id": "Inbox_29_600",
					"x-dynamic": "true",
					"x-source-type": "computed",
					"x-source-editable": "false",
					children: tickets.map((ticket) => /* @__PURE__ */ _jsxDEV("button", {
						onClick: () => setSelectedId(ticket.id),
						"data-testid": `ticket-list-item-${ticket.id}`,
						className: `w-full p-4 text-left transition-colors duration-200 hover:bg-surface-muted ${selected?.id === ticket.id ? "bg-surface-muted" : ""}`,
						"x-file-name": "Inbox",
						"x-line-number": "29",
						"x-column": "665",
						"x-component": "button",
						"x-id": "Inbox_29_665",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-2 flex items-center justify-between",
								"x-file-name": "Inbox",
								"x-line-number": "29",
								"x-column": "921",
								"x-component": "div",
								"x-id": "Inbox_29_921",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2",
									"x-file-name": "Inbox",
									"x-line-number": "29",
									"x-column": "977",
									"x-component": "div",
									"x-id": "Inbox_29_977",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: `h-2 w-2 rounded-full ${ticket.status === "resolved" ? "bg-[#7a9b76]" : ticket.frustration_index > 75 ? "bg-[#d46444]" : "bg-[#d5a76d]"}`,
										"x-file-name": "Inbox",
										"x-line-number": "29",
										"x-column": "1018",
										"x-component": "span",
										"x-id": "Inbox_29_1018",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 2481
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-sm font-medium",
										"x-file-name": "Inbox",
										"x-line-number": "29",
										"x-column": "1176",
										"x-component": "span",
										"x-id": "Inbox_29_1176",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "tickets",
										"x-source-path": "customer_name",
										"x-source-editable": "false",
										"x-array-var": "tickets",
										"x-array-item-param": "ticket",
										children: ticket.customer_name
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 2752
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 2330
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "font-mono text-[9px] text-muted-foreground",
									"x-file-name": "Inbox",
									"x-line-number": "29",
									"x-column": "1249",
									"x-component": "span",
									"x-id": "Inbox_29_1249",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: timeAgo(ticket.updated_at)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 50,
									columnNumber: 3098
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 2164
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mb-2 truncate text-sm text-foreground",
								"x-file-name": "Inbox",
								"x-line-number": "29",
								"x-column": "1351",
								"x-component": "div",
								"x-id": "Inbox_29_1351",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "tickets",
								"x-source-path": "subject",
								"x-source-editable": "false",
								"x-array-var": "tickets",
								"x-array-item-param": "ticket",
								children: ticket.subject
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 3363
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-[11px] text-muted-foreground",
								"x-file-name": "Inbox",
								"x-line-number": "29",
								"x-column": "1428",
								"x-component": "div",
								"x-id": "Inbox_29_1428",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("span", {
										className: "flex items-center gap-1",
										"x-file-name": "Inbox",
										"x-line-number": "29",
										"x-column": "1503",
										"x-component": "span",
										"x-id": "Inbox_29_1503",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "tickets",
										"x-source-path": "channel",
										"x-source-editable": "false",
										"x-array-var": "tickets",
										"x-array-item-param": "ticket",
										children: [/* @__PURE__ */ _jsxDEV(Mail, {
											size: 12,
											"x-file-name": "Inbox",
											"x-line-number": "29",
											"x-column": "1545",
											"x-component": "Mail",
											"x-id": "Inbox_29_1545",
											"x-dynamic": "true",
											"x-source-type": "external",
											"x-source-var": "tickets",
											"x-source-editable": "false",
											"x-array-var": "tickets",
											"x-array-item-param": "ticket"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 50,
											columnNumber: 4252
										}, this), ticket.channel]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 3943
									}, this),
									ticket.known_issue && /* @__PURE__ */ _jsxDEV(Badge, {
										variant: "outline",
										"x-file-name": "Inbox",
										"x-line-number": "29",
										"x-column": "1609",
										"x-component": "Badge",
										"x-id": "Inbox_29_1609",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "tickets",
										"x-source-editable": "false",
										"x-array-var": "tickets",
										"x-array-item-param": "ticket",
										children: "Known issue"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 4552
									}, this),
									ticket.frustration_index > 75 && /* @__PURE__ */ _jsxDEV(Badge, {
										variant: "destructive",
										"x-file-name": "Inbox",
										"x-line-number": "29",
										"x-column": "1688",
										"x-component": "Badge",
										"x-id": "Inbox_29_1688",
										"x-dynamic": "true",
										"x-source-type": "external",
										"x-source-var": "tickets",
										"x-source-editable": "false",
										"x-array-var": "tickets",
										"x-array-item-param": "ticket",
										children: "High frustration"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 4868
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 3706
							}, this)
						]
					}, ticket.id, true, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 1795
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 1572
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 7
			}, this), selected ? /* @__PURE__ */ _jsxDEV("section", {
				className: "flex min-h-[640px] min-w-0 flex-col",
				"data-testid": "active-conversation",
				"x-file-name": "Inbox",
				"x-line-number": "30",
				"x-column": "18",
				"x-component": "section",
				"x-id": "Inbox_30_18",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "border-b border-border px-5 py-4",
						"x-file-name": "Inbox",
						"x-line-number": "30",
						"x-column": "109",
						"x-component": "div",
						"x-id": "Inbox_30_109",
						"x-dynamic": "false",
						children: /* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-col justify-between gap-3 sm:flex-row sm:items-center",
							"x-file-name": "Inbox",
							"x-line-number": "30",
							"x-column": "159",
							"x-component": "div",
							"x-id": "Inbox_30_159",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "Inbox",
								"x-line-number": "30",
								"x-column": "240",
								"x-component": "div",
								"x-id": "Inbox_30_240",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-center gap-2",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "245",
									"x-component": "div",
									"x-id": "Inbox_30_245",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("h2", {
										className: "font-serif text-2xl",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "286",
										"x-component": "h2",
										"x-id": "Inbox_30_286",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "selected",
										"x-source-path": "subject",
										"x-source-editable": "false",
										children: selected.subject
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 839
									}, this), /* @__PURE__ */ _jsxDEV(Badge, {
										variant: selected.status === "open" ? "destructive" : "secondary",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "345",
										"x-component": "Badge",
										"x-id": "Inbox_30_345",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "selected",
										"x-source-path": "status",
										"x-source-editable": "false",
										children: selected.status
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 1104
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 688
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-1 flex items-center gap-2 text-xs text-muted-foreground",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "450",
									"x-component": "div",
									"x-id": "Inbox_30_450",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "526",
											"x-component": "span",
											"x-id": "Inbox_30_526",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "selected",
											"x-source-path": "customer_name",
											"x-source-editable": "false",
											children: selected.customer_name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 1603
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "563",
											"x-component": "span",
											"x-id": "Inbox_30_563",
											"x-dynamic": "false",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 1854
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											className: "font-mono",
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "577",
											"x-component": "span",
											"x-id": "Inbox_30_577",
											"x-dynamic": "true",
											"x-source-type": "unknown",
											"x-source-var": "selected",
											"x-source-path": "id",
											"x-source-editable": "false",
											children: selected.id
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 1979
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "625",
											"x-component": "span",
											"x-id": "Inbox_30_625",
											"x-dynamic": "false",
											children: "·"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 2230
										}, this),
										/* @__PURE__ */ _jsxDEV("span", {
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "639",
											"x-component": "span",
											"x-id": "Inbox_30_639",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: ["Updated ", /* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Inbox",
												"x-line-number": "30",
												"x-column": "639",
												"x-component": "span",
												"x-id": "Inbox_30_639_expr1",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: timeAgo(selected.updated_at)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 51,
												columnNumber: 2530
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 51,
											columnNumber: 2355
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 1417
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 51,
								columnNumber: 573
							}, this), /* @__PURE__ */ _jsxDEV(Link, {
								to: `/customer/${selected.customer_id}`,
								"data-testid": "open-customer-memory-button",
								children: /* @__PURE__ */ _jsxDEV(Button, {
									variant: "outline",
									size: "sm",
									className: "gap-2 rounded-md",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "791",
									"x-component": "Button",
									"x-id": "Inbox_30_791",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV(UserRound, {
											size: 14,
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "856",
											"x-component": "UserRound",
											"x-id": "Inbox_30_856",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 53,
											columnNumber: 512
										}, this),
										" Customer memory ",
										/* @__PURE__ */ _jsxDEV(ArrowUpRight, {
											size: 13,
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "896",
											"x-component": "ArrowUpRight",
											"x-id": "Inbox_30_896",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 53,
											columnNumber: 668
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 334
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 245
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 51,
							columnNumber: 382
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 222
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "border-b border-[#d9e5d3] bg-[#f4f8f1] px-5 py-4 dark:bg-[#1d2b20]",
						"data-testid": "memory-context-panel",
						"x-file-name": "Inbox",
						"x-line-number": "30",
						"x-column": "950",
						"x-component": "div",
						"x-id": "Inbox_30_950",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-3 flex items-center gap-2 text-xs font-semibold text-[#476744] dark:text-[#a8c99d]",
							"x-file-name": "Inbox",
							"x-line-number": "30",
							"x-column": "1069",
							"x-component": "div",
							"x-id": "Inbox_30_1069",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(Sparkles, {
									size: 14,
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "1172",
									"x-component": "Sparkles",
									"x-id": "Inbox_30_1172",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 1285
								}, this),
								" Memory context ",
								/* @__PURE__ */ _jsxDEV("span", {
									className: "rounded-full bg-[#dcebd5] px-2 py-0.5 font-mono text-[9px] dark:bg-[#304531]",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "1210",
									"x-component": "span",
									"x-id": "Inbox_30_1210",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "memories",
									"x-source-path": "length",
									"x-source-editable": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										"data-ve-dynamic": "true",
										"x-excluded": "true",
										style: { display: "contents" },
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "1210",
										"x-component": "span",
										"x-id": "Inbox_30_1210_expr0",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "memories",
										"x-source-path": "length",
										"x-source-editable": "false",
										children: memories.length
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 53,
										columnNumber: 1744
									}, this), " matches"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 1440
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 1070
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "grid grid-cols-1 gap-3 text-xs md:grid-cols-3",
							"x-file-name": "Inbox",
							"x-line-number": "30",
							"x-column": "1343",
							"x-component": "div",
							"x-id": "Inbox_30_1343",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "1406",
									"x-component": "div",
									"x-id": "Inbox_30_1406",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "mb-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "1411",
										"x-component": "div",
										"x-id": "Inbox_30_1411",
										"x-dynamic": "false",
										children: "Environment"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 55,
										columnNumber: 570
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-foreground",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "1518",
										"x-component": "div",
										"x-id": "Inbox_30_1518",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: [
											/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Inbox",
												"x-line-number": "30",
												"x-column": "1518",
												"x-component": "div",
												"x-id": "Inbox_30_1518_expr0",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: detailQuery.data?.customer.device ?? "Loading"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 55,
												columnNumber: 984
											}, this),
											" · ",
											/* @__PURE__ */ _jsxDEV("span", {
												"data-ve-dynamic": "true",
												"x-excluded": "true",
												style: { display: "contents" },
												"x-file-name": "Inbox",
												"x-line-number": "30",
												"x-column": "1518",
												"x-component": "div",
												"x-id": "Inbox_30_1518_expr2",
												"x-dynamic": "true",
												"x-source-type": "computed",
												"x-source-editable": "false",
												children: detailQuery.data?.customer.app_version ?? ""
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 57,
												columnNumber: 246
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 55,
										columnNumber: 789
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 453
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "1660",
									"x-component": "div",
									"x-id": "Inbox_30_1660",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "mb-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "1665",
										"x-component": "div",
										"x-id": "Inbox_30_1665",
										"x-dynamic": "false",
										children: "Skip these"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 370
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-foreground",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "1771",
										"x-component": "div",
										"x-id": "Inbox_30_1771",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: failed[0]?.title ?? "No failed solutions found"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 588
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 253
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "1865",
									"x-component": "div",
									"x-id": "Inbox_30_1865",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("div", {
										className: "mb-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "1870",
										"x-component": "div",
										"x-id": "Inbox_30_1870",
										"x-dynamic": "false",
										children: "Previously worked"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 961
									}, this), /* @__PURE__ */ _jsxDEV("div", {
										className: "text-foreground",
										"x-file-name": "Inbox",
										"x-line-number": "30",
										"x-column": "1983",
										"x-component": "div",
										"x-id": "Inbox_30_1983",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: worked[0]?.title ?? "Still learning"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 59,
										columnNumber: 1186
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 844
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 278
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 841
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "flex-1 space-y-5 overflow-y-auto bg-[#fcfbf9] p-5 dark:bg-background",
						"data-testid": "conversation-messages",
						"x-file-name": "Inbox",
						"x-line-number": "30",
						"x-column": "2078",
						"x-component": "div",
						"x-id": "Inbox_30_2078",
						"x-dynamic": "true",
						"x-source-type": "computed",
						"x-source-editable": "false",
						children: [selected.messages.map((item) => /* @__PURE__ */ _jsxDEV("div", {
							className: `flex gap-3 ${item.role === "agent" ? "flex-row-reverse" : ""}`,
							"x-file-name": "Inbox",
							"x-line-number": "30",
							"x-column": "2233",
							"x-component": "div",
							"x-id": "Inbox_30_2233",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: `flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${item.role === "agent" ? "bg-primary text-primary-foreground" : "bg-[#e5d4bf] text-primary"}`,
								"x-file-name": "Inbox",
								"x-line-number": "30",
								"x-column": "2328",
								"x-component": "div",
								"x-id": "Inbox_30_2328",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: item.role === "agent" ? /* @__PURE__ */ _jsxDEV(Bot, {
									size: 14,
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "2529",
									"x-component": "Bot",
									"x-id": "Inbox_30_2529",
									"x-dynamic": "true",
									"x-source-type": "external",
									"x-source-var": "selected",
									"x-source-editable": "false",
									"x-array-var": "selected",
									"x-array-item-param": "item"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 2328
								}, this) : /* @__PURE__ */ _jsxDEV(UserRound, {
									size: 14,
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "2549",
									"x-component": "UserRound",
									"x-id": "Inbox_30_2549",
									"x-dynamic": "true",
									"x-source-type": "external",
									"x-source-var": "selected",
									"x-source-editable": "false",
									"x-array-var": "selected",
									"x-array-item-param": "item"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 2583
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 1965
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: `max-w-[82%] ${item.role === "agent" ? "text-right" : ""}`,
								"x-file-name": "Inbox",
								"x-line-number": "30",
								"x-column": "2579",
								"x-component": "div",
								"x-id": "Inbox_30_2579",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: `inline-block border px-4 py-3 text-sm leading-6 ${item.role === "agent" ? "border-[#cfe0ca] bg-[#f1f7ee] text-foreground dark:bg-[#253528]" : "border-border bg-surface"}`,
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "2655",
									"x-component": "div",
									"x-id": "Inbox_30_2655",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "selected",
									"x-source-path": "messages.content",
									"x-source-editable": "false",
									"x-array-var": "selected",
									"x-array-item-param": "item",
									children: item.content
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 3042
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-1 font-mono text-[9px] uppercase text-muted-foreground",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "2864",
									"x-component": "div",
									"x-id": "Inbox_30_2864",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "selected",
									"x-source-path": "messages.role",
									"x-source-editable": "false",
									"x-array-var": "selected",
									"x-array-item-param": "item",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "2864",
											"x-component": "div",
											"x-id": "Inbox_30_2864_expr0",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "selected",
											"x-source-path": "messages.role",
											"x-source-editable": "false",
											"x-array-var": "selected",
											"x-array-item-param": "item",
											children: item.role
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 59,
											columnNumber: 3873
										}, this),
										" · ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Inbox",
											"x-line-number": "30",
											"x-column": "2864",
											"x-component": "div",
											"x-id": "Inbox_30_2864_expr2",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: timeAgo(item.timestamp)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 61,
											columnNumber: 319
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 3526
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 59,
								columnNumber: 2854
							}, this)]
						}, item.id, true, {
							fileName: _jsxFileName,
							lineNumber: 59,
							columnNumber: 1758
						}, this)), send.data && /* @__PURE__ */ _jsxDEV("div", {
							className: "flex gap-3 flex-row-reverse",
							"x-file-name": "Inbox",
							"x-line-number": "30",
							"x-column": "3012",
							"x-component": "div",
							"x-id": "Inbox_30_3012",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
								"x-file-name": "Inbox",
								"x-line-number": "30",
								"x-column": "3057",
								"x-component": "div",
								"x-id": "Inbox_30_3057",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV(Bot, {
									size: 14,
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "3172",
									"x-component": "Bot",
									"x-id": "Inbox_30_3172",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 638
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 411
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "max-w-[82%] text-right",
								"x-file-name": "Inbox",
								"x-line-number": "30",
								"x-column": "3195",
								"x-component": "div",
								"x-id": "Inbox_30_3195",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("div", {
									className: "inline-block border border-[#cfe0ca] bg-[#f1f7ee] px-4 py-3 text-left text-sm leading-6 dark:bg-[#253528]",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "3235",
									"x-component": "div",
									"x-id": "Inbox_30_3235",
									"x-dynamic": "true",
									"x-source-type": "unknown",
									"x-source-var": "send",
									"x-source-path": "data.message.content",
									"x-source-editable": "false",
									children: send.data.message.content
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 925
								}, this), /* @__PURE__ */ _jsxDEV("div", {
									className: "mt-1 font-mono text-[9px] uppercase text-muted-foreground",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "3391",
									"x-component": "div",
									"x-id": "Inbox_30_3391",
									"x-dynamic": "false",
									children: "agent · just now"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 63,
									columnNumber: 1299
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 773
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 254
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 59,
						columnNumber: 1443
					}, this),
					/* @__PURE__ */ _jsxDEV("form", {
						onSubmit: (event) => {
							event.preventDefault();
							if (message.trim()) send.mutate(message.trim());
						},
						className: "border-t border-border bg-surface p-4",
						"data-testid": "conversation-composer",
						"x-file-name": "Inbox",
						"x-line-number": "30",
						"x-column": "3507",
						"x-component": "form",
						"x-id": "Inbox_30_3507",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-2 flex items-center gap-2 text-[10px] text-muted-foreground",
							"x-file-name": "Inbox",
							"x-line-number": "30",
							"x-column": "3698",
							"x-component": "div",
							"x-id": "Inbox_30_3698",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(CircleAlert, {
									size: 12,
									className: "text-[#d46444]",
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "3778",
									"x-component": "CircleAlert",
									"x-id": "Inbox_30_3778",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 453
								}, this),
								" ",
								selected.frustration_index > 75 ? "High frustration — lead with ownership" : "Keep the reply grounded in retrieved context"
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 211
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-end gap-2",
							"x-file-name": "Inbox",
							"x-line-number": "30",
							"x-column": "3962",
							"x-component": "div",
							"x-id": "Inbox_30_3962",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(Textarea, {
								value: message,
								onChange: (event) => setMessage(event.target.value),
								placeholder: "Write a context-aware reply…",
								className: "min-h-14 resize-none rounded-md border-border bg-background text-sm",
								"data-testid": "conversation-message-input",
								"x-file-name": "Inbox",
								"x-line-number": "30",
								"x-column": "4000",
								"x-component": "Textarea",
								"x-id": "Inbox_30_4000",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 907
							}, this), /* @__PURE__ */ _jsxDEV(Button, {
								type: "submit",
								disabled: send.isPending || !message.trim(),
								className: "h-10 gap-2 rounded-md px-4",
								"data-testid": "send-message-button",
								"x-file-name": "Inbox",
								"x-line-number": "30",
								"x-column": "4245",
								"x-component": "Button",
								"x-id": "Inbox_30_4245",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: send.isPending ? "Sending…" : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(Send, {
									size: 14,
									"x-file-name": "Inbox",
									"x-line-number": "30",
									"x-column": "4418",
									"x-component": "Send",
									"x-id": "Inbox_30_4418",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 1604
								}, this), " Send"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 66,
									columnNumber: 1602
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 66,
								columnNumber: 1266
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 757
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 1527
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 51,
				columnNumber: 19
			}, this) : /* @__PURE__ */ _jsxDEV("div", {
				className: "flex items-center justify-center p-10 text-sm text-muted-foreground",
				"x-file-name": "Inbox",
				"x-line-number": "30",
				"x-column": "4480",
				"x-component": "div",
				"x-id": "Inbox_30_4480",
				"x-dynamic": "false",
				children: "No conversations yet."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 66,
				columnNumber: 1779
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 49,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 48,
		columnNumber: 10
	}, this);
}
_s(Inbox, "kPW2oxig1t4ZMfx6+cgazFZWjhI=", false, function() {
	return [
		useQuery,
		useQuery,
		useQueryClient,
		useMutation
	];
});
_c = Inbox;
var _c;
$RefreshReg$(_c, "Inbox");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Inbox.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Inbox.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Inbox.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Inbox.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QjtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUFFbkMsS0FBS3NDLFlBQVksYUFBYSxnREFBRSx3QkFBQyxNQUFEO1NBQU0sTUFBTTtTQUFHO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtRQUFBOzs7O2tCQUFHLE9BQUs7Ozs7O09BQVk7Ozs7ZUFBTTs7Ozs7Y0FBTzs7Ozs7O0lBQVU7Ozs7O2NBQUksd0JBQUMsT0FBRDtJQUFLLFdBQVU7SUFBcUU7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUM7R0FBMEI7Ozs7V0FDdCtJOzs7OztVQUNGOzs7Ozs7QUFDUCIsIm5hbWVzIjpbInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJ1c2VRdWVyeUNsaWVudCIsIkFycm93VXBSaWdodCIsIkJvdCIsIkNoZWNrQ2lyY2xlMiIsIkNoZXZyb25SaWdodCIsIkNpcmNsZUFsZXJ0IiwiQ2xvY2szIiwiTWFpbCIsIk1lc3NhZ2VDaXJjbGUiLCJTZW5kIiwiU3BhcmtsZXMiLCJVc2VyUm91bmQiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJ0b2FzdCIsImFwaUdldCIsImFwaVBvc3QiLCJCYWRnZSIsIkJ1dHRvbiIsIlRleHRhcmVhIiwiUGFnZUludHJvIiwiU2VjdGlvbkxhYmVsIiwidGltZUFnbyIsInZhbHVlIiwibWludXRlcyIsIk1hdGgiLCJtYXgiLCJyb3VuZCIsIkRhdGUiLCJub3ciLCJnZXRUaW1lIiwiSW5ib3giLCJ0aWNrZXRzUXVlcnkiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJyZXRyeSIsInRpY2tldHMiLCJkYXRhIiwic2VsZWN0ZWRJZCIsInNldFNlbGVjdGVkSWQiLCJ1bmRlZmluZWQiLCJzZWxlY3RlZCIsImZpbmQiLCJ0aWNrZXQiLCJpZCIsImRldGFpbFF1ZXJ5IiwiY3VzdG9tZXJfaWQiLCJlbmFibGVkIiwiQm9vbGVhbiIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiY2xpZW50Iiwic2VuZCIsIm11dGF0aW9uRm4iLCJjb250ZW50Iiwib25TdWNjZXNzIiwicmVzdWx0IiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJzdWNjZXNzIiwibW9kZSIsIm1lbW9yaWVzIiwiZmFpbGVkIiwiZmlsdGVyIiwibWVtb3J5Iiwib3V0Y29tZSIsIndvcmtlZCIsInQiLCJzdGF0dXMiLCJsZW5ndGgiLCJtYXAiLCJmcnVzdHJhdGlvbl9pbmRleCIsImN1c3RvbWVyX25hbWUiLCJ1cGRhdGVkX2F0Iiwic3ViamVjdCIsImNoYW5uZWwiLCJrbm93bl9pc3N1ZSIsImRpc3BsYXkiLCJjdXN0b21lciIsImRldmljZSIsImFwcF92ZXJzaW9uIiwidGl0bGUiLCJtZXNzYWdlcyIsIml0ZW0iLCJyb2xlIiwidGltZXN0YW1wIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJtdXRhdGUiLCJ0YXJnZXQiLCJpc1BlbmRpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSW5ib3gudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBBcnJvd1VwUmlnaHQsIEJvdCwgQ2hlY2tDaXJjbGUyLCBDaGV2cm9uUmlnaHQsIENpcmNsZUFsZXJ0LCBDbG9jazMsIE1haWwsIE1lc3NhZ2VDaXJjbGUsIFNlbmQsIFNwYXJrbGVzLCBVc2VyUm91bmQgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcbmltcG9ydCB7IGFwaUdldCwgYXBpUG9zdCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9iYWRnZVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90ZXh0YXJlYVwiO1xuaW1wb3J0IHsgUGFnZUludHJvLCBTZWN0aW9uTGFiZWwgfSBmcm9tIFwiQC9jb21wb25lbnRzL0FwcFNoZWxsXCI7XG5pbXBvcnQgdHlwZSB7IENoYXRSZXNwb25zZSwgQ3VzdG9tZXJEZXRhaWwsIE1lbW9yeUl0ZW0sIFRpY2tldCB9IGZyb20gXCJAL2xpYi90eXBlc1wiO1xuXG5mdW5jdGlvbiB0aW1lQWdvKHZhbHVlOiBzdHJpbmcpIHsgY29uc3QgbWludXRlcyA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoKERhdGUubm93KCkgLSBuZXcgRGF0ZSh2YWx1ZSkuZ2V0VGltZSgpKSAvIDYwMDAwKSk7IHJldHVybiBtaW51dGVzIDwgNjAgPyBgJHttaW51dGVzfW0gYWdvYCA6IGAke01hdGgucm91bmQobWludXRlcyAvIDYwKX1oIGFnb2A7IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5ib3goKSB7XG4gIGNvbnN0IHRpY2tldHNRdWVyeSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcInN1cHBvcnRcIiwgXCJ0aWNrZXRzXCJdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8VGlja2V0W10+KFwiL3N1cHBvcnQvdGlja2V0c1wiKSwgcmV0cnk6IGZhbHNlIH0pO1xuICBjb25zdCB0aWNrZXRzID0gdGlja2V0c1F1ZXJ5LmRhdGEgPz8gW107XG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcbiAgY29uc3Qgc2VsZWN0ZWQgPSB0aWNrZXRzLmZpbmQoKHRpY2tldCkgPT4gdGlja2V0LmlkID09PSAoc2VsZWN0ZWRJZCA/PyB0aWNrZXRzWzBdPy5pZCkpO1xuICBjb25zdCBkZXRhaWxRdWVyeSA9IHVzZVF1ZXJ5KHsgcXVlcnlLZXk6IFtcInN1cHBvcnRcIiwgXCJjdXN0b21lclwiLCBzZWxlY3RlZD8uY3VzdG9tZXJfaWRdLCBxdWVyeUZuOiAoKSA9PiBhcGlHZXQ8Q3VzdG9tZXJEZXRhaWw+KGAvc3VwcG9ydC9jdXN0b21lcnMvJHtzZWxlY3RlZD8uY3VzdG9tZXJfaWR9YCksIGVuYWJsZWQ6IEJvb2xlYW4oc2VsZWN0ZWQ/LmN1c3RvbWVyX2lkKSwgcmV0cnk6IGZhbHNlIH0pO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgY29uc3Qgc2VuZCA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogKGNvbnRlbnQ6IHN0cmluZykgPT4gYXBpUG9zdDxDaGF0UmVzcG9uc2U+KGAvc3VwcG9ydC90aWNrZXRzLyR7c2VsZWN0ZWQ/LmlkfS9tZXNzYWdlc2AsIHsgbWVzc2FnZTogY29udGVudCB9KSwgb25TdWNjZXNzOiAocmVzdWx0KSA9PiB7IHNldE1lc3NhZ2UoXCJcIik7IGNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbXCJzdXBwb3J0XCJdIH0pOyB0b2FzdC5zdWNjZXNzKHJlc3VsdC5tb2RlID09PSBcImhpbmRzaWdodFwiID8gXCJSZXBseSBncm91bmRlZCBpbiBIaW5kc2lnaHQgbWVtb3J5XCIgOiBcIlJlcGx5IHNlbnQgd2l0aCBtb2NrZWQgbWVtb3J5IGFkYXB0ZXJcIik7IH0gfSk7XG4gIGNvbnN0IG1lbW9yaWVzID0gZGV0YWlsUXVlcnkuZGF0YT8ubWVtb3JpZXMgPz8gW107XG4gIGNvbnN0IGZhaWxlZCA9IG1lbW9yaWVzLmZpbHRlcigobWVtb3J5OiBNZW1vcnlJdGVtKSA9PiBtZW1vcnkub3V0Y29tZSA9PT0gXCJmYWlsZWRcIik7XG4gIGNvbnN0IHdvcmtlZCA9IG1lbW9yaWVzLmZpbHRlcigobWVtb3J5OiBNZW1vcnlJdGVtKSA9PiBtZW1vcnkub3V0Y29tZSA9PT0gXCJ3b3JrZWRcIik7XG4gIHJldHVybiA8ZGl2IGRhdGEtdGVzdGlkPVwiaW5ib3gtcGFnZVwiPjxQYWdlSW50cm8gZXllYnJvdz1cIlVuaWZpZWQgaW5ib3hcIiB0aXRsZT1cIlN0YXkgb25lIHN0ZXAgYWhlYWQuXCIgZGVzY3JpcHRpb249XCJFdmVyeSBjb252ZXJzYXRpb24gb3BlbnMgd2l0aCB0aGUgY3VzdG9tZXIncyBjb250ZXh0IGFscmVhZHkgaW4gdmlldy4gTm8gcmVwZWF0ZWQgcXVlc3Rpb25zLiBObyBmYWlsZWQgZml4ZXMgb24gbG9vcC5cIiBhY3Rpb249ezxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcm91bmRlZC1tZCBib3JkZXIgYm9yZGVyLVsjZDllNWQzXSBiZy1bI2YwZjZlY10gcHgtMyBweS0yIHRleHQteHMgdGV4dC1bIzU1NzQ1MF1cIiBkYXRhLXRlc3RpZD1cIm1lbW9yeS1zdGF0dXNcIj48c3BhbiBjbGFzc05hbWU9XCJoLTIgdy0yIHJvdW5kZWQtZnVsbCBiZy1bIzdhOWI3Nl1cIiAvPiBNZW1vcnkgY29udGV4dCBhY3RpdmU8L2Rpdj59IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIG1pbi1oLVs2NDBweF0gZ3JpZC1jb2xzLTEgb3ZlcmZsb3ctaGlkZGVuIGJvcmRlciBib3JkZXItYm9yZGVyIGJnLXN1cmZhY2UgbGc6Z3JpZC1jb2xzLVszMzBweF8xZnJdXCI+XG4gICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWJvcmRlciBsZzpib3JkZXItYi0wIGxnOmJvcmRlci1yXCIgZGF0YS10ZXN0aWQ9XCJ0aWNrZXQtbGlzdFwiPjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ib3JkZXIgcHgtNCBweS00XCI+PGRpdj48U2VjdGlvbkxhYmVsPlF1ZXVlPC9TZWN0aW9uTGFiZWw+PGRpdiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQteGxcIj5PcGVuIGNvbnZlcnNhdGlvbnMgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+e3RpY2tldHMuZmlsdGVyKCh0KSA9PiB0LnN0YXR1cyAhPT0gXCJyZXNvbHZlZFwiKS5sZW5ndGh9PC9zcGFuPjwvZGl2PjwvZGl2PjxidXR0b24gY2xhc3NOYW1lPVwicm91bmRlZC1tZCBwLTIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGhvdmVyOmJnLXN1cmZhY2UtbXV0ZWRcIiBkYXRhLXRlc3RpZD1cIm5ldy1jb252ZXJzYXRpb24tYnV0dG9uXCIgYXJpYS1sYWJlbD1cIk5ldyBjb252ZXJzYXRpb25cIj48TWVzc2FnZUNpcmNsZSBzaXplPXsxNn0gLz48L2J1dHRvbj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IGRpdmlkZS1ib3JkZXJcIj57dGlja2V0cy5tYXAoKHRpY2tldCkgPT4gPGJ1dHRvbiBrZXk9e3RpY2tldC5pZH0gb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRJZCh0aWNrZXQuaWQpfSBkYXRhLXRlc3RpZD17YHRpY2tldC1saXN0LWl0ZW0tJHt0aWNrZXQuaWR9YH0gY2xhc3NOYW1lPXtgdy1mdWxsIHAtNCB0ZXh0LWxlZnQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGhvdmVyOmJnLXN1cmZhY2UtbXV0ZWQgJHtzZWxlY3RlZD8uaWQgPT09IHRpY2tldC5pZCA/IFwiYmctc3VyZmFjZS1tdXRlZFwiIDogXCJcIn1gfT48ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMlwiPjxzcGFuIGNsYXNzTmFtZT17YGgtMiB3LTIgcm91bmRlZC1mdWxsICR7dGlja2V0LnN0YXR1cyA9PT0gXCJyZXNvbHZlZFwiID8gXCJiZy1bIzdhOWI3Nl1cIiA6IHRpY2tldC5mcnVzdHJhdGlvbl9pbmRleCA+IDc1ID8gXCJiZy1bI2Q0NjQ0NF1cIiA6IFwiYmctWyNkNWE3NmRdXCJ9YH0gLz48c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e3RpY2tldC5jdXN0b21lcl9uYW1lfTwvc3Bhbj48L2Rpdj48c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bOXB4XSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj57dGltZUFnbyh0aWNrZXQudXBkYXRlZF9hdCl9PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibWItMiB0cnVuY2F0ZSB0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZFwiPnt0aWNrZXQuc3ViamVjdH08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtWzExcHhdIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPjxzcGFuIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0xXCI+PE1haWwgc2l6ZT17MTJ9IC8+e3RpY2tldC5jaGFubmVsfTwvc3Bhbj57dGlja2V0Lmtub3duX2lzc3VlICYmIDxCYWRnZSB2YXJpYW50PVwib3V0bGluZVwiPktub3duIGlzc3VlPC9CYWRnZT59e3RpY2tldC5mcnVzdHJhdGlvbl9pbmRleCA+IDc1ICYmIDxCYWRnZSB2YXJpYW50PVwiZGVzdHJ1Y3RpdmVcIj5IaWdoIGZydXN0cmF0aW9uPC9CYWRnZT59PC9kaXY+PC9idXR0b24+KX08L2Rpdj48L2FzaWRlPlxuICAgICAge3NlbGVjdGVkID8gPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBtaW4taC1bNjQwcHhdIG1pbi13LTAgZmxleC1jb2xcIiBkYXRhLXRlc3RpZD1cImFjdGl2ZS1jb252ZXJzYXRpb25cIj48ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1ib3JkZXIgcHgtNSBweS00XCI+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBnYXAtMyBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXJcIj48ZGl2PjxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj48aDIgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTJ4bFwiPntzZWxlY3RlZC5zdWJqZWN0fTwvaDI+PEJhZGdlIHZhcmlhbnQ9e3NlbGVjdGVkLnN0YXR1cyA9PT0gXCJvcGVuXCIgPyBcImRlc3RydWN0aXZlXCIgOiBcInNlY29uZGFyeVwifT57c2VsZWN0ZWQuc3RhdHVzfTwvQmFkZ2U+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC0xIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+PHNwYW4+e3NlbGVjdGVkLmN1c3RvbWVyX25hbWV9PC9zcGFuPjxzcGFuPsK3PC9zcGFuPjxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ub1wiPntzZWxlY3RlZC5pZH08L3NwYW4+PHNwYW4+wrc8L3NwYW4+PHNwYW4+VXBkYXRlZCB7dGltZUFnbyhzZWxlY3RlZC51cGRhdGVkX2F0KX08L3NwYW4+PC9kaXY+PC9kaXY+PExpbmsgdG89e2AvY3VzdG9tZXIvJHtzZWxlY3RlZC5jdXN0b21lcl9pZH1gfSBkYXRhLXRlc3RpZD1cIm9wZW4tY3VzdG9tZXItbWVtb3J5LWJ1dHRvblwiPjxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwic21cIiBjbGFzc05hbWU9XCJnYXAtMiByb3VuZGVkLW1kXCI+PFVzZXJSb3VuZCBzaXplPXsxNH0gLz4gQ3VzdG9tZXIgbWVtb3J5IDxBcnJvd1VwUmlnaHQgc2l6ZT17MTN9IC8+PC9CdXR0b24+PC9MaW5rPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLVsjZDllNWQzXSBiZy1bI2Y0ZjhmMV0gcHgtNSBweS00IGRhcms6YmctWyMxZDJiMjBdXCIgZGF0YS10ZXN0aWQ9XCJtZW1vcnktY29udGV4dC1wYW5lbFwiPjxkaXYgY2xhc3NOYW1lPVwibWItMyBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1bIzQ3Njc0NF0gZGFyazp0ZXh0LVsjYThjOTlkXVwiPjxTcGFya2xlcyBzaXplPXsxNH0gLz4gTWVtb3J5IGNvbnRleHQgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJnLVsjZGNlYmQ1XSBweC0yIHB5LTAuNSBmb250LW1vbm8gdGV4dC1bOXB4XSBkYXJrOmJnLVsjMzA0NTMxXVwiPnttZW1vcmllcy5sZW5ndGh9IG1hdGNoZXM8L3NwYW4+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0zIHRleHQteHMgbWQ6Z3JpZC1jb2xzLTNcIj48ZGl2PjxkaXYgY2xhc3NOYW1lPVwibWItMSBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+RW52aXJvbm1lbnQ8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZFwiPntkZXRhaWxRdWVyeS5kYXRhPy5jdXN0b21lci5kZXZpY2UgPz8gXCJMb2FkaW5nXCJ9IMK3IHtkZXRhaWxRdWVyeS5kYXRhPy5jdXN0b21lci5hcHBfdmVyc2lvbiA/PyBcIlwifTwvZGl2PjwvZGl2PjxkaXY+PGRpdiBjbGFzc05hbWU9XCJtYi0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5Ta2lwIHRoZXNlPC9kaXY+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWZvcmVncm91bmRcIj57ZmFpbGVkWzBdPy50aXRsZSA/PyBcIk5vIGZhaWxlZCBzb2x1dGlvbnMgZm91bmRcIn08L2Rpdj48L2Rpdj48ZGl2PjxkaXYgY2xhc3NOYW1lPVwibWItMSBmb250LW1vbm8gdGV4dC1bOXB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+UHJldmlvdXNseSB3b3JrZWQ8L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInRleHQtZm9yZWdyb3VuZFwiPnt3b3JrZWRbMF0/LnRpdGxlID8/IFwiU3RpbGwgbGVhcm5pbmdcIn08L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBzcGFjZS15LTUgb3ZlcmZsb3cteS1hdXRvIGJnLVsjZmNmYmY5XSBwLTUgZGFyazpiZy1iYWNrZ3JvdW5kXCIgZGF0YS10ZXN0aWQ9XCJjb252ZXJzYXRpb24tbWVzc2FnZXNcIj57c2VsZWN0ZWQubWVzc2FnZXMubWFwKChpdGVtKSA9PiA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtgZmxleCBnYXAtMyAke2l0ZW0ucm9sZSA9PT0gXCJhZ2VudFwiID8gXCJmbGV4LXJvdy1yZXZlcnNlXCIgOiBcIlwifWB9PjxkaXYgY2xhc3NOYW1lPXtgZmxleCBoLTcgdy03IHNocmluay0wIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWZ1bGwgJHtpdGVtLnJvbGUgPT09IFwiYWdlbnRcIiA/IFwiYmctcHJpbWFyeSB0ZXh0LXByaW1hcnktZm9yZWdyb3VuZFwiIDogXCJiZy1bI2U1ZDRiZl0gdGV4dC1wcmltYXJ5XCJ9YH0+e2l0ZW0ucm9sZSA9PT0gXCJhZ2VudFwiID8gPEJvdCBzaXplPXsxNH0gLz4gOiA8VXNlclJvdW5kIHNpemU9ezE0fSAvPn08L2Rpdj48ZGl2IGNsYXNzTmFtZT17YG1heC13LVs4MiVdICR7aXRlbS5yb2xlID09PSBcImFnZW50XCIgPyBcInRleHQtcmlnaHRcIiA6IFwiXCJ9YH0+PGRpdiBjbGFzc05hbWU9e2BpbmxpbmUtYmxvY2sgYm9yZGVyIHB4LTQgcHktMyB0ZXh0LXNtIGxlYWRpbmctNiAke2l0ZW0ucm9sZSA9PT0gXCJhZ2VudFwiID8gXCJib3JkZXItWyNjZmUwY2FdIGJnLVsjZjFmN2VlXSB0ZXh0LWZvcmVncm91bmQgZGFyazpiZy1bIzI1MzUyOF1cIiA6IFwiYm9yZGVyLWJvcmRlciBiZy1zdXJmYWNlXCJ9YH0+e2l0ZW0uY29udGVudH08L2Rpdj48ZGl2IGNsYXNzTmFtZT1cIm10LTEgZm9udC1tb25vIHRleHQtWzlweF0gdXBwZXJjYXNlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPntpdGVtLnJvbGV9IMK3IHt0aW1lQWdvKGl0ZW0udGltZXN0YW1wKX08L2Rpdj48L2Rpdj48L2Rpdj4pfXtzZW5kLmRhdGEgJiYgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC0zIGZsZXgtcm93LXJldmVyc2VcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaC03IHctNyBzaHJpbmstMCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmRcIj48Qm90IHNpemU9ezE0fSAvPjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzgyJV0gdGV4dC1yaWdodFwiPjxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJvcmRlciBib3JkZXItWyNjZmUwY2FdIGJnLVsjZjFmN2VlXSBweC00IHB5LTMgdGV4dC1sZWZ0IHRleHQtc20gbGVhZGluZy02IGRhcms6YmctWyMyNTM1MjhdXCI+e3NlbmQuZGF0YS5tZXNzYWdlLmNvbnRlbnR9PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJtdC0xIGZvbnQtbW9ubyB0ZXh0LVs5cHhdIHVwcGVyY2FzZSB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5hZ2VudCDCtyBqdXN0IG5vdzwvZGl2PjwvZGl2PjwvZGl2Pn08L2Rpdj48Zm9ybSBvblN1Ym1pdD17KGV2ZW50KSA9PiB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IGlmIChtZXNzYWdlLnRyaW0oKSkgc2VuZC5tdXRhdGUobWVzc2FnZS50cmltKCkpOyB9fSBjbGFzc05hbWU9XCJib3JkZXItdCBib3JkZXItYm9yZGVyIGJnLXN1cmZhY2UgcC00XCIgZGF0YS10ZXN0aWQ9XCJjb252ZXJzYXRpb24tY29tcG9zZXJcIj48ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1bMTBweF0gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+PENpcmNsZUFsZXJ0IHNpemU9ezEyfSBjbGFzc05hbWU9XCJ0ZXh0LVsjZDQ2NDQ0XVwiIC8+IHtzZWxlY3RlZC5mcnVzdHJhdGlvbl9pbmRleCA+IDc1ID8gXCJIaWdoIGZydXN0cmF0aW9uIOKAlCBsZWFkIHdpdGggb3duZXJzaGlwXCIgOiBcIktlZXAgdGhlIHJlcGx5IGdyb3VuZGVkIGluIHJldHJpZXZlZCBjb250ZXh0XCJ9PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWVuZCBnYXAtMlwiPjxUZXh0YXJlYSB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIldyaXRlIGEgY29udGV4dC1hd2FyZSByZXBseeKAplwiIGNsYXNzTmFtZT1cIm1pbi1oLTE0IHJlc2l6ZS1ub25lIHJvdW5kZWQtbWQgYm9yZGVyLWJvcmRlciBiZy1iYWNrZ3JvdW5kIHRleHQtc21cIiBkYXRhLXRlc3RpZD1cImNvbnZlcnNhdGlvbi1tZXNzYWdlLWlucHV0XCIgLz48QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaXNhYmxlZD17c2VuZC5pc1BlbmRpbmcgfHwgIW1lc3NhZ2UudHJpbSgpfSBjbGFzc05hbWU9XCJoLTEwIGdhcC0yIHJvdW5kZWQtbWQgcHgtNFwiIGRhdGEtdGVzdGlkPVwic2VuZC1tZXNzYWdlLWJ1dHRvblwiPntzZW5kLmlzUGVuZGluZyA/IFwiU2VuZGluZ+KAplwiIDogPD48U2VuZCBzaXplPXsxNH0gLz4gU2VuZDwvPn08L0J1dHRvbj48L2Rpdj48L2Zvcm0+PC9zZWN0aW9uPiA6IDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xMCB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPk5vIGNvbnZlcnNhdGlvbnMgeWV0LjwvZGl2Pn1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+O1xufSJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvSW5ib3gudHN4In0=