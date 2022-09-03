import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductList from './pages/ProductList/ProductList';
import ProductManage from './pages/productManage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fruitstore" element={<ProductList />} />
        <Route path="/admin/product-manage" element={<ProductManage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
