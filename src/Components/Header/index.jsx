import Logo from "../../Assets/PortfolioLogo.svg";
import { Link } from "react-scroll";
import { Container, Navbar } from "./styles";

import { useState } from "react";

const Header = () => {
  const [handleButton, setHandleButton] = useState(false);

  const buttonClick = () => {
    setHandleButton(!handleButton);
  };

  const closeMenu = () => {
    setHandleButton(false);
  };
  return (
    <Container handleButton={handleButton}>
      <h1>
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onClick={closeMenu}
        >
          <img src={Logo} alt="Logo" />
        </Link>
      </h1>
      <Navbar handleButton={handleButton}>
        <ul>
          <li>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="About"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <a
              target="blanck"
              href="https://drive.google.com/file/d/1WtGvdFrUCC1zrZaD96LGewUFwKI_2uvE/view?usp=sharing"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </Navbar>
      <button
        id="burger"
        className={handleButton ? "burger active" : "burger "}
        onClick={() => buttonClick()}
      >
        <span className="btn--burger"></span>
      </button>
    </Container>
  );
};
export default Header;
