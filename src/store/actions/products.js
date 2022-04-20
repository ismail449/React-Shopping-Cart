import { FILTER_BY_SIZE, FILTER_BY_ORDER } from './types';

export const filterBySize = (products, value) =>  {
  if (value === 'All') {
    return{
      type: FILTER_BY_SIZE,
      data: { size: value, products: products },
    };
    
  }
  let newProducts = products.filter((product) =>
    product.size.includes(value),
  );
  return{
    type: FILTER_BY_SIZE,
    data: { size: value, products: newProducts },
  };
};

export const filterByOrder = (products, value) => {
  let newProducts = products.sort((a, b) => {
    if (value === 'lowest') {
      return a.price - b.price;
    } else if (value === 'highest') {
      return b.price - a.price;
    } else if (value === 'latest') {
      return a.id - b.id;
    }
  });
  return {
    type: FILTER_BY_ORDER,
    data: { order: value, products: newProducts },
  };
};
