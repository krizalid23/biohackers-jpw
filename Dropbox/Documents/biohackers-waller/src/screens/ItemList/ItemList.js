import React from 'react';
import { Item } from '../Item/Item.js'

export const ItemList = ( {productos} ) => {

   return <>
      {productos.map((element, i) => {
         return <div key={i}>
            <Item producto={element} />
         </div>
      })
      }
   </>
}


