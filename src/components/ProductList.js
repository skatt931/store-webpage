import React, { useContext } from 'react'
import Product from './Product';
import Title from './Title';
import { ProductContext } from '../context';

const ProductList = Component => {
  const productsContext = useContext(ProductContext);

  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="Products" />
          <div className="row">
            {productsContext.products.map((product, index) => {
              return (
               <Product key={product.id} product={product} /> 
              )
            })}
          </div>
        </div>
      </div>
    </>
    // <Product />
  )
}

export default ProductList;
