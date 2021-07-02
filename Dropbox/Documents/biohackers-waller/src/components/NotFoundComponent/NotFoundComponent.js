import React from 'react';
import { Link } from 'react-router-dom';
import RobotOnMars from './../../img/robotonmars.gif';

export const NotFoundComponent = () => {


    return <div className='container'>
        <div>
            <h1>ERROR 404 - PAGE NOT FOUND</h1>
            <img src={RobotOnMars} className='robotonmars' alt='' />
        </div>
        <br></br>
        <Link to={`/#`}><button className='agregar'><p className='letras'>VOLVER AL INICIO</p></button></Link>
        <br></br>
    </div>
}