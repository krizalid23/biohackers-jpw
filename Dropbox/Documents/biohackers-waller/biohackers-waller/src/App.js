import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

export default function App() {

  var cambot1 = require('./img/camrobot1.gif')
  var cambot2 = require('./img/camrobot2.gif')


  return (
    <div className="App">
      <Navbar />
      <div className='row'>
      <img src={cambot1} id='cambot'/>
        <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
        <img src={cambot2} id='cambot'/>
      </div>
      <ItemListContainer />
    </div>
  );
}

