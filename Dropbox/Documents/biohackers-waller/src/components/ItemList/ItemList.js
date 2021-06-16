import React, { useState, useEffect } from 'react';
import { Item } from '../Item/Item.js'

const miPromesa = () => {
   return new Promise((resolve, reject) => {

      setTimeout(() => resolve(

         [
            {
               id: '1',
               title: 'USB DE CEREBRO',
               description: 'Esta tecnologia le permitira descargar su consciencia a la virtualidad',
               price: 10000,
               picture: {
                  pictureUrl: 'https://i.imgur.com/C3jirB8.png',
                  alt: 'USB DE CEREBRO',
               },
            },

            {
               id: 2,
               title: 'OXITOCINA DIGITAL',
               description: 'Para el enamoramiento de los cyborgs y hacer ceder a cualquier sistema cibernetico',
               price: 5000,
               picture: {
                  pictureUrl: 'https://i.imgur.com/vnoipMH.gif',
                  alt: 'OXITOCINA DIGITAL',
               },
            },

            {
               id: 3,
               title: 'ADN INMORTAL',
               description: 'Con la enzima de la telomerasa podra retrasar el envejecimiento celular y vivir eternamente',
               price: 30000,
               picture: {
                  pictureUrl: 'https://i.imgur.com/NA8OsGf.png',
                  alt: 'ADN INMORTAL',
               },
            },

            {
               id: 4,
               title: 'OJO BIONICO',
               description: 'La agudeza proporcionada por la vision mediante computadora mejorara su vista de manera increible',
               price: 12500,
               picture: {
                  pictureUrl: 'https://i.imgur.com/3YFSUCo.png',
                  alt: 'OJO BIONICO',
               },
            },

            {
               id: 5,
               title: 'MANOS CYBORG',
               description: '¿Perdio sus extremidades? No se preocupe, llegaron estas prótesis roboticas en su reemplazo',
               price: 8000,
               picture: {
                  pictureUrl: 'https://i.imgur.com/jE26guP.png',
                  alt: 'MANOS CYBORG',
               },
            },

            {
               id: 6,
               title: 'MICROCHIP IMPLANTABLE',
               description: 'Con circuitos electronicos conectados a su sistema nervioso, superara todo tipo de limitaciones',
               price: 2000,
               picture: {
                  pictureUrl: 'https://i.imgur.com/r2NeHJ5.png',
                  alt: 'MICROCHIP IMPLANTABLE',
               },
            }
         ]
      ), 2000)

   })
}

export const ItemList = () => {
   const [data, setData] = useState([]);

   const ejecutarItemList = () => {
      miPromesa().then(dataProductos => {
         setData(dataProductos)
      })
   }

   useEffect(() => {
      ejecutarItemList()
   }, [])

   return <>
      {
         data.length === 0 ? (<div><div /></div>) : (<div className='container'>
            <div>
               <div className='items'>
                  {data.map((element) => <Item
                     title={element.title}
                     description={element.description}
                     price={element.price}
                     pictureUrl={element.picture.pictureUrl}
                     alt={element.picture.alt}
                     stock={element.stock}
                  />)}
               </div>
            </div>
         </div>)
      }
   </>
}
