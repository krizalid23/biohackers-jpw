import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import CamBot1 from './../../img/camrobot1.gif';
import CamBot2 from './../../img/camrobot2.gif';
import { ItemData } from './../ItemData/ItemsData';
import { ItemList } from './../ItemList/ItemList.js';

const MiPromesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(ItemData), 2000)
})

export const ItemListContainer = () => {

    const { products } = useParams();
    const [data, setData] = useState([]);


    useEffect(() => { MiPromesa.then(data => { setData(data) }).catch(() => <Redirect to={'/notFound'} />) }, [])


    const filterByProducts = listOfProducts => { return products === undefined ? listOfProducts : listOfProducts.filter(ItemData => ItemData.products === products) }

    return <>
        {data.length === 0 ? (
            <section>
                <div className='row'>
                    <img src={CamBot1} id='cambot' title='' alt='' />
                    <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
                    <img src={CamBot2} id='cambot' title='' alt='' />
                </div>
                <div className='container'><h1 className='loader'>CARGANDO...</h1></div>
            </section>
        ) : (
            <section>
                <div className='row'>
                    <img src={CamBot1} id='cambot' title='' alt='' />
                    <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
                    <img src={CamBot2} id='cambot' title='' alt='' />
                </div>
                <div className='container'>
                    <div className='items'>
                    <ItemList data={filterByProducts(data)}/>
                </div>
                </div>
            </section>
        )}
    </>
}