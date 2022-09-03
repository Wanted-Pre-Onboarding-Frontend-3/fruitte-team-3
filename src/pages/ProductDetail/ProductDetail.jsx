import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

import Slide from '../../components/BaseComponent/slider';
import { Text } from '../../components/ProductList/Common';
import Tags from '../../components/ProductList/Tags';
import { colors } from '../../styles/colors';
import { useQuery } from '../../utils/fetch.util';

function ProductDetail(props) {
  const matchId = useMatch(`/fruitstore/:id`);
  const id = matchId.params.id;

  const { value } = useQuery({ fetch: '/mock/product_detail.json', getId: id });

  console.log(value);
  const haveTag = !!value?.tags.length;

  return (
    <DivWrap>
      <SlideContainer>
        <BreadCrumbsWrap>
          <FirstItem>
            <Link to={'/'}>
              <Text color={colors.gray4} fontWeight={600} fontSize={16}>
                Home
              </Text>
            </Link>
          </FirstItem>
          <IconWrap>></IconWrap>
          <SecondItem>
            <Link to={'/fruitstore'}>
              <Text color={colors.gray2} fontWeight={600} fontSize={16}>
                FRUITTE STORE
              </Text>
            </Link>
          </SecondItem>
        </BreadCrumbsWrap>
        <SlideWrap>
          <Slide sliderItem={value?.images} loopTime={5} boxSize={500} />
        </SlideWrap>
      </SlideContainer>

      <ContentWrap>
        <TitleWrap>
          <Text color={colors.gray2} fontWeight={600} fontSize={22}>
            {value?.name}
          </Text>
        </TitleWrap>
        <TagWrap>
          {haveTag &&
            value?.tags.map((tag, index) => {
              return (
                <Tags key={index} tag={tag}>
                  {tag}
                </Tags>
              );
            })}
        </TagWrap>
        <PriceWrap>
          <Text color={colors.spring} fontWeight={600} fontSize={16}>
            {value?.prices[0].discountedPrice.toLocaleString()}원
          </Text>
          <Text
            color={colors.gray4}
            fontSize={14}
            textDecoration={'line-through'}
            ml={8}
          >
            {value?.prices[0].originalPrice.toLocaleString()}원
          </Text>
        </PriceWrap>
      </ContentWrap>
    </DivWrap>
  );
}

const DivWrap = styled.div`
  display: flex;
  column-gap: 100px;
  padding: 0 10px;
  margin-top: 90px;
`;

const SlideContainer = styled.div``;

const BreadCrumbsWrap = styled.div`
  display: flex;
  align-items: center;
`;

const FirstItem = styled.div``;

const SecondItem = styled.div``;

const IconWrap = styled.div`
  margin: 10px;
  font-size: 18px;
  color: #ccc;
`;

const SlideWrap = styled.div`
  display: flex;
  max-width: 500px;
`;

const TitleWrap = styled.div`
  margin-bottom: 8px;
`;

const ContentWrap = styled.div`
  width: 100%;
`;
const TagWrap = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${colors.gray3};
`;

export default ProductDetail;
