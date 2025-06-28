"use client";

import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function SpiralGalaxy() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const [opacity, setOpacity] = useState(0);

  const { positions, colors } = useMemo(() => {
    const numStars = 10000;
    const arms = 5;
    const radius = 60;

    const positionsArray: number[] = [];
    const colorsArray: number[] = [];

    Array.from({ length: numStars }).forEach((_, i) => {
      const r = Math.random() * radius;
      const angle = (i % arms) * ((2 * Math.PI) / arms) + r * 0.3;

      const x = Math.cos(angle) * r + (Math.random() - 0.5) * 2;
      const y = (Math.random() - 0.5) * 2;
      const z = Math.sin(angle) * r + (Math.random() - 0.5) * 2;

      positionsArray.push(x, y, z);

      const distance = Math.sqrt(x * x + y * y + z * z) / radius;
      const color = new THREE.Color();
      color.lerpColors(
        new THREE.Color("#C893ED"),
        new THREE.Color("#8937B9"),
        distance
      );

      colorsArray.push(color.r, color.g, color.b);
    });

    return {
      positions: new THREE.Float32BufferAttribute(positionsArray, 3),
      colors: new THREE.Float32BufferAttribute(colorsArray, 3),
    };
  }, []);

  // Faz a opacidade aumentar aos poucos
  useFrame(() => {
    if (materialRef.current && opacity < 1) {
      const newOpacity = Math.min(opacity + 0.01, 1);
      setOpacity(newOpacity);
      materialRef.current.opacity = newOpacity;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0008;
    }
  });

  return (
    <>
      <pointLight
        position={[0, 0, 0]}
        intensity={15}
        distance={20}
        color="#8937B9"
      />
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions.array, 3]}
          />
          <bufferAttribute attach="attributes-color" args={[colors.array, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={materialRef}
          vertexColors
          size={0.05}
          sizeAttenuation
          transparent
          opacity={opacity}
        />
      </points>
    </>
  );
}
