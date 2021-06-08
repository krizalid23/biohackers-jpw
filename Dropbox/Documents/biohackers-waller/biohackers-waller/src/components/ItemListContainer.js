import React from 'react';

export default function ItemListContainer() {

  var brainusb = require('./../img/brain.png')
  var digioxi = require('./../img/digitaloxitocine.gif')
  var dnainmortal = require('./../img/dna.png')
  var bioniceye = require('./../img/bioniceye.png')
  var cyborghands = require('./../img/cyborghands.png')
  var microchip = require('./../img/microchip.png')


  return (
    <div className='container'>
      <div className='items'>
        <div>
          <img src={brainusb} id='brainusb' />
          <h3>USB DE CEREBRO</h3>
        </div>
        <div>
          <img src={digioxi} id='digioxi' />
          <h3>OXITOCINA DIGITAL</h3>
        </div>
        <div>
          <img src={dnainmortal} id='dnainmortal' />
          <h3>ADN INMORTAL</h3>
        </div>
        <div>
          <img src={bioniceye} id='bioniceye'/>
          <h3>OJO BIONICO</h3>
        </div>
        <div>
          <img src={cyborghands} id='cyborghands' />
          <h3>MANOS CYBORG</h3>
        </div>
        <div>
          <img src={microchip} id='microchip'/>
          <h3>MICROCHIP<br>
          </br>IMPLANTABLE</h3>
        </div>
      </div>
    </div>
  );
}
