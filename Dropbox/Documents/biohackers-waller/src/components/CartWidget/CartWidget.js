import React from 'react';
import RobotSeller from './../../img/robotseller.gif'


export const CartWidget = () => {
 
    return <>
        <div className='column'>
            <img src={RobotSeller} className='column' id='robotseller' alt=''/>
            <h3 className='column'>TU COMPRA (0)</h3>
        </div>
    </>

}