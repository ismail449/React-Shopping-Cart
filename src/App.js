import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Header from './components/Header Component/Header';
import Footer from './components/Footer component/Footer';
import Products from './components/Products/Products';
import Filter from './components/Filter Component/Filter';
import Cart from './components/Cart Component/Cart';

function App() {

  return (
    <Provider store={store}>
      <div className="layout">
        <Header />
        <main>
          <div className="wrapper">
            <Products />
            <Filter />
          </div>
          <Cart  />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
