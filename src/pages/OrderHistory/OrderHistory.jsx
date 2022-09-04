import { orderState } from '@utils/orderStore';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import LeftMenu from '../../components/OrderHistory/LeftMenu';
import OrderItemLayout from '../../components/OrderHistory/OrderItemLayout';
import OrderListHeader from '../../components/OrderHistory/OrderListHeader';
import UserInfo from '../../components/OrderHistory/UserInfo';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export default function OrderHistory() {
  const orderList = useRecoilValue(orderState);

  return (
    <Background>
      <Container>
        <LeftMenu />
        <RightContainer>
          <UserInfo name={orderList[0]?.orderer_name} />
          <div>
            <OrderListHeader title="주문 내역" />
            <OrderList>
              {orderList?.map((item, i) => (
                <OrderItemLayout
                  key={item.orderNumber}
                  data={item}
                  detail={false}
                >
                  <img src={item.products[0].url} alt="상품 이미지" />
                  <div>
                    <dl>
                      <dt>상품명</dt>
                      <dd>
                        {item.products[0].name} 외 {item.products.length}
                      </dd>
                    </dl>
                    <dl>
                      <dt>주문번호</dt>
                      <dd>{item.orderNumber}</dd>
                    </dl>
                    <dl>
                      <dt>결제방법</dt>
                      <dd>
                        {item.payMethod === 0 ? '신용카드' : '무통장입금'}
                      </dd>
                    </dl>
                    <dl>
                      <dt>결제금액</dt>
                      <dd>
                        {item.products
                          .map((product) => product.price)
                          .reduce((prev, curr) => prev + curr, 0)
                          .toLocaleString('ko-KR')}
                        원
                      </dd>
                    </dl>
                  </div>
                </OrderItemLayout>
              ))}
            </OrderList>
          </div>
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
  max-width: 1280px;
  width: 100%;
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
  dl {
    display: flex;
    padding-top: 6px;
  }

  dt {
    width: 80px;
    margin-right: 10px;
  }

  dd {
    font-weight: 600;
  }

  img {
    width: 60px;
    height: 78px;
    margin-right: 20px;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    ${fonts.Body2}
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
