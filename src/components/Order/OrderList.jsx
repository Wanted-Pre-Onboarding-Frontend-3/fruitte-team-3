import React from 'react';
import styled from 'styled-components';

const OrderList = (props) => {
  return (
    <Wrapper>
      <ul>
        {props.orderList.map((orderItem, key) => (
          <li key={key}>
            <img src={orderItem.product_img} />
            <span>{orderItem.product_name}</span>
            <span>{orderItem.stock}</span>
            <span>{orderItem.sale_price}</span>
            <span>{orderItem.options.title}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default OrderList;

const Wrapper = styled.div`
  ul {
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;
