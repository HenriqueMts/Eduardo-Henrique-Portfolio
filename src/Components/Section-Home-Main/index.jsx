import { Header, Navbar } from "./styles";
import Logo from "../../Assets/PortfolioLogo.svg";
import { Link } from "react-router-dom";

const HomeMain = () => {
  return (
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
  );
};
export default HomeMain;
