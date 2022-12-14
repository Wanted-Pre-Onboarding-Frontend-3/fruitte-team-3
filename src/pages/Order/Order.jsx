import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import OrderInput from '../../components/Order/OrderInput';
import OrderList from '../../components/Order/OrderList';
import OrderSelectBox from '../../components/Order/OrderSelectBox';
import SearchAddress from '../../components/Order/SearchAddress';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { orderState } from '../../utils/orderStore';

const Order = () => {
  const navigate = useNavigate();
  const setOrderState = useSetRecoilState(orderState);

  const [orderList, setOrderList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalShipCost, setTotalShipCost] = useState(0);
  const [agree, setAgree] = useState(false);
  const orderNumber = Math.floor(Math.random() * 10000000) + 1;
  const orderTime = new Date().toLocaleString();

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

        const shipCost = response.data.map((item) => item.shipping_cost);
        const totalShip = shipCost.reduce((pre, cur) => pre + cur);
        setTotalShipCost(totalShip);
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
    payerName: '',
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
    shippingMemo,
    payMethodId,
    payerName,
  } = inputs;

  const handleChange = (e) => {
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

  const handleAgree = () => {
    setAgree(!agree);
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
      <Wrapper>
        <OrderList
          orderList={orderList}
          totalShipCost={totalShipCost}
          totalCost={totalCost}
        />
      </Wrapper>
      <h3>주문자 정보</h3>
      <Wrapper>
        <OrderInput
          label={'보내는 분'}
          name="ordererName"
          value={ordererName}
          onChange={handleChange}
        />
        <OrderInput
          label={'휴대폰'}
          name="ordererPhone"
          value={ordererPhone}
          onChange={handleChange}
        />
        <OrderInput
          label={'이메일(선택)'}
          name="ordererEmail"
          type="email"
          value={ordererEmail}
          onChange={handleChange}
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
              onChange={handleChange}
            />
            <OrderInput
              label={'휴대폰'}
              name="ordererPhone"
              value={ordererPhone}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <OrderInput
              label={'받는 분'}
              name="delivName"
              value={delivName}
              onChange={handleChange}
            />
            <OrderInput
              label={'휴대폰'}
              name="delivPhone"
              value={delivPhone}
              onChange={handleChange}
            />
          </>
        )}
        <SearchAddress handleAddress={handleAddress} />
        <OrderInput label={'우편번호'} value={zipcode} readOnly={true} />
        <OrderInput label={'주소'} value={fullAddress} readOnly={true} />
        <OrderInput
          label={'상세주소'}
          name="detailAddress"
          value={detailAddress}
          onChange={handleChange}
        />
        <OrderSelectBox
          label={'배송메모'}
          name={shippingMemo}
          value={shippingMemo}
          onChange={handleChange}
        />
      </Wrapper>
      <h3>결제 수단</h3>
      <Wrapper>
        <input
          type="radio"
          name="payMethodId"
          value={0}
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="0">신용카드</label>
        <input
          type="radio"
          name="payMethodId"
          value={1}
          onChange={handleChange}
        />
        <label htmlFor="1">무통장입금</label>
        {payMethodId === '1' && (
          <input
            className="payerName"
            name="payerName"
            value={payerName}
            placeholder={'입금자명'}
            onChange={handleChange}
          />
        )}
      </Wrapper>
      <h3>개인정보 수집/제공</h3>
      <Wrapper>
        <input
          type="checkbox"
          name="agree"
          onClick={handleAgree}
          value={agree}
        />
        결제 진행 필수 전체 동의
        <BtnWrapper>
          {agree ? (
            <button type="button" onClick={handleOrderConfirm}>
              {totalCost}원 결제하기
            </button>
          ) : (
            <button type="button" onClick={handleOrderConfirm} disabled>
              {totalCost}원 결제하기
            </button>
          )}
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default Order;

const Container = styled.div`
  width: 60%;

  h1 {
    padding-top: 3rem;
    ${fonts.H1};
    color: ${colors.spring};
    text-align: center;
  }

  h3 {
    ${fonts.H3};
    color: ${colors.gray1};
    margin-top: 5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.gray5};
  }

  .payerName {
    margin-left: 0.8rem;
    height: auto;
    line-height: normal;
    padding: 0.6em 0.5em;
  }
`;
const Wrapper = styled.div`
  margin-top: 2rem;
  p {
    ${fonts.Body2};
  }
`;

const BtnWrapper = styled.div`
  margin-top: 3rem;

  button {
    width: 100%;
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

  button:disabled {
    background: ${colors.gray4};
  }
`;
