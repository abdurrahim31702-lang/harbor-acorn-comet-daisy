import { i as __toESM } from "../_runtime.mjs";
import { t as NAV } from "./content-jqAM3_iJ.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as VolumeX, r as Volume2, t as X } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-BTEnmgdU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Mutable rAF state — read from the WebGL loop, written from the DOM. */
var live = {
	pointerX: 0,
	pointerY: 0,
	progress: 0,
	section: 0,
	service: 0,
	mobile: false,
	reduced: false
};
var SECTION_INDEX = {
	home: 0,
	work: 1,
	services: 2,
	process: 3,
	about: 4,
	contact: 5,
	start: 5
};
function bindLiveInput() {
	const onPointer = (e) => {
		const w = window.innerWidth || 1;
		const h = window.innerHeight || 1;
		live.pointerX = e.clientX / w * 2 - 1;
		live.pointerY = e.clientY / h * 2 - 1;
	};
	const onResize = () => {
		live.mobile = window.matchMedia("(max-width: 768px)").matches;
		live.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	};
	onResize();
	window.addEventListener("pointermove", onPointer, { passive: true });
	window.addEventListener("resize", onResize, { passive: true });
	return () => {
		window.removeEventListener("pointermove", onPointer);
		window.removeEventListener("resize", onResize);
	};
}
var WHATSAPP_MESSAGE = "Hi AIRO Studio, I'd like to discuss a project.";
var SCENE = {
	background: "#08090b",
	fog: "#08090b",
	glass: "#d5dce0",
	metal: "#9aa3a8",
	core: "#c5d0d6",
	emissive: "#8aa4ad",
	keyLight: "#e8ece8",
	fillLight: "#8aa4ad",
	rimLight: "#cbbba8"
};
function digitsOnly(value) {
	return value.replace(/\D/g, "");
}
function resolveWhatsappNumber() {
	const fromEnv = typeof import.meta !== "undefined" ? void 0 : void 0;
	const digits = digitsOnly(fromEnv && fromEnv.trim() || "REPLACE_WITH_NUMBER");
	if (!digits || digits.toUpperCase().includes("REPLACE") || digits.length < 8) return null;
	return digits;
}
function buildWhatsappUrl(extra) {
	const number = resolveWhatsappNumber();
	const body = extra ? `${WHATSAPP_MESSAGE}\n\n${extra}` : WHATSAPP_MESSAGE;
	const text = encodeURIComponent(body);
	if (number) return `https://wa.me/${number}?text=${text}`;
	return `https://api.whatsapp.com/send?text=${text}`;
}
function openWhatsapp(extra) {
	const url = buildWhatsappUrl(extra);
	window.open(url, "_blank", "noopener,noreferrer");
}
var useStudio = create((set) => ({
	ready: false,
	soundOn: false,
	menuOpen: false,
	section: "home",
	serviceId: "design",
	setReady: (ready) => set({ ready }),
	setSoundOn: (soundOn) => set({ soundOn }),
	setMenuOpen: (menuOpen) => set({ menuOpen }),
	setSection: (section) => set({ section }),
	setServiceId: (serviceId) => set({ serviceId })
}));
function useSectionSpy(ids) {
	(0, import_react.useEffect)(() => {
		const els = ids.map((id) => document.getElementById(id)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (vis?.target.id) {
				useStudio.getState().setSection(vis.target.id);
				live.section = SECTION_INDEX[vis.target.id] ?? 0;
			}
		}, {
			threshold: [
				.18,
				.35,
				.55
			],
			rootMargin: "-18% 0px -38% 0px"
		});
		els.forEach((el) => io.observe(el));
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			live.progress = max > 0 ? window.scrollY / max : 0;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => {
			io.disconnect();
			window.removeEventListener("scroll", onScroll);
		};
	}, [ids]);
}
function scrollToId(id) {
	const el = document.getElementById(id);
	if (!el) return;
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	el.scrollIntoView({
		behavior: reduced ? "auto" : "smooth",
		block: "start"
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var ctx = null;
function getCtx() {
	const AC = window.AudioContext || window.webkitAudioContext;
	if (!AC) return null;
	ctx ??= new AC();
	return ctx;
}
/** Tiny UI tick. Silent unless the visitor has enabled sound. */
function playClick(kind = "tap") {
	if (!useStudio.getState().soundOn) return;
	const audio = getCtx();
	if (!audio) return;
	if (audio.state === "suspended") audio.resume();
	const now = audio.currentTime;
	const osc = audio.createOscillator();
	const gain = audio.createGain();
	osc.type = "sine";
	osc.frequency.value = kind === "open" ? 520 : 880;
	gain.gain.setValueAtTime(.028, now);
	gain.gain.exponentialRampToValueAtTime(1e-4, now + .07);
	osc.connect(gain);
	gain.connect(audio.destination);
	osc.start(now);
	osc.stop(now + .08);
}
async function unlockSound() {
	const audio = getCtx();
	if (audio && audio.state === "suspended") await audio.resume();
}
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-7", className),
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7 25.5L16 6.5l9 19",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12 16.8h8",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			className: "text-accent"
		})]
	});
}
function SectionLabel({ index, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex items-center gap-4 text-muted",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-xs tabular-nums",
				children: index
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-10 bg-line" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "caps",
				children
			})
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.classList.add("is-in");
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				el.classList.add("is-in");
				io.disconnect();
			}
		}, {
			threshold: .16,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const style = delay ? { transitionDelay: `${delay}ms` } : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		style,
		children
	});
}
function MagneticButton({ children, className, onClick, type = "button", disabled, href, ariaLabel }) {
	const ref = (0, import_react.useRef)(null);
	function onMove(e) {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const r = el.getBoundingClientRect();
		const x = e.clientX - r.left - r.width / 2;
		const y = e.clientY - r.top - r.height / 2;
		el.style.transform = `translate(${x * .18}px, ${y * .22}px)`;
	}
	function onLeave() {
		const el = ref.current;
		if (!el) return;
		el.style.transform = "translate(0, 0)";
	}
	const classes = cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg", "transition-transform duration-150 ease-out will-change-transform", "active:scale-[0.96] disabled:opacity-50", className);
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		ref,
		href,
		"aria-label": ariaLabel,
		className: classes,
		onPointerMove: onMove,
		onPointerLeave: onLeave,
		onClick: () => {
			playClick();
			onClick?.();
		},
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type,
		disabled,
		"aria-label": ariaLabel,
		className: classes,
		onPointerMove: onMove,
		onPointerLeave: onLeave,
		onClick: () => {
			playClick();
			onClick?.();
		},
		children
	});
}
function Nav({ home = true }) {
	const section = useStudio((s) => s.section);
	const menuOpen = useStudio((s) => s.menuOpen);
	const setMenuOpen = useStudio((s) => s.setMenuOpen);
	const soundOn = useStudio((s) => s.soundOn);
	const setSoundOn = useStudio((s) => s.setSoundOn);
	function go(id) {
		playClick();
		setMenuOpen(false);
		if (home) {
			scrollToId(id);
			return;
		}
		window.location.href = `/#${id}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "skip-link",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-auto glass-nav mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 pl-4 md:h-16 md:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-h-11 items-center gap-2.5 text-fg",
						onClick: () => {
							playClick();
							setMenuOpen(false);
						},
						"aria-label": "AIRO Studio home",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-6 text-fg" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-medium tracking-wide",
							children: ["AIRO", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-1.5 font-display text-sm italic text-muted",
								children: "Studio"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go(item.id),
							className: cn("caps min-h-11 text-subtle transition-colors duration-150 hover:text-fg", section === item.id && "text-fg"),
							children: item.label
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": soundOn,
								"aria-label": soundOn ? "Mute interface sounds" : "Enable interface sounds",
								className: "grid size-11 place-items-center rounded-full text-muted hover:text-fg",
								onClick: () => {
									const next = !soundOn;
									setSoundOn(next);
									if (next) unlockSound();
									playClick("open");
								},
								children: soundOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, {
									className: "size-4",
									strokeWidth: 1.6
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, {
									className: "size-4",
									strokeWidth: 1.6
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => go("start"),
								className: "hidden min-h-10 rounded-full bg-fg px-4 text-xs font-medium tracking-wide text-bg sm:inline-flex sm:items-center",
								children: "Start a project"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "caps grid min-h-11 min-w-11 place-items-center rounded-full text-fg lg:hidden",
								"aria-expanded": menuOpen,
								"aria-controls": "mobile-menu",
								onClick: () => {
									playClick("open");
									setMenuOpen(!menuOpen);
								},
								children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : "Menu"
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			id: "mobile-menu",
			className: cn("fixed inset-0 z-40 bg-bg/92 px-6 pt-24 backdrop-blur-xl transition-opacity duration-300 lg:hidden", menuOpen ? "opacity-100" : "pointer-events-none opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-2",
				"aria-label": "Mobile",
				children: [NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go(item.id),
					className: "display border-b border-line py-4 text-left text-4xl italic",
					children: item.label
				}, item.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => go("start"),
					className: "mt-6 min-h-12 rounded-full bg-fg text-sm font-medium text-bg",
					children: "Start a project"
				})]
			})
		})
	] });
}
function Footer({ home = true }) {
	function go(id) {
		playClick();
		if (home) {
			scrollToId(id);
			return;
		}
		window.location.href = `/#${id}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-10 border-t border-line px-5 py-10 md:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "display text-3xl",
					children: "AIRO Studio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xs text-sm text-muted",
					children: "Digital experiences, beyond the ordinary."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-wrap gap-x-6 gap-y-2",
					"aria-label": "Footer",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(item.id),
						className: "min-h-11 text-sm text-muted hover:text-fg",
						children: item.label
					}, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-subtle",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" AIRO Studio"
					]
				})
			]
		})
	});
}
//#endregion
export { SCENE as a, buildWhatsappUrl as c, openWhatsapp as d, playClick as f, useStudio as h, Reveal as i, cn as l, useSectionSpy as m, MagneticButton as n, SectionLabel as o, scrollToId as p, Nav as r, bindLiveInput as s, Footer as t, live as u };
