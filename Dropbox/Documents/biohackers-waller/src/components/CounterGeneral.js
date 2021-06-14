import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    };
    return (
        <div className='contador'>
            <div className='sumaryrestar'>
                <button onClick={handleDecrement} className='boton' disabled={count <=0}><b className='signo'>-</b></button>
                <h3>{count}</h3>
                <button onClick={handleIncrement} className='boton' disabled={count >=10}><b className='signo'>+</b></button>
            </div>       
            <button className='agregar'><h3 className='letras'>AGREGAR AL CARRITO</h3></button>     
            </div>);
}

export default Counter;