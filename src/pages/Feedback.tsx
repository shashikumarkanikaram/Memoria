import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Feedback.tsx");const useState = __vite__cjsImport2_react["useState"];const _jsxDEV = __vite__cjsImport8_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport8_react_jsxDevRuntime["Fragment"];import { useMutation, useQuery, useQueryClient } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=56fe86c3";
import { CheckCircle2, FileText, LockKeyhole, Sparkles } from "/src/lib/lucide-react.tsx";
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=56fe86c3";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=56fe86c3";
import { apiGet, apiPost } from "/src/lib/api.ts";
import { Button } from "/src/components/ui/button.tsx";
import { Textarea } from "/src/components/ui/textarea.tsx";
import { PageIntro, SectionLabel } from "/src/components/AppShell.tsx";
var _jsxFileName = "/app/frontend/src/pages/Feedback.tsx";
import __vite__cjsImport8_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
var _s = $RefreshSig$();
export default function Feedback() {
	_s();
	const tickets = useQuery({
		queryKey: ["support", "tickets"],
		queryFn: () => apiGet("/support/tickets"),
		retry: false
	});
	const [ticketId, setTicketId] = useState("tkt_1042");
	const [category, setCategory] = useState("worked");
	const [note, setNote] = useState("");
	const client = useQueryClient();
	const save = useMutation({
		mutationFn: () => apiPost("/support/feedback", {
			ticket_id: ticketId,
			category,
			note
		}),
		onSuccess: (response) => {
			setNote("");
			client.invalidateQueries({ queryKey: ["support"] });
			toast.success(`Memory written to ${response.memory_source}`);
		}
	});
	return /* @__PURE__ */ _jsxDEV("div", {
		"data-testid": "feedback-page",
		"x-file-name": "Feedback",
		"x-line-number": "11",
		"x-column": "647",
		"x-component": "div",
		"x-id": "Feedback_11_647",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV(PageIntro, {
			eyebrow: "Feedback & post-mortem",
			title: "Teach the memory.",
			description: "Close the loop after a conversation. What worked, what failed, and what should the next agent know?",
			"x-file-name": "Feedback",
			"x-line-number": "11",
			"x-column": "680",
			"x-component": "PageIntro",
			"x-id": "Feedback_11_680",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 159
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "mx-auto max-w-3xl",
			"x-file-name": "Feedback",
			"x-line-number": "11",
			"x-column": "866",
			"x-component": "div",
			"x-id": "Feedback_11_866",
			"x-dynamic": "false",
			children: [/* @__PURE__ */ _jsxDEV("div", {
				className: "mb-6 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-3",
				"x-file-name": "Feedback",
				"x-line-number": "11",
				"x-column": "901",
				"x-component": "div",
				"x-id": "Feedback_11_901",
				"x-dynamic": "false",
				children: [
					/* @__PURE__ */ _jsxDEV("div", {
						className: "bg-surface p-4",
						"x-file-name": "Feedback",
						"x-line-number": "11",
						"x-column": "993",
						"x-component": "div",
						"x-id": "Feedback_11_993",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-2 flex items-center gap-2 text-primary",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "1025",
							"x-component": "div",
							"x-id": "Feedback_11_1025",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(FileText, {
								size: 16,
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "1084",
								"x-component": "FileText",
								"x-id": "Feedback_11_1084",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 1150
							}, this), /* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "1106",
								"x-component": "SectionLabel",
								"x-id": "Feedback_11_1106",
								"x-dynamic": "false",
								children: "01 · Review"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 1295
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 973
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-sm font-medium",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "1152",
							"x-component": "div",
							"x-id": "Feedback_11_1152",
							"x-dynamic": "false",
							children: "Choose the contact"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 1468
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 825
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "bg-surface p-4",
						"x-file-name": "Feedback",
						"x-line-number": "11",
						"x-column": "1219",
						"x-component": "div",
						"x-id": "Feedback_11_1219",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-2 flex items-center gap-2 text-primary",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "1251",
							"x-component": "div",
							"x-id": "Feedback_11_1251",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(Sparkles, {
								size: 16,
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "1310",
								"x-component": "Sparkles",
								"x-id": "Feedback_11_1310",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 1980
							}, this), /* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "1332",
								"x-component": "SectionLabel",
								"x-id": "Feedback_11_1332",
								"x-dynamic": "false",
								children: "02 · Capture"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 2125
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 1803
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-sm font-medium",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "1379",
							"x-component": "div",
							"x-id": "Feedback_11_1379",
							"x-dynamic": "false",
							children: "Add durable context"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 2299
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 1653
					}, this),
					/* @__PURE__ */ _jsxDEV("div", {
						className: "bg-surface p-4",
						"x-file-name": "Feedback",
						"x-line-number": "11",
						"x-column": "1447",
						"x-component": "div",
						"x-id": "Feedback_11_1447",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "mb-2 flex items-center gap-2 text-primary",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "1479",
							"x-component": "div",
							"x-id": "Feedback_11_1479",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV(LockKeyhole, {
								size: 16,
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "1538",
								"x-component": "LockKeyhole",
								"x-id": "Feedback_11_1538",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 2812
							}, this), /* @__PURE__ */ _jsxDEV(SectionLabel, {
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "1563",
								"x-component": "SectionLabel",
								"x-id": "Feedback_11_1563",
								"x-dynamic": "false",
								children: "03 · Protect"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 34,
								columnNumber: 2963
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 2635
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "text-sm font-medium",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "1610",
							"x-component": "div",
							"x-id": "Feedback_11_1610",
							"x-dynamic": "false",
							children: "PII redaction on"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 3137
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 2485
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 617
			}, this), /* @__PURE__ */ _jsxDEV("form", {
				onSubmit: (event) => {
					event.preventDefault();
					if (note.trim()) save.mutate();
				},
				className: "border border-border bg-surface p-6 md:p-8",
				"data-testid": "feedback-form",
				"x-file-name": "Feedback",
				"x-line-number": "11",
				"x-column": "1681",
				"x-component": "form",
				"x-id": "Feedback_11_1681",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					className: "mb-7",
					"x-file-name": "Feedback",
					"x-line-number": "11",
					"x-column": "1852",
					"x-component": "div",
					"x-id": "Feedback_11_1852",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("h2", {
						className: "font-serif text-3xl",
						"x-file-name": "Feedback",
						"x-line-number": "11",
						"x-column": "1874",
						"x-component": "h2",
						"x-id": "Feedback_11_1874",
						"x-dynamic": "false",
						children: "What should persist?"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 352
					}, this), /* @__PURE__ */ _jsxDEV("p", {
						className: "mt-2 text-sm leading-6 text-muted-foreground",
						"x-file-name": "Feedback",
						"x-line-number": "11",
						"x-column": "1935",
						"x-component": "p",
						"x-id": "Feedback_11_1935",
						"x-dynamic": "false",
						children: "This note becomes part of the customer's solution ledger. Keep it factual and useful for the next contact."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 37,
						columnNumber: 530
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 212
				}, this), /* @__PURE__ */ _jsxDEV("div", {
					className: "space-y-6",
					"x-file-name": "Feedback",
					"x-line-number": "11",
					"x-column": "2111",
					"x-component": "div",
					"x-id": "Feedback_11_2111",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("label", {
							className: "block",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "2138",
							"x-component": "label",
							"x-id": "Feedback_11_2138",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "2163",
								"x-component": "span",
								"x-id": "Feedback_11_2163",
								"x-dynamic": "false",
								children: "Conversation"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 1112
							}, this), /* @__PURE__ */ _jsxDEV("select", {
								value: ticketId,
								onChange: (event) => setTicketId(event.target.value),
								className: "h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary",
								"data-testid": "feedback-ticket-select",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "2280",
								"x-component": "select",
								"x-id": "Feedback_11_2280",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: (tickets.data ?? []).map((ticket) => /* @__PURE__ */ _jsxDEV("option", {
									value: ticket.id,
									"x-file-name": "Feedback",
									"x-line-number": "11",
									"x-column": "2582",
									"x-component": "option",
									"x-id": "Feedback_11_2582",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-path": "customer_name",
									"x-source-editable": "false",
									"x-array-item-param": "ticket",
									children: [
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Feedback",
											"x-line-number": "11",
											"x-column": "2582",
											"x-component": "option",
											"x-id": "Feedback_11_2582_expr0",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-path": "customer_name",
											"x-source-editable": "false",
											"x-array-item-param": "ticket",
											children: ticket.customer_name
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 37,
											columnNumber: 2095
										}, this),
										" · ",
										/* @__PURE__ */ _jsxDEV("span", {
											"data-ve-dynamic": "true",
											"x-excluded": "true",
											style: { display: "contents" },
											"x-file-name": "Feedback",
											"x-line-number": "11",
											"x-column": "2582",
											"x-component": "option",
											"x-id": "Feedback_11_2582_expr2",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-path": "subject",
											"x-source-editable": "false",
											"x-array-item-param": "ticket",
											children: ticket.subject
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 39,
											columnNumber: 294
										}, this)
									]
								}, ticket.id, true, {
									fileName: _jsxFileName,
									lineNumber: 37,
									columnNumber: 1817
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 1348
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 967
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "2693",
							"x-component": "div",
							"x-id": "Feedback_11_2693",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "mb-2 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "2698",
								"x-component": "span",
								"x-id": "Feedback_11_2698",
								"x-dynamic": "false",
								children: "Outcome"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 430
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "2810",
								"x-component": "div",
								"x-id": "Feedback_11_2810",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									{
										value: "worked",
										label: "Worked"
									},
									{
										value: "failed",
										label: "Failed"
									},
									{
										value: "partial",
										label: "Partially worked"
									},
									{
										value: "insight",
										label: "New insight"
									}
								].map((item) => /* @__PURE__ */ _jsxDEV("button", {
									type: "button",
									onClick: () => setCategory(item.value),
									"data-testid": `feedback-outcome-${item.value}`,
									className: `border px-3 py-2.5 text-xs transition-colors duration-200 ${category === item.value ? "border-primary bg-[#eef5eb] text-primary dark:bg-[#233526]" : "border-border text-muted-foreground hover:bg-surface-muted"}`,
									"x-file-name": "Feedback",
									"x-line-number": "11",
									"x-column": "3050",
									"x-component": "button",
									"x-id": "Feedback_11_3050",
									"x-dynamic": "true",
									"x-source-type": "static-local",
									"x-source-file": "/app/frontend/src/pages/Feedback.tsx",
									"x-source-file-abs": "/app/frontend/src/pages/Feedback.tsx",
									"x-source-line": "11",
									"x-source-path": "label",
									"x-source-editable": "true",
									"x-array-file": "/app/frontend/src/pages/Feedback.tsx",
									"x-array-line": "11",
									"x-array-item-param": "item",
									"x-array-inline": "true",
									children: item.label
								}, item.value, false, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 30
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 661
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 41,
							columnNumber: 307
						}, this),
						/* @__PURE__ */ _jsxDEV("label", {
							className: "block",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "3436",
							"x-component": "label",
							"x-id": "Feedback_11_3436",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "3461",
								"x-component": "span",
								"x-id": "Feedback_11_3461",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									"x-file-name": "Feedback",
									"x-line-number": "11",
									"x-column": "3587",
									"x-component": "span",
									"x-id": "Feedback_11_3587",
									"x-dynamic": "false",
									children: "Memory note"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 1249
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									"x-file-name": "Feedback",
									"x-line-number": "11",
									"x-column": "3611",
									"x-component": "span",
									"x-id": "Feedback_11_3611",
									"x-dynamic": "true",
									"x-source-type": "state",
									"x-source-var": "note",
									"x-source-path": "length",
									"x-source-editable": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										"data-ve-dynamic": "true",
										"x-excluded": "true",
										style: { display: "contents" },
										"x-file-name": "Feedback",
										"x-line-number": "11",
										"x-column": "3611",
										"x-component": "span",
										"x-id": "Feedback_11_3611_expr0",
										"x-dynamic": "true",
										"x-source-type": "state",
										"x-source-var": "note",
										"x-source-path": "length",
										"x-source-editable": "false",
										children: note.length
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 53,
										columnNumber: 1607
									}, this), "/2000"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 53,
									columnNumber: 1392
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 53,
								columnNumber: 1004
							}, this), /* @__PURE__ */ _jsxDEV(Textarea, {
								value: note,
								onChange: (event) => setNote(event.target.value),
								maxLength: 2e3,
								placeholder: "Example: Exporting under 50 rows completed successfully; larger exports still time out on macOS 14.5.",
								className: "min-h-36 resize-y rounded-md border-border bg-background text-sm leading-6",
								"data-testid": "feedback-note-input",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "3649",
								"x-component": "Textarea",
								"x-id": "Feedback_11_3649",
								"x-dynamic": "true"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 274
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 859
						}, this),
						/* @__PURE__ */ _jsxDEV("div", {
							className: "flex flex-col justify-between gap-3 border-t border-border pt-5 sm:flex-row sm:items-center",
							"x-file-name": "Feedback",
							"x-line-number": "11",
							"x-column": "3986",
							"x-component": "div",
							"x-id": "Feedback_11_3986",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center gap-2 text-xs text-muted-foreground",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "4095",
								"x-component": "div",
								"x-id": "Feedback_11_4095",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV(LockKeyhole, {
									size: 13,
									className: "text-primary",
									"x-file-name": "Feedback",
									"x-line-number": "11",
									"x-column": "4166",
									"x-component": "LockKeyhole",
									"x-id": "Feedback_11_4166",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 1147
								}, this), " Sensitive values are redacted before storage"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 958
							}, this), /* @__PURE__ */ _jsxDEV(Button, {
								type: "submit",
								disabled: save.isPending || note.trim().length < 3,
								className: "h-10 gap-2 rounded-md px-5",
								"data-testid": "save-feedback-button",
								"x-file-name": "Feedback",
								"x-line-number": "11",
								"x-column": "4267",
								"x-component": "Button",
								"x-id": "Feedback_11_4267",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: save.isPending ? "Writing memory…" : /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(CheckCircle2, {
									size: 15,
									"x-file-name": "Feedback",
									"x-line-number": "11",
									"x-column": "4455",
									"x-component": "CheckCircle2",
									"x-id": "Feedback_11_4455",
									"x-dynamic": "false"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 1733
								}, this), " Save to memory"] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 1731
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 1374
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 731
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 822
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 34,
				columnNumber: 3326
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 34,
			columnNumber: 466
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 34,
		columnNumber: 10
	}, this);
}
_s(Feedback, "TMFF/Qep9Ab5AaWs3hhn40dXMoM=", false, function() {
	return [
		useQuery,
		useQueryClient,
		useMutation
	];
});
_c = Feedback;
var _c;
$RefreshReg$(_c, "Feedback");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/pages/Feedback.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/pages/Feedback.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/pages/Feedback.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/pages/Feedback.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsYUFBYUMsVUFBVUMsc0JBQXNCO0FBQ3RELFNBQVNDLGNBQWNDLFVBQVVDLGFBQWFDLGdCQUFnQjtBQUM5RCxTQUFTQyxnQkFBZ0I7QUFDekIsU0FBU0MsYUFBYTtBQUN0QixTQUFTQyxRQUFRQyxlQUFlO0FBQ2hDLFNBQVNDLGNBQWM7QUFDdkIsU0FBU0MsZ0JBQWdCO0FBQ3pCLFNBQVNDLFdBQVdDLG9CQUFvQjs7OztBQUd4QyxlQUFlLFNBQVNDLFdBQVc7O0NBQUUsTUFBTUMsVUFBVWYsU0FBUztFQUFFZ0IsVUFBVSxDQUFDLFdBQVcsU0FBUztFQUFHQyxlQUFlVCxPQUFpQixrQkFBa0I7RUFBR1UsT0FBTztDQUFNLENBQUM7Q0FBRyxNQUFNLENBQUNDLFVBQVVDLGVBQWVkLFNBQVMsVUFBVTtDQUFHLE1BQU0sQ0FBQ2UsVUFBVUMsZUFBZWhCLFNBQVMsUUFBUTtDQUFHLE1BQU0sQ0FBQ2lCLE1BQU1DLFdBQVdsQixTQUFTLEVBQUU7Q0FBRyxNQUFNbUIsU0FBU3hCLGVBQWU7Q0FBRyxNQUFNeUIsT0FBTzNCLFlBQVk7RUFBRTRCLGtCQUFrQmxCLFFBQTBCLHFCQUFxQjtHQUFFbUIsV0FBV1Q7R0FBVUU7R0FBVUU7RUFBSyxDQUFDO0VBQUdNLFlBQVlDLGFBQWE7R0FBRU4sUUFBUSxFQUFFO0dBQUdDLE9BQU9NLGtCQUFrQixFQUFFZixVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7R0FBR1QsTUFBTXlCLFFBQVEscUJBQXFCRixTQUFTRyxlQUFlO0VBQUc7Q0FBRSxDQUFDO0NBQUcsT0FBTyx3QkFBQyxPQUFEO0VBQUssZUFBWTtFQUFlO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtZQUFoQyxDQUFpQyx3QkFBQyxXQUFEO0dBQVcsU0FBUTtHQUF5QixPQUFNO0dBQW9CLGFBQVk7R0FBcUc7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0VBQUE7Ozs7WUFBRyx3QkFBQyxPQUFEO0dBQUssV0FBVTtHQUFtQjtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFBbEMsQ0FBbUMsd0JBQUMsT0FBRDtJQUFLLFdBQVU7SUFBNEU7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQTNGO0tBQTRGLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO01BQWdCO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBL0IsQ0FBZ0Msd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBMkM7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUExRCxDQUEyRCx3QkFBQyxVQUFEO1FBQVUsTUFBTTtRQUFHO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtPQUFBOzs7O2lCQUFHLHdCQUFDLGNBQUQ7UUFBYTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQUM7T0FBeUI7Ozs7ZUFBTTs7Ozs7Z0JBQUMsd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBcUI7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUFDO01BQXVCOzs7O2NBQU07Ozs7OztLQUFDLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO01BQWdCO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBL0IsQ0FBZ0Msd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBMkM7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUExRCxDQUEyRCx3QkFBQyxVQUFEO1FBQVUsTUFBTTtRQUFHO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtPQUFBOzs7O2lCQUFHLHdCQUFDLGNBQUQ7UUFBYTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQUM7T0FBMEI7Ozs7ZUFBTTs7Ozs7Z0JBQUMsd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBcUI7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUFDO01BQXdCOzs7O2NBQU07Ozs7OztLQUFDLHdCQUFDLE9BQUQ7TUFBSyxXQUFVO01BQWdCO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBL0IsQ0FBZ0Msd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBMkM7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUExRCxDQUEyRCx3QkFBQyxhQUFEO1FBQWEsTUFBTTtRQUFHO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtPQUFBOzs7O2lCQUFHLHdCQUFDLGNBQUQ7UUFBYTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQUM7T0FBMEI7Ozs7ZUFBTTs7Ozs7Z0JBQUMsd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBcUI7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUFDO01BQXFCOzs7O2NBQU07Ozs7OztJQUFNOzs7OzthQUFDLHdCQUFDLFFBQUQ7SUFBTSxXQUFXQyxVQUFVO0tBQUVBLE1BQU1DLGVBQWU7S0FBRyxJQUFJWixLQUFLYSxLQUFLLEdBQUdWLEtBQUtXLE9BQU87SUFBRztJQUFHLFdBQVU7SUFBNkMsZUFBWTtJQUFlO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUExSyxDQUEySyx3QkFBQyxPQUFEO0tBQUssV0FBVTtLQUFNO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFyQixDQUFzQix3QkFBQyxNQUFEO01BQUksV0FBVTtNQUFxQjtNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7Z0JBQUM7S0FBd0I7Ozs7ZUFBQyx3QkFBQyxLQUFEO01BQUcsV0FBVTtNQUE4QztNQUFBO01BQUE7TUFBQTtNQUFBO01BQUE7Z0JBQUM7S0FBNkc7Ozs7YUFBTTs7Ozs7Y0FBQyx3QkFBQyxPQUFEO0tBQUssV0FBVTtLQUFXO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUExQjtNQUEyQix3QkFBQyxTQUFEO09BQU8sV0FBVTtPQUFPO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBeEIsQ0FBeUIsd0JBQUMsUUFBRDtRQUFNLFdBQVU7UUFBaUY7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUFDO09BQWtCOzs7O2lCQUFDLHdCQUFDLFVBQUQ7UUFBUSxPQUFPbEI7UUFBVSxXQUFXZSxVQUFVZCxZQUFZYyxNQUFNSSxPQUFPQyxLQUFLO1FBQUcsV0FBVTtRQUEwSSxlQUFZO1FBQXdCO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7bUJBQUd4QixRQUFReUIsUUFBUSxHQUFFLENBQUVDLEtBQUtDLFdBQVcsd0JBQUMsVUFBRDtTQUF3QixPQUFPQSxPQUFPQztTQUFHO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO21CQUF6QztVQUEwQztXQUFBO1dBQUE7V0FBQSxTQUFBQyxTQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7cUJBQUNGLE9BQU9HO1VBQWM7Ozs7O1VBQUE7VUFBRztXQUFBO1dBQUE7V0FBQSxTQUFBRCxTQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7cUJBQUNGLE9BQU9JO1VBQVE7Ozs7O1NBQVE7V0FBOUVKLE9BQU9DOzs7O2VBQXVFLENBQUM7T0FBVTs7OztlQUFROzs7Ozs7TUFBQyx3QkFBQyxPQUFEO09BQUk7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUFKLENBQUssd0JBQUMsUUFBRDtRQUFNLFdBQVU7UUFBaUY7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUFDO09BQWE7Ozs7aUJBQUMsd0JBQUMsT0FBRDtRQUFLLFdBQVU7UUFBdUM7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBRTtTQUFDO1VBQUVKLE9BQU87VUFBVVEsT0FBTztTQUFTO1NBQUc7VUFBRVIsT0FBTztVQUFVUSxPQUFPO1NBQVM7U0FBRztVQUFFUixPQUFPO1VBQVdRLE9BQU87U0FBbUI7U0FBRztVQUFFUixPQUFPO1VBQVdRLE9BQU87U0FBYztRQUFDLENBQUMsQ0FBQ04sS0FBS08sU0FBUyx3QkFBQyxVQUFEO1NBQVEsTUFBSztTQUEwQixlQUFlMUIsWUFBWTBCLEtBQUtULEtBQUs7U0FBRyxlQUFhLG9CQUFvQlMsS0FBS1Q7U0FBUyxXQUFXLDZEQUE2RGxCLGFBQWEyQixLQUFLVCxRQUFRLCtEQUErRDtTQUErRDtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTttQkFBRVMsS0FBS0Q7UUFBYyxHQUF4VkMsS0FBS1Q7Ozs7ZUFBbVYsQ0FBQztPQUFPOzs7O2VBQU07Ozs7OztNQUFDLHdCQUFDLFNBQUQ7T0FBTyxXQUFVO09BQU87T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUF4QixDQUF5Qix3QkFBQyxRQUFEO1FBQU0sV0FBVTtRQUE2RztRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7a0JBQTdILENBQThILHdCQUFDLFFBQUQ7U0FBSztTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7bUJBQUM7UUFBaUI7Ozs7a0JBQUMsd0JBQUMsUUFBRDtTQUFLO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO21CQUFMLENBQU07VUFBQTtVQUFBO1VBQUEsU0FBQUssU0FBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO29CQUFDckIsS0FBSzBCO1NBQU87Ozs7bUJBQUEsT0FBVzs7Ozs7Z0JBQU87Ozs7O2lCQUFDLHdCQUFDLFVBQUQ7UUFBVSxPQUFPMUI7UUFBTSxXQUFXVyxVQUFVVixRQUFRVSxNQUFNSSxPQUFPQyxLQUFLO1FBQUcsV0FBVztRQUFNLGFBQVk7UUFBd0csV0FBVTtRQUE2RSxlQUFZO1FBQXFCO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtPQUFBOzs7O2VBQVU7Ozs7OztNQUFDLHdCQUFDLE9BQUQ7T0FBSyxXQUFVO09BQTZGO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBNUcsQ0FBNkcsd0JBQUMsT0FBRDtRQUFLLFdBQVU7UUFBdUQ7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUF0RSxDQUF1RSx3QkFBQyxhQUFEO1NBQWEsTUFBTTtTQUFJLFdBQVU7U0FBYztTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7UUFBQTs7OztrQkFBRywrQ0FBa0Q7Ozs7O2lCQUFDLHdCQUFDLFFBQUQ7UUFBUSxNQUFLO1FBQVMsVUFBVWIsS0FBS3dCLGFBQWEzQixLQUFLYSxLQUFLLENBQUMsQ0FBQ2EsU0FBUztRQUFHLFdBQVU7UUFBNkIsZUFBWTtRQUFzQjtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUFFdkIsS0FBS3dCLFlBQVksb0JBQW9CLGdEQUFFLHdCQUFDLGNBQUQ7U0FBYyxNQUFNO1NBQUc7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1FBQUE7Ozs7a0JBQUcsaUJBQWU7Ozs7O09BQVk7Ozs7ZUFBTTs7Ozs7O0tBQU07Ozs7O1lBQU87Ozs7O1dBQU07Ozs7O1VBQU07Ozs7OztBQUFFIiwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeSIsInVzZVF1ZXJ5Q2xpZW50IiwiQ2hlY2tDaXJjbGUyIiwiRmlsZVRleHQiLCJMb2NrS2V5aG9sZSIsIlNwYXJrbGVzIiwidXNlU3RhdGUiLCJ0b2FzdCIsImFwaUdldCIsImFwaVBvc3QiLCJCdXR0b24iLCJUZXh0YXJlYSIsIlBhZ2VJbnRybyIsIlNlY3Rpb25MYWJlbCIsIkZlZWRiYWNrIiwidGlja2V0cyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInJldHJ5IiwidGlja2V0SWQiLCJzZXRUaWNrZXRJZCIsImNhdGVnb3J5Iiwic2V0Q2F0ZWdvcnkiLCJub3RlIiwic2V0Tm90ZSIsImNsaWVudCIsInNhdmUiLCJtdXRhdGlvbkZuIiwidGlja2V0X2lkIiwib25TdWNjZXNzIiwicmVzcG9uc2UiLCJpbnZhbGlkYXRlUXVlcmllcyIsInN1Y2Nlc3MiLCJtZW1vcnlfc291cmNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJtdXRhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJtYXAiLCJ0aWNrZXQiLCJpZCIsImRpc3BsYXkiLCJjdXN0b21lcl9uYW1lIiwic3ViamVjdCIsImxhYmVsIiwiaXRlbSIsImxlbmd0aCIsImlzUGVuZGluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJGZWVkYmFjay50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IENoZWNrQ2lyY2xlMiwgRmlsZVRleHQsIExvY2tLZXlob2xlLCBTcGFya2xlcyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcbmltcG9ydCB7IGFwaUdldCwgYXBpUG9zdCB9IGZyb20gXCJAL2xpYi9hcGlcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBUZXh0YXJlYSB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdGV4dGFyZWFcIjtcbmltcG9ydCB7IFBhZ2VJbnRybywgU2VjdGlvbkxhYmVsIH0gZnJvbSBcIkAvY29tcG9uZW50cy9BcHBTaGVsbFwiO1xuaW1wb3J0IHR5cGUgeyBGZWVkYmFja1Jlc3BvbnNlLCBUaWNrZXQgfSBmcm9tIFwiQC9saWIvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmVlZGJhY2soKSB7IGNvbnN0IHRpY2tldHMgPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJzdXBwb3J0XCIsIFwidGlja2V0c1wiXSwgcXVlcnlGbjogKCkgPT4gYXBpR2V0PFRpY2tldFtdPihcIi9zdXBwb3J0L3RpY2tldHNcIiksIHJldHJ5OiBmYWxzZSB9KTsgY29uc3QgW3RpY2tldElkLCBzZXRUaWNrZXRJZF0gPSB1c2VTdGF0ZShcInRrdF8xMDQyXCIpOyBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKFwid29ya2VkXCIpOyBjb25zdCBbbm90ZSwgc2V0Tm90ZV0gPSB1c2VTdGF0ZShcIlwiKTsgY29uc3QgY2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTsgY29uc3Qgc2F2ZSA9IHVzZU11dGF0aW9uKHsgbXV0YXRpb25GbjogKCkgPT4gYXBpUG9zdDxGZWVkYmFja1Jlc3BvbnNlPihcIi9zdXBwb3J0L2ZlZWRiYWNrXCIsIHsgdGlja2V0X2lkOiB0aWNrZXRJZCwgY2F0ZWdvcnksIG5vdGUgfSksIG9uU3VjY2VzczogKHJlc3BvbnNlKSA9PiB7IHNldE5vdGUoXCJcIik7IGNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbXCJzdXBwb3J0XCJdIH0pOyB0b2FzdC5zdWNjZXNzKGBNZW1vcnkgd3JpdHRlbiB0byAke3Jlc3BvbnNlLm1lbW9yeV9zb3VyY2V9YCk7IH0gfSk7IHJldHVybiA8ZGl2IGRhdGEtdGVzdGlkPVwiZmVlZGJhY2stcGFnZVwiPjxQYWdlSW50cm8gZXllYnJvdz1cIkZlZWRiYWNrICYgcG9zdC1tb3J0ZW1cIiB0aXRsZT1cIlRlYWNoIHRoZSBtZW1vcnkuXCIgZGVzY3JpcHRpb249XCJDbG9zZSB0aGUgbG9vcCBhZnRlciBhIGNvbnZlcnNhdGlvbi4gV2hhdCB3b3JrZWQsIHdoYXQgZmFpbGVkLCBhbmQgd2hhdCBzaG91bGQgdGhlIG5leHQgYWdlbnQga25vdz9cIiAvPjxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0zeGxcIj48ZGl2IGNsYXNzTmFtZT1cIm1iLTYgZ3JpZCBncmlkLWNvbHMtMSBnYXAtcHggYm9yZGVyIGJvcmRlci1ib3JkZXIgYmctYm9yZGVyIHNtOmdyaWQtY29scy0zXCI+PGRpdiBjbGFzc05hbWU9XCJiZy1zdXJmYWNlIHAtNFwiPjxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXByaW1hcnlcIj48RmlsZVRleHQgc2l6ZT17MTZ9IC8+PFNlY3Rpb25MYWJlbD4wMSDCtyBSZXZpZXc8L1NlY3Rpb25MYWJlbD48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5DaG9vc2UgdGhlIGNvbnRhY3Q8L2Rpdj48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImJnLXN1cmZhY2UgcC00XCI+PGRpdiBjbGFzc05hbWU9XCJtYi0yIGZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQtcHJpbWFyeVwiPjxTcGFya2xlcyBzaXplPXsxNn0gLz48U2VjdGlvbkxhYmVsPjAyIMK3IENhcHR1cmU8L1NlY3Rpb25MYWJlbD48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW1cIj5BZGQgZHVyYWJsZSBjb250ZXh0PC9kaXY+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJiZy1zdXJmYWNlIHAtNFwiPjxkaXYgY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiB0ZXh0LXByaW1hcnlcIj48TG9ja0tleWhvbGUgc2l6ZT17MTZ9IC8+PFNlY3Rpb25MYWJlbD4wMyDCtyBQcm90ZWN0PC9TZWN0aW9uTGFiZWw+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+UElJIHJlZGFjdGlvbiBvbjwvZGl2PjwvZGl2PjwvZGl2Pjxmb3JtIG9uU3VibWl0PXsoZXZlbnQpID0+IHsgZXZlbnQucHJldmVudERlZmF1bHQoKTsgaWYgKG5vdGUudHJpbSgpKSBzYXZlLm11dGF0ZSgpOyB9fSBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJvcmRlciBiZy1zdXJmYWNlIHAtNiBtZDpwLThcIiBkYXRhLXRlc3RpZD1cImZlZWRiYWNrLWZvcm1cIj48ZGl2IGNsYXNzTmFtZT1cIm1iLTdcIj48aDIgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTN4bFwiPldoYXQgc2hvdWxkIHBlcnNpc3Q/PC9oMj48cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtc20gbGVhZGluZy02IHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlRoaXMgbm90ZSBiZWNvbWVzIHBhcnQgb2YgdGhlIGN1c3RvbWVyJ3Mgc29sdXRpb24gbGVkZ2VyLiBLZWVwIGl0IGZhY3R1YWwgYW5kIHVzZWZ1bCBmb3IgdGhlIG5leHQgY29udGFjdC48L3A+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj48bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2tcIj48c3BhbiBjbGFzc05hbWU9XCJtYi0yIGJsb2NrIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXIgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+Q29udmVyc2F0aW9uPC9zcGFuPjxzZWxlY3QgdmFsdWU9e3RpY2tldElkfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUaWNrZXRJZChldmVudC50YXJnZXQudmFsdWUpfSBjbGFzc05hbWU9XCJoLTEwIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlciBib3JkZXItaW5wdXQgYmctYmFja2dyb3VuZCBweC0zIHRleHQtc20gb3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1wcmltYXJ5IGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXByaW1hcnlcIiBkYXRhLXRlc3RpZD1cImZlZWRiYWNrLXRpY2tldC1zZWxlY3RcIj57KHRpY2tldHMuZGF0YSA/PyBbXSkubWFwKCh0aWNrZXQpID0+IDxvcHRpb24ga2V5PXt0aWNrZXQuaWR9IHZhbHVlPXt0aWNrZXQuaWR9Pnt0aWNrZXQuY3VzdG9tZXJfbmFtZX0gwrcge3RpY2tldC5zdWJqZWN0fTwvb3B0aW9uPil9PC9zZWxlY3Q+PC9sYWJlbD48ZGl2PjxzcGFuIGNsYXNzTmFtZT1cIm1iLTIgYmxvY2sgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj5PdXRjb21lPC9zcGFuPjxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMiBzbTpncmlkLWNvbHMtNFwiPntbeyB2YWx1ZTogXCJ3b3JrZWRcIiwgbGFiZWw6IFwiV29ya2VkXCIgfSwgeyB2YWx1ZTogXCJmYWlsZWRcIiwgbGFiZWw6IFwiRmFpbGVkXCIgfSwgeyB2YWx1ZTogXCJwYXJ0aWFsXCIsIGxhYmVsOiBcIlBhcnRpYWxseSB3b3JrZWRcIiB9LCB7IHZhbHVlOiBcImluc2lnaHRcIiwgbGFiZWw6IFwiTmV3IGluc2lnaHRcIiB9XS5tYXAoKGl0ZW0pID0+IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGtleT17aXRlbS52YWx1ZX0gb25DbGljaz17KCkgPT4gc2V0Q2F0ZWdvcnkoaXRlbS52YWx1ZSl9IGRhdGEtdGVzdGlkPXtgZmVlZGJhY2stb3V0Y29tZS0ke2l0ZW0udmFsdWV9YH0gY2xhc3NOYW1lPXtgYm9yZGVyIHB4LTMgcHktMi41IHRleHQteHMgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwICR7Y2F0ZWdvcnkgPT09IGl0ZW0udmFsdWUgPyBcImJvcmRlci1wcmltYXJ5IGJnLVsjZWVmNWViXSB0ZXh0LXByaW1hcnkgZGFyazpiZy1bIzIzMzUyNl1cIiA6IFwiYm9yZGVyLWJvcmRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgaG92ZXI6Ymctc3VyZmFjZS1tdXRlZFwifWB9PntpdGVtLmxhYmVsfTwvYnV0dG9uPil9PC9kaXY+PC9kaXY+PGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+PHNwYW4gY2xhc3NOYW1lPVwibWItMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LW11dGVkLWZvcmVncm91bmRcIj48c3Bhbj5NZW1vcnkgbm90ZTwvc3Bhbj48c3Bhbj57bm90ZS5sZW5ndGh9LzIwMDA8L3NwYW4+PC9zcGFuPjxUZXh0YXJlYSB2YWx1ZT17bm90ZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Tm90ZShldmVudC50YXJnZXQudmFsdWUpfSBtYXhMZW5ndGg9ezIwMDB9IHBsYWNlaG9sZGVyPVwiRXhhbXBsZTogRXhwb3J0aW5nIHVuZGVyIDUwIHJvd3MgY29tcGxldGVkIHN1Y2Nlc3NmdWxseTsgbGFyZ2VyIGV4cG9ydHMgc3RpbGwgdGltZSBvdXQgb24gbWFjT1MgMTQuNS5cIiBjbGFzc05hbWU9XCJtaW4taC0zNiByZXNpemUteSByb3VuZGVkLW1kIGJvcmRlci1ib3JkZXIgYmctYmFja2dyb3VuZCB0ZXh0LXNtIGxlYWRpbmctNlwiIGRhdGEtdGVzdGlkPVwiZmVlZGJhY2stbm90ZS1pbnB1dFwiIC8+PC9sYWJlbD48ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIGdhcC0zIGJvcmRlci10IGJvcmRlci1ib3JkZXIgcHQtNSBzbTpmbGV4LXJvdyBzbTppdGVtcy1jZW50ZXJcIj48ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+PExvY2tLZXlob2xlIHNpemU9ezEzfSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIiAvPiBTZW5zaXRpdmUgdmFsdWVzIGFyZSByZWRhY3RlZCBiZWZvcmUgc3RvcmFnZTwvZGl2PjxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtzYXZlLmlzUGVuZGluZyB8fCBub3RlLnRyaW0oKS5sZW5ndGggPCAzfSBjbGFzc05hbWU9XCJoLTEwIGdhcC0yIHJvdW5kZWQtbWQgcHgtNVwiIGRhdGEtdGVzdGlkPVwic2F2ZS1mZWVkYmFjay1idXR0b25cIj57c2F2ZS5pc1BlbmRpbmcgPyBcIldyaXRpbmcgbWVtb3J54oCmXCIgOiA8PjxDaGVja0NpcmNsZTIgc2l6ZT17MTV9IC8+IFNhdmUgdG8gbWVtb3J5PC8+fTwvQnV0dG9uPjwvZGl2PjwvZGl2PjwvZm9ybT48L2Rpdj48L2Rpdj4gfSJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvcGFnZXMvRmVlZGJhY2sudHN4In0=