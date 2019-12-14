import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <Fragment>
      <NavBar />
        <Switch>
          <Route path='/' component={ProductList} exact />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
    </Fragment>
  );
}

export default App;
