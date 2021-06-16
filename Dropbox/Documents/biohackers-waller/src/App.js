import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CamBot1 from './img/camrobot1.gif';
import CamBot2 from './img/camrobot2.gif';
import './App.css';


export default function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='row'>
      <img src={CamBot1} id='cambot' title='' alt='' />
        <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
        <img src={CamBot2} id='cambot' title='' alt='' />
      </div>
      <ItemListContainer />
    </div>
  );
}

