import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


export const BotonCompraFinal = props => {

    const { clickCancelar } = props;

    const history = useHistory();

    return <>
        <div className='row--2'>
        <Link onClick={() => clickCancelar(false)}><button className='cancelar'><h3 className='letras-boton'>CANCELAR COMPRA</h3></button></Link>
        <Link onClick={() => history.push(`/carrito`)}><button className='finalizar'><h3 className='letras-boton'>FINALIZAR COMPRA</h3></button></Link>
        </div>
    </>
}