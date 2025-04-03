import { Container, Content, TextContent } from "./styles";

import ProjectCard from "../Project-Card";
import Adopet from "../../Assets/Adopet.png";
import NuKenzie from "../../Assets/NuKenzie.png";

const HomeProjects = () => {
  return (
    <Container id="Projects">
      <TextContent>
        <h1 className="text-linear-gradient">Projects</h1>
        <p>
          Selected projects for apresentation, follow to project page by
          clicking on Project Card.
        </p>
      </TextContent>
      <Content>
        <ProjectCard
          path={"https://nu-kenzie-redux-thunk.vercel.app/"}
          source={NuKenzie}
          alt={"NuKenzie"}
          title={"Nu Kenzie"}
        >
          Nu Kenzie is a Financial control Website to organize you life,
        </ProjectCard>
        <ProjectCard
          path={"https://adopet-m3.vercel.app/"}
          source={Adopet}
          alt={"Adopet"}
          title={"Adopet"}
        >
          Adopet is an NGO website who&prime;s connected pet at pet lovers
        </ProjectCard>
      </Content>
    </Container>
  );
};
export default HomeProjects;
