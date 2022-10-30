import styled from "styled-components";

export const Container = styled.li`
  width: 95%;
  height: 116px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(12, 30, 45, 0.7);
  backdrop-filter: blur(14px);
  gap: 8px;
  transition: 0.8s ease;

  figure {
    width: 30%;
    min-width: 30%;
    height: 100%;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  :hover {
    transform: scale(1.05);
    box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 5px 10px 0px rgba(255, 255, 255, 0.75);
  }

  /* ----- BREACKPOINTS ----- */
  @media (min-width: 720px) {
    height: 216px;
  }
  @media (min-width: 1150px) {
    flex-direction: row;
    height: 198px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  h2 {
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
  }
  p {
    width: 100%;
    color: #7c7d80;
    margin-top: 3%;
  }

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 1150px) {
    h2 {
      font-size: 2rem;
    }
  }
`;
