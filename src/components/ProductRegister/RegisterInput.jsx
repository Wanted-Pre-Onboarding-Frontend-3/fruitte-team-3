import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import {
  newItemInfoState,
  itemCodeState,
  mainImgUrlState,
  detailImgUrlState,
} from '../../utils/registerStore';

const RegisterInput = ({ placeholder, inputData, name }) => {
  const [newItemInfo, setNewItemInfo] = useRecoilState(newItemInfoState);
  const itemCode = useRecoilValue(itemCodeState);
  const mainImage = useRecoilValue(mainImgUrlState);
  const detailImage = useRecoilValue(detailImgUrlState);

  const handleInputData = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setNewItemInfo({
      ...newItemInfo,
      id: itemCode,
      mainImg: mainImage,
      detailImg: detailImage,
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
  margin-bottom: 1em;
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
