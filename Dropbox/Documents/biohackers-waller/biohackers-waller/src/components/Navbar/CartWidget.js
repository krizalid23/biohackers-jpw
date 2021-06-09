import React from 'react';

export default function CartWidget() {

    var image2 = require('./../../img/contador.png');

    return (
        <div className="cart-widget">
            <img src={image2} className='contador' title='' alt='' />
        </div>
    );
}
