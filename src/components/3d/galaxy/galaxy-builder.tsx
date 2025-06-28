"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import SpiralGalaxy from "./galaxy-scene";

export default function GalaxyBuilder() {
  const ref = useRef({ progress: 0 });

  useFrame(() => {
    if (ref.current.progress < 1) {
      ref.current.progress += 0.01;
      ref.current.progress = Math.min(ref.current.progress, 1);
    }
  });

  return <SpiralGalaxy />;
}
