import React from 'react';
import Typewriter from 'typewriter-effect';

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

    var image1 = require('./../../img/camrobot.gif');
    
    var image2 = require('./../../img/contador.png');


    return (
        <nav className="navbarItems" style={NavbarStyle}>
            <div style={BrandingStyle}>
                <img src={image1} className="camrobot" title='CamBot' alt='CamBot' />
                <div style={TituloYSubtituloStyle}>
                    <h1>BIOHACKERS</h1>
                    <h2> <Typewriter onInit={(typewriter) => {
                        typewriter.typeString('E-COMMERCE TRANSHUMANISTA').start();
                    }} /></h2>
                </div>
                <div className='margins'>
                    <ul style={MenuStyle}>
                        <li className="nav-item">HOME</li>
                        <li className="nav-item">PRODUCTOS</li>
                        <li className="nav-item">CARRITO<img src={image2} className='contador' title='Counter' alt='Counter' /></li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

