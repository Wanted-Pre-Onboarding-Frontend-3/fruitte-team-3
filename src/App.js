import { BrowserRouter, Route, Routes } from 'react-router-dom';

import OrderComplete from './components/Order/OrderComplete';
import Order from './pages/Order';
import ProductList from './pages/ProductList/ProductList';
import ProductManage from './pages/productManage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fruitstore" element={<ProductList />} />
        <Route path="/admin/product-manage" element={<ProductManage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-complete" element={<OrderComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
