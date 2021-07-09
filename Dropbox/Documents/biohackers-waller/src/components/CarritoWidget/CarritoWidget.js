import React, { useContext } from 'react';
import Drone from './../../img/drone.gif';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/ContextoCarrito';
import { CarritoWidgetStyles } from './CarritoWidgetStyles'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => CarritoWidgetStyles(theme));

export const CarritoWidget = () => {

    const { productosQuantity } = useContext(CarritoContext);

    const classes = useStyles();

    const DroneFlotante = () => {
        return <>
            <div className={classes.carritoWidget}>
                <Link to={`/carrito`} style={{ color: 'transparent' }}>
                    <div className={classes.carritoWidget}><img src={Drone} className={classes.drone} alt='' /></div>
                    <h3>TU COMPRA ({productosQuantity})</h3>
                </Link>
            </div>
        </>
    }

    return <section>
        <DroneFlotante />
    </section>
}