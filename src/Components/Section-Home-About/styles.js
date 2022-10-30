import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 1150px) {
    flex-direction: row;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 3%;
  gap: 18px;

  border-bottom: 3px solid #b5c4e9;
  border-radius: 8px;

  figure {
    width: 166px;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      height: 175px;
      border-radius: 50%;
    }
  }
  h3 {
    font-size: 2rem;
  }

  p {
    width: 80%;
    color: #7c7d80;
    margin-bottom: 4%;
  }

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 1150px) {
    width: 80%;
    height: 90vh;
    border-bottom: 0;
    border-right: 3px solid #b5c4e9;
    border-radius: 3px;
    p {
      width: 80%;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 300px;
  margin-top: 8%;

  li {
    align-items: center;
    margin-left: 4%;
    margin-top: 8px;

    a {
      text-transform: uppercase;
      color: #7c7d80;
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      transition: 1s ease;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }

  a:hover {
    transform: scale(1.1);
    text-shadow: 0px 5px 4px rgba(3, 3, 3, 0.6);
  }

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 1150px) {
    width: 30%;
    height: 90vh;

    ul {
      display: flex;
      flex-direction: column;
      height: 90vh;
      gap: 28px;
      justify-content: center;
    }
  }
`;
