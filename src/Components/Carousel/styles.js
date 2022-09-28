import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  min-width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 720px) {
    height: 100vh;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  .left-arrow,
  .right-arrow,
  .left-arrow-none {
    cursor: pointer;
    position: absolute;
    z-index: 100;
    top: 13%;
    transform: translateY(-50%);
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background-color: transparent;
    color: #000513;
    border: 1px solid #000513;
    @media (min-width: 720px) {
      top: 50%;
    }
  }
  .left-arrow:hover,
  .right-arrow:hover {
    box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.75);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.75);
    -moz-box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.75);
    transition: ease 0.8s;
  }
  .left-arrow {
    left: 18px;
  }
  .left-arrow-none {
    visibility: hidden;
  }

  .right-arrow {
    right: 18px;
  }
`;

export const CarouselContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100vh;
`;

export const CarouselContent = styled.div`
  display: flex;
  transition: ease 1s;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }

  @media (min-width: 720px) {
    height: 100vh;
    width: 100%;
    border: 2px solid green;
  }
`;
