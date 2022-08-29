import { Container, Content } from "./styles";
import Carousel from "react-elastic-carousel";
import { useState } from "react";

import ProjectCard from "../Project-Card";
import Adopet from "../../Assets/Adopet.svg";
import NuKenzie from "../../Assets/NuKenzie.svg";

const HomeProjects = () => {
  return (
    <Container id="Projects">
      <h1>Projects</h1>

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
      {/* <Content>
        <ProjectCard
          path={"https://adopet-m3.vercel.app/"}
          source={Adopet}
          alt={"Adopet"}
          title={"Adopet"}
        >
          Landing page of my training in Front-End development and animations.
        </ProjectCard>
        <ProjectCard
          path={"https://nu-kenzie-redux-thunk.vercel.app/"}
          source={NuKenzie}
          alt={"NuKenzie"}
          title={"Nu Kenzie"}
        >
          Landing page of my training in Front-End development and animations.
        </ProjectCard>
      </Content> */}
    </Container>
  );
};
export default HomeProjects;
