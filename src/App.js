import { BrowserRouter, Route, Routes } from 'react-router-dom';

import OrderHistory from './pages/OrderHistory/OrderHistory';
import OrderHistoryDetail from './pages/OrderHistory/OrderHistoryDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage/order/:id" element={<OrderHistoryDetail />} />
        <Route path="/mypage/order" element={<OrderHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
