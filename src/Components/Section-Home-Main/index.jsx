import { Container, Footer, Header, Navbar } from "./styles";
import { Link } from "react-router-dom";

import { Background } from "./styles";

import BackgroundImage from "../../Assets/bg-hero.svg";
import Logo from "../../Assets/PortfolioLogo.svg";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const HomeMain = () => {
  return (
    <Container>
      <Header>
        <h1>
          <img src={Logo} alt="Logo" />
        </h1>
        <Navbar>
          <Link>Home</Link>
          <Link> Projects</Link>
          <Link> About</Link>
          <Link> Resume</Link>
        </Navbar>
      </Header>
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
