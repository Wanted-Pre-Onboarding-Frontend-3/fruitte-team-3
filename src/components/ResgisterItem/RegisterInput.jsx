import styled from 'styled-components';

import colors from '../../styles/colors';

const RegisterInput = ({ placeholder, inputData, setInputData, name }) => {
  const handleInputData = (e) => {
    setInputData(e.target.name, e.target.value);
  };

  return (
    <InputContainer>
      <ItemInput
        type="text"
        name={name}
        placeholder={placeholder}
        value={inputData}
        onChange={handleInputData}
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
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
