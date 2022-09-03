import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';

import TableWithCheckbox from './components/tableWithCheckbox';

export default function ProductManage() {
  const tableConfig = {
    colSizes: [6, 40, 30, 12, 12],
    fieldNames: ['상품ID', '상품명', '노출 여부', '삭제하기'],
  };
  const [productList, setProductList] = useState([]);

  const getProductList = async () => {
    try {
      const { data } = await axios.get('/mock/product_list_small.json');
      setProductList(data);
    } catch (err) {
      console.warn(err);
    }
  };

  const handleProductDisplayToggle = (e) => {
    const isChecked = e.target.checked;
    if (window.confirm('노출 여부를 변경하시겠습니까?')) {
      const { itemId } = e.target.closest('tr[data-item-id]')?.dataset;
      if (itemId) {
        const message = isChecked ? '가 노출됩니다.' : '가 노출되지 않습니다.';
        setTimeout(() => alert(`상품 ${itemId} ${message}`), 100);
      }
    } else {
      e.target.checked = !isChecked;
    }
  };

  const handleProductDelete = (e) => {
    if (window.confirm('정말로 상품을 삭제하시겠습니까?')) {
      const { itemId } = e.target.closest('tr[data-item-id]')?.dataset;
      if (itemId) {
        alert(`상품 ${itemId} 가 삭제되었습니다.`);
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
    <>
      <h1>상품목록 관리 페이지</h1>
      <TableWithCheckbox
        data={productList.map(mapProductToManageTable)}
        config={tableConfig}
      />
    </>
  );
}
