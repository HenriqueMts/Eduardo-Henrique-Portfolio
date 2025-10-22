import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AboutPage = () => {
  return (
    <section
      className="flex w-full justify-center py-8 md:py-16 px-4 md:px-0 h-full"
      id="about"
    >
      <div className="w-full h-full max-w-7xl flex flex-col md:flex-row justify-around items-center md:items-start gap-8 md:gap-0">
        {/* Left side - About Me content */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center bg-gradient-to-r from-purple-800 to-purple-400 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-muted-foreground text-base md:text-lg text-center md:text-left">
              Hi! I'm Eduardo, a career switcher who transitioned from business
              administration to technology with a strong desire to build things
              that are useful, accessible, and well-crafted. I started my tech
              journey in 2020 and officially trained as a front-end developer
              through Kenzie Academy Brasil, where I honed my skills in React,
              TypeScript, and TailwindCSS. I love creating intuitive user
              interfaces and ensuring a great user experience. Currently, I'm
              pursuing a degree in Software Engineering and looking for an
              opportunity to grow as a developer and contribute to a team where
              learning and collaboration are valued. I'm passionate about clean
              UI, great UX, and constantly improving my skills in React,
              TypeScript, TailwindCSS, and modern web technologies.
            </p>
          </div>
        </div>

        {/* Right side - Social Media content */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-purple-800 text-transparent bg-clip-text">
            Social Media
          </h3>
          <ul className="text-muted-foreground text-base md:text-lg space-y-4">
            <li>
              <a
                href="https://www.linkedin.com/in/eduardohenrique-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <FaLinkedin className="text-xl" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/HenriqueMts"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <FaGithub className="text-xl" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/_henrique.ed"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
