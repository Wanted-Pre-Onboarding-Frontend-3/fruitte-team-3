import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import ProductList from './pages/ProductList/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fruitstore" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
