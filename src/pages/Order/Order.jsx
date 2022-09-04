import OrderInput from '@components/Order/OrderInput';
import OrderSelectBox from '@components/Order/OrderSelectBox';
import TermsAgree from '@components/Order/TermsAgree';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import OrderList from '../../components/Order/OrderList';
import SearchAddress from '../../components/Order/SearchAddress';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { orderState } from '../../utils/orderStore';

const Order = () => {
  const navigate = useNavigate();
  const setOrderState = useSetRecoilState(orderState);

  const [orderList, setOrderList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const orderNumber = Math.floor(Math.random() * 10000000) + 1;
  const orderTime = new Date().toLocaleString();
  console.log(orderTime);

  useEffect(() => {
    const OrderProductsList = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/mock/cart.json',
        );
        setOrderList(response.data);
        let cost = [];
        response.data.map((item) => cost.push(item.total_cost));
        const total_cost = cost.reduce((prev, cur) => prev + cur);
        setTotalCost(total_cost);
      } catch (error) {
        console.error(error);
      }
    };
    OrderProductsList();
  }, []);

  const [inputs, setInputs] = useState({
    ordererName: '',
    ordererPhone: '',
    ordererEmail: '',
    delivName: '',
    delivPhone: '',
    zipcode: '',
    fullAddress: '',
    detailAddress: '',
    payMethodId: 0,
    agree: false,
  });

  const {
    ordererName,
    ordererPhone,
    ordererEmail,
    delivName,
    delivPhone,
    zipcode,
    fullAddress,
    detailAddress,
    payMethodId,
    agree,
  } = inputs;

  const hadleChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [isSameInfo, setIsSameInfo] = useState(false);

  const handleIsSameInfo = () => {
    setIsSameInfo(!isSameInfo);
    if (!isSameInfo) {
      setInputs({
        ...inputs,
        delivName: ordererName,
        delivPhone: ordererPhone,
      });
    }
  };

  const handleAddress = (data) => {
    setInputs({
      ...inputs,
      fullAddress: data.fullAddress,
      zipcode: data.zipcode,
    });
  };

  const handleOrderConfirm = async () => {
    const orderdata = {
      orderNumber,
      orderTime,
      products: orderList,
      totalCost,
      orderer_name: ordererName,
      orderer_phone: ordererPhone,
      orderer_email: ordererEmail,
      deliv_name: delivName,
      deliv_Phone: delivPhone,
      address: fullAddress,
      payMethod: payMethodId,
      agree,
    };
    await setOrderState((prev) => [orderdata, ...prev]);
    navigate('/mypage/order');
  };

  return (
    <Container>
      <h1>주문 결제</h1>
      <h3>주문 상품</h3>
      <OrderList orderList={orderList} />
      <div>
        <span>주문 총액</span>
        <span>{totalCost} 원</span>
      </div>
      <h3>주문자 정보</h3>
      <Wrapper>
        <OrderInput
          label={'보내는 분'}
          name="ordererName"
          value={ordererName}
          onChange={hadleChange}
        />
        <OrderInput
          label={'휴대폰'}
          name="ordererPhone"
          value={ordererPhone}
          onChange={hadleChange}
        />
        <OrderInput
          label={'이메일(선택)'}
          name="ordererEmail"
          type="email"
          value={ordererEmail}
          onChange={hadleChange}
        />
      </Wrapper>
      <h3>배송 정보</h3>
      <Wrapper>
        <input type="checkbox" value={isSameInfo} onClick={handleIsSameInfo} />
        <label>주문자 정보와 동일</label>
        {isSameInfo ? (
          <>
            <OrderInput
              label={'받는 분'}
              name="ordererName"
              value={ordererName}
              onChange={hadleChange}
            />
            <OrderInput
              label={'휴대폰'}
              name="ordererPhone"
              value={ordererPhone}
              onChange={hadleChange}
            />
          </>
        ) : (
          <>
            <OrderInput
              label={'받는 분'}
              name="delivName"
              value={delivName}
              onChange={hadleChange}
            />
            <OrderInput
              label={'휴대폰'}
              name="delivPhone"
              value={delivPhone}
              onChange={hadleChange}
            />
          </>
        )}
        <OrderInput
          label={'우편번호'}
          value={zipcode}
          readOnly={true}
          onChange={hadleChange}
        />
        <SearchAddress handleAddress={handleAddress} />
        <OrderInput
          label={'주소'}
          value={fullAddress}
          readOnly={true}
          onChange={hadleChange}
        />
        <OrderInput
          label={'상세주소'}
          name={detailAddress}
          // value={detailAddress}
          onChange={hadleChange}
        />
        <OrderSelectBox />
      </Wrapper>
      <h3>결제 수단</h3>
      <div>
        <input
          type="radio"
          name="pay"
          id="0"
          defaultChecked
          value={payMethodId}
          onChange={hadleChange}
        />
        <label htmlFor="0">신용카드</label>
        <input
          type="radio"
          name="pay"
          id="1"
          value={payMethodId}
          onChange={hadleChange}
        />
        <label htmlFor="1">무통장입금</label>
        {payMethodId === '1' && <input type="text" placeholder="입금자명" />}
      </div>
      <h3>개인정보 수집/제공</h3>
      <TermsAgree name={agree} onChange={hadleChange} />
      <BtnWrapper>
        <button type="button" onClick={handleOrderConfirm}>
          {totalCost}원 결제하기
        </button>
      </BtnWrapper>
    </Container>
  );
};

export default Order;

const Container = styled.div`
  // margin: 0 auto;

  h1 {
    ${fonts.H1};
  }

  hr {
    color: ${colors.gray4};
  }
  h3 {
    ${fonts.H3};
    color: ${colors.spring};
    margin-top: 5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.gray5};
  }
`;
const Wrapper = styled.div`
  p {
    ${fonts.Body2};
  }
`;

const BtnWrapper = styled.div`
  margin-top: 3rem;

  button {
    border: 0;
    ${fonts.body1};
    color: ${colors.white};
    background: ${colors.spring};
    padding: 1rem 2rem;
    border-radius: 0.4rem;
  }

  button:hover {
    background: ${colors.summer};
  }
`;
