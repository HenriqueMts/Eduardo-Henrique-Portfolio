import { Aside, Container, Content } from "./styles";

import Carousel from "../Carousel";

import ProjectCard from "../Project-Card";
import Adopet from "../../Assets/Adopet.png";
import NuKenzie from "../../Assets/NuKenzie.png";

const HomeProjects = () => {
  return (
    <Container id="Projects">
      <Content>
        <h1 className="text-linear-gradient">Projects</h1>
        <p>
          Selected projects for a presentation, follow to project page by
          clicking on see more at the carrousel.
        </p>
      </Content>
      <Aside>
        <Carousel>
          <ProjectCard
            path={"https://nu-kenzie-redux-thunk.vercel.app/"}
            source={NuKenzie}
            alt={"NuKenzie"}
            title={"Nu Kenzie"}
          >
            Nu Kenzie is a Financial control control Website to organize you
            life
            <a href="https://br.freepik.com/vetores-gratis/ilustracao-da-pagina-inicial-da-web-criativa_21742831.htm#query=landing%20page&position=6&from_view=keyword">
              Image by pikisuperstar
            </a>
            on Freepik
          </ProjectCard>
          <ProjectCard
            path={"https://adopet-m3.vercel.app/"}
            source={Adopet}
            alt={"Adopet"}
            title={"Adopet"}
          >
            Adopet is an NGO website who&prime;s connected pet at pet lovers
          </ProjectCard>
        </Carousel>
      </Aside>
    </Container>
  );
};
export default HomeProjects;
