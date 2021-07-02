import React, { createContext, useEffect, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoComponentContext = props => {

    const [itemsCarrito, setItemsCarrito] = useState([]);
    const [subTotal, setSubTotal] = useState(0)

    const IsInCarrito = idProducto => {
        itemsCarrito.find(itemCarrito => itemCarrito.item.id === idProducto)
    }

    const addItem = productoAgregado => {
        setSubTotal(subTotal + (productoAgregado.item.price * productoAgregado.quantity))
        if (IsInCarrito(productoAgregado.item.id)) {
            const actualizarItem = itemsCarrito.map((itemCarrito) => {
                const cantidadTotal = itemCarrito.quantity + productoAgregado.quantity;
                if (itemCarrito.item.id === productoAgregado.item.id) {
                    return { ...itemCarrito, quantity: cantidadTotal }
                }
                return itemCarrito
            })
            setItemsCarrito(actualizarItem)
        } else {
            setItemsCarrito(productosAgregados => [...productosAgregados, productoAgregado])
        }
    }

    const clear = () => {
        setItemsCarrito([])
        setSubTotal(0)
    }

    const removeItem = id => {
        setItemsCarrito(itemsCarrito.filter((item) => item.id !== id));
    }

    useEffect(() => {
        console.log('Carrito actualizado:', itemsCarrito)
    }, [itemsCarrito])

    return <CarritoContext.Provider value={{ itemsCarrito, addItem, clear, removeItem }}>
        {props.children}
    </CarritoContext.Provider>
}