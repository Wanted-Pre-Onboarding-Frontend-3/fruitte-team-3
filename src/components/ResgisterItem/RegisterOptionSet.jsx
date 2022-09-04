import styled from 'styled-components';

import colors from '../../styles/colors';
import RegisterInput from './RegisterInput';

const RegisterOptionSet = ({ setInputData, setOptSets, id }) => {
  console.log(id);

  const handleRemoveOption = (id) => {
    // TODO: 버튼 클릭시 해당 옵션박스 삭제 기능 구현
  };

  return (
    <Container>
      <OptSetList>
        <RegisterInput
          setInputData={setInputData}
          placeholder={'옵션명'}
          name={'opt_name'}
        />
        <RegisterInput
          setInputData={setInputData}
          placeholder={'상품 판매가'}
          name={'opt_price'}
        />
        원
        <OptionButton id={id} onClick={handleRemoveOption}>
          X
        </OptionButton>
      </OptSetList>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const OptionButton = styled.button`
  border-radius: 5px;
`;

const OptSetList = styled.div`
  display: flex;

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

export default RegisterOptionSet;
