import React from 'react';
import './Cart.scss';

const Cart = ({ cartProducts, removeFromCart }) => {
  let totalPrice = 0;
  return (
    <div className="cart">
      <div className="cart-header">
        {cartProducts.length <= 0
          ? 'the cart is empty'
          : `Your Cart Has ${cartProducts.length} Products`}
      </div>
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
      {cartProducts.length <= 0 ? (
        <div></div>
      ) : (
        <div className="cart-footer">
          <div className="total">total price: ${totalPrice}</div>
          <button>select product</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
