import React from 'react';
import { Link } from 'react-router-dom';
import ChicaVR from './../../img/chicavr.gif';

export default function Navbar() {

    const tangibles = 'tangibles';
    const intangibles = 'intangibles';

    return (
        <header>
            <nav className="navbar">
                <div className="branding-style">
                    <Link aria-current="page" to={`/#`}><img src={ChicaVR} className="logo" title='' alt='' /></Link>
                    <div className="tituloysubtitulo">
                        <h1>BIOHACKERS</h1>
                        <h2 className='subtitulo'>E-COMMERCE TRANSHUMANISTA</h2>
                    </div>
                    <ul className='menu'>
                        <Link to={`/#`} className='link'><li className="nav-item">HOME</li></Link>
                        <li className="dropdown--1">
                            <li className="nav-item">PRODUCTOS
                                <ul className="dropdown--2">
                                    <li className="nav-item"><Link to={`/category/${tangibles}`}>TANGIBLES</Link></li>
                                    <li className="nav-item"><Link to={`/category/${intangibles}`}>INTANGIBLES</Link></li>
                                </ul>
                            </li>
                        </li>
                        <Link to={`/cart`} id='carrito'><li className="nav-item">CARRITO</li></Link>
                    </ul>
                </div>
            </nav>
        </header>
    );

}

