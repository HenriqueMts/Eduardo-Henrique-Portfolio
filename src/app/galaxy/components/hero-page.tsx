import AnimatedIntro from "./animations/animated-intro";
import AnimatedDescription from "./animations/animated-description";

export default function HeroPage() {
  return (
    <section className="flex items-center justify-evenly h-screen text-center px-4 w-full ">
      <div className="flex-1 flex justify-center">
        <AnimatedIntro />
      </div>
      <div className="flex-1 flex justify-center">
        <AnimatedDescription />
      </div>
    </section>
  );
}
