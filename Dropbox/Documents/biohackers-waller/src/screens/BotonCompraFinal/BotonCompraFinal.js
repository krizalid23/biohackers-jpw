import React from 'react';
import { BotonCompraFinalStyles } from './BotonCompraFinalStyles';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => BotonCompraFinalStyles(theme));

export const BotonCompraFinal = props => {

    const classes = useStyles();

    const { clickCancelar } = props;

    return <>
        <div className={classes.row2}>
        <button className={classes.cancelar} onClick={() => clickCancelar(false)}><h3 className={classes.letrasboton}>CANCELAR COMPRA</h3></button>
        <Link to={`/carrito`}><button className={classes.finalizar}><h3 className={classes.letrasboton}>FINALIZAR COMPRA</h3></button></Link>
        </div>
    </>
}