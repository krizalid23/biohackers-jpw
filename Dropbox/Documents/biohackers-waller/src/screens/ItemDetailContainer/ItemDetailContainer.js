import React, { useEffect, useState } from 'react';
import { ItemData } from './../ItemData/ItemsData'
import { ItemDetail } from './../ItemDetail/ItemDetail'
import { useParams, Redirect } from 'react-router-dom';


const MiPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(ItemData), 2000)
})

export const ItemDetailContainer = () => {

    const [data, setData] = useState([])

    const { id } = useParams();

    useEffect(() => {
        MiPromesa.then((productos) => {
            const productosFiltrados = productos.filter(ItemData => ItemData.id === id);
            setData(productosFiltrados)
        }).catch(() => <Redirect to={'/notFound'} />)
    }, [id])


    return <>
        {data.length === 0 ? (
            <section><div className='containerdetail'><br></br><br></br><h1 className='loader'>CARGANDO...</h1></div></section>) : (
            data.map((data, i) => {
                return <>
                    <div className='containerdetail'>
                        <div key={i}>
                            <ItemDetail ItemData={data} />
                        </div>
                    </div>
                </>
            })
        )}
    </>
}


