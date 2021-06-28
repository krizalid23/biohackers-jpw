import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';

export const Item = producto => {

    return <div className='item'>
        <Link className='linkitems' to={`/product/${producto.id}`}>
            <CardMedia
                className='width'
                component='img'
                image={producto.pictureUrl}
            />
            <div>
                <div className='row--1'>
                    <h3>{producto.title}</h3>
                    <h4 className='price'>${producto.price}</h4>
                </div>
                <h5>{producto.description}</h5>
            </div>
        </Link>
    </div>
}
