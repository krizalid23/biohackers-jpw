import React, { useState } from "react";

export const Counter = props => {

    const {stock, initial, cantidad, addItems} = props;

    const [count, setCount] = useState(initial > cantidad ? initial : cantidad);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    
    return (
        <div className='contador'>
            <div className='sumaryrestar'>
                <button onClick={handleDecrement} className='boton' disabled={count === initial ? true : false}><b className='signo'>-</b></button>
                <h3 className='numero'>{count}</h3>
                <button onClick={handleIncrement} className='boton' disabled={count < stock ? false : true}><b className='signo'>+</b></button>
            </div>
            <button className='agregar' onClick={() => addItems(count)} disabled={stock === 0 ? true : false}><h3 className='letras-boton'>AGREGAR AL CARRITO</h3></button>   
            { count === stock }  
            </div>);
}
