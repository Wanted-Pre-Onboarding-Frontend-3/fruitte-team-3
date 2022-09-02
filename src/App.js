import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Gnb from './components/Gnb';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gnb />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
