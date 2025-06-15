"use client";

import { Canvas } from "@react-three/fiber";
import GalaxyBackground from "./components/3d/galaxy-background";
import { Suspense } from "react";

export default function GalaxyBackgroundPage() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0]} intensity={10} />
        <Suspense fallback={null}>
          <GalaxyBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}
