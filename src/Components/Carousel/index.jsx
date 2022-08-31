import {
  CarouselContainer,
  CarouselContent,
  CarouselContentWrapper,
  CarouselWrapper,
} from "./styles";

import { useState, useEffect } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    setLength(children.length);
  }, [children]);

  return (
    <CarouselContainer>
      <CarouselWrapper>
        <button onClick={prev} className="left-arrow">
          &lt;
        </button>
        <CarouselContentWrapper>
          <CarouselContent
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </CarouselContent>
        </CarouselContentWrapper>
        <button onClick={next} className="right-arrow">
          &gt;
        </button>
      </CarouselWrapper>
    </CarouselContainer>
  );
};
export default Carousel;
