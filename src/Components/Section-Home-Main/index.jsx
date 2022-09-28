import { Container, Footer, Main, Background, IconBox } from "./styles";
import LinkedinIcon from "../../Assets/LinkedinIcon.svg";
import GitIcon from "../../Assets/GitIcon.svg";
import BackgroundImage from "../../Assets/bg-hero.svg";

const HomeMain = () => {
  return (
    <Container id="Home">
      <Background>
        <img src={BackgroundImage} alt="Background" />
      </Background>
      <Main>
        <div className="text-content-first">
          <h6 className="text-linear-gradient">Hi, I'm</h6>
          <h1 className="text-linear-gradient">EDUARDO HENRIQUE </h1>
          <h4 className="text-linear-gradient">FRONT-END DEVELOPER</h4>
        </div>
        <div className="text-content-second">
          <h2 className="text-linear-gradient">
            I'm a Front-End developer focused on react
          </h2>
        </div>
      </Main>

      <Footer>
        <IconBox>
          <li>
            <a target="black" href="https://github.com/HenriqueMts">
              <img src={GitIcon} alt="GitHub Icon" />
            </a>
          </li>
          <li>
            <a
              target="black"
              href="https://www.linkedin.com/in/eduardohenrique-dev/"
            >
              <img src={LinkedinIcon} alt="Linkedin Icon" />
            </a>
          </li>
        </IconBox>
        <div>
          <a href="mailto:henrique.mts@outlook.com.br">GET IN TOUCH</a>
        </div>
      </Footer>
    </Container>
  );
};
export default HomeMain;
