import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
      <br>
      </br>
      <ItemListContainer />
    </div>
  );
}

