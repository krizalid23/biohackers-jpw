import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Carrito } from './screens/Carrito/Carrito';
import { CartWidget } from './components/CartWidget/CartWidget';
import { CarritoComponentContext } from './context/ContextoCarrito';
import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer';
import { NotFoundComponent } from './components/NotFoundComponent/NotFoundComponent';

import './App.css';


const App = props => {

  return <>
    <div className="App">
      <CarritoComponentContext>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route path="/category/:category">
              <ItemListContainer />
            </Route>
            <Route path="/product/:id">
              <ItemDetailContainer />
            </Route>
            <Route path="/carrito">
              <Carrito />
            </Route>
            <Route path="/notFound">
              <NotFoundComponent />
            </Route>
          </Switch>
        </BrowserRouter>
        <CartWidget />
        </CarritoComponentContext>
    </div>
  </>
}

    export default App;