import React from 'react';
import { Link } from 'react-router-dom';
import RobotOnMars from './../../img/robotonmars.gif';
import { makeStyles } from '@material-ui/core';
import { NotFoundComponentStyles } from './NotFoundComponentStyles';

const useStyles = makeStyles((theme) => NotFoundComponentStyles(theme));

export const NotFoundComponent = () => {

    const classes = useStyles()

    return <div className={classes.container}>
        <div>
            <h1>ERROR 404 - PAGE NOT FOUND</h1>
            <img src={RobotOnMars} className={classes.robotOnMars} alt='' />
        </div>
        <br></br>
        <Link to={`/#`}><button className={classes.volver}><p className={classes.letras}>VOLVER AL INICIO</p></button></Link>
        <br></br>
    </div>
}