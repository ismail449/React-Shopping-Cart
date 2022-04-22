import React from 'react';
import ReactModal from 'react-modal';

const OrderModal = ({ order, clearOrder }) => {
  return (
    <>
      {order !== '' ? (
        <ReactModal
          isOpen={order !== '' ? true : false}
          onRequestClose={() => clearOrder()}
          ariaHideApp={true}
        >
          <span className="modal-closing-button" onClick={() => clearOrder()}>
            &times;
          </span>
          <div className="order-info">
            <p className="alert-success">order done successfully</p>
            <table>
              <tbody>
                <tr>
                  <td>name:</td>
                  <td> {order.name} </td>
                </tr>
                <tr>
                  <td>email:</td>
                  <td className="order-email"> {order.email} </td>
                </tr>
                <tr>
                  <td>total price:</td>
                  <td> ${order.total} </td>
                </tr>
                <tr>
                  <td>cart items:</td>
                  <td>
                    {' '}
                    {order.cart.map((item) => (
                      <div className="cart-items" key={item._id}>
                        <p>number of items: {item.quantity}</p>
                        <p>name of the item: {item.title}</p>
                      </div>
                    ))}{' '}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ReactModal>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default OrderModal;
