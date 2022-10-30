import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;

  background-color: #683bb7;
  flex-direction: column;
  color: #fff;
  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
  gap: 18px;
  a {
    text-decoration: none;
  }
  /* ----- BREACKPOINTS ----- */

  @media (min-width: 550px) {
    height: 100vh;
  }
  @media (min-width: 1150px) {
    flex-direction: row;
    height: 100vh;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 3px solid #b5c4e9;
  border-radius: 8px;

  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
  p {
    color: #7c7d80;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 95%;
  }

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 1150px) {
    width: 40%;
    height: 100%;
    border-bottom: none;
    border-radius: 0;

    p {
      margin-top: 20%;
    }
  }
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  width: 100%;
  gap: 16px;

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 1150px) {
    margin-top: 0;
  }
`;
