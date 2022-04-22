import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART } from '../../store/actions/types';
import Flip from 'react-reveal/Flip';
import CheckoutForm from '../CheckoutForm Component/CheckoutForm';
import './Cart.scss';

const Cart = () => {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const cartProducts = useSelector((state) => state.cart.cart);

  const removeFromCart = (product) => {
    const cartItems = [...cartProducts];
    cartItems.forEach((item, index) => {
      if (item.id === product.id) {
        if (product.quantity === 1) {
          cartItems.splice(index, 1);
          localStorage.setItem('cart', JSON.stringify(cartItems));
          dispatch({ type: REMOVE_FROM_CART, payload: cartItems });
          return;
        } else {
          let newProduct = { ...product };
          newProduct.quantity--;
          cartItems.splice(index, 1, newProduct);
          localStorage.setItem('cart', JSON.stringify(cartItems));
          dispatch({ type: REMOVE_FROM_CART, payload: cartItems });
          return;
        }
      }
    });
  };
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
        {cartProducts?.length <= 0
          ? 'the cart is empty'
          : `Your Cart Has ${cartProducts?.length} Products`}
      </div>
      <Flip top cascade>
        <div className="cart-list">
          {cartProducts?.map((cartProduct) => {
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
      {cartProducts?.length <= 0 ? (
        <div></div>
      ) : (
        <div className="cart-footer">
          <div className="total">total price: ${totalPrice}</div>
          <button onClick={openForm}>select product</button>
        </div>
      )}
      {isVisible ? (
        <CheckoutForm closeForm={closeForm} totalPrice={totalPrice} />
      ) : null}
    </div>
  );
};

export default Cart;
