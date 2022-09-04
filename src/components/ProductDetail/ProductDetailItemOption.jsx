import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { Counter } from '../../components/ProductDetail/ProductDetailCounter';
import { Text } from '../../components/ProductList/Common';
import { useCounter } from '../../hook/useCounter';
import { colors } from '../../styles/colors';
import { purchase } from '../../utils/purchaseStore';

export const ItemOption = (props) => {
  const { itemOption } = props;
  const { componentProps, value } = useCounter(1);
  const setPurchaseAtom = useSetRecoilState(purchase);

  useEffect(() => {
    setPurchaseAtom((prev) => {
      return {
        ...prev,
        [itemOption.title]: value * itemOption.price,
      };
    });
  }, [itemOption.price, itemOption.title, setPurchaseAtom, value]);

  return (
    <RootWrap>
      <OptionTitleWrap>
        <Text colors={colors.gray3} fontSize={14}>
          {itemOption.title}
        </Text>
      </OptionTitleWrap>
      <CounterWrap>
        <Counter {...componentProps} />
        <TotalPriceWrap>
          <Text color={colors.spring} fontSize={16}>
            {(value * itemOption.price).toLocaleString()}원
          </Text>
        </TotalPriceWrap>
      </CounterWrap>
    </RootWrap>
  );
};

const RootWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.gray6};
  padding: 12px 16px;

  &&:not(:last-of-type) {
    border-bottom: 1px solid ${colors.gray3};
  }
`;

const OptionTitleWrap = styled.div``;

const CounterWrap = styled.div`
  display: flex;
  padding-top: 16px;
  align-items: center;
  justify-content: space-between;
`;

const TotalPriceWrap = styled.div`
  display: flex;
`;
