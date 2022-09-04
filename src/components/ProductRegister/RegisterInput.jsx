import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import {
  newItemInfoState,
  newOptDataState,
  itemCodeState,
  mainImgUrlState,
  detailImgUrlState,
  itemOptTitleState,
  itemOptPriceState,
} from '../../utils/registerStore';

const RegisterInput = ({ placeholder, inputData, name }) => {
  const [newItemInfo, setNewItemInfo] = useRecoilState(newItemInfoState);
  const itemCode = useRecoilValue(itemCodeState);
  const mainImage = useRecoilValue(mainImgUrlState);
  const detailImage = useRecoilValue(detailImgUrlState);
  const [optTitle, setOptTitle] = useRecoilState(itemOptTitleState);
  const [optPrice, setOptPrice] = useRecoilState(itemOptPriceState);
  const [newOptData, setNewOptData] = useState({});
  const [options, setOptions] = useState([]); // 최종 옵션 모음

  const handleInputData = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    if (key.includes('opt_name')) {
      setOptTitle(value);
    }

    if (key.includes('opt_name')) {
      setOptPrice(value);
    }

    setNewItemInfo({
      ...newItemInfo,
      id: itemCode,
      mainImg: mainImage,
      detailImg: detailImage,
      itemOption: options,
      [key]: value,
    });
  };

  return (
    <Container>
      <ItemInput
        type="text"
        name={name}
        placeholder={placeholder}
        value={inputData}
        onChange={handleInputData}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0.4em;
`;

const ItemInput = styled.input`
  padding: 1em 0.6em;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${colors.gray4};

  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: none;
  }
`;

export default RegisterInput;
