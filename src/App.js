import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProductManage from './pages/productManage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/product-manage" element={<ProductManage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
