import React, { useState } from 'react';
import './Products.scss';
import data from '../../data/data';

const Products = () => {
  const [products, setProducts] = useState(data);
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.imageUrl} alt={product.title} />
          <div className="product-details">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
