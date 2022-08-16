import Logo from "../../Assets/PortfolioLogo.svg";

import { Container, Navbar } from "./styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <h1>
        <img src={Logo} alt="Logo" />
      </h1>
      <Navbar>
        <Link>Home</Link>
        <Link> Projects</Link>
        <Link> About</Link>
        <Link> Resume</Link>
      </Navbar>
    </Container>
  );
};
export default Header;
