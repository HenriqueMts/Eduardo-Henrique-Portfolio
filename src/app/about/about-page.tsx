const AboutPage = () => {
  return (
    <section className="py-10 px-5 w-full " id="about">
      <h2 className="text-white text-3xl font-bold text-center">About Me</h2>
      <div className="flex mt-12 w-full justify-around gap-8">
        <p className="text-muted-foreground w-2/5 text-lg">
          Hi! I'm Eduardo, a career switcher who transitioned from business
          administration to technology with a strong desire to build things that
          are useful, accessible, and well-crafted. I started my tech journey in
          2020 and officially trained as a front-end developer through Kenzie
          Academy Brasil, where I honed my skills in React, TypeScript, and
          TailwindCSS. I love creating intuitive user interfaces and ensuring a
          great user experience. Currently, I’m pursuing a degree in Software
          Engineering and looking for an opportunity to grow as a developer and
          contribute to a team where learning and collaboration are valued. I'm
          passionate about clean UI, great UX, and constantly improving my
          skills in React, TypeScript, TailwindCSS, and modern web technologies.
        </p>
        <div>
          <h3 className="text-white text-2xl font-semibold mt-8 mb-4">
            Social Media
          </h3>
          <ul className="text-muted-foreground text-lg space-y-2">
            <li>
              <a
                href="https://www.linkedin.com/in/eduardo-henrique-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/HenriqueMts"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/henriquemts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
