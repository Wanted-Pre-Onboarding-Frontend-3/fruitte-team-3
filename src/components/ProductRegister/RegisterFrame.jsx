import styled from 'styled-components';

const RegisterFrame = ({ title, children }) => {
  return (
    <Container>
      <ItemLeft>{title}</ItemLeft>
      <ItemRight>{children}</ItemRight>
    </Container>
  );
};

const Container = styled.div`
  width: 40%;
  min-width: 500px;
  height: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ItemLeft = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  padding: 10px 0 0 10px;
  margin-right: 2em;
`;

const ItemRight = styled.div`
  width: 75%;
  display: flex;
  align-items: center;
`;

export default RegisterFrame;
