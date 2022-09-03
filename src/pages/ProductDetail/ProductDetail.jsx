import { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

import { DropDown } from '../../components/BaseComponent/DropDown';
import Slide from '../../components/BaseComponent/slider';
import { Text } from '../../components/ProductList/Common';
import Tags from '../../components/ProductList/Tags';
import { colors } from '../../styles/colors';
import { media, PlainButton } from '../../utils/css.util';
import { useQuery } from '../../utils/fetch.util';

function ProductDetail(props) {
  const [dropdownValue, setDropdownValue] = useState('');
  const [addOption, setAddOption] = useState({});
  const matchId = useMatch(`/fruitstore/:id`);
  const id = matchId.params.id;

  useEffect(() => {
    setAddOption((prev) => {
      if (dropdownValue === '') {
        return;
      }

      return {
        ...prev,
        [dropdownValue]: true,
      };
    });
  }, [dropdownValue]);

  const { value } = useQuery({ fetch: '/mock/product_detail.json', getId: id });
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
        <InfoWrap>
          <ContentInfoWrap>
            <Text color={colors.gray3} fontSize={16} fontWeight={400}>
              {value?.description.content}
            </Text>
          </ContentInfoWrap>
          <OriginInfoWrap>
            <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
              원산지
            </Text>
            <Text color={colors.gray3} fontSize={12}>
              {value?.description.origin}
            </Text>
          </OriginInfoWrap>
          <DeliveryTypeWrap>
            <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
              배송 방법
            </Text>
            <Text color={colors.gray3} fontSize={12}>
              {value?.description.deliveryType.join(', ')}
            </Text>
          </DeliveryTypeWrap>

          <DeliveryFeeWrap>
            <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
              배송비
            </Text>
            <Text color={colors.gray3} fontSize={12}>
              {Number(value?.description.deliveryFee).toLocaleString()}원
            </Text>
          </DeliveryFeeWrap>

          <DeliveryInfo>
            <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
              배송비
            </Text>
            <Text color={colors.gray3} fontSize={12}>
              {Number(value?.description.overFreeDeliveryFee).toLocaleString()}
              원 이상 구매시 무료배송
            </Text>
          </DeliveryInfo>
          <DropDownWrap>
            <DropDown
              options={value?.description.itemOption}
              setValue={setDropdownValue}
              value={dropdownValue ?? ''}
            />
          </DropDownWrap>
          <ButtonWrap>
            <PurchaseButton>구매하기</PurchaseButton>
            <AddCartButton>장바구니</AddCartButton>
            <AddLikeButton>찜</AddLikeButton>
          </ButtonWrap>
        </InfoWrap>
      </ContentWrap>
    </DivWrap>
  );
}

const DivWrap = styled.div`
  display: flex;
  column-gap: 100px;
  padding: 0 10px;
  margin-top: 90px;

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
    max-width: 100%;
    max-height: 500px;
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

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentInfoWrap = styled.div`
  white-space: pre-wrap;
  line-height: 180%;
  margin-bottom: 32px;
`;

const OriginInfoWrap = styled.div`
  margin-bottom: 8px;
`;

const DeliveryTypeWrap = styled.div`
  margin-bottom: 8px;
`;

const DeliveryFeeWrap = styled.div`
  margin-bottom: 8px;
`;

const DeliveryInfo = styled.div`
  margin-bottom: 8px;
`;
const DropDownWrap = styled.div`
  margin-bottom: 16px;
`;

const ButtonWrap = styled.div`
  display: flex;
  flex: 1;
`;

const PurchaseButton = styled(PlainButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border-radius: 24px;
  flex: 1;
  background: ${colors.spring};
  color: ${colors.white};
  margin-right: 8px;
`;

const AddCartButton = styled(PlainButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border-radius: 24px;
  flex: 1;
  border: 1px solid ${colors.gray3};
  margin-right: 8px;
`;

const AddLikeButton = styled(PlainButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 8px;
  border-radius: 24px;
  flex: 1;
  border: 1px solid ${colors.gray3};
`;
export default ProductDetail;
