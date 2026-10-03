import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, i as MathUtils, n as useFrame, r as Fog, s as require_jsx_runtime, t as Canvas } from "../_libs/@react-three/fiber+[...].mjs";
import { a as SCENE, u as live } from "./Footer-BTEnmgdU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CanvasApp-BTPvOxdX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var POSES = [
	{
		radius: 1.55,
		spread: 1,
		y: .05,
		scale: 1,
		ring: 1
	},
	{
		radius: 2.15,
		spread: 1.45,
		y: -.15,
		scale: .9,
		ring: 1.18
	},
	{
		radius: 1.35,
		spread: .75,
		y: .2,
		scale: 1.06,
		ring: .82
	},
	{
		radius: 2.35,
		spread: .55,
		y: .35,
		scale: .86,
		ring: 1.28
	},
	{
		radius: 1.05,
		spread: .5,
		y: .08,
		scale: .78,
		ring: .58
	},
	{
		radius: .72,
		spread: .28,
		y: 0,
		scale: .62,
		ring: .38
	}
];
function damp(current, target, lambda, dt) {
	return MathUtils.damp(current, target, lambda, dt);
}
function Sculpture({ quality }) {
	const root = (0, import_react.useRef)(null);
	const core = (0, import_react.useRef)(null);
	const ringA = (0, import_react.useRef)(null);
	const ringB = (0, import_react.useRef)(null);
	const slabs = (0, import_react.useRef)(null);
	const panels = (0, import_react.useRef)(null);
	const pose = (0, import_react.useRef)({ ...POSES[0] });
	const panelCount = quality === "high" ? 5 : 3;
	const high = quality === "high";
	useFrame((state, delta) => {
		const dt = Math.min(delta, .08);
		const t = state.clock.elapsedTime;
		const target = POSES[live.section] ?? POSES[0];
		const p = pose.current;
		p.radius = damp(p.radius, target.radius, 2.4, dt);
		p.spread = damp(p.spread, target.spread, 2.4, dt);
		p.y = damp(p.y, target.y, 2.2, dt);
		p.scale = damp(p.scale, target.scale, 2.2, dt);
		p.ring = damp(p.ring, target.ring, 2.2, dt);
		const g = root.current;
		if (g) {
			const lookX = live.reduced ? 0 : live.pointerX;
			const lookY = live.reduced ? 0 : live.pointerY;
			g.rotation.y = damp(g.rotation.y, lookX * .38 + t * .045, 3.2, dt);
			g.rotation.x = damp(g.rotation.x, lookY * .18, 3.2, dt);
			const wantX = live.mobile ? 0 : .92;
			g.position.x = damp(g.position.x, wantX, 2, dt);
			const breathe = live.reduced ? 0 : Math.sin(t * .55) * .045;
			g.position.y = damp(g.position.y, p.y + breathe, 2.4, dt);
			const s = damp(g.scale.x, p.scale, 2.2, dt);
			g.scale.setScalar(s);
		}
		if (core.current) core.current.rotation.y = t * .18;
		if (ringA.current) {
			ringA.current.rotation.x = t * .16;
			ringA.current.scale.setScalar(p.ring);
		}
		if (ringB.current) {
			ringB.current.rotation.z = t * -.11;
			ringB.current.rotation.y = t * .08;
			ringB.current.scale.setScalar(p.ring * .86);
		}
		if (slabs.current) slabs.current.rotation.y = Math.sin(t * .12) * .12;
		if (panels.current) {
			const children = panels.current.children;
			const n = children.length || 1;
			for (let i = 0; i < children.length; i++) {
				const child = children[i];
				const a = t * .22 + i / n * Math.PI * 2;
				child.position.x = Math.cos(a) * p.radius;
				child.position.z = Math.sin(a) * p.radius * .62;
				child.position.y = Math.sin(t * .5 + i) * .18 * p.spread;
				child.rotation.y = a + Math.PI / 2;
				child.rotation.x = Math.sin(t * .3 + i) * .12;
			}
		}
		const cam = state.camera;
		const camZ = 4.6 + live.progress * 1.4;
		cam.position.z = damp(cam.position.z, camZ, 1.8, dt);
		cam.position.y = damp(cam.position.y, live.progress * .35, 1.8, dt);
		cam.lookAt(live.mobile ? 0 : .55, .05, 0);
	});
	const panelIndices = (0, import_react.useMemo)(() => Array.from({ length: panelCount }, (_, i) => i), [panelCount]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: root,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: core,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("icosahedronGeometry", { args: [.55, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: SCENE.core,
					emissive: SCENE.emissive,
					emissiveIntensity: .28,
					metalness: .45,
					roughness: .22
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				ref: slabs,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							0,
							0
						],
						rotation: [
							0,
							.18,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							1.55,
							2.15,
							.045
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: SCENE.glass,
							metalness: .05,
							roughness: .1,
							transmission: high ? .86 : 0,
							opacity: high ? 1 : .2,
							transparent: !high,
							thickness: .5,
							ior: 1.42,
							clearcoat: 1,
							clearcoatRoughness: .12,
							envMapIntensity: .6
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							-.55,
							.1,
							.35
						],
						rotation: [
							.08,
							-.55,
							.04
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							1.15,
							1.7,
							.04
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: SCENE.glass,
							metalness: .05,
							roughness: .12,
							transmission: high ? .78 : 0,
							opacity: high ? 1 : .16,
							transparent: !high,
							thickness: .4,
							ior: 1.4
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.62,
							-.12,
							.28
						],
						rotation: [
							-.06,
							.7,
							-.05
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.95,
							1.45,
							.038
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: SCENE.metal,
							metalness: .72,
							roughness: .28,
							transparent: true,
							opacity: .55
						})]
					})
				]
			}),
			high ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: ringA,
				rotation: [
					Math.PI / 2.6,
					.2,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					1.35,
					.012,
					10,
					96
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: SCENE.metal,
					metalness: .85,
					roughness: .22,
					emissive: SCENE.emissive,
					emissiveIntensity: .12
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: ringB,
				rotation: [
					.4,
					Math.PI / 3,
					.3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					1.7,
					.008,
					8,
					80
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: SCENE.metal,
					metalness: .8,
					roughness: .3,
					transparent: true,
					opacity: .7
				})]
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: panels,
				children: panelIndices.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.42, .58] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: SCENE.glass,
					metalness: .3,
					roughness: .18,
					transparent: true,
					opacity: .22,
					side: 2,
					emissive: SCENE.emissive,
					emissiveIntensity: .08
				})] }, i))
			})
		]
	});
}
function Lights() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .28,
			color: SCENE.keyLight
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				4.2,
				5.5,
				3.2
			],
			intensity: 1.35,
			color: SCENE.keyLight
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				-3.2,
				1.8,
				2.4
			],
			intensity: 9,
			distance: 14,
			color: SCENE.fillLight
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				2.4,
				-1.2,
				3
			],
			intensity: 4.5,
			distance: 11,
			color: SCENE.rimLight
		})
	] });
}
function CanvasApp({ quality }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Canvas, {
		className: "!absolute inset-0",
		dpr: quality === "high" ? [1, 1.5] : [1, 1],
		gl: {
			antialias: quality === "high",
			alpha: false,
			powerPreference: quality === "high" ? "high-performance" : "low-power",
			stencil: false,
			depth: true
		},
		camera: {
			position: [
				0,
				.1,
				4.8
			],
			fov: 32,
			near: .1,
			far: 40
		},
		onCreated: ({ gl, scene }) => {
			gl.setClearColor(SCENE.background, 1);
			gl.toneMapping = 4;
			gl.toneMappingExposure = 1.05;
			scene.fog = new Fog(SCENE.fog, 6.5, 16);
		},
		style: { pointerEvents: "none" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lights, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sculpture, { quality })]
	});
}
//#endregion
export { CanvasApp };
