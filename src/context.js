import React, { useState } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
// Provider
// Consumer

const ProductProvider = (props) => {
  const [state, setstate] = useState({
    products: storeProducts,
    details: detailProduct
  });

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