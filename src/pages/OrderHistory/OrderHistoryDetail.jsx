import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import LeftMenu from '../../components/OrderHistory/LeftMenu';
import OrdererInfo from '../../components/OrderHistory/OrdererInfo';
import OrderItemLayout from '../../components/OrderHistory/OrderItemLayout';
import OrderListHeader from '../../components/OrderHistory/OrderListHeader';
import UserInfo from '../../components/OrderHistory/UserInfo';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { orderState } from '../../utils/orderStore';

export default function OrderHistoryDetail() {
  const orderList = useRecoilValue(orderState);

  const { id } = useParams();
  const [order, setOrder] = useState();

  function isOrderNumber(el) {
    if (el.orderNumber === Number(id)) {
      return true;
    }
  }
  useEffect(() => {
    setOrder(orderList.find(isOrderNumber));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Container>
        <LeftMenu />
        <RightContainer>
          <UserInfo name={orderList[0].orderer_name} />
          <div>
            <OrderListHeader title="주문 내역 상세" subtitle={id} />
            <OrderList>
              {order?.products?.map((item, idx) => (
                <OrderItemLayout
                  key={item?.name.toString() + idx?.toString()}
                  detail={true}
                  data={item}
                >
                  <img src={item.url} alt="상품 이미지" />
                  <div>
                    <ItemName>{item.name}</ItemName>
                    <ItemInfo>{item.price.toLocaleString('ko-KR')}원</ItemInfo>
                    <ItemInfo>{item.amount}개</ItemInfo>
                  </div>
                </OrderItemLayout>
              ))}
            </OrderList>
          </div>
          <OrdererInfo data={order} />
        </RightContainer>
      </Container>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  background-color: ${colors.gray6};
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1280px;
  padding: 80px 10px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightContainer = styled.div`
  width: 100%;
`;

const OrderList = styled.ul`
  img {
    width: 60px;
    height: 78px;
    margin-right: 20px;
    object-fit: cover;
  }
`;

const ItemName = styled.p`
  ${fonts.Body1}
  font-weight: 600;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    ${fonts.Body2}
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const ItemInfo = styled.span`
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    ${fonts.Body2}
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
