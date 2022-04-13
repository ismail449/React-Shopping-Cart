import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import './CheckoutForm.scss';

const CheckoutForm = ({ closeForm }) => {
  const [formState, setFormState] = useState('');
  const onChange = (name, value) => {
    setFormState((previousState) => ({ ...previousState, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: formState.name,
      email: formState.email,
    };
    console.log(order);
  };
  return (
    <Slide top cascade>
      <div className="checkout-form">
        <span onClick={closeForm} className="close-icon">
          {' '}
          &times;{' '}
        </span>
        <form onSubmit={onSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              required
              name="name"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              required
              name="email"
              onChange={(e) => onChange(e.target.name, e.target.value)}
            />
          </div>
          <div>
            <button type="submit"> Checkout </button>
          </div>
        </form>
      </div>
    </Slide>
  );
};

export default CheckoutForm;
