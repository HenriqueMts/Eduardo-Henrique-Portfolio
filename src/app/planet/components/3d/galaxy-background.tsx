"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import GalaxyBuilder from "./galaxy-builder";

export default function GalaxyBackground() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 18, 70], fov: 48 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0]} intensity={10} />
        <Suspense fallback={null}>
          <GalaxyBuilder />
        </Suspense>
      </Canvas>
    </div>
  );
}
