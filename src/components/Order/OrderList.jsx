import React from 'react';
import styled from 'styled-components';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

const OrderList = (props) => {
  const { orderList, totalShipCost, totalCost } = props;
  return (
    <Wrapper>
      <ul>
        {orderList.map((orderItem, key) => (
          <li key={key}>
            <img src={orderItem.url} alt={orderItem.name} />
            <ul className="name">
              <li>
                <span>{orderItem.name}</span>
              </li>
              <li>
                {orderItem.shipping_cost === 0 ? (
                  <span className="ship">배송비 : 무료</span>
                ) : (
                  <span className="ship">
                    배송비 : {orderItem.shipping_cost} 원
                  </span>
                )}
              </li>
            </ul>
            <span>{orderItem.amount} 개</span>
            <span>{orderItem.price} 원</span>
          </li>
        ))}
      </ul>
      <div className="total">
        <p className="totalship">배송비 {totalShipCost} 원</p>
        <p className="totalcost">총 금액 {totalCost} 원</p>
      </div>
    </Wrapper>
  );
};

export default OrderList;

const Wrapper = styled.div`
  ul {
    list-style: none;
    padding: 0 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  img {
    width: 100px;
    height: 100px;
  }

  .name {
    width: 40%;
  }

  .ship {
    color: ${colors.gray3};
  }

  .total {
    text-align: right;
    padding: 1rem;
    border-top: 2px solid ${colors.gray5};

    p {
      padding-top: 0.5rem;
      ${fonts.H3}
    }

    .totalship {
      ${fonts.Body1}
      color: ${colors.gray3};
    }

    .totalcost {
      color: ${colors.spring};
    }
  }
`;
