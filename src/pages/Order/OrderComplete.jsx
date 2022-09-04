import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { orderState } from '../../utils/orderStore';

const OrderComplete = () => {
  const order = useRecoilValue(orderState);
  console.log(order);
  return (
    <Container>
      <h1>주문이 완료되었습니다.</h1>
      <p>주문번호: {order[0].orderNumber}</p>
      <div className="btns">
        <Link to="/fruitstore">
          <button>스토어 가기</button>
        </Link>
        <Link to="/mypage/order">
          <button>주문 내역 확인하기</button>
        </Link>
      </div>
    </Container>
  );
};

export default OrderComplete;

const Container = styled.div`
  margin-top: 10rem;

  h1 {
    ${fonts.H1}
    color: ${colors.spring}
  }

  p {
    margin-top: 1rem;
    ${fonts.body1}
    color: ${colors.gray3}
  }

  button {
    border: 0;
    ${fonts.body1};
    color: ${colors.white};
    background: ${colors.spring};
    padding: 1rem 2rem;
    border-radius: 0.4rem;
    margin-right: 1rem;
    margin-top: 2rem;
  }

  button:hover {
    background: ${colors.summer};
  }
`;
