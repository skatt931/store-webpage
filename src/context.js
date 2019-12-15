import React, { useState, useEffect } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
// Provider
// Consumer

const ProductProvider = (props) => {
  const [state, setState] = useState({
    products: [],
    details: detailProduct
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
      products: tempProducts
    })
  }

  const handleDetail = () => {
    console.log('hello from the detail'); 
  }

  const addToCart = () => {
    console.log('hello from the Cart'); 
  }

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