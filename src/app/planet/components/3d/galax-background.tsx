"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SpiralGalaxy from "./galax-scene";

export default function GalaxyBackground() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 18, 70], fov: 48 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0]} intensity={10} />
        <Suspense fallback={null}>
          <SpiralGalaxy />
        </Suspense>
      </Canvas>
    </div>
  );
}
