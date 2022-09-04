import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import SlideItem from './slideItem';

const Slide = (props) => {
  const { sliderItem: items, boxSize, loopTime } = props;
  const slideRef = useRef(null);
  const [slideCurrentPosition, setSlideCurrentPosition] = useState(0);
  const [loop, setLoop] = useState(null);

  useEffect(() => {
    if (slideRef.current != null) {
      slideRef.current.style.width = items ? `${items.length * 100}vw` : '0';
    }
  }, [items?.length]);

  useEffect(() => {
    if (!items) {
      return;
    }

    const slideLoop = setTimeout(() => {
      setSlideCurrentPosition((prev) => {
        if (prev < items.length - 1) {
          return prev + 1;
        }
        return 0;
      });
    }, (loopTime && loopTime * 1000) || 3000);
    setLoop(slideLoop);

    return () => clearTimeout(loop);
  }, [items?.length, slideCurrentPosition, setSlideCurrentPosition]);

  useEffect(() => {
    if (slideRef.current != null) {
      slideRef.current.style.transform =
        slideCurrentPosition === 0
          ? `translate(0vw)`
          : `translate(-${slideCurrentPosition * boxSize}px)`;
    }
  }, [slideCurrentPosition]);
  return (
    <SlideContainer>
      <SlideWrap ref={slideRef}>
        <SlideInner>
          {items &&
            items.map((item, index) => {
              return (
                <SlideItem
                  key={items[index]}
                  imgURL={items[index]}
                  title="title"
                />
              );
            })}
        </SlideInner>
      </SlideWrap>
    </SlideContainer>
  );
};

export default Slide;

const SlideContainer = styled.div`
  overflow: hidden;
  border: 1px solid gray;
  background-color: gainsboro;
`;

const SlideWrap = styled.div`
  transition: transform 0.3s;
`;

const SlideInner = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;
