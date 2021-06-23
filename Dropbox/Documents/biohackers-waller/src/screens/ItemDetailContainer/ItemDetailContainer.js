import React, { useEffect, useState } from 'react';
import { ItemData } from './../ItemData/ItemsData.js'
import { ItemDetail } from './../ItemDetail/ItemDetail.js'
import { useParams, Redirect } from 'react-router-dom';


const MiPromesaDetalleProducto = new Promise((resolve, reject) => {
    setTimeout(() => resolve(ItemData), 2000)
})


export const ItemDetailContainer = () => {

    const [detalleProducto, setDetalleProducto] = useState([])

    const { id } = useParams();

    useEffect(() => {
        MiPromesaDetalleProducto.then((data) => {
            const dataFiltrada = data.filter(ItemData => ItemData.id === id);
            setDetalleProducto(dataFiltrada)
        }).catch(() => <Redirect to={'/notFound'} />)
    }, [id])


    return <>
        {detalleProducto.length === 0 ? (<div className='container'><h1 className='loader'>CARGANDO...</h1></div>) : (
            detalleProducto.map((detalleProducto, i) => {
                return <>
                    <section key={i}>
                        <ItemDetail ItemData={detalleProducto} />
                    </section>
                </>
            })
        )}
    </>
}
