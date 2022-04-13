import React, { useState } from 'react';

import Flip from 'react-reveal/Flip';
import CheckoutForm from '../CheckoutForm Component/CheckoutForm';
import './Cart.scss';

const Cart = ({ cartProducts, removeFromCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const closeForm = () => {
    setIsVisible(false);
  };
  const openForm = () => {
    setIsVisible(true);
  };
  let totalPrice = 0;
  return (
    <div className="cart">
      <div className="cart-header">
        {cartProducts.length <= 0
          ? 'the cart is empty'
          : `Your Cart Has ${cartProducts.length} Products`}
      </div>
      <Flip top cascade>
        <div className="cart-list">
          {cartProducts.map((cartProduct) => {
            totalPrice = totalPrice + cartProduct.price * cartProduct.quantity;
            return (
              <div className="cart-item" key={cartProduct.id}>
                <img src={cartProduct.imageUrl} alt={cartProduct.title} />
                <div className="cart-info">
                  <div>
                    <p>{cartProduct.title}</p>
                    <p>{cartProduct.quantity}</p>
                    <p>${cartProduct.price}</p>
                  </div>
                  <button onClick={() => removeFromCart(cartProduct)}>
                    Remove Product
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Flip>
      {cartProducts.length <= 0 ? (
        <div></div>
      ) : (
        <div className="cart-footer">
          <div className="total">total price: ${totalPrice}</div>
          <button onClick={openForm}>select product</button>
        </div>
      )}
      {isVisible ? <CheckoutForm closeForm={closeForm} /> : null}
    </div>
  );
};

export default Cart;
