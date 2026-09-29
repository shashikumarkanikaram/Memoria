import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");const _jsxDEV = __vite__cjsImport7_react_jsxDevRuntime["jsxDEV"];import { Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=56fe86c3";
import AppShell from "/src/components/AppShell.tsx";
import Home from "/src/pages/Home.tsx?t=1790687473889";
import Inbox from "/src/pages/Inbox.tsx";
import Customer from "/src/pages/Customer.tsx";
import Analytics from "/src/pages/Analytics.tsx";
import Feedback from "/src/pages/Feedback.tsx";
var _jsxFileName = "/app/frontend/src/App.tsx";
import __vite__cjsImport7_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
	return /* @__PURE__ */ _jsxDEV(Routes, { children: [
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "/",
			element: /* @__PURE__ */ _jsxDEV(AppShell, {
				"x-file-name": "App",
				"x-line-number": "13",
				"x-column": "31",
				"x-component": "AppShell",
				"x-id": "App_13_31",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(Home, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 150
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 32
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "/inbox",
			element: /* @__PURE__ */ _jsxDEV(AppShell, {
				"x-file-name": "App",
				"x-line-number": "14",
				"x-column": "36",
				"x-component": "AppShell",
				"x-id": "App_14_36",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(Inbox, {
					"x-file-name": "App",
					"x-line-number": "14",
					"x-column": "46",
					"x-component": "Inbox",
					"x-id": "App_14_46",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 13,
					columnNumber: 155
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 37
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "/customer/:id",
			element: /* @__PURE__ */ _jsxDEV(AppShell, {
				"x-file-name": "App",
				"x-line-number": "15",
				"x-column": "43",
				"x-component": "AppShell",
				"x-id": "App_15_43",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(Customer, {
					"x-file-name": "App",
					"x-line-number": "15",
					"x-column": "53",
					"x-component": "Customer",
					"x-id": "App_15_53",
					"x-dynamic": "true",
					"x-excluded": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 162
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 44
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "/analytics",
			element: /* @__PURE__ */ _jsxDEV(AppShell, {
				"x-file-name": "App",
				"x-line-number": "16",
				"x-column": "40",
				"x-component": "AppShell",
				"x-id": "App_16_40",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(Analytics, {
					"x-file-name": "App",
					"x-line-number": "16",
					"x-column": "50",
					"x-component": "Analytics",
					"x-id": "App_16_50",
					"x-dynamic": "true",
					"x-excluded": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 159
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 15,
				columnNumber: 41
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ _jsxDEV(Route, {
			path: "/feedback",
			element: /* @__PURE__ */ _jsxDEV(AppShell, {
				"x-file-name": "App",
				"x-line-number": "17",
				"x-column": "39",
				"x-component": "AppShell",
				"x-id": "App_17_39",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(Feedback, {
					"x-file-name": "App",
					"x-line-number": "17",
					"x-column": "49",
					"x-component": "Feedback",
					"x-id": "App_17_49",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 16,
					columnNumber: 158
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 40
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
_c = App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.tsx?t=1790687473889";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/App.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsUUFBUUMsYUFBYTtBQUM5QixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLFVBQVU7QUFDakIsT0FBT0MsV0FBVztBQUNsQixPQUFPQyxjQUFjO0FBQ3JCLE9BQU9DLGVBQWU7QUFDdEIsT0FBT0MsY0FBYzs7OztBQUdyQixlQUFlLFNBQVNDLE1BQU07Q0FDNUIsT0FDRSx3QkFBQyxRQUFEO0VBQ0Usd0JBQUMsT0FBRDtHQUFPLE1BQUs7R0FBSSxTQUFTLHdCQUFDLFVBQUQ7SUFBUztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBQyx3QkFBQyxNQUFELENBQUs7Ozs7O0dBQWE7Ozs7O0VBQUU7Ozs7O0VBQ3ZELHdCQUFDLE9BQUQ7R0FBTyxNQUFLO0dBQVMsU0FBUyx3QkFBQyxVQUFEO0lBQVM7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQUMsd0JBQUMsT0FBRDtLQUFNO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBOzs7OztHQUFhOzs7OztFQUFFOzs7OztFQUM3RCx3QkFBQyxPQUFEO0dBQU8sTUFBSztHQUFnQixTQUFTLHdCQUFDLFVBQUQ7SUFBUztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBQyx3QkFBQyxVQUFEO0tBQVM7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7SUFBQTs7Ozs7R0FBYTs7Ozs7RUFBRTs7Ozs7RUFDdkUsd0JBQUMsT0FBRDtHQUFPLE1BQUs7R0FBYSxTQUFTLHdCQUFDLFVBQUQ7SUFBUztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBQyx3QkFBQyxXQUFEO0tBQVU7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7SUFBQTs7Ozs7R0FBYTs7Ozs7RUFBRTs7Ozs7RUFDckUsd0JBQUMsT0FBRDtHQUFPLE1BQUs7R0FBWSxTQUFTLHdCQUFDLFVBQUQ7SUFBUztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBQyx3QkFBQyxVQUFEO0tBQVM7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0lBQUE7Ozs7O0dBQWE7Ozs7O0VBQUU7Ozs7O0NBQzdEOzs7OztBQUVaIiwibmFtZXMiOlsiUm91dGVzIiwiUm91dGUiLCJBcHBTaGVsbCIsIkhvbWUiLCJJbmJveCIsIkN1c3RvbWVyIiwiQW5hbHl0aWNzIiwiRmVlZGJhY2siLCJBcHAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCBBcHBTaGVsbCBmcm9tIFwiQC9jb21wb25lbnRzL0FwcFNoZWxsXCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiQC9wYWdlcy9Ib21lXCI7XG5pbXBvcnQgSW5ib3ggZnJvbSBcIkAvcGFnZXMvSW5ib3hcIjtcbmltcG9ydCBDdXN0b21lciBmcm9tIFwiQC9wYWdlcy9DdXN0b21lclwiO1xuaW1wb3J0IEFuYWx5dGljcyBmcm9tIFwiQC9wYWdlcy9BbmFseXRpY3NcIjtcbmltcG9ydCBGZWVkYmFjayBmcm9tIFwiQC9wYWdlcy9GZWVkYmFja1wiO1xuXG4vLyBPbmUgPFJvdXRlPiBwZXIgcGFnZSBpbiBzcmMvcGFnZXM7IEJyb3dzZXJSb3V0ZXIgYWxyZWFkeSB3cmFwcyB0aGlzIGluIG1haW4udHN4LlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXM+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8QXBwU2hlbGw+PEhvbWUgLz48L0FwcFNoZWxsPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2luYm94XCIgZWxlbWVudD17PEFwcFNoZWxsPjxJbmJveCAvPjwvQXBwU2hlbGw+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvY3VzdG9tZXIvOmlkXCIgZWxlbWVudD17PEFwcFNoZWxsPjxDdXN0b21lciAvPjwvQXBwU2hlbGw+fSAvPlxuICAgICAgPFJvdXRlIHBhdGg9XCIvYW5hbHl0aWNzXCIgZWxlbWVudD17PEFwcFNoZWxsPjxBbmFseXRpY3MgLz48L0FwcFNoZWxsPn0gLz5cbiAgICAgIDxSb3V0ZSBwYXRoPVwiL2ZlZWRiYWNrXCIgZWxlbWVudD17PEFwcFNoZWxsPjxGZWVkYmFjayAvPjwvQXBwU2hlbGw+fSAvPlxuICAgIDwvUm91dGVzPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9BcHAudHN4In0=