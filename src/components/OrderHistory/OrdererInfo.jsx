import styled from 'styled-components';

import OrderListHeader from './OrderListHeader';

export default function OrdererInfo({ data }) {
  return (
    <>
      <OrderListHeader subtitle="주문자 정보" />
      <OrdererInfoList>
        <dl>
          <dt>보내는 분 </dt>
          <dd>{data?.orderer_name}</dd>
        </dl>
        <dl>
          <dt>휴대폰</dt>
          <dd>{data?.orderer_phone}</dd>
        </dl>
      </OrdererInfoList>
      <OrderListHeader subtitle="배송 정보" />
      <OrdererInfoList>
        <dl>
          <dt>받는 분 </dt>
          <dd>{data?.deliv_name}</dd>
        </dl>
        <dl>
          <dt>휴대폰</dt>
          <dd>{data?.deliv_Phone}</dd>
        </dl>
        <dl>
          <dt>주소</dt>
          <dd>{data?.address}</dd>
        </dl>
      </OrdererInfoList>
    </>
  );
}

const OrdererInfoList = styled.div`
  padding: 16px 20px;
  dl {
    display: flex;
    padding-top: 20px;
  }

  dt {
    width: 80px;
    margin-right: 10px;
  }

  dd {
    font-weight: 500;
  }
`;
