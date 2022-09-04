import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';
import styled from 'styled-components';

import { fonts } from '../../styles/fonts';
import TableWithCheckbox from './components/tableWithCheckbox';

const tableConfig = {
  colSizes: [6, 10, 50, 17, 17],
  fieldNames: ['상품ID', '상품명', '노출 여부', '삭제하기'],
};
export default function ProductManage() {
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    try {
      const { data } = await axios.get('../mock/product_manage.json');
      setProductList(data);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleDeleteSelected = () => {
    if (window.confirm('선택한 상품들을 삭제하시겠습니까?')) {
      alert(`선택한 상품들이 삭제되었습니다.`);
    }
  };

  const handleProductDisplayToggle = (e) => {
    const isChecked = e.target.checked;
    if (window.confirm('노출 여부를 변경하시겠습니까?')) {
      const { itemId } = e.target.closest('tr[data-item-id]')?.dataset;
      if (itemId) {
        const message = isChecked
          ? '(이)가 노출됩니다.'
          : '(이)가 노출되지 않습니다.';
        setTimeout(() => alert(`상품 ${itemId} ${message}`), 100);
      }
    } else {
      e.target.checked = !isChecked;
    }
  };

  const handleProductDelete = (e) => {
    if (window.confirm('상품을 삭제하시겠습니까?')) {
      const { itemId } = e.target.closest('tr[data-item-id]')?.dataset;
      if (itemId) {
        alert(`상품 ${itemId} (이)가 삭제되었습니다.`);
      }
    }
  };

  const mapProductToManageTable = ({ id, name, isDisplayed, isDeleted }) => ({
    id,
    name,
    isDisplayed: () => (
      <input
        type="checkbox"
        defaultChecked={isDisplayed}
        onClick={handleProductDisplayToggle}
      />
    ),
    isDeleted: () => (
      <button onClick={handleProductDelete} style={{ cursor: 'pointer' }}>
        <BsTrashFill />
      </button>
    ),
  });

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <Container>
      <Title>상품목록 관리</Title>
      <DeleteButton onClick={handleDeleteSelected}>선택삭제</DeleteButton>
      <TableWithCheckbox
        data={productList.map(mapProductToManageTable)}
        config={tableConfig}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 20px 0;
  gap: 20px;
`;

const Title = styled.h1`
  ${fonts.H1};
`;

const DeleteButton = styled.button`
  width: fit-content;
`;
