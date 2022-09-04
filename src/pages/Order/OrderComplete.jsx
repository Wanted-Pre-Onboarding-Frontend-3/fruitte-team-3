import React from 'react';
import { useRecoilValue } from 'recoil';

import { orderState } from '../../utils/orderStore';

const OrderComplete = () => {
  const order = useRecoilValue(orderState);
  console.log(order);
  return <div>주문 완료이 완료되었습니다.</div>;
};

export default OrderComplete;
