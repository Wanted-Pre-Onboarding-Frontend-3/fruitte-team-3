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
    console.log(orderdata);
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
          name="ordererName"
          type="text"
          value={ordererName}
          onChange={hadleChange}
        />
        <p>휴대폰</p>
        <input
          name="ordererPhone"
          type="text"
          value={ordererPhone}
          onChange={hadleChange}
        />
        <p>이메일(선택)</p>
        <input
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
        <p>받는 분</p>
        {isSameInfo ? (
          <>
            <input type="text" value={ordererName} readOnly={true} />
            <p>휴대폰</p>
            <input type="text" value={ordererPhone} readOnly={true} />
          </>
        ) : (
          <>
            <input type="text" value={delivName} onChange={hadleChange} />
            <p>휴대폰</p>
            <input type="text" value={delivPhone} onChange={hadleChange} />
          </>
        )}

        <p>주소</p>
        <input
          type="text"
          placeholder="우편번호"
          value={zipcode}
          readOnly={true}
          onChange={hadleChange}
        />
        <SearchAddress handleAddress={handleAddress} />
        <br />
        <input
          type="text"
          placeholder="주소"
          value={fullAddress}
          readOnly={true}
          onChange={hadleChange}
        />
        <br />
        <input
          type="text"
          placeholder="상세주소"
          value={detailAddress}
          onChange={hadleChange}
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
      <input type="checkbox" checked={agree} onChange={hadleChange} />
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
