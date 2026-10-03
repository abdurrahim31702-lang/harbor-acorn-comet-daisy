import { i as __toESM } from "../_runtime.mjs";
import { a as kindLabel, c as processSteps, d as websiteTypes, l as projects, n as budgetOptions, r as featureOptions, s as pricing, u as services } from "./content-jqAM3_iJ.mjs";
import { c as require_react, s as require_jsx_runtime } from "../_libs/@react-three/fiber+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowUpRight, s as ArrowDownRight } from "../_libs/lucide-react.mjs";
import { c as buildWhatsappUrl, d as openWhatsapp, f as playClick, h as useStudio, i as Reveal, l as cn, m as useSectionSpy, n as MagneticButton, o as SectionLabel, p as scrollToId, r as Nav, s as bindLiveInput, t as Footer, u as live } from "./Footer-BTEnmgdU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-9cXAZCU4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** CSS stand-in when WebGL is unavailable or motion is reduced. */
function FallbackField() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-[-20%] right-[-10%] h-[70vh] w-[70vh] rounded-full bg-accent/10 blur-[120px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-[-10%] left-[-15%] h-[50vh] w-[50vh] rounded-full bg-fg/5 blur-[100px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-[18%] right-[8%] hidden h-[46vh] w-[34vh] md:block",
				style: { perspective: "1200px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 rounded-sm border border-line bg-fg/4",
						style: { transform: "rotateY(-18deg) rotateX(8deg)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-6 rounded-sm border border-accent/30 bg-accent/5",
						style: { transform: "rotateY(12deg) rotateX(-6deg) translateZ(40px)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-x-10 inset-y-16 rounded-sm border border-line-strong bg-fg/6",
						style: { transform: "rotateY(-8deg) translateZ(80px)" }
					})
				]
			})
		]
	});
}
function hasWebGL() {
	try {
		const canvas = document.createElement("canvas");
		return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
	} catch {
		return false;
	}
}
function pickQuality() {
	const mobile = window.matchMedia("(max-width: 768px)").matches;
	const cores = navigator.hardwareConcurrency ?? 4;
	const conn = navigator.connection;
	if (mobile || cores <= 4 || conn?.saveData) return "low";
	return "high";
}
function SceneCanvas() {
	const [mode, setMode] = (0, import_react.useState)("pending");
	const [quality, setQuality] = (0, import_react.useState)("low");
	const [CanvasApp, setCanvasApp] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const unbind = bindLiveInput();
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !hasWebGL()) {
			setMode("fallback");
			return () => unbind();
		}
		setQuality(pickQuality());
		let cancelled = false;
		import("./CanvasApp-BTPvOxdX.mjs").then((mod) => {
			if (cancelled) return;
			setCanvasApp(() => mod.CanvasApp);
			setMode("webgl");
		}).catch(() => {
			if (!cancelled) setMode("fallback");
		});
		return () => {
			cancelled = true;
			unbind();
		};
	}, []);
	if (mode === "fallback") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FallbackField, {});
	if (mode === "pending" || !CanvasApp) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0 bg-bg",
		"aria-hidden": "true"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-0",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanvasApp, { quality })
	});
}
function Loader() {
	const ready = useStudio((s) => s.ready);
	const setReady = useStudio((s) => s.setReady);
	(0, import_react.useEffect)(() => {
		const delay = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 80 : 1200;
		const t = window.setTimeout(() => setReady(true), delay);
		return () => window.clearTimeout(t);
	}, [setReady]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("z-loader fixed inset-0 flex flex-col items-center justify-center bg-bg transition-opacity duration-500 ease-out", ready ? "pointer-events-none opacity-0" : "opacity-100"),
		"aria-hidden": ready,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "display text-5xl tracking-tight md:text-6xl",
			children: "AIRO"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 h-px w-28 overflow-hidden bg-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "loader-line h-full w-full bg-accent" })
		})]
	});
}
function Hero() {
	const ready = useStudio((s) => s.ready);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "relative flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-10 mx-auto w-full max-w-6xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: ready ? "" : "opacity-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-line caps text-accent",
						children: "AIRO Studio"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero-title mt-5 max-w-5xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-line block",
							children: "Digital experiences,"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero-line mt-1 block italic text-fg/80",
							children: "beyond the ordinary."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-line mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg",
						children: "We design and build digital experiences that turn ideas into something people can actually use — and remember."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-line mt-10 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							onClick: () => scrollToId("start"),
							children: "Start a project"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => scrollToId("work"),
							className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-sm text-fg hover:border-line-strong",
							children: ["See the work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
								className: "size-4",
								strokeWidth: 1.5
							})]
						})]
					})
				]
			})
		})
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "relative z-10 px-5 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index: "01",
				children: "Work"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display max-w-xl text-4xl leading-tight md:text-6xl",
					children: "Selected work, and a few things we made to think with."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted",
					children: "One live client project. The rest are clearly marked concepts, experiments, and prototypes — not dressed up as case studies they are not."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "work-track mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-7",
				children: projects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					className: "snap-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work/$slug",
						params: { slug: project.slug },
						onClick: () => playClick(),
						className: "group relative block w-[min(84vw,28rem)] shrink-0 md:w-[32rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-video overflow-hidden rounded-xl bg-surface",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: project.cover,
										alt: project.coverAlt,
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
										loading: i === 0 ? "eager" : "lazy"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "work-scrim absolute inset-0" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "caps absolute top-4 left-4 rounded-full border border-line bg-bg/55 px-3 py-1 text-fg backdrop-blur-md",
										children: kindLabel[project.kind]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "caps text-subtle",
									children: project.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "display mt-1 text-3xl",
									children: project.name
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "mt-2 size-5 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
									strokeWidth: 1.4
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-sm leading-relaxed text-muted",
								children: project.summary
							})
						]
					})
				}, project.slug))
			})]
		})
	});
}
function Services() {
	const serviceId = useStudio((s) => s.serviceId);
	const setServiceId = useStudio((s) => s.setServiceId);
	const active = services.find((s) => s.id === serviceId) ?? services[0];
	function select(id, index) {
		setServiceId(id);
		live.service = index;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative z-10 px-5 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index: "02",
				children: "Services"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display max-w-2xl text-4xl leading-tight md:text-6xl",
				children: "What we make — and how far we can take it."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-line border-y border-line",
					children: services.map((service, i) => {
						const on = service.id === serviceId;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onMouseEnter: () => select(service.id, i),
							onFocus: () => select(service.id, i),
							onClick: () => select(service.id, i),
							className: cn("flex w-full min-h-14 items-baseline justify-between gap-4 py-4 text-left transition-colors duration-200", on ? "text-fg" : "text-muted hover:text-fg"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display text-2xl md:text-3xl",
								children: service.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[0.65rem] tabular-nums text-subtle",
								children: String(i + 1).padStart(2, "0")
							})]
						}) }, service.id);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "lg:sticky lg:top-28 lg:self-start",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-panel rounded-3xl p-7 md:p-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "caps text-accent",
								children: active.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-lg leading-relaxed text-fg md:text-xl",
								children: active.brief
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted md:text-base",
								children: active.detail
							})
						]
					})
				})]
			})]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-10 px-5 py-24 md:px-10 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index: "03",
				children: "Pricing"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display max-w-xl text-4xl leading-tight md:text-5xl",
					children: "Starting ranges. Honest, so you can plan."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm leading-relaxed text-muted",
					children: "Final pricing depends on scope, features, complexity and project requirements. Treat these as a guide — then talk to us."
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-4 sm:grid-cols-2",
				children: pricing.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 70,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col justify-between rounded-3xl border border-line bg-fg/3 p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "caps text-subtle",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display mt-6 text-3xl tabular-nums md:text-4xl",
								children: item.range
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed text-muted",
								children: item.note
							})
						]
					})
				}, item.id))
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative z-10 px-5 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "04",
					children: "Process"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display max-w-2xl text-4xl leading-tight md:text-6xl",
					children: "A clear path from idea to something people can use."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base",
					children: "No theatrical timelines. We move with care, show the work as it exists, and stay with it until it is ready for real people."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3",
				children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "bg-bg p-7 md:p-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: i * 50,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-xs tabular-nums text-accent",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display mt-4 text-3xl",
								children: step.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: step.text
							})
						]
					})
				}, step.n))
			})]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative z-10 px-5 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				index: "05",
				children: "About"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display max-w-3xl text-4xl leading-[1.05] md:text-6xl",
				children: "A small, dedicated studio obsessed with turning ideas into experiences people remember."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-base leading-relaxed text-muted md:text-lg",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We are not a floor of account managers, and we do not pretend to be a large agency. AIRO Studio is a compact team that designs, builds, tests, and ships — then goes back in to make it better." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The work is the proof. Curiosity, craft, and follow-through. We stay close to the details because that is where websites either feel considered or feel like a template." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We keep learning in public: new materials, new interaction, better performance, quieter type. Hungry, not theatrical." })
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4 border-t border-line pt-6",
						children: [
							["Dedication", "We finish. Then we refine."],
							["Craft", "Type, space, motion — only as much as it needs."],
							["Curiosity", "We experiment so client work can go further."],
							["Clarity", "If we don't know, we say so."]
						].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-5 border-b border-line pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-28 shrink-0 text-sm text-fg",
								children: title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted",
								children: body
							})]
						}, title))
					})
				})]
			})]
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-xl border border-line bg-fg/4 px-4 text-sm text-fg placeholder:text-subtle", "transition-[border-color,box-shadow] duration-150 ease-out", "hover:border-line-strong focus-visible:border-accent focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent)_28%,transparent)]", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-xl border border-line bg-fg/4 px-4 py-3 text-sm text-fg placeholder:text-subtle", "transition-[border-color,box-shadow] duration-150 ease-out", "hover:border-line-strong focus-visible:border-accent focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_color-mix(in_oklab,var(--color-accent)_28%,transparent)]", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("caps mb-2 block text-muted", className),
		...props
	});
}
function Chip({ active, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: cn("min-h-10 rounded-full border px-3.5 text-xs transition-colors duration-150", active ? "border-fg bg-fg text-bg" : "border-line text-muted hover:border-line-strong hover:text-fg"),
		children
	});
}
function Contact() {
	const [name, setName] = (0, import_react.useState)("");
	const [type, setType] = (0, import_react.useState)(websiteTypes[0]);
	const [budget, setBudget] = (0, import_react.useState)(budgetOptions[3]);
	const [features, setFeatures] = (0, import_react.useState)([]);
	const [description, setDescription] = (0, import_react.useState)("");
	const brief = (0, import_react.useMemo)(() => {
		return [
			name && `Project: ${name}`,
			`Type: ${type}`,
			`Budget: ${budget}`,
			features.length ? `Features: ${features.join(", ")}` : "",
			description && `Notes: ${description}`
		].filter(Boolean).join("\n");
	}, [
		name,
		type,
		budget,
		features,
		description
	]);
	function toggleFeature(f) {
		setFeatures((prev) => prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]);
	}
	function submit(e) {
		e.preventDefault();
		openWhatsapp(brief);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative z-10 px-5 py-24 md:px-10 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "06",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "display max-w-3xl text-4xl leading-[1.05] md:text-7xl",
					children: ["Have an idea?", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-2 block italic",
						children: "Let's build it."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg",
					children: "Tell us what you're imagining. We'll figure out what it takes to turn it into something real."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				id: "start",
				className: "mt-16 scroll-mt-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "glass-panel rounded-3xl p-6 md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-8 lg:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "project-name",
								children: "Business / project name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "project-name",
								name: "project",
								autoComplete: "organization",
								placeholder: "The thing you want to exist",
								value: name,
								onChange: (e) => setName(e.target.value)
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "caps mb-2 text-muted",
								children: "Website type"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: websiteTypes.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: type === opt,
									onClick: () => setType(opt),
									children: opt
								}, opt))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "caps mb-2 text-muted",
								children: "Approximate budget"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: budgetOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: budget === opt,
									onClick: () => setBudget(opt),
									children: opt
								}, opt))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "caps mb-2 text-muted",
								children: "Desired features"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap gap-2",
								children: featureOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									active: features.includes(opt),
									onClick: () => toggleFeature(opt),
									children: opt
								}, opt))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "notes",
									children: "Project description"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
									id: "notes",
									name: "description",
									placeholder: "What is it, who is it for, and what should it do?",
									value: description,
									onChange: (e) => setDescription(e.target.value)
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							type: "submit",
							children: "Start a project on WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: buildWhatsappUrl(),
							target: "_blank",
							rel: "noreferrer",
							className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
							children: "Or just say hello"
						})]
					})]
				}) })
			})]
		})
	});
}
var SECTIONS = [
	"home",
	"work",
	"services",
	"process",
	"about",
	"contact",
	"start"
];
function StudioHome() {
	useSectionSpy(SECTIONS);
	const menuOpen = useStudio((s) => s.menuOpen);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);
	(0, import_react.useEffect)(() => {
		if (window.location.hash) {
			const id = window.location.hash.slice(1);
			requestAnimationFrame(() => {
				document.getElementById(id)?.scrollIntoView();
			});
		}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grain",
			"aria-hidden": "true"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-veil pointer-events-none fixed inset-0 z-veil" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, { home: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, { home: true })
	] });
}
var SplitComponent = StudioHome;
//#endregion
export { SplitComponent as component };
