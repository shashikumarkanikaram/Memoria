const forwardRef = __vite__cjsImport0_react["forwardRef"];const _jsxDEV = __vite__cjsImport3_react_jsxDevRuntime["jsxDEV"];// lucide-react 1.x removed brand logos (lucide-icons/lucide#670: "use Simple Icons"), yet
// `import { Instagram } from "lucide-react"` is what most code, and every model, still writes.
// Vite and tsconfig alias "lucide-react" here: everything from the real package, plus the removed
// names backed by Simple Icons, or lucide's own 0.x glyph (ISC) where Simple Icons has no mark.
// New code should import the Si* components from "@icons-pack/react-simple-icons" directly.
/* oxlint-disable react/only-export-components -- every export here is an icon component */
import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=56fe86c3";
import { createLucideIcon } from "/node_modules/.vite/deps/lucide-react-upstream.js?v=56fe86c3";
import { SiCodesandbox, SiDribbble, SiFacebook, SiFigma, SiFramer, SiGithub, SiGitlab, SiGooglechrome, SiInstagram, SiTrello, SiTwitch, SiX, SiYoutube } from "/node_modules/.vite/deps/@icons-pack_react-simple-icons.js?v=56fe86c3";
var _jsxFileName = "/app/frontend/src/lib/lucide-react.tsx";
import __vite__cjsImport3_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=56fe86c3";
export * from "/node_modules/.vite/deps/lucide-react-upstream.js?v=56fe86c3";
function fromSimpleIcons(name, Si) {
	const Brand = forwardRef(function Brand(props, ref) {
		// Simple Icons marks are filled shapes: lucide's stroke props mean nothing on them.
		const { size = 24, color = "currentColor", strokeWidth, absoluteStrokeWidth, ...rest } = props;
		void strokeWidth;
		void absoluteStrokeWidth;
		return /* @__PURE__ */ _jsxDEV(Si, {
			ref,
			size,
			color,
			"x-file-name": "lucide-react",
			"x-line-number": "36",
			"x-column": "11",
			"x-component": "Si",
			"x-id": "lucide-react_36_11",
			"x-dynamic": "true",
			...rest
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 12
		}, this);
	});
	Brand.displayName = name;
	return Brand;
}
export const Chrome = fromSimpleIcons("Chrome", SiGooglechrome);
export const Codesandbox = fromSimpleIcons("Codesandbox", SiCodesandbox);
export const Dribbble = fromSimpleIcons("Dribbble", SiDribbble);
export const Facebook = fromSimpleIcons("Facebook", SiFacebook);
export const Figma = fromSimpleIcons("Figma", SiFigma);
export const Framer = fromSimpleIcons("Framer", SiFramer);
export const Github = fromSimpleIcons("Github", SiGithub);
export const Gitlab = fromSimpleIcons("Gitlab", SiGitlab);
export const Instagram = fromSimpleIcons("Instagram", SiInstagram);
export const Trello = fromSimpleIcons("Trello", SiTrello);
export const Twitch = fromSimpleIcons("Twitch", SiTwitch);
export const Twitter = fromSimpleIcons("Twitter", SiX);
export const Youtube = fromSimpleIcons("Youtube", SiYoutube);
// Simple Icons carries no mark for these (brand-owner requests): lucide 0.577 glyphs, ISC.
const LINKEDIN = [
	["path", {
		d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
		key: "c2jq9f"
	}],
	["rect", {
		width: "4",
		height: "12",
		x: "2",
		y: "9",
		key: "mk3on5"
	}],
	["circle", {
		cx: "4",
		cy: "4",
		r: "2",
		key: "bt5ra8"
	}]
];
const SLACK = [
	["rect", {
		width: "3",
		height: "8",
		x: "13",
		y: "2",
		rx: "1.5",
		key: "diqz80"
	}],
	["path", {
		d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",
		key: "183iwg"
	}],
	["rect", {
		width: "3",
		height: "8",
		x: "8",
		y: "14",
		rx: "1.5",
		key: "hqg7r1"
	}],
	["path", {
		d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",
		key: "76g71w"
	}],
	["rect", {
		width: "8",
		height: "3",
		x: "14",
		y: "13",
		rx: "1.5",
		key: "1kmz0a"
	}],
	["path", {
		d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",
		key: "jc4sz0"
	}],
	["rect", {
		width: "8",
		height: "3",
		x: "2",
		y: "8",
		rx: "1.5",
		key: "1omvl4"
	}],
	["path", {
		d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",
		key: "16f3cl"
	}]
];
const POCKET = [["path", {
	d: "M20 3a2 2 0 0 1 2 2v6a1 1 0 0 1-20 0V5a2 2 0 0 1 2-2z",
	key: "1uodqw"
}], ["path", {
	d: "m8 10 4 4 4-4",
	key: "1mxd5q"
}]];
const CODEPEN = [
	["polygon", {
		points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",
		key: "srzb37"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "22",
		y2: "15.5",
		key: "1t73f2"
	}],
	["polyline", {
		points: "22 8.5 12 15.5 2 8.5",
		key: "ajlxae"
	}],
	["polyline", {
		points: "2 15.5 12 8.5 22 15.5",
		key: "susrui"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "8.5",
		key: "2cldga"
	}]
];
const CHROMIUM = [
	["path", {
		d: "M10.88 21.94 15.46 14",
		key: "xkve6t"
	}],
	["path", {
		d: "M21.17 8H12",
		key: "19dcdn"
	}],
	["path", {
		d: "M3.95 6.06 8.54 14",
		key: "g8jz9m"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}]
];
export const Linkedin = createLucideIcon("linkedin", LINKEDIN);
export const Slack = createLucideIcon("slack", SLACK);
export const Pocket = createLucideIcon("pocket", POCKET);
export const Codepen = createLucideIcon("codepen", CODEPEN);
export const Chromium = createLucideIcon("chromium", CHROMIUM);
// lucide exposes every icon under three names; keep all three for the restored ones.
export { Chrome as ChromeIcon, Chrome as LucideChrome, Chromium as ChromiumIcon, Chromium as LucideChromium, Codepen as CodepenIcon, Codepen as LucideCodepen, Codesandbox as CodesandboxIcon, Codesandbox as LucideCodesandbox, Dribbble as DribbbleIcon, Dribbble as LucideDribbble, Facebook as FacebookIcon, Facebook as LucideFacebook, Figma as FigmaIcon, Figma as LucideFigma, Framer as FramerIcon, Framer as LucideFramer, Github as GithubIcon, Github as LucideGithub, Gitlab as GitlabIcon, Gitlab as LucideGitlab, Instagram as InstagramIcon, Instagram as LucideInstagram, Linkedin as LinkedinIcon, Linkedin as LucideLinkedin, Pocket as PocketIcon, Pocket as LucidePocket, Slack as SlackIcon, Slack as LucideSlack, Trello as TrelloIcon, Trello as LucideTrello, Twitch as TwitchIcon, Twitch as LucideTwitch, Twitter as TwitterIcon, Twitter as LucideTwitter, Youtube as YoutubeIcon, Youtube as LucideYoutube };

//# sourceMappingURL=data:application/json;base64,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LE9BQU8sTUFBTVksU0FBUzdELGlCQUFpQixVQUFVbUQsTUFBTTtBQUN2RCxPQUFPLE1BQU1XLFVBQVU5RCxpQkFBaUIsV0FBV29ELE9BQU87QUFDMUQsT0FBTyxNQUFNVyxXQUFXL0QsaUJBQWlCLFlBQVkwRCxRQUFROztBQUc3RCxTQUNFaEMsVUFBVXNDLFlBQVl0QyxVQUFVdUMsY0FDaENGLFlBQVlHLGNBQWNILFlBQVlJLGdCQUN0Q0wsV0FBV00sYUFBYU4sV0FBV08sZUFDbkMxQyxlQUFlMkMsaUJBQWlCM0MsZUFBZTRDLG1CQUMvQzNDLFlBQVk0QyxjQUFjNUMsWUFBWTZDLGdCQUN0QzVDLFlBQVk2QyxjQUFjN0MsWUFBWThDLGdCQUN0QzdDLFNBQVM4QyxXQUFXOUMsU0FBUytDLGFBQzdCOUMsVUFBVStDLFlBQVkvQyxVQUFVZ0QsY0FDaEMvQyxVQUFVZ0QsWUFBWWhELFVBQVVpRCxjQUNoQ2hELFVBQVVpRCxZQUFZakQsVUFBVWtELGNBQ2hDakQsYUFBYWtELGVBQWVsRCxhQUFhbUQsaUJBQ3pDMUIsWUFBWTJCLGNBQWMzQixZQUFZNEIsZ0JBQ3RDMUIsVUFBVTJCLFlBQVkzQixVQUFVNEIsY0FDaEM3QixTQUFTOEIsV0FBVzlCLFNBQVMrQixhQUM3QnhELFVBQVV5RCxZQUFZekQsVUFBVTBELGNBQ2hDekQsVUFBVTBELFlBQVkxRCxVQUFVMkQsY0FDaEMxRCxXQUFXMkQsYUFBYTNELFdBQVc0RCxlQUNuQzNELFdBQVc0RCxhQUFhNUQsV0FBVzZEIiwibmFtZXMiOlsiZm9yd2FyZFJlZiIsImNyZWF0ZUx1Y2lkZUljb24iLCJTaUNvZGVzYW5kYm94IiwiU2lEcmliYmJsZSIsIlNpRmFjZWJvb2siLCJTaUZpZ21hIiwiU2lGcmFtZXIiLCJTaUdpdGh1YiIsIlNpR2l0bGFiIiwiU2lHb29nbGVjaHJvbWUiLCJTaUluc3RhZ3JhbSIsIlNpVHJlbGxvIiwiU2lUd2l0Y2giLCJTaVgiLCJTaVlvdXR1YmUiLCJmcm9tU2ltcGxlSWNvbnMiLCJuYW1lIiwiU2kiLCJCcmFuZCIsInByb3BzIiwicmVmIiwic2l6ZSIsImNvbG9yIiwic3Ryb2tlV2lkdGgiLCJhYnNvbHV0ZVN0cm9rZVdpZHRoIiwicmVzdCIsImRpc3BsYXlOYW1lIiwiQ2hyb21lIiwiQ29kZXNhbmRib3giLCJEcmliYmJsZSIsIkZhY2Vib29rIiwiRmlnbWEiLCJGcmFtZXIiLCJHaXRodWIiLCJHaXRsYWIiLCJJbnN0YWdyYW0iLCJUcmVsbG8iLCJUd2l0Y2giLCJUd2l0dGVyIiwiWW91dHViZSIsIkxJTktFRElOIiwiZCIsImtleSIsIndpZHRoIiwiaGVpZ2h0IiwieCIsInkiLCJjeCIsImN5IiwiciIsIlNMQUNLIiwicngiLCJQT0NLRVQiLCJDT0RFUEVOIiwicG9pbnRzIiwieDEiLCJ4MiIsInkxIiwieTIiLCJDSFJPTUlVTSIsIkxpbmtlZGluIiwiU2xhY2siLCJQb2NrZXQiLCJDb2RlcGVuIiwiQ2hyb21pdW0iLCJDaHJvbWVJY29uIiwiTHVjaWRlQ2hyb21lIiwiQ2hyb21pdW1JY29uIiwiTHVjaWRlQ2hyb21pdW0iLCJDb2RlcGVuSWNvbiIsIkx1Y2lkZUNvZGVwZW4iLCJDb2Rlc2FuZGJveEljb24iLCJMdWNpZGVDb2Rlc2FuZGJveCIsIkRyaWJiYmxlSWNvbiIsIkx1Y2lkZURyaWJiYmxlIiwiRmFjZWJvb2tJY29uIiwiTHVjaWRlRmFjZWJvb2siLCJGaWdtYUljb24iLCJMdWNpZGVGaWdtYSIsIkZyYW1lckljb24iLCJMdWNpZGVGcmFtZXIiLCJHaXRodWJJY29uIiwiTHVjaWRlR2l0aHViIiwiR2l0bGFiSWNvbiIsIkx1Y2lkZUdpdGxhYiIsIkluc3RhZ3JhbUljb24iLCJMdWNpZGVJbnN0YWdyYW0iLCJMaW5rZWRpbkljb24iLCJMdWNpZGVMaW5rZWRpbiIsIlBvY2tldEljb24iLCJMdWNpZGVQb2NrZXQiLCJTbGFja0ljb24iLCJMdWNpZGVTbGFjayIsIlRyZWxsb0ljb24iLCJMdWNpZGVUcmVsbG8iLCJUd2l0Y2hJY29uIiwiTHVjaWRlVHdpdGNoIiwiVHdpdHRlckljb24iLCJMdWNpZGVUd2l0dGVyIiwiWW91dHViZUljb24iLCJMdWNpZGVZb3V0dWJlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbImx1Y2lkZS1yZWFjdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbHVjaWRlLXJlYWN0IDEueCByZW1vdmVkIGJyYW5kIGxvZ29zIChsdWNpZGUtaWNvbnMvbHVjaWRlIzY3MDogXCJ1c2UgU2ltcGxlIEljb25zXCIpLCB5ZXRcbi8vIGBpbXBvcnQgeyBJbnN0YWdyYW0gfSBmcm9tIFwibHVjaWRlLXJlYWN0XCJgIGlzIHdoYXQgbW9zdCBjb2RlLCBhbmQgZXZlcnkgbW9kZWwsIHN0aWxsIHdyaXRlcy5cbi8vIFZpdGUgYW5kIHRzY29uZmlnIGFsaWFzIFwibHVjaWRlLXJlYWN0XCIgaGVyZTogZXZlcnl0aGluZyBmcm9tIHRoZSByZWFsIHBhY2thZ2UsIHBsdXMgdGhlIHJlbW92ZWRcbi8vIG5hbWVzIGJhY2tlZCBieSBTaW1wbGUgSWNvbnMsIG9yIGx1Y2lkZSdzIG93biAwLnggZ2x5cGggKElTQykgd2hlcmUgU2ltcGxlIEljb25zIGhhcyBubyBtYXJrLlxuLy8gTmV3IGNvZGUgc2hvdWxkIGltcG9ydCB0aGUgU2kqIGNvbXBvbmVudHMgZnJvbSBcIkBpY29ucy1wYWNrL3JlYWN0LXNpbXBsZS1pY29uc1wiIGRpcmVjdGx5LlxuLyogb3hsaW50LWRpc2FibGUgcmVhY3Qvb25seS1leHBvcnQtY29tcG9uZW50cyAtLSBldmVyeSBleHBvcnQgaGVyZSBpcyBhbiBpY29uIGNvbXBvbmVudCAqL1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgdHlwZSBDb21wb25lbnRQcm9wc1dpdGhvdXRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZUx1Y2lkZUljb24sIHR5cGUgTHVjaWRlUHJvcHMgfSBmcm9tIFwibHVjaWRlLXJlYWN0LXVwc3RyZWFtXCI7XG5pbXBvcnQge1xuICBTaUNvZGVzYW5kYm94LFxuICBTaURyaWJiYmxlLFxuICBTaUZhY2Vib29rLFxuICBTaUZpZ21hLFxuICBTaUZyYW1lcixcbiAgU2lHaXRodWIsXG4gIFNpR2l0bGFiLFxuICBTaUdvb2dsZWNocm9tZSxcbiAgU2lJbnN0YWdyYW0sXG4gIFNpVHJlbGxvLFxuICBTaVR3aXRjaCxcbiAgU2lYLFxuICBTaVlvdXR1YmUsXG4gIHR5cGUgSWNvblR5cGUsXG59IGZyb20gXCJAaWNvbnMtcGFjay9yZWFjdC1zaW1wbGUtaWNvbnNcIjtcblxuZXhwb3J0ICogZnJvbSBcImx1Y2lkZS1yZWFjdC11cHN0cmVhbVwiO1xuXG50eXBlIEljb25Ob2RlID0gUGFyYW1ldGVyczx0eXBlb2YgY3JlYXRlTHVjaWRlSWNvbj5bMV07XG5cbmZ1bmN0aW9uIGZyb21TaW1wbGVJY29ucyhuYW1lOiBzdHJpbmcsIFNpOiBJY29uVHlwZSkge1xuICBjb25zdCBCcmFuZCA9IGZvcndhcmRSZWY8U1ZHU1ZHRWxlbWVudCwgTHVjaWRlUHJvcHM+KGZ1bmN0aW9uIEJyYW5kKHByb3BzLCByZWYpIHtcbiAgICAvLyBTaW1wbGUgSWNvbnMgbWFya3MgYXJlIGZpbGxlZCBzaGFwZXM6IGx1Y2lkZSdzIHN0cm9rZSBwcm9wcyBtZWFuIG5vdGhpbmcgb24gdGhlbS5cbiAgICBjb25zdCB7IHNpemUgPSAyNCwgY29sb3IgPSBcImN1cnJlbnRDb2xvclwiLCBzdHJva2VXaWR0aCwgYWJzb2x1dGVTdHJva2VXaWR0aCwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gICAgdm9pZCBzdHJva2VXaWR0aDtcbiAgICB2b2lkIGFic29sdXRlU3Ryb2tlV2lkdGg7XG4gICAgcmV0dXJuIDxTaSByZWY9e3JlZn0gc2l6ZT17c2l6ZX0gY29sb3I9e2NvbG9yfSB7Li4uKHJlc3QgYXMgQ29tcG9uZW50UHJvcHNXaXRob3V0UmVmPEljb25UeXBlPil9IC8+O1xuICB9KTtcbiAgQnJhbmQuZGlzcGxheU5hbWUgPSBuYW1lO1xuICByZXR1cm4gQnJhbmQ7XG59XG5cbmV4cG9ydCBjb25zdCBDaHJvbWUgPSBmcm9tU2ltcGxlSWNvbnMoXCJDaHJvbWVcIiwgU2lHb29nbGVjaHJvbWUpO1xuZXhwb3J0IGNvbnN0IENvZGVzYW5kYm94ID0gZnJvbVNpbXBsZUljb25zKFwiQ29kZXNhbmRib3hcIiwgU2lDb2Rlc2FuZGJveCk7XG5leHBvcnQgY29uc3QgRHJpYmJibGUgPSBmcm9tU2ltcGxlSWNvbnMoXCJEcmliYmJsZVwiLCBTaURyaWJiYmxlKTtcbmV4cG9ydCBjb25zdCBGYWNlYm9vayA9IGZyb21TaW1wbGVJY29ucyhcIkZhY2Vib29rXCIsIFNpRmFjZWJvb2spO1xuZXhwb3J0IGNvbnN0IEZpZ21hID0gZnJvbVNpbXBsZUljb25zKFwiRmlnbWFcIiwgU2lGaWdtYSk7XG5leHBvcnQgY29uc3QgRnJhbWVyID0gZnJvbVNpbXBsZUljb25zKFwiRnJhbWVyXCIsIFNpRnJhbWVyKTtcbmV4cG9ydCBjb25zdCBHaXRodWIgPSBmcm9tU2ltcGxlSWNvbnMoXCJHaXRodWJcIiwgU2lHaXRodWIpO1xuZXhwb3J0IGNvbnN0IEdpdGxhYiA9IGZyb21TaW1wbGVJY29ucyhcIkdpdGxhYlwiLCBTaUdpdGxhYik7XG5leHBvcnQgY29uc3QgSW5zdGFncmFtID0gZnJvbVNpbXBsZUljb25zKFwiSW5zdGFncmFtXCIsIFNpSW5zdGFncmFtKTtcbmV4cG9ydCBjb25zdCBUcmVsbG8gPSBmcm9tU2ltcGxlSWNvbnMoXCJUcmVsbG9cIiwgU2lUcmVsbG8pO1xuZXhwb3J0IGNvbnN0IFR3aXRjaCA9IGZyb21TaW1wbGVJY29ucyhcIlR3aXRjaFwiLCBTaVR3aXRjaCk7XG5leHBvcnQgY29uc3QgVHdpdHRlciA9IGZyb21TaW1wbGVJY29ucyhcIlR3aXR0ZXJcIiwgU2lYKTsgLy8gdGhlIG1hcmsgaXMgWCBub3dcbmV4cG9ydCBjb25zdCBZb3V0dWJlID0gZnJvbVNpbXBsZUljb25zKFwiWW91dHViZVwiLCBTaVlvdXR1YmUpO1xuXG4vLyBTaW1wbGUgSWNvbnMgY2FycmllcyBubyBtYXJrIGZvciB0aGVzZSAoYnJhbmQtb3duZXIgcmVxdWVzdHMpOiBsdWNpZGUgMC41NzcgZ2x5cGhzLCBJU0MuXG5jb25zdCBMSU5LRURJTjogSWNvbk5vZGUgPSBbXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNiA4YTYgNiAwIDAgMSA2IDZ2N2gtNHYtN2EyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2N2gtNHYtN2E2IDYgMCAwIDEgNi02elwiLCBrZXk6IFwiYzJqcTlmXCIgfV0sXG4gIFtcInJlY3RcIiwgeyB3aWR0aDogXCI0XCIsIGhlaWdodDogXCIxMlwiLCB4OiBcIjJcIiwgeTogXCI5XCIsIGtleTogXCJtazNvbjVcIiB9XSxcbiAgW1wiY2lyY2xlXCIsIHsgY3g6IFwiNFwiLCBjeTogXCI0XCIsIHI6IFwiMlwiLCBrZXk6IFwiYnQ1cmE4XCIgfV0sXG5dO1xuY29uc3QgU0xBQ0s6IEljb25Ob2RlID0gW1xuICBbXCJyZWN0XCIsIHsgd2lkdGg6IFwiM1wiLCBoZWlnaHQ6IFwiOFwiLCB4OiBcIjEzXCIsIHk6IFwiMlwiLCByeDogXCIxLjVcIiwga2V5OiBcImRpcXo4MFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMTkgOC41VjEwaDEuNUExLjUgMS41IDAgMSAwIDE5IDguNVwiLCBrZXk6IFwiMTgzaXdnXCIgfV0sXG4gIFtcInJlY3RcIiwgeyB3aWR0aDogXCIzXCIsIGhlaWdodDogXCI4XCIsIHg6IFwiOFwiLCB5OiBcIjE0XCIsIHJ4OiBcIjEuNVwiLCBrZXk6IFwiaHFnN3IxXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk01IDE1LjVWMTRIMy41QTEuNSAxLjUgMCAxIDAgNSAxNS41XCIsIGtleTogXCI3Nmc3MXdcIiB9XSxcbiAgW1wicmVjdFwiLCB7IHdpZHRoOiBcIjhcIiwgaGVpZ2h0OiBcIjNcIiwgeDogXCIxNFwiLCB5OiBcIjEzXCIsIHJ4OiBcIjEuNVwiLCBrZXk6IFwiMWttejBhXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNS41IDE5SDE0djEuNWExLjUgMS41IDAgMSAwIDEuNS0xLjVcIiwga2V5OiBcImpjNHN6MFwiIH1dLFxuICBbXCJyZWN0XCIsIHsgd2lkdGg6IFwiOFwiLCBoZWlnaHQ6IFwiM1wiLCB4OiBcIjJcIiwgeTogXCI4XCIsIHJ4OiBcIjEuNVwiLCBrZXk6IFwiMW9tdmw0XCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk04LjUgNUgxMFYzLjVBMS41IDEuNSAwIDEgMCA4LjUgNVwiLCBrZXk6IFwiMTZmM2NsXCIgfV0sXG5dO1xuY29uc3QgUE9DS0VUOiBJY29uTm9kZSA9IFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTIwIDNhMiAyIDAgMCAxIDIgMnY2YTEgMSAwIDAgMS0yMCAwVjVhMiAyIDAgMCAxIDItMnpcIiwga2V5OiBcIjF1b2Rxd1wiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJtOCAxMCA0IDQgNC00XCIsIGtleTogXCIxbXhkNXFcIiB9XSxcbl07XG5jb25zdCBDT0RFUEVOOiBJY29uTm9kZSA9IFtcbiAgW1wicG9seWdvblwiLCB7IHBvaW50czogXCIxMiAyIDIyIDguNSAyMiAxNS41IDEyIDIyIDIgMTUuNSAyIDguNSAxMiAyXCIsIGtleTogXCJzcnpiMzdcIiB9XSxcbiAgW1wibGluZVwiLCB7IHgxOiBcIjEyXCIsIHgyOiBcIjEyXCIsIHkxOiBcIjIyXCIsIHkyOiBcIjE1LjVcIiwga2V5OiBcIjF0NzNmMlwiIH1dLFxuICBbXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIyMiA4LjUgMTIgMTUuNSAyIDguNVwiLCBrZXk6IFwiYWpseGFlXCIgfV0sXG4gIFtcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjIgMTUuNSAxMiA4LjUgMjIgMTUuNVwiLCBrZXk6IFwic3VzcnVpXCIgfV0sXG4gIFtcImxpbmVcIiwgeyB4MTogXCIxMlwiLCB4MjogXCIxMlwiLCB5MTogXCIyXCIsIHkyOiBcIjguNVwiLCBrZXk6IFwiMmNsZGdhXCIgfV0sXG5dO1xuY29uc3QgQ0hST01JVU06IEljb25Ob2RlID0gW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMTAuODggMjEuOTQgMTUuNDYgMTRcIiwga2V5OiBcInhrdmU2dFwiIH1dLFxuICBbXCJwYXRoXCIsIHsgZDogXCJNMjEuMTcgOEgxMlwiLCBrZXk6IFwiMTlkY2RuXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0zLjk1IDYuMDYgOC41NCAxNFwiLCBrZXk6IFwiZzhqejltXCIgfV0sXG4gIFtcImNpcmNsZVwiLCB7IGN4OiBcIjEyXCIsIGN5OiBcIjEyXCIsIHI6IFwiMTBcIiwga2V5OiBcIjFtZ2xheVwiIH1dLFxuICBbXCJjaXJjbGVcIiwgeyBjeDogXCIxMlwiLCBjeTogXCIxMlwiLCByOiBcIjRcIiwga2V5OiBcIjRleGlwMlwiIH1dLFxuXTtcbmV4cG9ydCBjb25zdCBMaW5rZWRpbiA9IGNyZWF0ZUx1Y2lkZUljb24oXCJsaW5rZWRpblwiLCBMSU5LRURJTik7XG5leHBvcnQgY29uc3QgU2xhY2sgPSBjcmVhdGVMdWNpZGVJY29uKFwic2xhY2tcIiwgU0xBQ0spO1xuZXhwb3J0IGNvbnN0IFBvY2tldCA9IGNyZWF0ZUx1Y2lkZUljb24oXCJwb2NrZXRcIiwgUE9DS0VUKTtcbmV4cG9ydCBjb25zdCBDb2RlcGVuID0gY3JlYXRlTHVjaWRlSWNvbihcImNvZGVwZW5cIiwgQ09ERVBFTik7XG5leHBvcnQgY29uc3QgQ2hyb21pdW0gPSBjcmVhdGVMdWNpZGVJY29uKFwiY2hyb21pdW1cIiwgQ0hST01JVU0pO1xuXG4vLyBsdWNpZGUgZXhwb3NlcyBldmVyeSBpY29uIHVuZGVyIHRocmVlIG5hbWVzOyBrZWVwIGFsbCB0aHJlZSBmb3IgdGhlIHJlc3RvcmVkIG9uZXMuXG5leHBvcnQge1xuICBDaHJvbWUgYXMgQ2hyb21lSWNvbiwgQ2hyb21lIGFzIEx1Y2lkZUNocm9tZSxcbiAgQ2hyb21pdW0gYXMgQ2hyb21pdW1JY29uLCBDaHJvbWl1bSBhcyBMdWNpZGVDaHJvbWl1bSxcbiAgQ29kZXBlbiBhcyBDb2RlcGVuSWNvbiwgQ29kZXBlbiBhcyBMdWNpZGVDb2RlcGVuLFxuICBDb2Rlc2FuZGJveCBhcyBDb2Rlc2FuZGJveEljb24sIENvZGVzYW5kYm94IGFzIEx1Y2lkZUNvZGVzYW5kYm94LFxuICBEcmliYmJsZSBhcyBEcmliYmJsZUljb24sIERyaWJiYmxlIGFzIEx1Y2lkZURyaWJiYmxlLFxuICBGYWNlYm9vayBhcyBGYWNlYm9va0ljb24sIEZhY2Vib29rIGFzIEx1Y2lkZUZhY2Vib29rLFxuICBGaWdtYSBhcyBGaWdtYUljb24sIEZpZ21hIGFzIEx1Y2lkZUZpZ21hLFxuICBGcmFtZXIgYXMgRnJhbWVySWNvbiwgRnJhbWVyIGFzIEx1Y2lkZUZyYW1lcixcbiAgR2l0aHViIGFzIEdpdGh1Ykljb24sIEdpdGh1YiBhcyBMdWNpZGVHaXRodWIsXG4gIEdpdGxhYiBhcyBHaXRsYWJJY29uLCBHaXRsYWIgYXMgTHVjaWRlR2l0bGFiLFxuICBJbnN0YWdyYW0gYXMgSW5zdGFncmFtSWNvbiwgSW5zdGFncmFtIGFzIEx1Y2lkZUluc3RhZ3JhbSxcbiAgTGlua2VkaW4gYXMgTGlua2VkaW5JY29uLCBMaW5rZWRpbiBhcyBMdWNpZGVMaW5rZWRpbixcbiAgUG9ja2V0IGFzIFBvY2tldEljb24sIFBvY2tldCBhcyBMdWNpZGVQb2NrZXQsXG4gIFNsYWNrIGFzIFNsYWNrSWNvbiwgU2xhY2sgYXMgTHVjaWRlU2xhY2ssXG4gIFRyZWxsbyBhcyBUcmVsbG9JY29uLCBUcmVsbG8gYXMgTHVjaWRlVHJlbGxvLFxuICBUd2l0Y2ggYXMgVHdpdGNoSWNvbiwgVHdpdGNoIGFzIEx1Y2lkZVR3aXRjaCxcbiAgVHdpdHRlciBhcyBUd2l0dGVySWNvbiwgVHdpdHRlciBhcyBMdWNpZGVUd2l0dGVyLFxuICBZb3V0dWJlIGFzIFlvdXR1YmVJY29uLCBZb3V0dWJlIGFzIEx1Y2lkZVlvdXR1YmUsXG59O1xuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9saWIvbHVjaWRlLXJlYWN0LnRzeCJ9