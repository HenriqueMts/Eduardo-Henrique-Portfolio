import { ProjectCard } from "./_components/project-card";

const projects = [
  {
    id: 1,
    title: "Adopet",
    imageSrc: "/projects/adopet.png",
    description:
      "Plataforma para adoção de pets, com filtros, cadastro e UX focada em usabilidade.",
    techs: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "NuKenzie",
    imageSrc: "/projects/nukenzie.png",
    description:
      "Aplicativo para controle financeiro pessoal, com entradas e saídas e filtros por categoria.",
    techs: ["Next.js", "TypeScript", "Shadcn UI"],
  },
];

export default function ProjectPage() {
  return (
    <section className="py-10 px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          imageSrc={project.imageSrc}
          description={project.description}
          techs={project.techs}
        />
      ))}
    </section>
  );
}
