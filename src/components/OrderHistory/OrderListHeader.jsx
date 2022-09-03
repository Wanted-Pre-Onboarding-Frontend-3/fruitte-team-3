import styled from 'styled-components';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export default function OrderListHeader({ title, orderNumber }) {
  return (
    <Container>
      <Title>{title}</Title>
      <OrderNumber>{orderNumber}</OrderNumber>
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 2px solid ${colors.black};
`;

const Title = styled.p`
  ${fonts.H2}
  padding-bottom: 27px;
`;

const OrderNumber = styled.p`
  ${fonts.H3}
  padding-bottom: 20px;
`;
