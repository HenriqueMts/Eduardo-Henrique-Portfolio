import { Container, Footer } from "./styles";
import { Link } from "react-router-dom";
import Header from "../Header";
import { Background } from "./styles";

import BackgroundImage from "../../Assets/bg-hero.svg";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const HomeMain = () => {
  return (
    <Container>
      <Header />
      <Background>
        <img src={BackgroundImage} alt="Background" />
      </Background>
      <div>
        <h6>Hi, I'm</h6>
        <h1>EDUARDO HENRIQUE </h1>
        <h4>FRONT-END DEVELOPER</h4>
      </div>
      <div>
        <h2>I’m a Front-End developer focused on react</h2>
      </div>
      <Footer>
        <div>
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
        <div>
          <Link>GET IN TOUCH</Link>
        </div>
      </Footer>
    </Container>
  );
};
export default HomeMain;
