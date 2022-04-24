import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_PRODUCTS, ADD_TO_CART } from '../../store/actions/types';
import ReactModal from 'react-modal';
import Flip from 'react-reveal/Flip';
import './Products.scss';

const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  console.log('i am here');
  useEffect(
    () => async () => {
      const responce = await fetch(
        'https://react-shopping-cart449.herokuapp.com/api/products',
      );

      const data = await responce.json();
      dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
      });
    },
    [],
  );

  const addToCart = (product) => {
    const cartItems = [...cart];
    let isFound = false;
    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.quantity++;
        isFound = true;
      }
    });
    if (!isFound) {
      product.quantity = 1;
      cartItems.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    dispatch({ type: ADD_TO_CART, payload: cartItems });
  };
  const [product, setProduct] = useState('');
  const products = useSelector((state) => state.products.filteredProducts);

  return (
    <>
      <Flip left cascade>
        <div className="products">
          {products?.map((product) => (
            <div className="product-item" key={product._id}>
              <img
                src={product.imageUrl}
                alt={product.title}
                onClick={() => setProduct(product)}
              />
              <div className="product-details">
                <p>{product.title}</p>
                <span>${product.price}</span>
              </div>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          ))}
        </div>
      </Flip>
      <ReactModal
        isOpen={product !== '' ? true : false}
        onRequestClose={() => setProduct('')}
        ariaHideApp={true}
      >
        <span className="modal-closing-button" onClick={() => setProduct('')}>
          &times;
        </span>
        <div className="product-info">
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      </ReactModal>
    </>
  );
};

export default Products;
