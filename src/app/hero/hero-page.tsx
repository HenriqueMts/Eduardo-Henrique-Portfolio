import AnimatedIntro from "../../components/animations/animated-intro";
import AnimatedDescription from "../../components/animations/animated-description";

export default function HeroPage() {
  return (
    <section
      className="flex items-center justify-evenly h-screen text-center px-4 w-full "
      id="home"
    >
      <div className="flex-1 flex justify-center">
        <AnimatedIntro />
      </div>
      <div className="flex-1 flex justify-center">
        <AnimatedDescription />
      </div>
    </section>
  );
}
