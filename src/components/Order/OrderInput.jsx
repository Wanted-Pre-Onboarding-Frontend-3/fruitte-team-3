import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const OrderInput = (props) => {
  const { label, name, value, onChange, ...otherProps } = props;
  return (
    <InputContainer>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} {...otherProps} />
    </InputContainer>
  );
};

export default OrderInput;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  ${fonts.Body1};

  input {
    width: 70%;
    height: auto;
    line-height: normal;
    padding: 0.6em 0.5em;
    font-family: inherit;
    border: 1px solid ${colors.gray4};
    border-radius: 0;
    outline-style: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 4px;
  }

  input:focus {
    border: 2px solid ${colors.spring};
  }
`;
