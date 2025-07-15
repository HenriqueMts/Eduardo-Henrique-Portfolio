import AnimatedIntro from "../../components/animations/animated-intro";
import AnimatedDescription from "../../components/animations/animated-description";

export default function HeroPage() {
  return (
    <section className="flex flex-col items-center justify-center h-screen ">
      <div
        className="flex items-center justify-evenly h-screen text-center px-4 w-full "
        id="home"
      >
        <div className="flex-1 flex justify-center">
          <AnimatedIntro />
        </div>
        <div className="flex-1 flex justify-center">
          <AnimatedDescription />
        </div>
      </div>
      <div className="flex w-full justify-start items-center ">
        <ul className="list-disc list-inside flex gap-2 text-muted-foreground">
          <li>
            <a href="https://www.example.com" className="">
              Building responsive web applications
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
