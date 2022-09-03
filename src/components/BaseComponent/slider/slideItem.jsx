import styled from 'styled-components';

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
`;
const SlideItemImage = styled.img`
  width: 100%;
  object-fit: contain;
  aspect-ratio: 1 / 1;
`;
