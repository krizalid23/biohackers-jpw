import React, { useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { Counter } from './../ItemCounter/ItemCounter';
import { CarritoContext } from "./../../context/ContextoCarrito"
import { BotonCompraFinal } from './../BotonCompraFinal/BotonCompraFinal'

export const ItemDetail = (props) => {

    const { producto } = props
    const [cantidad, setCantidad] = useState(0)
    const [click, setClick] = useState(false)
    const {addProducto, clear} = useContext(CarritoContext)

    const onAdd = cantidad => {
        setCantidad(cantidad); 
        setClick(true);
        addProducto({item: producto, quantity: cantidad}) 
    }

    const clickCancelar = () => {
        setClick(false);
        clear();
    }


    return <>
        <div className='itemdetail'>
            <Grid container
                xs={12}
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}>
                <Grid item xs={12} lg={4}>
                    <CardMedia
                        component="img"
                        image={producto.pictureUrl}
                        title={producto.alt}
                    />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <h3 className='title'>{producto.title}</h3>
                    <h3 className='description'>{producto.description}</h3>
                    <h4 className='price'>${producto.price}</h4>
                    
                    {
                        click ?
                            <BotonCompraFinal clickCancelar={clickCancelar} />
                            :
                            <Counter stock={producto.stock} initial={1} cantidad={cantidad} agregarProductos={onAdd} />
                    }

                    <h4 className='stock'>{producto.stock} UNIDADES EN STOCK</h4>

                </Grid>
            </Grid>
        </div>
    </>
}