import styled from 'styled-components';

import { fonts } from '../../styles/fonts';

const RegisterFrame = ({ title, children }) => {
  return (
    <Container>
      <ItemLeft>{title}</ItemLeft>
      <ItemRight>{children}</ItemRight>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  min-width: 500px;
  height: 100%;
  display: flex;
  margin-bottom: 1em;
  ${fonts.Body2};
`;

const ItemLeft = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  padding: 10px 0 0 10px;
  margin-right: 2em;
  font-weight: bold;
`;

const ItemRight = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
`;

export default RegisterFrame;
