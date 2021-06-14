import React from 'react';
import CartWidget from './CartWidget';

const NavbarStyle = {
    backgroundColor: 'rgba(19, 20, 18, 0.507)',
    width: '100%',
    height: '0%',
}

const BrandingStyle = {
    display: "flex",
    flexDirection: "row",
}

const TituloYSubtituloStyle = {
    display: "flex",
    flexDirection: "column",
}

const MenuStyle = {
    display: "grid",
    gridTemplateColumns: 'repeat(5,auto)',
    gridGap: '20px',
    textAlign: 'center',
    listStyleType: 'none',
}


export default function Navbar() {

    return (
        <nav className="navbarItems" style={NavbarStyle}>
            <div style={BrandingStyle}>
                <img src='./../../img/chicavr.gif' className="logo" title='' alt='' />
                <div style={TituloYSubtituloStyle}>
                    <h1>BIOHACKERS</h1>
                    <h2 className='subtitulo'>E-COMMERCE TRANSHUMANISTA</h2>
                </div>
                <div className='margins'>
                    <ul style={MenuStyle}>
                        <li className="nav-item">HOME</li>
                        <li className="nav-item">PRODUCTOS</li>
                        <li className="nav-item">CARRITO<CartWidget/></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

