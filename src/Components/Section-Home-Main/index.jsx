import { Container, Footer, Main } from "./styles";

import { Background } from "./styles";

import BackgroundImage from "../../Assets/bg-hero.svg";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const HomeMain = () => {
  return (
    <Container id="Home">
      <Background>
        <img src={BackgroundImage} alt="Background" />
      </Background>
      <Main>
        <div>
          <h6>Hi, I'm</h6>
          <h1>EDUARDO HENRIQUE </h1>
          <h4>FRONT-END DEVELOPER</h4>
        </div>
        <div>
          <h2>I’m a Front-End developer focused on react</h2>
        </div>
      </Main>

      <Footer>
        <div>
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
        <div>
          <a href="mailto:henrique.mts@outlook.com.br">GET IN TOUCH</a>
        </div>
      </Footer>
    </Container>
  );
};
export default HomeMain;
