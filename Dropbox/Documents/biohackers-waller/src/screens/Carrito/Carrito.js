import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { CarritoContext } from "./../../context/ContextoCarrito";


export const TablaDeProductos = () => {

    const history = useHistory();

    const { productosCarrito, removeProducto, subtotal } = useContext(CarritoContext);

    return <div className='container-cart'>
        <table className='table-shop'>
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
                        <td><button className='botonclose' onClick={e => removeProducto(item.item.id)}><p><b>X</b></p></button></td>
                    </tr>
                })
                }
            </tbody>
        </table>

        <div className='carrito-total'>
            <h2>Total del carrito: ${subtotal}</h2>
            <button className='agregar' onClick={() => history.push(`/cart`)}><p className='letras'>Finalizar Compra</p></button>
        </div>
    </div>
}


const CarritoVacio = () => {

    const history = useHistory();

    return <div className='container-cart'>
        <h3>NO HAY PRODUCTOS EN EL CARRITO :(</h3>
        <div>
            <button className='agregar' onClick={() => history.push(`/`)}><p className='letras'>Volver al inicio</p></button>
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