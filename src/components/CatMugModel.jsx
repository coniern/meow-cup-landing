import React, { forwardRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Fallback procedural mug+saucer when GLB is missing
const ProceduralMug = forwardRef(function ProceduralMug(props, ref) {
  return (
    <group ref={ref} {...props}>
      <group position={[0, 0.05, 0]}>
        <mesh castShadow receiveShadow>
          <latheGeometry
            args={[
              [
                new THREE.Vector2(0.0, 0.0),
                new THREE.Vector2(0.25, 0.0),
                new THREE.Vector2(0.28, 0.07),
                new THREE.Vector2(0.3, 0.18),
                new THREE.Vector2(0.28, 0.42),
                new THREE.Vector2(0.26, 0.55),
                new THREE.Vector2(0.22, 0.62),
                new THREE.Vector2(0.18, 0.72),
                new THREE.Vector2(0.0, 0.72),
              ],
              96,
            ]}
          />
          <meshPhysicalMaterial
            color={"#efebe6"}
            roughness={0.22}
            clearcoat={1}
            clearcoatRoughness={0.04}
            metalness={0}
            reflectivity={0.2}
          />
        </mesh>
        <mesh
          position={[0.32, 0.36, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
          receiveShadow
        >
          <torusGeometry args={[0.12, 0.02, 16, 40, Math.PI * 1.75]} />
          <meshPhysicalMaterial
            color={"#f7f3ee"}
            roughness={0.22}
            clearcoat={1}
            clearcoatRoughness={0.04}
            metalness={0}
          />
        </mesh>
      </group>

      <group position={[0, -0.18, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow castShadow>
          <ringGeometry args={[0.18, 0.42, 128]} />
          <meshPhysicalMaterial
            color={"#efece6"}
            roughness={0.3}
            metalness={0}
            clearcoat={0.8}
            clearcoatRoughness={0.06}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh position={[0, 0.008, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[0.18, 128]} />
          <meshPhysicalMaterial color={"#f6f2ec"} roughness={0.28} />
        </mesh>
      </group>
    </group>
  );
});

const CatMugModel = forwardRef((props, ref) => {
  const [hasModel, setHasModel] = useState(null);

  useEffect(() => {
    // check if model exists to avoid GLTFLoader HTML error
    fetch("/models/cat_mug.glb", { method: "HEAD" })
      .then((res) => {
      setHasModel(res.ok);
      })
      .catch(() => setHasModel(false));
  }, []);

  if (hasModel === null) {
    return null; // still checking
  }

  if (!hasModel) {
    return <ProceduralMug ref={ref} />;
  }

  const gltf = useGLTF("/models/cat_mug.glb");

  useEffect(() => {
    if (!gltf) return;
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        if (child.material) {
          child.material.roughness = 0.22;
          child.material.metalness = 0.0;
          child.material.clearcoat = 0.9;
          child.material.clearcoatRoughness = 0.05;
          child.material.reflectivity = 0.2;
          if (!child.geometry.attributes.tangent) {
            try {
              child.geometry.computeTangents();
            } catch (e) {}
          }
        }
      }
    });
  }, [gltf]);

  return (
    <primitive ref={ref} object={gltf.scene} scale={1.02} position={[0, 0, 0]} {...props} />
  );
});

useGLTF.preload("/models/cat_mug.glb");
export default CatMugModel;
