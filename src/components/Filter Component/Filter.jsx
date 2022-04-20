import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_BY_SIZE, FILTER_BY_ORDER } from '../../store/actions/types';
import Fade from 'react-reveal/Fade';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.products.order);
  const size = useSelector((state) => state.products.size);
  const filteredProducts = useSelector(
    (state) => state.products.filteredProducts,
  );
  const products = useSelector((state) => state.products.products);
  const numberOfProducts = filteredProducts?.length;

  const filterByOrder = (value) => {
    const cloneProdcts = [...filteredProducts];
    let newProducts = cloneProdcts.sort((a, b) => {
      if (value === 'lowest') {
        return a.price - b.price;
      } else if (value === 'highest') {
        return b.price - a.price;
      } else if (value === 'latest') {
        return a.id - b.id;
      }
    });
    dispatch({
      type: FILTER_BY_ORDER,
      payload: { order: value, products: newProducts },
    });
  };

  const filterBySize = (value) => {
    const cloneProdcts = [...products];
    if (value === 'All') {
      dispatch({
        type: FILTER_BY_SIZE,
        payload: { size: value, products: cloneProdcts },
      });
      return;
    }
    let newProducts = cloneProdcts.filter((product) =>
      product.size.includes(value),
    );
    dispatch({
      type: FILTER_BY_SIZE,
      payload: { size: value, products: newProducts },
    });
  };

  return (
    <Fade top cascade>
      <div className="filter">
        <h2 className="filter-title">Filter</h2>
        <div className="filter-products-number">
          Number of products: {numberOfProducts}
        </div>
        <div className="filter-by-size">
          <span>Filter</span>
          <select
            value={size}
            className="filter-select"
            onChange={(e) => {
              filterBySize(e.target.value);
            }}
          >
            <option value="All">All</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
        <div className="filter-by-order">
          <span>Order</span>
          <select
            value={order}
            onChange={(e) => filterByOrder(e.target.value)}
            className="filter-select"
          >
            <option value="latest">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
      </div>
    </Fade>
  );
};

export default Filter;
