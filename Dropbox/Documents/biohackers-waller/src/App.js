import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ItemListContainer } from './screens/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer';
import { NotFoundComponent } from './components/NotFoundComponent/NotFoundComponent';

import './App.css';


const App = props => {

  return <>
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route path="/category/:category">
            <ItemListContainer/>
          </Route>
          <Route path="/product/:id">
            <ItemDetailContainer/>
          </Route>
          <Route path="/notFound">
            <NotFoundComponent/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </>
}

export default App;