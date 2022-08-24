import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 100%;
  position: fixed;
  z-index: 100;
  height: 80px;
  gap: 18px;
  box-shadow: 0px 19px 48px -11px rgba(0, 5, 19, 0.75);
  -webkit-box-shadow: 0px 19px 48px -11px rgba(0, 5, 19, 0.75);
  -moz-box-shadow: 0px 19px 48px -11px rgba(0, 5, 19, 0.75);

  background: linear-gradient(
    180deg,
    #000000 0%,
    rgba(18, 25, 43, 0.2) 115.09%
  );

  img {
    width: 42px;
    margin: 0;
  }

  a {
    cursor: pointer;
  }
  .burger {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10px;
    border: none;
    background: none;
  }
  .btn--burger {
    border-top: 4px solid;
    border-image-slice: 1;
    border-width: 4px;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      224.78deg,
      #1850e1 8.12%,
      #6bbaff 92.21%
    );
    width: 30px;
    display: block;
  }
  .btn--burger::after,
  .btn--burger::before {
    content: "";
    display: block;
    width: 30px;
    height: 4px;
    background: linear-gradient(224.78deg, #1850e1 8.12%, #6bbaff 92.21%);
    margin-top: 5px;
    transition: ease 0.6s;
    position: relative;
  }
  .burger.active .btn--burger {
    border-top: none;
  }
  .burger.active .btn--burger::before {
    transform: rotate(134deg);
  }
  .burger.active .btn--burger::after {
    transform: rotate(-134deg);
    top: -8px;
  }

  ${({ handleButton }) =>
    handleButton &&
    css`
      background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
      transition: ease 0.7s;
    `}
`;

export const Navbar = styled.nav`
  display: block;
  width: 100%;
  height: 0px;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: linear-gradient(90deg, #000513 20%, #12192b 81.15%);
  overflow-y: hidden;
  visibility: hidden;
  transition: ease 0.8s;

  ul {
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    gap: 24px;
  }
  li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    order: 1;
    border-bottom: 1px solid #000513;
    gap: 18px;
    padding: 12px;
  }

  a {
    color: white;
    cursor: pointer;
  }
  ${({ handleButton }) =>
    handleButton &&
    css`
      height: 100vh;
      max-height: 100vh;
      visibility: visible;
      overflow: hidden;
      padding: 24px 0;
      margin: 0;
    `}
`;
