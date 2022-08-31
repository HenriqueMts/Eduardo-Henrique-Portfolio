import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #683bb7;
  color: #fff;

  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
`;

export const Content = styled.div`
  width: 30%;
  height: 100vh;
  /*  align-items: center;
  display: flex; */
  background: linear-gradient(180deg, #000d29 0%, rgba(0, 26, 82, 0.83) 100%);

  h1 {
    background: linear-gradient(89.99deg, #174086 -4.74%, #b5c4e9 102.32%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    font-family: "Roboto Slab", serif;
    font-size: 2rem;
    text-align: center;
    margin-top: 5%;
  }
`;

export const Aside = styled.aside`
  height: 100vh;
`;
