"use client";

import { useEffect, useState } from "react";
import Header from "./shared/header";
import HeroPage from "./hero/hero-page";
import ProjectPage from "./projects/project-page";
import StacksPage from "./stacks/stacks-page";
import AboutPage from "./about/about-page";
import GalaxyBackground from "../components/3d/galaxy/galaxy-background";

export default function Home() {
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
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        <GalaxyBackground />
      </div>

      {/* Intro Video Layer */}
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
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-1000 ease-in-out z-20 ${fadeClass}`}
        />
      )}

      {/* Main Content Layer */}
      {showScene && (
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
          <Header />
          <main className="w-full">
            <HeroPage />

            <div className="w-full backdrop-blur-sm rounded-t-[80px] md:rounded-t-[160px] sm:rounded-t-[80px] border-t-muted-foreground border-t-1">
              <ProjectPage />
              <StacksPage />
              <AboutPage />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
