import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Gnb from '../Gnb';
import RegisterFrame from './RegisterFrame';
import RegisterImgButton from './RegisterImgButton';
import RegisterInput from './RegisterInput';
import RegisterOption from './RegisterOption';

const RegisterItem = () => {
  const [newItemInfo, setNewItemInfo] = useState({});

  // TODO: 기존 상품데이터값 받아오기
  const [itemList, setItemList] = useState([
    { name: '상품1', price: '333원' },
    { name: '상품2', price: '444원' },
  ]);

  const [itemCode, setItemCode] = useState(0);

  useEffect(() => {
    setItemCode(Math.floor(new Date().getTime() + Math.random()));
  }, []);

  const handleInputChange = (key, value) => {
    setNewItemInfo({
      ...newItemInfo,
      id: itemCode,
      [key]: value,
    });
  };

  const submitRequest = async () => {
    try {
      const response = await axios.post('http://localhost:3000/', {
        newItemInfo,
      });

      // TODO: 성공시 메인 화면으로 이동
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddNewItem = () => {
    // TODO: 필수항목 충족시 등록 가능하도록
    // if (window.confirm('상품을 등록하시겠습니까?')) {
    //   submitRequest();
    // }

    setItemList([newItemInfo, ...itemList]);
    console.log(itemList);
  };

  // TODO: 상품정보 제공고시 넣어야 하는지 판단

  return (
    <>
      <Gnb />

      <Container>
        <Title>상품등록</Title>

        <RegisterFrame title="상품코드">{itemCode}</RegisterFrame>

        <RegisterFrame title="상품명 *">
          <RegisterInput
            setInputData={handleInputChange}
            placeholder={'상품명을 입력해주세요'}
            name={'name'}
          />
        </RegisterFrame>

        <RegisterFrame title="상품소개 *">
          <RegisterInput
            setInputData={handleInputChange}
            placeholder={'상품소개를 입력해주세요'}
            name={'desc'}
          />
        </RegisterFrame>

        <RegisterFrame title="상품이미지 *">
          <RegisterImgButton isMultiple={false} imgId={'mainImg'} />
        </RegisterFrame>

        <RegisterFrame title="정가 *">
          <RegisterInput
            setInputData={handleInputChange}
            placeholder={'정가를 입력해주세요'}
            name={'origin_price'}
          />
          원
        </RegisterFrame>

        <RegisterFrame title="할인가">
          <RegisterInput
            setInputData={handleInputChange}
            placeholder={'할인가를 입력해주세요'}
            name={'sale_price'}
          />
          원
        </RegisterFrame>

        <RegisterFrame title="상품옵션 *">
          <RegisterOption setInputData={handleInputChange} />
        </RegisterFrame>

        <RegisterFrame title="원산지 *">
          <RegisterInput
            setInputData={handleInputChange}
            placeholder={'원산지를 입력해주세요'}
            name={'origin'}
          />
        </RegisterFrame>

        <RegisterFrame title="배송비 *">
          <RegisterInput
            setInputData={handleInputChange}
            placeholder={'배송비를 입력해주세요'}
            name={'delivery_fee'}
          />
          원
        </RegisterFrame>

        <RegisterFrame title="상세정보 *">
          <RegisterImgButton isMultiple={true} imgId={'detailImg'} />
        </RegisterFrame>

        <SubmitButton onClick={handleAddNewItem}>저장하기</SubmitButton>
      </Container>
    </>
  );
};

const Container = styled.div`
  min-width: 750px;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;
`;

const Title = styled.h2`
  margin-bottom: 4em;
`;

const SubmitButton = styled.button`
  margin: 6em 0 10em;
`;

export default RegisterItem;
