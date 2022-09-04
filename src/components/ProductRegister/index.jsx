import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';

import {
  itemListState,
  newItemInfoState,
  itemCodeState,
} from '../../utils/registerStore';
import Gnb from '../Gnb';
import RegisterFrame from './RegisterFrame';
import RegisterImgButton from './RegisterImgButton';
import RegisterInput from './RegisterInput';
import RegisterOption from './RegisterOption';

const ProductRegister = () => {
  const [itemCode, setItemCode] = useRecoilState(itemCodeState);
  const newItemInfo = useRecoilValue(newItemInfoState);
  const [itemList, setItemList] = useRecoilState(itemListState);

  const navigate = useNavigate();

  useEffect(() => {
    setItemCode(Math.floor(new Date().getTime() + Math.random()));
  }, []);

  const handleAddNewItem = () => {
    if (window.confirm('상품을 등록하시겠습니까?')) {
      setItemList([...itemList, newItemInfo]);
      console.log(itemList);
    }
  };

  return (
    <>
      <Container>
        <Title>상품등록</Title>

        <RegisterFrame title="상품코드">{itemCode}</RegisterFrame>

        <RegisterFrame title="상품명 *">
          <RegisterInput placeholder={'상품명을 입력해주세요'} name={'name'} />
        </RegisterFrame>

        <RegisterFrame title="상품소개 *">
          <RegisterInput
            placeholder={'상품소개를 입력해주세요'}
            name={'desc'}
          />
        </RegisterFrame>

        <RegisterFrame title="상품이미지 *">
          <RegisterImgButton isMultiple={false} imgId={'mainImg'} />
        </RegisterFrame>

        <RegisterFrame title="정가 *">
          <RegisterInput
            placeholder={'정가를 입력해주세요'}
            name={'origin_price'}
          />
          원
        </RegisterFrame>

        <RegisterFrame title="할인가">
          <RegisterInput
            placeholder={'할인가를 입력해주세요'}
            name={'sale_price'}
          />
          원
        </RegisterFrame>

        <RegisterFrame title="상품옵션 *">
          <RegisterOption />
        </RegisterFrame>

        <RegisterFrame title="원산지 *">
          <RegisterInput
            placeholder={'원산지를 입력해주세요'}
            name={'origin'}
          />
        </RegisterFrame>

        <RegisterFrame title="배송비 *">
          <RegisterInput
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

export default ProductRegister;
