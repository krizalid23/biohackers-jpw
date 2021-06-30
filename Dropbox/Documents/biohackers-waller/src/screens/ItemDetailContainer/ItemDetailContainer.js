import React, { useEffect, useState } from 'react';
import { ItemDetail } from './../ItemDetail/ItemDetail'
import { productoData } from './../ItemData/ItemData'
import { useParams, Redirect } from 'react-router-dom';


const MiPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(productoData), 2000)
})

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])

    const { id } = useParams();

    useEffect(() => {
        MiPromesa.then((productos) => {
            const productosFiltrados = productos.filter(producto => producto.id === id);
            setItem(productosFiltrados)
        }).catch(() => <Redirect to={'/notFound'} />)
    }, [id])


    return <>
        {item.length === 0 ? (
            <section><div className='container-detail'><br></br><br></br><h1 className='loader'>CARGANDO...</h1></div></section>

        ) : (

            item.map((item, i) => {

                return <>
                    <div className='container-detail'>
                        <div key={i}>
                            <ItemDetail producto={item} />
                        </div>
                    </div>
                </>
            })
        )}
    </>
}


