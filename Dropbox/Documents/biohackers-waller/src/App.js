import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './screens/ItemDetailContainer/ItemDetailContainer';
import './App.css';


export default function App() {

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer/>
    </div>
  );
}

