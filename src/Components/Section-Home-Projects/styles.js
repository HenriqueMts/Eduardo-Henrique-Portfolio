import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #683bb7;
  color: #fff;

  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
`;

export const Content = styled.div`
  display: flex;
`;
/* export const ProjectCard = styled.div`
  display: flex;
  width: 80%;
  figure {
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
    }
  } */
