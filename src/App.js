import React, { useState, useEffect } from 'react';
import Header from './components/Header Component/Header';
import Footer from './components/Footer component/Footer';
import Products from './components/Products/Products';
import Filter from './components/Filter Component/Filter';
import Cart from './components/Cart Component/Cart';
import data from './data/data';

function App() {
  const [products, setProducts] = useState(data);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [size, setSize] = useState('All');
  const [order, setOrder] = useState('');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const cartItems = [...cart];
    let isFound = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        product.quantity++;

        isFound = true;
      }
    });
    if (!isFound) {
      product.quantity = 1;
      cartItems.push(product);
    }
    setCart(cartItems);
  };

  const removeFromCart = (product) => {
    const cartItems = [...cart];
    cartItems.forEach((item, index) => {
      if (item.id === product.id) {
        if (product.quantity === 1) {
          cartItems.splice(index, 1);
          setCart(cartItems);
          return;
        } else {
          let newProduct = { ...product };
          newProduct.quantity--;
          cartItems.splice(index, 1, newProduct);
          setCart(cartItems);
          return;
        }
      }
    });
  };

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
          <Products addToCart={addToCart} products={filteredProducts} />
          <Filter
            filterSize={filterSize}
            size={size}
            filterOrder={filterOrder}
            order={order}
            numberOfProducts={filteredProducts.length}
          />
        </div>
        <Cart cartProducts={cart} removeFromCart={removeFromCart} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
