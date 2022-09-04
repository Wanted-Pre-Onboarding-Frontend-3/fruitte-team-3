import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export default function OrderItemLayout({ detail, data, children }) {
  return (
    <OrderItemWrapper>
      {!detail && (
        <OrderItemHeader>
          <TextSubHeader>{data.orderTime}</TextSubHeader>
          <Link to={`/mypage/order/${data.orderNumber}`}>
            주문내역 상세보기
          </Link>
        </OrderItemHeader>
      )}
      <OrderItemCotents>
        <OrderItemCotent>{children}</OrderItemCotent>
        <OrderItemCotent>
          <TextSubHeader>{data.status}</TextSubHeader>
          <StyledLink to="/">1:1 문의</StyledLink>
        </OrderItemCotent>
      </OrderItemCotents>
    </OrderItemWrapper>
  );
}

const OrderItemWrapper = styled.li`
  padding: 16px 20px;
  margin-bottom: 14px;
`;

const OrderItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0 13px;
  border-bottom: 1px solid ${colors.gray4};
`;

const OrderItemCotents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0 16px;
`;

const OrderItemCotent = styled.div`
  display: flex;
  align-items: center;
`;

const TextSubHeader = styled.p`
  ${fonts.H3}
  margin-right: 20px;
  min-width: 80px;

  @media screen and (max-width: 768px) {
    ${fonts.Body2}
    min-width: 60px;
  }
`;

const StyledLink = styled(Link)`
  width: 100px;
  height: 36px;
  padding: 0 10px;
  border: 1px solid ${colors.spring};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    ${fonts.Body2}
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
