import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  position: relative;

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 550px) {
    height: 110vh;
  }
  @media (min-width: 850px) {
    height: 100vh;
  }
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
      font-family: "Roboto Slab", serif;
      margin-top: 20%;
      font-size: 2.1rem;
    }

    h4 {
      font-family: "Roboto Slab", serif;
      margin-top: 10%;
      font-size: 1.5rem;
    }

    h6 {
      font-family: "Roboto Slab";

      margin-right: 50%;
      margin-top: 30%;
      font-size: 1.5rem;
    }
  }
  .text-content-second {
    margin-top: 20%;
    h2 {
      font-family: "Roboto Slab", serif;
      font-size: 1rem;
    }
  }

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 550px) {
    justify-content: space-around;

    .text-content-first {
      margin-top: 10%;

      h1 {
        margin-top: 12%;
      }

      h4 {
        margin-top: 8%;
      }

      h6 {
        margin-top: 20%;
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 850px) {
    flex-direction: row;
    height: 80vh;
    .text-content-first {
      margin-top: 8%;
      width: 60%;

      h1 {
        margin-top: 8%;
        font-size: 2rem;
      }

      h4 {
        margin-top: 8%;
      }

      h6 {
        margin-top: 18%;
        font-size: 1.8rem;
      }
    }

    .text-content-second {
      margin-top: 20%;
      h2 {
        font-family: "Roboto Slab", serif;
        font-size: 1.3rem;
      }
    }
  }

  @media (min-width: 1150px) {
    flex-direction: row;
    justify-content: space-around;

    .text-content-first {
      margin-top: 5%;
      flex-direction: column;

      h1 {
        margin-top: 15%;
        font-size: 3.5rem;
      }

      h4 {
        margin-top: 14%;
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
    width: 200%;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30%;
  width: 100%;

  a {
    color: #fff;
    text-decoration: none;
  }

  a:hover {
    font-size: 18px;
    transition: 0.3s ease;
    text-shadow: 0px 4px 7px rgba(255, 255, 255, 0.6);
  }

  /* ----- BREACKPOINTS ----- */
  @media (min-width: 850px) {
    margin-top: 0;
  }

  @media (min-width: 1150px) {
    margin-top: 5%;
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

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 1150px) {
    width: 70%;
    gap: 20px;
  }
`;
