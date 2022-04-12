import React from 'react';
import './Cart.scss';

const Cart = ({ cartProducts, removeFromCart }) => {
  return (
    <div className="cart">
      <div className="cart-header">
        {cartProducts.length <= 0
          ? 'the cart is empty'
          : `Your Cart Has ${cartProducts.length} Products`}
      </div>
      <div className="cart-list">
        {cartProducts.map((cartProduct) => (
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
        ))}
      </div>
    </div>
  );
};

export default Cart;
