import { TiDelete } from 'react-icons/ti';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { optSetsState } from '../../utils/registerStore';
import RegisterInput from './RegisterInput';

const RegisterOptionSet = ({ id }) => {
  const [optSets, setOptSets] = useRecoilState(optSetsState);

  const handleRemoveOption = (id) => {
    setOptSets(optSets.filter((opt) => opt !== id));
  };

  return (
    <Container>
      <Wrapper>
        <DescInput>
          <RegisterInput placeholder={'옵션명'} name={'opt_name'} />
        </DescInput>

        <PriceInput>
          <RegisterInput placeholder={'상품 판매가'} name={'opt_price'} />원
        </PriceInput>
      </Wrapper>

      <OptionButton onClick={() => handleRemoveOption(id)}>
        <TiDelete size="28" />
      </OptionButton>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

const Wrapper = styled.div`
  width: 100%;
  border: 1px dashed ${colors.gray4};
  padding: 1em;
  margin-bottom: 1em;

  input {
    border: none;
    border-bottom: 1px solid ${colors.gray4};

    &:nth-child(1) {
      margin-right: 1em;
    }
    &::placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
    &:focus {
      outline: none;
    }
  }
`;

const DescInput = styled.div`
  width: 97%;
`;

const PriceInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const OptionButton = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: none;
  appearance: none;
  background-color: transparent;
  padding: 0;
  margin-left: 0.3em;
`;

export default RegisterOptionSet;
