import React from 'react'



const h1 = {
    fontSize: '3em',
    color: 'red',
    textAlign: 'center',
    marginTop: '-5px',
}

const h2 = {
    fontSize: '1em',
    color: 'rgb(41, 209, 19)',
    marginTop: '-15%',
}

const Style0 = {
    backgroundColor: 'rgba(19, 20, 18, 0.507)',
}


const Style1 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
}


const Style2 = {
    display: "flex",
    flexDirection: "column",
    marginLeft: '-35%',
}


export default function Navbar() {
    return (
        <nav class="NavbarItems" style={Style0}> 
            <div style={Style1}>
                <div style={Style2}>
                    <h1 style={h1}>BIOHACKERS</h1>
                    <h2 style={h2}>E-COMMERCE TRANSHUMANISTA</h2>
                </div>
                <ul style={Style1}>
                    <li className="nav-item"><a className="nav-link" href='#'>HOME</a></li>
                    <li className="nav-item"><a className="nav-link" href='#'>PRODUCTOS</a></li>
                    <li className="nav-item"><a className="nav-link" href='#'>CARRITO</a></li>
                </ul>
            </div>
        </nav>
    );

}

