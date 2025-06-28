"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  description: string;
  techs: string[];
  projectLink: string;
  gitLink: string;
}

export function ProjectCard({
  title,
  imageSrc,
  description,
  techs,
  projectLink,
  gitLink,
}: ProjectCardProps) {
  return (
    <Dialog>
      <div
        className="
          group relative w-full max-w-sm p-4 rounded-2xl
          bg-gradient-to-br from-purple-400/30 to-purple-700/30
          backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg mr-10
        "
      >
        <div className="overflow-hidden rounded-xl ">
          <Image
            src={imageSrc}
            alt={title}
            width={300}
            height={500}
            className="object-cover w-[25rem] h-[31rem]  transition-all group-hover:scale-105 "
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

      <DialogContent className="max-w-lg bg-gradient-to-br from-purple-500/40 to-purple-900/40 backdrop-blur-sm text-white">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Image
            src={imageSrc}
            alt={title}
            width={500}
            height={300}
            className="rounded-xl object-cover"
          />
          <p>{description}</p>
          <div>
            <h4 className="font-semibold">Tecnologias usadas:</h4>
            <ul className="list-disc list-inside">
              {techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-full justify-around items-center  gap-4 mt-6">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-center  border-2 border-ring rounded-full px-4 py-2 hover:bg-ring transition-colors w-[40%]"
          >
            See the project
          </a>

          <a
            href={gitLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn border-2 border-muted-foreground rounded-full px-4 py-2 hover:bg-muted-foreground transition-colors w-[40%]"
          >
            See the repository
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
