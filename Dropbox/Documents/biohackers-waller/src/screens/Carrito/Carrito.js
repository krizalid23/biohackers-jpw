import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { CarritoContext } from "./../../context/ContextoCarrito";


export const ProductTable = ({ itemsCarrito, subtotal }) => {

    const { removeItem } = useContext(CarritoContext);

    const history = useHistory();

    return <table className='table-shop'>
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
                <th><h3>Total</h3></th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {itemsCarrito.map((item, i) => {

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
                    <td><button className='botonclose' onClick={e => removeItem(item.id)}><p><b>X</b></p></button></td>
                </tr>
            })
            }

            <div className='carrito-total'>
                <h2>Total del carrito: ${subtotal}</h2>
                <button className='agregar' onClick={() => history.push(`/cart`)}><p className='letras'>Finalizar Compra</p></button>
            </div>

        </tbody>
    </table>
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

    const { itemsCarrito, subtotal } = useContext(CarritoContext);

    return <section>
        {itemsCarrito.length === 0 ? (<CarritoVacio />) : (
            <>
                <div className='container-cart'>
                    <ProductTable itemsCarrito={itemsCarrito} subtotal={subtotal} />
                </div>
            </>
        )}
    </section>
}