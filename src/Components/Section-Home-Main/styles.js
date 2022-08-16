import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  max-height: 505px;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Main = styled.main`
  display: flex;
`;

export const Background = styled.div`
  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export const Footer = styled.footer``;
