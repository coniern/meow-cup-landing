import React, { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Html, useProgress } from "@react-three/drei";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";
import CatMugModel from "./components/CatMugModel";

function Loader() {
  const { progress } = useProgress();
  return <Html center style={{ color: "#8a8174" }}>{Math.round(progress)}%</Html>;
}

function SceneContent({ motionRef }) {
  const pointer = useRef({ x: 0, y: 0 });
  const groupRef = useRef();
  const modelRef = useRef();

  useEffect(() => {
    const onMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      pointer.current.x = x;
      pointer.current.y = y;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, dt) => {
    if (!groupRef.current || !modelRef.current) {
      return;
    }

    const progress = motionRef?.current?.progress ?? 0;
    const elapsed = state.clock.getElapsedTime();

    groupRef.current.rotation.y +=
      ((pointer.current.x * 0.18 + progress * 0.5) - groupRef.current.rotation.y) * 2.2 * dt;
    groupRef.current.rotation.x +=
      ((pointer.current.y * 0.08 - 0.12) - groupRef.current.rotation.x) * 2 * dt;
    groupRef.current.position.y =
      THREE.MathUtils.lerp(groupRef.current.position.y, Math.sin(elapsed * 0.7) * 0.05, 0.06);

    modelRef.current.position.y =
      THREE.MathUtils.lerp(modelRef.current.position.y, progress * 0.08, 0.08);
    modelRef.current.rotation.z =
      THREE.MathUtils.lerp(modelRef.current.rotation.z, pointer.current.x * 0.04, 0.08);
  });

  return (
    <group ref={groupRef} position={[0, -0.16, 0]}>
      <Suspense fallback={<Loader />}>
        <CatMugModel ref={modelRef} />
      </Suspense>
    </group>
  );
}

export default function Scene({ motionRef }) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.8, 2.45], fov: 34 }}
      style={{ width: "100%", height: "100%", pointerEvents: "auto" }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#f8f3eb"]} />
      <fog attach="fog" args={["#f6efe5", 3.6, 6.8]} />

      <ambientLight intensity={0.72} />
      <directionalLight
        castShadow
        position={[2.4, 3.1, 2.2]}
        intensity={1.55}
        color={0xfff6ee}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-2.2, 1.4, -1.2]} intensity={0.48} color={0xf3dcc1} />
      <pointLight position={[0, 1.8, 2]} intensity={0.55} color={0xffffff} />
      <pointLight position={[0, 1.4, -2.2]} intensity={0.32} color={0xffe2b8} />
      <rectAreaLight
        intensity={1.2}
        width={3.2}
        height={2}
        position={[-1.8, 1.1, 1.4]}
        rotation={[0, Math.PI / 6, 0]}
      />
      <rectAreaLight
        intensity={0.4}
        width={2.3}
        height={1.6}
        position={[1.7, 1, -0.8]}
        rotation={[0, -Math.PI / 5, 0]}
      />

      <SceneContent motionRef={motionRef} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.56, 0]} receiveShadow>
        <planeGeometry args={[5, 5]} />
        <shadowMaterial transparent opacity={0.12} />
      </mesh>

      <ContactShadows
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, -0.55, 0]}
        opacity={0.7}
        width={2.8}
        height={2.8}
        blur={3.2}
        far={0.85}
      />

      <EffectComposer disableNormalPass>
        <DepthOfField focusDistance={0.012} focalLength={0.08} bokehScale={5.6} height={480} />
        <Bloom mipmapBlur luminanceThreshold={0.86} luminanceSmoothing={0.1} intensity={0.52} />
      </EffectComposer>
    </Canvas>
  );
}
