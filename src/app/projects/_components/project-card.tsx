"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef } from "react";

type ProjectCardProps = {
  title: string;
  imageSrc: string;
  description: string;
  techs: string[];
  projectLink: string;
  gitLink: string;
};

export function ProjectCard({
  title,
  imageSrc,
  description,
  techs,
  projectLink,
  gitLink,
}: Readonly<ProjectCardProps>) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Dialog>
      <div className="relative" style={{ perspective: "800px" }}>
        <div
          ref={ref}
          className="
          group relative w-full max-w-sm p-4 rounded-2xl
          bg-gradient-to-br from-purple-400/30 to-purple-700/30
          backdrop-blur-sm
        "
        >
          <div className="overflow-hidden rounded-xl ">
            <Image
              src={imageSrc}
              alt={title}
              width={300}
              height={500}
              className="object-cover w-full h-auto max-h-[250px] sm:max-h-[400px] transition-all group-hover:scale-105 "
            />
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold text-white text-center">
              {title}
            </h3>
          </div>
          <DialogTrigger asChild>
            <button
              className="
              cursor-pointer
              mt-3 w-full py-2 rounded-lg bg-purple-600 hover:bg-purple-700
              text-white font-medium transition-all
            "
            >
              Show Details
            </button>
          </DialogTrigger>
        </div>
      </div>

      <DialogContent className="max-w-lg bg-gradient-to-br from-purple-500/40 to-purple-900/40 backdrop-blur-sm text-white p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={300}
            className="rounded-xl object-cover w-full h-auto"
          />
          <p className="text-sm sm:text-base">{description}</p>
          <div>
            <h4 className="font-semibold text-sm sm:text-base">
              {" "}
              Utilized technologies:
            </h4>
            <ul className="list-disc list-inside text-sm sm:text-base">
              {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-full justify-around items-center gap-2 sm:gap-4 mt-6 flex-wrap sm:flex-nowrap">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-center text-xs sm:text-sm border-2 border-ring rounded-full px-3 sm:px-4 py-2 hover:bg-ring transition-colors flex-1 sm:flex-none sm:w-[40%] whitespace-nowrap"
          >
            See the project
          </a>

          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-center text-xs sm:text-sm border-2 border-muted-foreground rounded-full px-3 sm:px-4 py-2 hover:bg-muted-foreground transition-colors flex-1 sm:flex-none sm:w-[40%] whitespace-nowrap"
          >
            See the repository
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
