import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './Products.scss';
import data from '../../data/data';

const Products = () => {
  const [products, setProducts] = useState(data);
  const [product, setProduct] = useState('');
  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <img
            src={product.imageUrl}
            alt={product.title}
            onClick={() => setProduct(product)}
          />
          <div className="product-details">
            <p>{product.title}</p>
            <span>${product.price}</span>
          </div>
          <button>Add To Cart</button>
        </div>
      ))}
      <ReactModal
        isOpen={product !== '' ? true : false}
        onRequestClose={() => setProduct('')}
        ariaHideApp={true}
      >
        <span className="modal-closing-button" onClick={() => setProduct('')}>
          &times;
        </span>
        <div className="product-info">
          <img src={product.imageUrl} alt={product.title} />
          <p>{product.title}</p>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      </ReactModal>
    </div>
  );
};

export default Products;
