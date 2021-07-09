import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { CarritoContext } from "./../../context/ContextoCarrito";
import { CarritoStyles } from './CarritoStyles'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => CarritoStyles(theme));

export const TablaDeProductos = () => {

    
    const classes = useStyles();


    const history = useHistory();

    const { productosCarrito, removeProducto, subtotal } = useContext(CarritoContext);

    return <div className={classes.containerCarrito}>
        <table className={classes.tableShop}>
            <thead>
                <tr>
                    <th><h3>Producto</h3></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th><h3>Precio</h3></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th><h3>Cantidad</h3></th>
                    <th></th>
                    <th></th>
                    <th><h3>Subtotal</h3></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {productosCarrito.map((item, i) => {

                    return <tr key={i}>
                        <td><h3>{item.item.title}</h3></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><h3>{item.item.price}</h3></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><h3>{item.quantity}</h3></td>
                        <td></td>
                        <td></td>
                        <td><h3> ${item.quantity * item.item.price}</h3></td>
                        <td><button className={classes.botonClose} onClick={e => removeProducto(item.item.id)}><h3 className={classes.cruz}>X</h3></button></td>
                    </tr>
                })
                }
            </tbody>
        </table>

        <div className={classes.carritoTotal}>
            <h2>Total del carrito: ${subtotal}</h2>
            <button className={classes.finalizar} onClick={() => history.push(`/cart`)}><p className={classes.letras}>Finalizar Compra</p></button>
        </div>
    </div>
}


const CarritoVacio = () => {

    const classes = useStyles();

    const history = useHistory();

    return <div className={classes.containerCarrito}>
        <h3>NO HAY PRODUCTOS EN EL CARRITO :(</h3>
        <div>
            <button className={classes.volver} onClick={() => history.push(`/`)}><p className={classes.letras}>Volver al inicio</p></button>
        </div>
    </div>
}



export const Carrito = () => {

    const { productosCarrito, subtotal } = useContext(CarritoContext);

    return <section>
        {productosCarrito.length === 0 ? (<CarritoVacio />) : (
            <>
                <TablaDeProductos productosCarrito={productosCarrito} subtotal={subtotal} />
            </>
        )}
    </section>
}