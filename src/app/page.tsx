"use client";

import { useEffect, useState } from "react";
import Header from "./galaxy/components/header/header";
import HeroPage from "./galaxy/components/hero-page";
import GalaxyBackground from "./galaxy/components/3d/galaxy-background";

export default function Home() {
  const [showScene, setShowScene] = useState(false);
  const [fadeClass, setFadeClass] = useState("opacity-100 scale-100");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass(
        "opacity-0 scale-105 transition-all duration-1000 ease-in-out"
      );
      setTimeout(() => setShowScene(true), 1000);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {!showScene && (
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
      )}
      {showScene && (
        <>
          <div className="absolute inset-0 z-0">
            <GalaxyBackground />
          </div>
          <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
            <Header />
            <main className="w-full">
              <HeroPage />
            </main>
          </div>
        </>
      )}
    </div>
  );
}
