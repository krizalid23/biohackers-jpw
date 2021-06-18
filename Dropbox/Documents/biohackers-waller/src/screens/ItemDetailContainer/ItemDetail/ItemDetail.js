import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Counter from './../../../components/Counter/Counter.js';


export const ItemDetail = props => {

    const { detalleProducto } = props;

    return<>
        <Grid container 
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}>
            <Grid item xs={12} lg={4}>
                    <CardMedia
                        component='img'
                        image= {detalleProducto.picture.pictureUrl}
                        title= {detalleProducto.picture.alt}  
                    />
            </Grid>
            <Grid item xs={12} lg={4}>
                <Typography variant="h3" ><h3>{detalleProducto.title}</h3></Typography>
                <Typography variant="h5"><h3>{detalleProducto.description}</h3></Typography>
                <Typography><h4>${detalleProducto.price}</h4></Typography>        
                <Counter/>
            </Grid>
        </Grid>
    </>
}