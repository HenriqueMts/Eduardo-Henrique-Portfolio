import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
`;

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;

  .text-content-first {
    display: flex;
    align-items: center;
    margin-top: 20%;
    flex-direction: column;

    h1 {
      background: linear-gradient(89.99deg, #174086 -4.74%, #b5c4e9 102.32%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      font-family: "Roboto Slab", serif;
      margin-top: 20%;
      font-size: 2.1rem;
    }

    h4 {
      background: linear-gradient(89.99deg, #174086 -4.74%, #b5c4e9 102.32%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      font-family: "Roboto Slab", serif;
      margin-top: 10%;
      font-size: 1.5rem;
    }

    h6 {
      font-family: "Roboto Slab";
      background: linear-gradient(89.99deg, #174086 -4.74%, #b5c4e9 102.32%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      margin-right: 50%;
      margin-top: 30%;
      font-size: 1.5rem;
    }
  }
  .text-content-second {
    margin-top: 20%;
    h2 {
      background: linear-gradient(89.99deg, #b5c4e9 -4.74%, #174086 102.32%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      font-family: "Roboto Slab", serif;
      font-size: 1rem;
    }
  }

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-around;

    .text-content-first {
      margin-top: 5%;
      flex-direction: column;

      h1 {
        margin-top: 10%;
        font-size: 3.5rem;
      }

      h4 {
        margin-top: 12%;
        font-size: 1.2rem;
      }
      h6 {
        font-size: 1.1rem;
      }
    }

    .text-content-second {
      margin-top: 15%;
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;

export const Background = styled.div`
  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  z-index: -1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    height: 100vh;
    width: 100%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 20%;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (min-width: 720px) {
    margin-top: 12%;
  }
`;

export const IconBox = styled.ul`
  gap: 18px;
  list-style: none;
  display: flex;
  align-items: center;
  width: 50%;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (min-width: 720px) {
    width: 70%;
    gap: 20px;
  }
`;
