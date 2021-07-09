import React, { useState } from "react";
import { ItemCounterStyles } from './ItemCounterStyles'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ItemCounterStyles(theme));

export const Counter = props => {

    const classes = useStyles();

    const {stock, initial, cantidad, agregarProductos} = props;

    const [count, setCount] = useState(initial > cantidad ? initial : cantidad);

    const handleIncrement = () => {
        setCount(count + 1);
    };

    const handleDecrement = () => {
        setCount(count - 1);
    };
    
    return (
        <div className={classes.contador}>
            <div className={classes.sumarYRestar}>
                <button onClick={handleDecrement} className={classes.boton} disabled={count === initial ? true : false}><b className={classes.signo}>-</b></button>
                <h3 className={classes.numero}>{count}</h3>
                <button onClick={handleIncrement} className={classes.boton} disabled={count < stock ? false : true}><b className={classes.signo}>+</b></button>
            </div>
            <button className={classes.agregar} onClick={() => agregarProductos(count)} disabled={stock === 0 ? true : false}><h3 className={classes.letrasboton}>AGREGAR AL CARRITO</h3></button>   
            { count === stock }  
            </div>);
}