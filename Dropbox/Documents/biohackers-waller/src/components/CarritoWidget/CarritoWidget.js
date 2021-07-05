import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Drone from './../../img/drone.gif';
import { CarritoContext } from '../../context/ContextoCarrito';

export const CarritoWidget = () => {

    const { productosCarrito, productosQuantity } = useContext(CarritoContext);

    const DroneFlotante = () => {
        return <>
            <div className='column'>
                <Link className='linkitems' to={`/carrito`}>
                    <img src={Drone} className='column' id='drone' alt='' />
                    <h3>TU COMPRA ({productosQuantity})</h3>
                </Link>
            </div>
        </>
    }

    return <section>
        {productosCarrito.length === 0 ? (<DroneFlotante style={{ visibility: 'hidden' }} />) : (
            <>
                <DroneFlotante />
            </>
        )}
    </section>
}