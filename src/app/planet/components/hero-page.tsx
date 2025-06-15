"use client";

import { useEffect, useState } from "react";
import GalaxyBackground from "./3d/galax-background";

export default function HeroPage() {
  const [showScene, setShowScene] = useState(false);
  const [fadeClass, setFadeClass] = useState("opacity-100 scale-100");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass(
        "opacity-0 scale-105 transition-all duration-1000 ease-in-out"
      );
      setTimeout(() => setShowScene(true), 1000);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {!showScene && (
        <>
          <video
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={() => {
              setFadeClass(
                "opacity-0 scale-105 transition-all duration-1000 ease-in-out"
              );
              setTimeout(() => setShowScene(true), 1000);
            }}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${fadeClass}`}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black opacity-70"></div>
        </>
      )}

      {showScene && (
        <div className="absolute inset-0 animate-fade-in-scale">
          <GalaxyBackground />
        </div>
      )}
    </div>
  );
}
