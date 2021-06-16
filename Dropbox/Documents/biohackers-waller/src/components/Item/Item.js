import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';

export const Item = props => {

    const {title, description, price, pictureUrl} = props;
    return<>
        <div>
            <div>
                <CardMedia
                    className='width'
                    component='img'
                    image= {pictureUrl}
                />
                <div>
                   <div className= 'row'>
                    <h3>{title}</h3>
                    <h4>${price}</h4>
                    </div>
                    <h5>{description}</h5>
                </div>
            </div>
        </div>
    </>
}
