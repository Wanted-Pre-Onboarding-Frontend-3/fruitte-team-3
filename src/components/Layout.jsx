import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Gnb from './Gnb';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function Layout() {
  return (
    <Container>
      <Gnb />
      <Outlet />
    </Container>
  );
}
