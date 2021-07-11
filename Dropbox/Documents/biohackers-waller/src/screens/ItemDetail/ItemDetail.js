import React, { useState, useContext } from 'react';
import { Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { Counter } from './../ItemCounter/ItemCounter';
import { ItemDetailStyles } from './ItemDetailStyles'
import { CarritoContext } from "./../../context/ContextoCarrito"
import { BotonCompraFinal } from './../BotonCompraFinal/BotonCompraFinal'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ItemDetailStyles(theme));

export const ItemDetail = ( {producto} ) => {

    const classes = useStyles();
    const [cantidad, setCantidad] = useState(0)
    const [click, setClick] = useState(false)
    const {addProducto, clear} = useContext(CarritoContext)

    const { title, description, price, stock, pictureUrl, alt } = producto

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
        <div className={classes.itemDetail}>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}>
                <Grid item xs={12} lg={4}>
                    <CardMedia
                        component="img"
                        image={pictureUrl}
                        title={alt}
                    />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <h3 className={classes.title}>{title}</h3>
                    <h3 className={classes.description}>{description}</h3>
                    <h4 className={classes.price}>${price}</h4>
                    
                    {
                        click ?
                            <BotonCompraFinal clickCancelar={clickCancelar} />
                            :
                            <Counter stock={stock} initial={1} cantidad={cantidad} agregarProductos={onAdd} />
                    }

                    <h3 className={classes.stock}>{stock} UNIDADES EN STOCK</h3>

                </Grid>
            </Grid>
        </div>
    </>
}