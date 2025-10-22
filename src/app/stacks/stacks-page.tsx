import StackCard from "@/app/stacks/components/stackcard";

const stacks = [
  { name: "JavaScript", icon: "/assets/stacks/javascript.png" },
  { name: "TypeScript", icon: "/assets/stacks/typescript.png" },
  { name: "React", icon: "/assets/stacks/react.png" },
  { name: "Next.js", icon: "/assets/stacks/nextjs.png" },
  { name: "Node.js", icon: "/assets/stacks/nodejs.png" },
  { name: "PostgreSQL", icon: "/assets/stacks/postgresql.png" },
  { name: "Tailwind CSS", icon: "/assets/stacks/tailwindcss.png" },
  { name: "Framer Motion", icon: "/assets/stacks/framer.png" },
];
const StacksPage = () => {
  return (
    <section
      className="flex flex-col items-center justify-center py-8 md:py-16 px-4 md:px-0"
      id="stacks"
    >
      <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
        Tech Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-full mx-auto">
        {stacks.map((stack) => (
          <div
            key={stack.name}
            className="flex flex-col items-center w-full h-full"
          >
            <h4 className="text-muted-foreground text-sm md:text-lg font-semibold mt-2 md:mt-4 mb-3 md:mb-6">
              {stack.name}
            </h4>
            <StackCard
              imageSrc={stack.icon}
              altText={stack.name}
              captionText={`${stack.name} icon`}
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={<p className="tilted-card-demo-text"></p>}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default StacksPage;
