import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { live } from "@/lib/live-state";
import { SCENE } from "@/lib/studio-config";

type Quality = "high" | "low";

const POSES = [
  { radius: 1.45, spread: 1, y: 0.08, scale: 1.12, ring: 1 },
  { radius: 2.05, spread: 1.4, y: -0.1, scale: 0.95, ring: 1.16 },
  { radius: 1.25, spread: 0.75, y: 0.18, scale: 1.1, ring: 0.84 },
  { radius: 2.2, spread: 0.55, y: 0.32, scale: 0.9, ring: 1.24 },
  { radius: 1.0, spread: 0.5, y: 0.08, scale: 0.82, ring: 0.6 },
  { radius: 0.7, spread: 0.28, y: 0, scale: 0.68, ring: 0.4 },
];

function damp(current: number, target: number, lambda: number, dt: number) {
  return THREE.MathUtils.damp(current, target, lambda, dt);
}

function Environment({ enabled }: { enabled: boolean }) {
  const { scene } = useThree();

  useEffect(() => {
    if (!enabled) {
      scene.environment = null;
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const sky = ctx.createLinearGradient(0, 0, 0, 256);
    sky.addColorStop(0, "#b7c4cb");
    sky.addColorStop(0.28, "#5b676e");
    sky.addColorStop(0.55, "#1c1f24");
    sky.addColorStop(1, "#08090b");
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 512, 256);
    ctx.fillStyle = "rgba(210, 222, 226, 0.45)";
    ctx.fillRect(0, 36, 512, 14);
    ctx.fillStyle = "rgba(138, 164, 173, 0.22)";
    ctx.beginPath();
    ctx.ellipse(380, 90, 70, 28, 0, 0, Math.PI * 2);
    ctx.fill();
    const tex = new THREE.CanvasTexture(canvas);
    tex.mapping = THREE.EquirectangularReflectionMapping;
    tex.colorSpace = THREE.SRGBColorSpace;
    scene.environment = tex;
    scene.environmentIntensity = 0.85;
    return () => {
      scene.environment = null;
      tex.dispose();
    };
  }, [enabled, scene]);

  return null;
}

function Sculpture({ quality }: { quality: Quality }) {
  const root = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const ringA = useRef<THREE.Mesh>(null);
  const ringB = useRef<THREE.Mesh>(null);
  const slabs = useRef<THREE.Group>(null);
  const panels = useRef<THREE.Group>(null);
  const pose = useRef({ ...POSES[0] });

  const panelCount = quality === "high" ? 5 : 3;
  const high = quality === "high";

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.08);
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
      g.rotation.y = damp(g.rotation.y, lookX * 0.38 + t * 0.05, 3.2, dt);
      g.rotation.x = damp(g.rotation.x, lookY * 0.18, 3.2, dt);
      const wantX = live.mobile ? 0 : 0.85;
      g.position.x = damp(g.position.x, wantX, 2, dt);
      const breathe = live.reduced ? 0 : Math.sin(t * 0.55) * 0.045;
      g.position.y = damp(g.position.y, p.y + breathe, 2.4, dt);
      const s = damp(g.scale.x, p.scale, 2.2, dt);
      g.scale.setScalar(s);
    }

    if (core.current) core.current.rotation.y = t * 0.2;
    if (ringA.current) {
      ringA.current.rotation.x = t * 0.16;
      ringA.current.scale.setScalar(p.ring);
    }
    if (ringB.current) {
      ringB.current.rotation.z = t * -0.11;
      ringB.current.rotation.y = t * 0.08;
      ringB.current.scale.setScalar(p.ring * 0.86);
    }

    if (slabs.current) {
      slabs.current.rotation.y = Math.sin(t * 0.12) * 0.12;
    }

    if (panels.current) {
      const children = panels.current.children;
      const n = children.length || 1;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const a = t * 0.22 + (i / n) * Math.PI * 2;
        child.position.x = Math.cos(a) * p.radius;
        child.position.z = Math.sin(a) * p.radius * 0.62;
        child.position.y = Math.sin(t * 0.5 + i) * 0.18 * p.spread;
        child.rotation.y = a + Math.PI / 2;
        child.rotation.x = Math.sin(t * 0.3 + i) * 0.12;
      }
    }

    const cam = state.camera;
    const camZ = 3.9 + live.progress * 1.15;
    cam.position.z = damp(cam.position.z, camZ, 1.8, dt);
    cam.position.y = damp(cam.position.y, 0.12 + live.progress * 0.28, 1.8, dt);
    cam.lookAt(live.mobile ? 0 : 0.5, 0.12, 0);
  });

  const panelIndices = useMemo(
    () => Array.from({ length: panelCount }, (_, i) => i),
    [panelCount],
  );

  return (
    <group ref={root}>
      <mesh ref={core}>
        <icosahedronGeometry args={[0.62, 0]} />
        <meshStandardMaterial
          color={SCENE.core}
          emissive={SCENE.emissive}
          emissiveIntensity={0.85}
          metalness={0.55}
          roughness={0.18}
        />
      </mesh>

      <mesh>
        <icosahedronGeometry args={[0.64, 0]} />
        <meshBasicMaterial
          color={SCENE.emissive}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      <group ref={slabs}>
        <mesh position={[0, 0, 0]} rotation={[0, 0.18, 0]}>
          <boxGeometry args={[1.6, 2.2, 0.05]} />
          <meshPhysicalMaterial
            color={SCENE.glass}
            metalness={0.08}
            roughness={0.06}
            transmission={high ? 0.72 : 0}
            opacity={high ? 1 : 0.28}
            transparent={!high}
            thickness={0.55}
            ior={1.45}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.2}
            reflectivity={1}
          />
        </mesh>
        <mesh position={[-0.58, 0.12, 0.38]} rotation={[0.08, -0.55, 0.04]}>
          <boxGeometry args={[1.2, 1.75, 0.045]} />
          <meshPhysicalMaterial
            color="#c9d4d8"
            metalness={0.1}
            roughness={0.08}
            transmission={high ? 0.62 : 0}
            opacity={high ? 1 : 0.22}
            transparent={!high}
            thickness={0.42}
            ior={1.42}
            envMapIntensity={1}
          />
        </mesh>
        <mesh position={[0.66, -0.1, 0.32]} rotation={[-0.06, 0.68, -0.05]}>
          <boxGeometry args={[1.0, 1.5, 0.04]} />
          <meshStandardMaterial
            color={SCENE.metal}
            metalness={0.88}
            roughness={0.22}
            envMapIntensity={1.3}
          />
        </mesh>
      </group>

      {high ? (
        <>
          <mesh ref={ringA} rotation={[Math.PI / 2.6, 0.2, 0]}>
            <torusGeometry args={[1.38, 0.016, 12, 96]} />
            <meshStandardMaterial
              color={SCENE.metal}
              metalness={0.9}
              roughness={0.18}
              emissive={SCENE.emissive}
              emissiveIntensity={0.22}
            />
          </mesh>
          <mesh ref={ringB} rotation={[0.4, Math.PI / 3, 0.3]}>
            <torusGeometry args={[1.72, 0.01, 8, 80]} />
            <meshStandardMaterial
              color={SCENE.metal}
              metalness={0.85}
              roughness={0.28}
              transparent
              opacity={0.85}
            />
          </mesh>
        </>
      ) : null}

      <group ref={panels}>
        {panelIndices.map((i) => (
          <mesh key={i}>
            <planeGeometry args={[0.46, 0.64]} />
            <meshStandardMaterial
              color={SCENE.glass}
              metalness={0.45}
              roughness={0.14}
              transparent
              opacity={0.32}
              side={THREE.DoubleSide}
              emissive={SCENE.emissive}
              emissiveIntensity={0.16}
            />
          </mesh>
        ))}
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.35, 0]}>
        <circleGeometry args={[1.6, 48]} />
        <meshStandardMaterial
          color="#0c0e10"
          metalness={0.7}
          roughness={0.4}
          transparent
          opacity={0.55}
        />
      </mesh>
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.45} color={SCENE.keyLight} />
      <directionalLight
        position={[4.2, 5.5, 3.2]}
        intensity={2.1}
        color={SCENE.keyLight}
      />
      <directionalLight
        position={[-3, 2, -2]}
        intensity={0.55}
        color={SCENE.fillLight}
      />
      <pointLight
        position={[-3.2, 1.8, 2.4]}
        intensity={14}
        distance={16}
        color={SCENE.fillLight}
      />
      <pointLight
        position={[2.6, -0.6, 3.2]}
        intensity={8}
        distance={12}
        color={SCENE.rimLight}
      />
      <pointLight
        position={[0.4, 0.2, 1.2]}
        intensity={6}
        distance={5}
        color="#dfe8ea"
      />
    </>
  );
}

export function CanvasApp({ quality }: { quality: Quality }) {
  return (
    <Canvas
      className="absolute inset-0"
      dpr={quality === "high" ? [1, 1.6] : [1, 1]}
      gl={{
        antialias: quality === "high",
        alpha: false,
        powerPreference: quality === "high" ? "high-performance" : "low-power",
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 0.15, 4.0], fov: 30, near: 0.1, far: 40 }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(SCENE.background, 1);
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.18;
        scene.fog = new THREE.Fog(SCENE.fog, 8, 18);
      }}
      style={{ pointerEvents: "none" }}
    >
      <Environment enabled={quality === "high"} />
      <Lights />
      <Sculpture quality={quality} />
    </Canvas>
  );
}
