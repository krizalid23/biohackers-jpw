import React from 'react';
import { Item } from '../Item/Item.js'

export const ItemList = (props) => {

   const { data } = props;

   return <>
      {data.map((data, i) => {
         return <div key={i}>
               <Item {...data} />
            </div>
      })
      }
   </>
}


