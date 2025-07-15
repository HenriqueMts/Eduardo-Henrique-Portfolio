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
    <section className="py-10 px-5" id="stacks">
      <h2 className="text-white text-3xl font-bold text-center">Tech Stacks</h2>
      <p className="text-muted-foreground text-lg text-center mt-4 max-w-2xl mx-auto">
        Here are the technologies I work with:
      </p>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {stacks.map((stack) => (
          <div key={stack.name} className="flex flex-col items-center">
            <h4 className="text-muted-foreground text-lg font-semibold mt-4 mb-6">
              {stack.name}
            </h4>
            <StackCard
              imageSrc={stack.icon}
              altText={stack.name}
              captionText={`${stack.name} icon`}
              containerHeight="200px"
              containerWidth="200px"
              imageHeight="200px"
              imageWidth="200px "
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
