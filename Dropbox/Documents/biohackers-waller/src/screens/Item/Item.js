import React from 'react';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';

export const Item = data => {

    return <div className='item'>
        <Link className='linkitems' to={`product/${data.id}`}>
            <CardMedia
                className='width'
                component='img'
                image={data.pictureUrl}
            />
            <div>
                <div className='row'>
                    <h3>{data.title}</h3>
                    <h4>${data.price}</h4>
                </div>
                <h5>{data.description}</h5>
            </div>
        </Link>
    </div>
}
