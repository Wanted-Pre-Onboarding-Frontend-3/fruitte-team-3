import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const OrderSelectBox = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <Container>
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        <option value="0">배송 메모를 선택하세요</option>
        <option value="부재 시 현관에 놓아주세요.">
          부재 시 현관에 놓아주세요.
        </option>
        <option value="도착 전 연락주세요.">도착 전 연락주세요.</option>
        <option value="직접 입력">직접 입력</option>
      </select>
    </Container>
  );
};

export default OrderSelectBox;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  ${fonts.Body1}
  font-weight: 600;
  color: ${colors.gray2};

  select {
    width: 70%;
    height: auto;
    line-height: normal;
    padding: 0.6em 0.5em;
    font-family: inherit;
    border: 1px solid ${colors.gray4};
    border-radius: 0;
    border-radius: 4px;
  }
`;
