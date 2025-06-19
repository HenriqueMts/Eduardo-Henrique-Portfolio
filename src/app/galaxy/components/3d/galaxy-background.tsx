"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import GalaxyBuilder from "./galaxy-builder";

export default function GalaxyBackground() {
  return (
    <div className=" pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black opacity-70w-full h-screen">
      <Canvas camera={{ position: [0, 18, 70], fov: 40 }}>
        <ambientLight intensity={6} />
        <directionalLight position={[0, 0, 0]} intensity={20} />
        <Suspense fallback={null}>
          <GalaxyBuilder />
        </Suspense>
      </Canvas>
    </div>
  );
}
