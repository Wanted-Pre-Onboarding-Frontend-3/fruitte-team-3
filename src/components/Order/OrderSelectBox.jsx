import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const OrderSelectBox = () => {
  return (
    <Container>
      <p>배송메모</p>
      <select name="shipping-memo">
        <option value="0">배송 메모를 선택하세요</option>
        <option value="1">부재 시 현관에 놓아주세요.</option>
        <option value="2">도착 전 연락주세요.</option>
        <option value="3">직접 입력</option>
      </select>
    </Container>
  );
};

export default OrderSelectBox;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    ${fonts.Body1}
  }

  select {
    height: auto;
    line-height: normal;
    padding: 0.6em 0.5em;
    font-family: inherit;
    border: 1px solid ${colors.gray4};
    border-radius: 0;
    border-radius: 4px;
  }
`;
