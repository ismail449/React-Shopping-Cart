import React from 'react';
import Products from '../../components/Products/Products';
import Filter from '../../components/Filter Component/Filter';
import Cart from '../../components/Cart Component/Cart';
import Footer from '../../components/Footer component/Footer';

const HomePage = () => {
  return (
    <div className="layout">
      <main>
        <div className="wrapper">
          <Products />
          <Filter />
        </div>
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
