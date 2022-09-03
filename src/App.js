import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import OrderComplete from './components/Order/OrderComplete'
import Order from './pages/Order'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/order" element={<Order />} />
                <Route path="/order-complete" element={<OrderComplete />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
