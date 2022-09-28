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
        <p>Selected projetcs</p>
      </Content>
      <Aside>
        <Carousel>
          <ProjectCard
            path={"https://nu-kenzie-redux-thunk.vercel.app/"}
            source={NuKenzie}
            alt={"NuKenzie"}
            title={"Nu Kenzie"}
          >
            Landing page of my training in Front-End development and animations.
          </ProjectCard>
          <ProjectCard
            path={"https://adopet-m3.vercel.app/"}
            source={Adopet}
            alt={"Adopet"}
            title={"Adopet"}
          >
            Landing page of my training in Front-End development and animations.
          </ProjectCard>
        </Carousel>
      </Aside>
    </Container>
  );
};
export default HomeProjects;
