import styled from 'styled-components';

import { media } from '../../../utils/css.util';

const SlideItem = (props) => {
  const { imgURL, title } = props;
  return (
    <DivWrap>
      <SlideItemImage src={imgURL} alt={title} />
    </DivWrap>
  );
};

export default SlideItem;

const DivWrap = styled.div`
  display: flex;
  position: relative;
`;

const SlideItemImage = styled.img`
  display: flex;
  flex: 1;
  object-fit: contain;
  aspect-ratio: 1 / 1;
  max-width: 500px;
  max-height: 500px;
  width: 100%;

  ${media.mobile} {
    max-width: 100%;
    max-height: 100%;
  }
`;
