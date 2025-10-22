import AnimatedIntro from "../../components/animations/animated-intro";
import AnimatedDescription from "../../components/animations/animated-description";
import AnimatedButton from "../../components/animations/animated-button";

export default function HeroPage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen">
      <div
        className="flex flex-col lg:flex-row items-center justify-evenly w-full px-4 sm:px-6 md:px-8 lg:px-16 py-8 lg:py-0"
        id="home"
      >
        <div className="flex-1 flex flex-col justify-center items-center w-full lg:w-fullmb-8 sm:mb-10 lg:mb-0">
          <AnimatedIntro />
        </div>

        <div className="flex-1 flex justify-center w-full lg:w-1/2">
          <AnimatedDescription />
        </div>
      </div>

      <div className="bottom-6 sm:bottom-8 md:bottom-12 lg:bottom-16 w-full">
        <AnimatedButton />
      </div>
    </section>
  );
}
