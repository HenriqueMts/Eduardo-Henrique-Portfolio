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
}

export function ProjectCard({
  title,
  imageSrc,
  description,
  techs,
}: ProjectCardProps) {
  return (
    <Dialog>
      <div
        className="
          group relative w-full max-w-sm p-4 rounded-2xl
          bg-gradient-to-br from-purple-400/30 to-purple-700/30
          backdrop-blur-xl transition-all hover:scale-105 hover:shadow-lg
        "
      >
        <div className="overflow-hidden rounded-xl">
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={250}
            className="object-cover w-full h-48 transition-all group-hover:scale-105"
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
            Ver Detalhes
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="max-w-lg bg-gradient-to-br from-purple-500/40 to-purple-900/40 backdrop-blur-xl text-white">
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
      </DialogContent>
    </Dialog>
  );
}
