import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import OrderList from '../components/Order/OrderList';
import SearchAddress from '../components/Order/SearchAddress';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { orderState } from '../utils/orderStore';

const Order = () => {
  const navigate = useNavigate();
  const setOrderState = useSetRecoilState(orderState);

  const [orderList, setOrderList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const OrderProductsList = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/data/cart.json',
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
  const [ordererName, setOdererName] = useState('');
  const [ordererPhone, setOrdererPhone] = useState('');
  const [ordererEmail, setOrdererEmail] = useState('');

  const [isSameInfo, setIsSameInfo] = useState(false);
  const [delivName, setDelivName] = useState('');
  const [delivPhone, setDelivPhone] = useState('');
  const [address, setAddress] = useState({
    zipcode: '',
    fullAddress: '',
    detailAddress: '',
  });

  const [payMethodId, setPayMethodId] = useState(0);
  const [agree, setAgree] = useState(false);

  const handleOdererNameChange = (e) => {
    setOdererName(e.target.value);
  };

  const handleOrdererPhoneChange = (e) => {
    setOrdererPhone(e.target.value);
  };

  const handleOrdererEmailChange = (e) => {
    setOrdererEmail(e.target.value);
  };

  const handleIsSameInfo = () => {
    setIsSameInfo(!isSameInfo);
    if (!isSameInfo) {
      setDelivName(ordererName);
      setDelivPhone(ordererPhone);
    }
  };

  const handelDelivNameChange = (e) => {
    setDelivName(e.target.value);
  };

  const handelDelivPhoneChange = (e) => {
    setDelivPhone(e.target.value);
  };

  const handleAddress = (data) => {
    setAddress({
      fullAddress: data.fullAddress,
      zipcode: data.zipcode,
    });
  };

  const handleDetailAddress = (e) => {
    setAddress({
      ...address,
      detailAddress: e.target.value,
    });
    console.log(address);
  };

  const handlePayMethod = (e) => {
    setPayMethodId(e.target.id);
  };

  const handleTermsAgree = () => {
    setAgree(!agree);
  };

  const handleOrderConfirm = async () => {
    const orderdata = {
      totalCost,
      orderer_name: ordererName,
      orderer_phone: ordererPhone,
      orderer_email: ordererEmail,
      deliv_name: delivName,
      deliv_Phone: delivPhone,
      address: address,
      payMethod: payMethodId,
      agree,
    };
    await setOrderState((prev) => [orderdata, ...prev]);
    navigate('/order-complete');

    console.log('주문 완료');
  };

  return (
    <Container>
      <h1>주문 결제</h1>
      <h3>주문 상품</h3>
      <OrderList orderList={orderList} />
      <h3>주문자 정보</h3>
      <Wrapper>
        <p>보내는 분</p>
        <input
          type="text"
          value={ordererName}
          onChange={handleOdererNameChange}
        />
        <p>휴대폰</p>
        <input
          type="text"
          value={ordererPhone}
          onChange={handleOrdererPhoneChange}
        />
        <p>이메일(선택)</p>
        <input
          type="email"
          value={ordererEmail}
          onChange={handleOrdererEmailChange}
        />
      </Wrapper>
      <h3>배송 정보</h3>
      <Wrapper>
        <input type="checkbox" value={isSameInfo} onClick={handleIsSameInfo} />
        <label>주문자 정보와 동일</label>
        <p>받는 분</p>
        {isSameInfo ? (
          <>
            <input type="text" value={ordererName} readOnly={true} />
            <p>휴대폰</p>
            <input type="text" value={ordererPhone} readOnly={true} />
          </>
        ) : (
          <>
            <input
              type="text"
              value={delivName}
              onChange={handelDelivNameChange}
            />
            <p>휴대폰</p>
            <input
              type="text"
              value={delivPhone}
              onChange={handelDelivPhoneChange}
            />
          </>
        )}

        <p>주소</p>
        <input
          type="text"
          placeholder="우편번호"
          value={address.zipcode}
          readOnly={true}
        />
        <SearchAddress handleAddress={handleAddress} />
        <br />
        <input
          type="text"
          placeholder="주소"
          value={address.fullAddress}
          readOnly={true}
        />
        <br />
        <input
          type="text"
          placeholder="상세주소"
          value={address.detailAddress}
          onChange={handleDetailAddress}
        />
        <p>배송메모</p>
        <select name="shipping-memo">
          <option value="0">배송 메모를 선택하세요</option>
          <option value="1">부재 시 현관에 놓아주세요.</option>
          <option value="2">도착 전 연락주세요.</option>
          <option value="3">직접 입력</option>
        </select>
      </Wrapper>
      <h3>결제 수단</h3>
      <div>
        <input
          type="radio"
          name="pay"
          id="0"
          defaultChecked
          value={payMethodId}
          onChange={handlePayMethod}
        />
        <label htmlFor="0">신용카드</label>
        <input
          type="radio"
          name="pay"
          id="1"
          value={payMethodId}
          onChange={handlePayMethod}
        />
        <label htmlFor="1">무통장입금</label>
        {payMethodId === '1' && <input type="text" placeholder="입금자명" />}
      </div>
      <h3>개인정보 수집/제공</h3>
      <input type="checkbox" checked={agree} onClick={handleTermsAgree} />
      <div>
        <button type="button" onClick={handleOrderConfirm}>
          결제하기
        </button>
      </div>
    </Container>
  );
};

export default Order;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  h1 {
    ${fonts.H1};
  }

  h3 {
    ${fonts.H3};
    color: ${colors.spring};
    margin-top: 5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${colors.gray5};
  }

  input {
    ${fonts.Body2};
  }
`;
const Wrapper = styled.div`
  input {
    width: 50%;
  }
  p {
    ${fonts.Body2};
  }
`;
