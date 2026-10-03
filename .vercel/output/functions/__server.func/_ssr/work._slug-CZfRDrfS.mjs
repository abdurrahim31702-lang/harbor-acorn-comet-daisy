import { s as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CZfRDrfS.js
var import_jsx_runtime = require_jsx_runtime();
function WorkNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-svh flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "display text-5xl",
			children: "That project isn't here."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/",
			hash: "work",
			className: "text-sm text-muted hover:text-fg",
			children: "Back to work"
		})]
	});
}
//#endregion
export { WorkNotFound as notFoundComponent };
