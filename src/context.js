import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
// Provider
// Consumer

const ProductProvider = (props) => {
  const [state, setState] = useState({
    products: [],
    detailProduct: detailProduct
  });

  useEffect(() => {
    setProducts();
  }, []);

  const setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });
    setState({
      ...state,
      products: tempProducts
    })
  }

  const getItem = (id) => {
    const product = state.products.find(item => { 
      return item.id === id 
    });

    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);

    setState({
      ...state,
      detailProduct: product,
    });
  };

  const addToCart = (id) => {
    console.log('hello from the Cart ' + id); 
  };

  return (
    <ProductContext.Provider value={{
      ...state,
      handleDetail,
      addToCart
    }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export { ProductProvider, ProductContext }