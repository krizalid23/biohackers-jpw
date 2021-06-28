import React from 'react';
import { Item } from '../Item/Item.js'

export const ItemList = (props) => {

   const { productos } = props

   return <>
      {productos.map((producto, i) => {
         return <div key={i}>
            <Item {...producto} />
         </div>
      })
      }
   </>
}


