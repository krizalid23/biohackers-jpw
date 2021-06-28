import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import CamBot1 from './../../img/camrobot1.gif';
import CamBot2 from './../../img/camrobot2.gif';
import { productoData } from './../ItemData/ItemData';
import { ItemList } from './../ItemList/ItemList.js';

const MiPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(productoData), 2000)
})

export const ItemListContainer = () => {

    const { category } = useParams();
    const [productos, setProductos] = useState([]);


    useEffect(() => { MiPromesa.then(data => { setProductos(data) }).catch(() => <Redirect to={'/notFound'} />) }, [])

    const filterByCategory = listOfProductos => { return category === undefined ? listOfProductos : listOfProductos.filter(producto => producto.category === category) }

    return <>
        {productos.length === 0 ? (
            <section>
                <div className='row--1'>
                    <img src={CamBot1} id='cambot' alt='' />
                    <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
                    <img src={CamBot2} id='cambot' alt='' />
                </div>
                <div className='container'><h1 className='loader'>CARGANDO...</h1></div>
            </section>
        ) : (
            <section>
                <div className='row--1'>
                    <img src={CamBot1} id='cambot' alt='' />
                    <h3 className='h3'>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
                    <img src={CamBot2} id='cambot' alt='' />
                </div>
                <div className='container'>
                    <div className='items'>
                    <ItemList productos={filterByCategory(productos)}/>
                </div>
                </div>
            </section>
        )}
    </>
}