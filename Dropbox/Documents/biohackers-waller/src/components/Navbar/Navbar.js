import React from 'react';
import { Link } from 'react-router-dom';
import ChicaVR from './../../img/chicavr.gif';
import { NavbarStyles } from './NavbarStyles'
import { makeStyles } from '@material-ui/core';
import './Navbar.css'

const useStyles = makeStyles((theme) => NavbarStyles(theme));

export default function Navbar() {

    const classes = useStyles();

    const tangibles = 'tangibles';
    const intangibles = 'intangibles';

    return (
        <header>
            <nav className={classes.navbar}>
                <div className={classes.brandingStyle}>
                    <Link to={`/#`}><img src={ChicaVR} className={classes.logo} alt='' /></Link>
                    <div className={classes.tituloysubtitulo}>
                        <h1>BIOHACKERS</h1>
                        <h2 className={classes.subtitulo}>E-COMMERCE TRANSHUMANISTA</h2>
                    </div>
                </div>
                <ul className={classes.menu}>
                    <Link to={`/#`}><li className={classes.navItem}>HOME</li></Link>
                    <li className={classes.productos}>
                        <li className={classes.navItem}>PRODUCTOS
                            <ul className={classes.dropdown}>
                                <li className={classes.navItem}><Link to={`/category/${tangibles}`}>TANGIBLES</Link></li>
                                <li className={classes.navItem}><Link to={`/category/${intangibles}`}>INTANGIBLES</Link></li>
                            </ul>
                        </li>
                    </li>
                    <Link to={`/carrito`} className={classes.carrito}><li className={classes.navItem}>CARRITO</li></Link>
                </ul>
            </nav>
        </header>
    );

}

