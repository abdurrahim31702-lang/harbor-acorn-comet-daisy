import { a as kindLabel } from "./content-jqAM3_iJ.mjs";
import { s as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, o as ArrowLeft } from "../_libs/lucide-react.mjs";
import { d as openWhatsapp, f as playClick, n as MagneticButton, r as Nav, t as Footer } from "./Footer-BTEnmgdU.mjs";
import { n as Route } from "./router-BFsiwro4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-BiOcLjSk.js
var import_jsx_runtime = require_jsx_runtime();
function CaseStudy() {
	const { project, next } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grain",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { home: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			id: "main",
			className: "relative z-10 px-5 pt-28 pb-24 md:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-5xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						hash: "work",
						onClick: () => playClick(),
						className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
							className: "size-4",
							strokeWidth: 1.5
						}), "All work"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "caps mt-10 text-accent",
						children: [
							kindLabel[project.kind],
							" · ",
							project.category
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display mt-3 text-5xl leading-none md:text-7xl",
						children: project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lg leading-relaxed text-muted",
						children: project.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 overflow-hidden rounded-3xl bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.cover,
							alt: project.coverAlt,
							className: "aspect-video h-auto w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 grid gap-12 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "caps text-subtle",
								children: "Challenge"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-fg/90",
								children: project.challenge
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "caps text-subtle",
								children: "Design direction"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-fg/90",
								children: project.direction
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "caps text-subtle",
								children: "Experience"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-fg/90",
								children: project.experience
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "caps text-subtle",
								children: "Goal"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-fg/90",
								children: project.goal
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							onClick: () => openWhatsapp(`About: ${project.name}`),
							children: "Start a project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/work/$slug",
							params: { slug: next.slug },
							onClick: () => playClick(),
							className: "inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-fg",
							children: [
								"Next — ",
								next.name,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									strokeWidth: 1.5
								})
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { home: false })
	] });
}
//#endregion
export { CaseStudy as component };
