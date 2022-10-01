import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  background-color: #683bb7;
  flex-direction: column;
  color: #fff;

  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  top: 0;
  width: 100%;
  height: 50vh;
  text-align: center;

  background: linear-gradient(180deg, #000d29 0%, rgba(0, 26, 82, 0.83) 100%);
  p {
    margin-top: 10%;
    color: #7c7d80;
  }
  h1 {
    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    text-align: center;
    margin-top: 5%;
  }
  @media (min-width: 720px) {
    width: 20%;
    height: 100vh;
  }
`;

export const Aside = styled.div`
  max-width: 100%;
  max-height: 40vh;
  width: 100%;
`;
