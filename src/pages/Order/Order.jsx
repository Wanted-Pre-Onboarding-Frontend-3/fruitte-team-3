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
      <h1>?????? ??????</h1>
      <h3>?????? ??????</h3>
      <Wrapper>
        <OrderList
          orderList={orderList}
          totalShipCost={totalShipCost}
          totalCost={totalCost}
        />
      </Wrapper>
      <h3>????????? ??????</h3>
      <Wrapper>
        <OrderInput
          label={'????????? ???'}
          name="ordererName"
          value={ordererName}
          onChange={handleChange}
        />
        <OrderInput
          label={'?????????'}
          name="ordererPhone"
          value={ordererPhone}
          onChange={handleChange}
        />
        <OrderInput
          label={'?????????(??????)'}
          name="ordererEmail"
          type="email"
          value={ordererEmail}
          onChange={handleChange}
        />
      </Wrapper>
      <h3>?????? ??????</h3>
      <Wrapper>
        <input type="checkbox" value={isSameInfo} onClick={handleIsSameInfo} />
        <label>????????? ????????? ??????</label>
        {isSameInfo ? (
          <>
            <OrderInput
              label={'?????? ???'}
              name="ordererName"
              value={ordererName}
              onChange={handleChange}
            />
            <OrderInput
              label={'?????????'}
              name="ordererPhone"
              value={ordererPhone}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <OrderInput
              label={'?????? ???'}
              name="delivName"
              value={delivName}
              onChange={handleChange}
            />
            <OrderInput
              label={'?????????'}
              name="delivPhone"
              value={delivPhone}
              onChange={handleChange}
            />
          </>
        )}
        <SearchAddress handleAddress={handleAddress} />
        <OrderInput label={'????????????'} value={zipcode} readOnly={true} />
        <OrderInput label={'??????'} value={fullAddress} readOnly={true} />
        <OrderInput
          label={'????????????'}
          name="detailAddress"
          value={detailAddress}
          onChange={handleChange}
        />
        <OrderSelectBox
          label={'????????????'}
          name={shippingMemo}
          value={shippingMemo}
          onChange={handleChange}
        />
      </Wrapper>
      <h3>?????? ??????</h3>
      <Wrapper>
        <input
          type="radio"
          name="payMethodId"
          value={0}
          onChange={handleChange}
          defaultChecked
        />
        <label htmlFor="0">????????????</label>
        <input
          type="radio"
          name="payMethodId"
          value={1}
          onChange={handleChange}
        />
        <label htmlFor="1">???????????????</label>
        {payMethodId === '1' && (
          <input
            className="payerName"
            name="payerName"
            value={payerName}
            placeholder={'????????????'}
            onChange={handleChange}
          />
        )}
      </Wrapper>
      <h3>???????????? ??????/??????</h3>
      <Wrapper>
        <input
          type="checkbox"
          name="agree"
          onClick={handleAgree}
          value={agree}
        />
        ?????? ?????? ?????? ?????? ??????
        <BtnWrapper>
          {agree ? (
            <button type="button" onClick={handleOrderConfirm}>
              {totalCost}??? ????????????
            </button>
          ) : (
            <button type="button" onClick={handleOrderConfirm} disabled>
              {totalCost}??? ????????????
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
