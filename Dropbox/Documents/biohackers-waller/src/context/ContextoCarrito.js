import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoComponentContext = props => {

    const [productosCarrito, setProductosCarrito] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [productosQuantity, setProductosQuantity] = useState(0) 

    const addProducto = productoAgregado => {
        setSubtotal(subtotal + (productoAgregado.item.price * productoAgregado.quantity))
        setProductosQuantity(productosQuantity + productoAgregado.quantity)
        if (productosCarrito.find(productoCarrito => productoCarrito.item.id === productoAgregado.item.id)) {
            const actualizarProducto = productosCarrito.map((productoCarrito) => {
                const cantidadTotal = productoCarrito.quantity + productoAgregado.quantity;
                if (productoCarrito.item.id === productoAgregado.item.id) {
                    return { ...productoCarrito, quantity: cantidadTotal }
                }
                return {productoCarrito}
            })
            setProductosCarrito(actualizarProducto)
        } else {
            setProductosCarrito(productosAgregados => [...productosAgregados, productoAgregado])
        }
    }

    const removeProducto = id => {
        const selectRemoveProducto = productosCarrito.find(productoCarrito => productoCarrito.item.id === id)
        setSubtotal(subtotal - (selectRemoveProducto.item.price * selectRemoveProducto.quantity))
        setProductosQuantity(productosQuantity - selectRemoveProducto.quantity)
        setProductosCarrito(productosCarrito.filter((item) => item.item.id !== id))
    }

    const clear = () => {
        setProductosCarrito([]);
        setSubtotal(0);
        setProductosQuantity(0);
    }


    return <CarritoContext.Provider value={{ addProducto, removeProducto, subtotal, clear, productosCarrito, productosQuantity }}>
        {props.children}
    </CarritoContext.Provider>
}