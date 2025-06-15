"use client";

import { Canvas } from "@react-three/fiber";
import GalaxyBackground from "./components/3d/galax-background";
import { Suspense } from "react";

export default function PlanetPage() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <GalaxyBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}
