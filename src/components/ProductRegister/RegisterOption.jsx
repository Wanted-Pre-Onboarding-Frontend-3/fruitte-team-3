import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { optSetsState } from '../../utils/registerStore';
import RegisterOptionSet from './RegisterOptionSet';

const RegisterOption = ({ setInputData }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [optSets, setOptSets] = useRecoilState(optSetsState);

  const handleAddOptBtn = () => {
    setIsClicked(true);
    setOptSets([...optSets, optSets.length]);
  };

  return (
    <Container>
      {isClicked && (
        <>
          {optSets.map((id) => (
            <RegisterOptionSet key={id} id={id} />
          ))}
        </>
      )}

      <OptAddBtn onClick={handleAddOptBtn}>추가하기</OptAddBtn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const OptAddBtn = styled.button`
  width: 100%;
  padding: 1em 0.6em;
  font-size: 12px;
  color: ${colors.spring};
  background-color: white;
  border: 1px solid ${colors.spring};
  border-radius: 4px;
  margin: 1em 0;
  text-align: center;
`;

export default RegisterOption;
