import React, { useState } from 'react';
import Header from './components/Header Component/Header';
import Footer from './components/Footer component/Footer';
import Products from './components/Products/Products';
import Filter from './components/Filter Component/Filter';
import data from './data/data';

function App() {
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [size, setSize] = useState('All');
  const [order, setOrder] = useState('');
  const filterSize = (e) => {
    setSize(e.target.value);
    if (e.target.value === 'All') {
      setFilteredProducts(products);
      return;
    }
    let newProducts = products.filter((product) =>
      product.size.includes(e.target.value),
    );
    setFilteredProducts(newProducts);
  };

  const filterOrder = (e) => {
    setOrder(e.target.value);

    let newProducts = products.sort((a, b) => {
      if (e.target.value === 'lowest') {
        return a.price - b.price;
      } else if (e.target.value === 'highest') {
        return b.price - a.price;
      } else if (e.target.value === 'latest') {
        return a.id - b.id;
      }
    });
    setFilteredProducts(newProducts);
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={filteredProducts} />
          <Filter
            filterSize={filterSize}
            size={size}
            filterOrder={filterOrder}
            order={order}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
