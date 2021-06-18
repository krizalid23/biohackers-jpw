import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail/ItemDetail.js'

const myPromiseDetalleProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(
            [
                {
                    id: '1',
                    title: 'USB DE CEREBRO',
                    description: 'Esta tecnologia le permitira descargar su consciencia a la virtualidad',
                    price: 10000,
                    picture: {
                        pictureUrl: 'https://i.imgur.com/C3jirB8.png',
                        alt: 'USB DE CEREBRO',
                    },
                    stock: 10,
                }
            ]
        ), 2000)
    })
}

export const ItemDetailContainer = props => {

    const [detalleProducto, setDetalleProducto] = useState([])

    useEffect(() => {
        myPromiseDetalleProducto()
            .then(response => setDetalleProducto(response))
            .catch(error => console.log(error))
    }, []);

    return <>
        {
            detalleProducto.map((detalle) => <ItemDetail detalleProducto={detalle} />)
        }

    </>
}

