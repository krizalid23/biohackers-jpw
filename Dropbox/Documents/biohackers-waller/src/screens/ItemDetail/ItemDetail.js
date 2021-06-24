import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import ItemCounter from './../ItemCounter/ItemCounter.js';


export const ItemDetail = (props) => {

    const { ItemData } = props
    
    return <>
        <Grid container
            xs={12}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}>
            <Grid item xs={12} lg={4}>
                <CardMedia
                    component="img"
                    image={ItemData.pictureUrl}
                />
            </Grid>
            <Grid item xs={12} lg={4}>
                <Typography variant="h3" ><h3>{ItemData.title}</h3></Typography>
                <Typography variant="h5"><h3>{ItemData.description}</h3></Typography>
                <Typography><h4>${ItemData.price}</h4></Typography>
                <ItemCounter />
            </Grid>
        </Grid>
    </>
}