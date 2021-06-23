import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';

export const Item = Producto => {

    return <div>
        <Link to={`product/${Producto.id}`}>
            <div>
                <CardMedia
                    className='width'
                    component='img'
                    image={Producto.pictureUrl}
                />
                <div>
                    <div className='row'>
                        <h3>{Producto.title}</h3>
                        <h4>${Producto.price}</h4>
                    </div>
                    <h5>{Producto.description}</h5>
                </div>
            </div>
        </Link>
    </div>
}
