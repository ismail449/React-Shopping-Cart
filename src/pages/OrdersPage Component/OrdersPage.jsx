import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_ORDERS } from '../../store/actions/types';
import Footer from '../../components/Footer component/Footer';
import './OrdersPage.scss';

const OrdersPage = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.order.orders);
  useEffect(
    () => async () => {
      const responce = await fetch('http://localhost:3001/api/orders');

      const data = await responce.json();
      console.log(data);
      dispatch({
        type: FETCH_ORDERS,
        payload: {
          orders: data,
        },
      });
    },
    [dispatch],
  );
  return (
    <>
      {orders ? (
        <div className="orders">
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>total price</th>
                <th>date of order</th>
                <th>list of products</th>

                <th>the amonut</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="orders-name">{order.name}</td>
                  <td className="orders-email">{order.email}</td>
                  <td className="orders-total">${order.total}</td>
                  <td className="orders-creation-date">{order.createdAt}</td>
                  <td className="orders-list">
                    {order.cart.map((item) => (
                      <div key={item._id}>
                        <p className="orders-title">{item.title}</p>
                      </div>
                    ))}
                  </td>
                  <td>
                    {order.cart.map((item) => (
                      <div key={item._id}>
                        <p className="orders-quantity">{item.quantity}</p>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div></div>
      )}
      <Footer />
    </>
  );
};

export default OrdersPage;
