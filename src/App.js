import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store/store';
import HomePage from './pages/HomePage Component/HomePage';
import OrdersPage from './pages/OrdersPage Component/OrdersPage';
import Header from './components/Header Component/Header';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
        
      </Provider>
    </BrowserRouter>
  );
}

export default App;
