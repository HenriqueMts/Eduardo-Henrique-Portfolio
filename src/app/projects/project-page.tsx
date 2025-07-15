import { ProjectCard } from "./_components/project-card";

const projects = [
  {
    id: 1,
    title: "Adopet",
    imageSrc: "/projects/adopet-logo.png",
    description:
      "A pet adoption platform featuring filters, user registration, and a UX design focused on accessibility and ease of use.",
    techs: ["React", "TypeScript", "Tailwind"],
    projectLink: "https://adopet-m3.vercel.app",
    gitLink: "https://github.com/HenriqueMts/capstone-m3",
  },
  {
    id: 2,
    title: "NuKenzie",
    imageSrc: "/projects/nukenzie.png",
    description:
      "A personal finance control application with income and expenses tracking and category filters.",
    techs: ["Next.js", "TypeScript", "Shadcn UI"],
    projectLink: "https://nu-kenzie-redux-thunk.vercel.app",
    gitLink: "https://github.com/HenriqueMts/nu-kenzie-redux-thunk",
  },
];

export default function ProjectPage() {
  return (
    <>
      <div className="w-full text-center py-10 px-5 gap-8" id="projects">
        <h1 className="text-white text-4xl font-bold text-center mt-10">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg text-center mt-4 max-w-2xl mx-auto">
          These projects represent my journey as a front-end developer — from
          building intuitive user interfaces to structuring scalable components.
          They're powered by technologies like React, TypeScript, TailwindCSS,
          and Next.js. Click "Show Details" to dive deeper into each project's
          goals, features, and tech stack.
        </p>
      </div>

      <section className="mt-10 py-10 px-5 flex gap-6 w-full items-center justify-center flex-wrap space-around ">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            techs={project.techs}
            projectLink={project.projectLink}
            gitLink={project.gitLink}
          />
        ))}
      </section>
    </>
  );
}
