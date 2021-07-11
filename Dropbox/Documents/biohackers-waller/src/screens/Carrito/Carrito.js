import React, { useContext } from 'react';
import { Order } from './../../order/order'
import { useHistory } from "react-router-dom";
import { CarritoContext } from "./../../context/ContextoCarrito";
import { CarritoStyles } from './CarritoStyles'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => CarritoStyles(theme));

export const TablaDeProductos = () => {

    const { productosCarrito, removeProducto } = useContext(CarritoContext);
    const classes = useStyles();

    return <div className={classes.table}> 
        <table className={classes.tableShop}>
        <thead>
            <tr>
                <th><h3 className={classes.letras}>Producto</h3></th>
                <th></th>
                <th></th>
                <th></th>
                <th><h3 className={classes.letras}>Precio</h3></th>
                <th></th>
                <th></th>
                <th></th>
                <th><h3 className={classes.letras}>Cantidad</h3></th>
                <th></th>
                <th></th>
                <th><h3 className={classes.letras}>Subtotal</h3></th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {productosCarrito.map((item, i) => {

                return <tr key={i}>
                    <td><h3 className={classes.letras}>{item.item.title}</h3></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><h3 className={classes.letras}>{item.item.price}</h3></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><h3 className={classes.letras}>{item.quantity}</h3></td>
                    <td></td>
                    <td></td>
                    <td><h3 className={classes.letras}> ${item.quantity * item.item.price}</h3></td>
                    <td><button className={classes.botonClose} onClick={e => removeProducto(item.item.id)}><h3 className={classes.cruz}>X</h3></button></td>
                </tr>
            })
            }
        </tbody>
    </table>
    </div>
}

const CarritoVacio = () => {

    const classes = useStyles();
    const history = useHistory();

    return <div className={classes.containerCarrito}>
        <h3 className={classes.letras}>NO HAY PRODUCTOS EN EL CARRITO :(</h3>
        <div>
            <button className={classes.volver} onClick={() => history.push(`/`)}><p className={classes.letrasBoton}>Volver al inicio</p></button>
        </div>
    </div>
}

export const Carrito = () => {

    const classes = useStyles();
    const { productosCarrito, subtotal } = useContext(CarritoContext);


    return <div className={classes.containerCarrito}>
        {productosCarrito.length === 0 ? (<><CarritoVacio /></>) : (
            <>    <TablaDeProductos productosCarrito={productosCarrito} subtotal={subtotal} />
                <Order totalPrice={subtotal}/>
            </>
        )}
    </div>
}