import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import OrderComplete from './components/Order/OrderComplete';
import ProductRegister from './components/ProductRegister';
import Order from './pages/Order/Order';
import OrderHistory from './pages/OrderHistory/OrderHistory';
import OrderHistoryDetail from './pages/OrderHistory/OrderHistoryDetail';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import ProductManage from './pages/productManage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ProductList />} />
          <Route path="/fruitstore/*" element={<ProductDetail />} />
          <Route path="/admin/product-manage" element={<ProductManage />} />
          <Route path="/admin/product-register" element={<ProductRegister />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/mypage/order/:id" element={<OrderHistoryDetail />} />
          <Route path="/mypage/order" element={<OrderHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
