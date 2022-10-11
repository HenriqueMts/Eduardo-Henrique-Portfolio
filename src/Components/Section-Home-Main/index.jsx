import { useState, useEffect } from "react";
import { Container, Footer, Main, Background, IconBox } from "./styles";
import LinkedinIcon from "../../Assets/LinkedinIcon.svg";
import GitIcon from "../../Assets/GitIcon.svg";

const HomeMain = () => {
  const [changeVisibility, setChangeVisibility] = useState(false);

  const changeVisibilityToShow = () => {
    setChangeVisibility(true);
  };
  setTimeout(changeVisibilityToShow, 1000);
  return (
    <Container id="Home">
      <Background>
        <svg
          className="backgroundToShowAnimation"
          width="2347"
          height="532"
          viewBox="0 0 2347 532"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="BgWaves">
            <path
              id="firstWave"
              className="firstWaveAnimation"
              d="M1354.2 179.037C765.823 174.586 484.536 -67.166 4.54004 61.868V435H2330.54V29.239C1953.77 29.239 1862.59 182.882 1354.2 179.037Z"
              stroke="url(#paint0_radial_715_3)"
              stroke-width="3"
            />
            <path
              id="secondWave"
              className="secondWaveAnimation"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.54004 3L136.297 41.1C264.117 79.2 523.63 155.4 781.207 142.7C1038.78 130 1298.3 28.4 1555.87 53.8C1846.37 82.447 2330.54 204.083 2330.54 204.083V384H2200.78C2072.96 384 1813.45 384 1555.87 384C1298.3 384 1038.78 384 781.207 384C523.63 384 264.117 384 136.297 384H6.54004V3Z"
              stroke="url(#paint1_radial_715_3)"
              stroke-width="3"
            />
            <path
              id="thirdWave"
              className="thirdWaveAnimation"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 402.581L98.888 381.354C195.776 360.127 389.552 317.672 583.302 348.954C777.051 381.354 970.77 488.608 1164.53 509.835C1358.28 532.18 1552.06 467.381 1745.84 424.926C1939.62 381.354 2133.38 360.127 2230.27 348.954L2327.15 338.899L2327.22 145.619H2230.34C2133.46 145.619 1939.7 145.619 1745.94 145.619C1552.18 145.619 1358.42 145.619 1164.66 145.619C970.9 145.619 777.136 145.619 583.375 145.619C389.614 145.619 195.853 145.619 98.973 145.619H2.093L2 402.581Z"
              stroke="url(#paint2_radial_715_3)"
              stroke-width="3"
            />
            <path
              id="fourthWave"
              className="fourthWaveAnimation"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2330.15 168.063L2233.27 174.316C2136.39 180.568 1942.62 193.073 1748.85 218.083C1555.08 243.092 1361.31 280.607 1167.55 274.355C973.79 268.102 780.047 218.083 586.3 180.568C392.552 143.054 198.801 118.044 101.925 105.539L5.04888 93.0339L4.98389 445.569H101.864C198.744 445.569 392.505 445.569 586.266 445.569C780.026 445.569 973.79 445.569 1167.55 445.569C1361.31 445.569 1555.07 445.569 1748.83 445.569C1942.59 445.569 2136.35 445.569 2233.23 445.569H2330.11L2330.15 168.063Z"
              stroke="url(#paint3_radial_715_3)"
              stroke-width="3"
            />
            <path
              id="fifthWave"
              className="fifthWaveAnimation"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.54 530H147.464C275.449 530 535.298 530 793.207 485.019C1051.12 440.037 1310.96 350.074 1568.87 337.222C1826.78 324.37 2086.63 388.63 2214.62 420.759L2344.54 452.889V183H2214.62C2086.63 183 1826.78 183 1568.87 183C1310.96 183 1051.12 183 793.207 183C535.298 183 275.449 183 147.464 183H17.54V530Z"
              stroke="url(#paint4_radial_715_3)"
              stroke-width="3"
            />
          </g>
          <defs>
            <radialGradient
              id="paint0_radial_715_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1198.51 87.775) rotate(93.2602) scale(332.762 1156.18)"
            >
              <stop stop-color="#091D2E" />
              <stop offset="1" stop-color="#366ED1" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_715_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1199.48 39.326) rotate(95.7061) scale(190.175 1151.32)"
            >
              <stop stop-color="#091D2E" />
              <stop offset="1" stop-color="#366ED1" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_715_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1195.49 479.236) rotate(-95.8763) scale(184.13 1151.53)"
            >
              <stop stop-color="#091D2E" />
              <stop offset="1" stop-color="#366ED1" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint3_radial_715_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1139.07 142.71) rotate(85.8305) scale(259.46 1157.03)"
            >
              <stop stop-color="#091D2E" />
              <stop offset="1" stop-color="#366ED1" stop-opacity="0" />
            </radialGradient>
            <radialGradient
              id="paint4_radial_715_3"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(1209.62 481.105) rotate(-94.2599) scale(255.417 1157.79)"
            >
              <stop stop-color="#091D2E" />
              <stop offset="1" stop-color="#366ED1" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </Background>
      <Main>
        <div
          className={
            changeVisibility === true
              ? "text-content-first showFromLeft "
              : "text-content-first hideOnLeft"
          }
        >
          <h6 className="text-linear-gradient">Hi, I'm</h6>
          <h1 className="text-linear-gradient">EDUARDO HENRIQUE </h1>
          <h4 className="text-linear-gradient">FRONT-END DEVELOPER</h4>
        </div>
        <div
          className={
            changeVisibility === true
              ? "text-content-second showFromRigth "
              : "text-content-second hideOnRigth"
          }
        >
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
