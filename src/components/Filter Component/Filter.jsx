import React from 'react';
import Fade from 'react-reveal/Fade';
import './Filter.scss';

const Filter = ({ filterSize, filterOrder, size, order, numberOfProducts }) => {
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
            onChange={(e) => filterSize(e)}
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
            onChange={(e) => filterOrder(e)}
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
