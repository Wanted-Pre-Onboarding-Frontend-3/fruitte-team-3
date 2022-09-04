import { useState } from 'react';
import styled from 'styled-components';

import RegisterOptionSet from './RegisterOptionSet';

const RegisterOption = ({ setInputData }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [randomId, setRandomId] = useState(Math.random());
  const [optSets, setOptSets] = useState([]);

  // TODO: Math.random() 재사용 고민해보기

  const handleAddOptBtn = () => {
    setIsClicked(true);
    setRandomId(Math.random());
    setOptSets([...optSets, { id: randomId }]);
  };

  return (
    <Container>
      {isClicked && (
        <>
          {optSets.map((opt) => (
            <RegisterOptionSet
              key={Math.random()}
              id={Math.random()}
              setInputData={setInputData}
              setOptSets={setOptSets}
            />
          ))}
        </>
      )}

      <button onClick={handleAddOptBtn}>추가하기</button>
    </Container>
  );
};

const Container = styled.div``;

export default RegisterOption;
