import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 100%;
  height: 260px;

  figure {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -20;
    img {
      width: 100%;
      height: 100%;
    }
  }

  /* ----- BREACKPOINTS ----- */

  @media (min-width: 550px) {
    height: 460px;

    figure {
      height: 460px;
    }
  }

  @media (min-width: 1150px) {
    height: 100vh;

    figure {
      height: 100%;
    }
  }
`;

export const Content = styled.footer`
  background: linear-gradient(
    90deg,
    rgba(0, 5, 19, 0.4) 20%,
    rgba(10, 16, 33, 0.4) 50.28%,
    rgba(18, 25, 43, 0.4) 81.15%
  );
  display: flex;
  flex-direction: column;
  .react-icons {
    color: #174086;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
  h2 {
    font-size: 1.8rem;
    background: linear-gradient(89.99deg, #174086 -4.74%, #b5c4e9 102.32%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  span {
    font-size: 0.8rem;
    margin-top: 1%;
    margin-bottom: 1%;
    color: #7c7d80;
  }
  a {
    padding: 2px;
    font-size: 1rem;
    transition: 1s ease;
  }
  a:hover {
    transform: translateX(10px);
  }
`;
