import { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

import Slide from '../../components/BaseComponent/slider';
import { TabBar } from '../../components/BaseComponent/TabBar';
import { useTypedTabBar } from '../../components/BaseComponent/TabBar/hook';
import { ProductDetailContentInfo } from '../../components/ProductDetail/ProductDetailContentInfo';
import { ItemOption } from '../../components/ProductDetail/ProductDetailItemOption';
import {
  PRODUCT_CONTENT_TAB,
  QNA_TAB,
  REVIEW_TAB,
  useProductDetailTabBar,
} from '../../components/ProductDetail/useProductDetailTabBar';
import { Text } from '../../components/ProductList/Common';
import Tags from '../../components/ProductList/Tags';
import { colors } from '../../styles/colors';
import { media } from '../../utils/css.util';
import { useQuery } from '../../utils/fetch.util';

function ProductDetail() {
  const matchId = useMatch(`/fruitstore/:id`);
  const id = matchId.params.id;
  const { value } = useQuery({ fetch: '/mock/product_detail.json', getId: id });

  const [addOption, setAddOption] = useState();
  const [option, setOption] = useState([]);
  const { isShowTab, componentProps: productDetailTabBarProps } =
    useProductDetailTabBar({ reviewCount: value?.review_count });
  const { componentProps } = useTypedTabBar(productDetailTabBarProps);

  const haveTag = !!value?.tags.length;
  useEffect(() => {
    setOption((prev) => {
      if (!prev) return;
      return [...prev, addOption];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addOption]);

  const removeUndefinedArray = option.filter(function (item) {
    return item !== null && item !== undefined && item !== '';
  });

  const filteredOption = value?.description.itemOption.filter((item, index) => {
    return item.title === removeUndefinedArray[index];
  });

  return (
    <>
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
            <IconWrap>{'>'}</IconWrap>
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
              {value?.prices[0].discountedPrice.toLocaleString()}???
            </Text>
            <Text
              color={colors.gray4}
              fontSize={14}
              textDecoration={'line-through'}
              ml={8}
            >
              {value?.prices[0].originalPrice.toLocaleString()}???
            </Text>
          </PriceWrap>

          <ProductDetailContentInfo
            contentInfo={value?.description}
            value={addOption}
            setOption={setAddOption}
          />
          {filteredOption && filteredOption.length !== 0 && (
            <ItemOptionWrap>
              {filteredOption.map((item) => {
                return <ItemOption key={item.title} itemOption={item} />;
              })}
            </ItemOptionWrap>
          )}
        </ContentWrap>
      </DivWrap>

      <TabBarWrap {...componentProps} />

      <TabBarLayoutWrap>
        <ProductContentWrap isShow={isShowTab(PRODUCT_CONTENT_TAB)}>
          <ContentImageWrap src={value?.description.images} alt="?????? ??????" />
        </ProductContentWrap>
        <ReviewSummaryWrap isShow={isShowTab(REVIEW_TAB)}>
          <div>??????</div>
        </ReviewSummaryWrap>
        <NoticeDivWrap isShow={isShowTab(QNA_TAB)}>
          <div>qna</div>
        </NoticeDivWrap>
      </TabBarLayoutWrap>
    </>
  );
}

const DivWrap = styled.div`
  display: flex;
  column-gap: 100px;
  padding: 0 10px;
  margin-top: 30px;

  ${media.mobile} {
    flex-direction: column;
  }
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
  max-height: 500px;

  ${media.mobile} {
    margin: 0 auto;
  }
`;

const TitleWrap = styled.div`
  margin-bottom: 8px;
`;

const ContentWrap = styled.div`
  width: 100%;
  margin-top: 38px;
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

export const TabBarWrap = styled(TabBar).attrs((props) => ({
  ...props,
}))`
  position: sticky;
  top: 108px;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
  padding: 0 20px;
  z-index: 2;

  ${media.mobile} {
    top: 50px;
  }
`;

const TabBarLayoutWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const ContentImageWrap = styled.img`
  width: 100%;
  margin-top: 40px;
`;
const ProductContentWrap = styled.div`
  ${(props) => !props.isShow && 'display: none;'}
`;

const ReviewSummaryWrap = styled.div`
  ${(props) => !props.isShow && 'display: none;'}
`;

const NoticeDivWrap = styled.div`
  ${(props) => !props.isShow && 'display: none;'}
`;

const ItemOptionWrap = styled.div`
  margin-top: 24px;
  border: 1px solid ${colors.gray3};
`;

export default ProductDetail;
