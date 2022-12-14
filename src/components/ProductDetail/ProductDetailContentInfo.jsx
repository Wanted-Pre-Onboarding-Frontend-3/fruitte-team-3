import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { PlainButton } from '../../utils/css.util';
import { purchase } from '../../utils/purchaseStore';
import { DropDown } from '../BaseComponent/DropDown';
import { Text } from '../ProductList/Common';

export function ProductDetailContentInfo(props) {
  const { contentInfo, setOption } = props;

  const [itemOption, setItemOption] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');

  const purchaseItem = useRecoilValue(purchase);

  const navigate = useNavigate();

  useEffect(() => {
    if (!contentInfo) return;

    setItemOption(contentInfo?.itemOption);

    setOption((prev) => {
      if (dropdownValue === '') {
        return;
      }

      setItemOption(
        itemOption.filter((item) => {
          return dropdownValue !== item.title;
        }),
      );

      return dropdownValue;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentInfo, dropdownValue]);

  const handlePurchase = () => {
    if (purchaseItem.length === 0) {
      return;
    }

    alert(
      `${JSON.stringify(
        purchaseItem,
      )}를 구매하시겠습니까?\n 구매페이지로 이동합니다.`,
    );
    navigate('/order');
  };
  return (
    <InfoWrap>
      <ContentInfoWrap>
        <Text color={colors.gray3} fontSize={16} fontWeight={400}>
          {contentInfo?.content}
        </Text>
      </ContentInfoWrap>
      <OriginInfoWrap>
        <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
          원산지
        </Text>
        <Text color={colors.gray3} fontSize={12}>
          {contentInfo?.origin}
        </Text>
      </OriginInfoWrap>
      <DeliveryTypeWrap>
        <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
          배송 방법
        </Text>
        <Text color={colors.gray3} fontSize={12}>
          {contentInfo?.deliveryType.join(', ')}
        </Text>
      </DeliveryTypeWrap>

      <DeliveryFeeWrap>
        <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
          배송비
        </Text>
        <Text color={colors.gray3} fontSize={12}>
          {Number(contentInfo?.deliveryFee).toLocaleString()}원
        </Text>
      </DeliveryFeeWrap>

      <DeliveryInfo>
        <Text color={colors.gray1} fontSize={12} fontWeight={700} mr={8}>
          배송비
        </Text>
        <Text color={colors.gray3} fontSize={12}>
          {Number(contentInfo?.overFreeDeliveryFee).toLocaleString()}원 이상
          구매시 무료배송
        </Text>
      </DeliveryInfo>
      {itemOption.length !== 0 && (
        <DropDownWrap>
          <DropDown
            options={itemOption}
            setValue={setDropdownValue}
            value={dropdownValue ?? ''}
          />
        </DropDownWrap>
      )}
      <ButtonWrap>
        <PurchaseButton onClick={handlePurchase}>구매하기</PurchaseButton>
        <AddCartButton>장바구니</AddCartButton>
        <AddLikeButton>찜</AddLikeButton>
      </ButtonWrap>
    </InfoWrap>
  );
}

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
  margin-top: 24px;
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
