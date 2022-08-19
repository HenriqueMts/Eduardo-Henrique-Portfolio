import Logo from "../../Assets/PortfolioLogo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Container, Navbar } from "./styles";

const Header = () => {
  return (
    <Container>
      <h1>
        <Link to="Home" spy={true} smooth={true} offset={-80} duration={500}>
          <img src={Logo} alt="Logo" />
        </Link>
      </h1>
      <Navbar>
        <Link to="Home" spy={true} smooth={true} offset={-80} duration={500}>
          Home
        </Link>
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Projects
        </Link>
        <Link to="About" spy={true} smooth={true} offset={-80} duration={500}>
          About
        </Link>
        <a
          target="blanck"
          href="https://drive.google.com/file/d/1NSx8VjbZAE2g0HgglgoOz3yetvoxpmh9/view?usp=sharing"
        >
          Resume
        </a>
      </Navbar>
    </Container>
  );
};
export default Header;
