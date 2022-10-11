import { Container, Content, Footer } from "./styles";
import GitIcon from "../../Assets/GitIcon.svg";
import LinkedinIcon from "../../Assets/LinkedinIcon.svg";
import InstaIcon from "../../Assets/InstaIcon.svg";
import MailIcon from "../../Assets/MailIcon.svg";
import Henry from "../../Assets/Henry.svg";

const HomeAbout = () => {
  return (
    <Container id="About">
      <Content>
        <figure>
          <img title="Eduardo Henrique" src={Henry} alt="Eduardo Henrique" />
        </figure>
        <h3 className="text-linear-gradient">About me</h3>
        <p>
          &lt; Front-End Developer based in Recife/Brazil. I worked in the
          administration area for almost two years before I realize I.T area is
          my real passion, I start to study UI/UX Design, but my curiosity
          pushed me to want to know more about the development of these
          interfaces, so initiated my carrier transition during the pandemic in
          2021 where I transformed my curiosity into passion &frasl;&gt;
        </p>
      </Content>
      <Footer>
        <ul>
          <li>
            <a target="black" href="https://github.com/HenriqueMts">
              <img src={GitIcon} alt="GitHub Icon" />
              GitHub
            </a>
          </li>
          <li>
            <a
              target="black"
              href="https://www.linkedin.com/in/eduardohenrique-dev/"
            >
              <img src={LinkedinIcon} alt="Linkedin Icon" />
              LinkedIn
            </a>
          </li>
          <li>
            <a target="black" href="https://www.instagram.com/_henrique.ed/">
              <img src={InstaIcon} alt="Instagram Icon" />
              Instagram
            </a>
          </li>
          <li>
            <a href="mailto:henrique.mts@outlook.com.br">
              <img src={MailIcon} alt="Email Icon" />
              GET IN TOUCH
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};
export default HomeAbout;
