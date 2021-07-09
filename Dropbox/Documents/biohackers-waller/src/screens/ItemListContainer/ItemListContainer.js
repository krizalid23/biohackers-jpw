import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import CamBot1 from './../../img/camrobot1.gif';
import CamBot2 from './../../img/camrobot2.gif';
import { ItemListContainerStyles } from './ItemListContainerStyles'
import { ItemList } from './../ItemList/ItemList.js';
import { getProductos } from './../../services/CloudFirestoreService';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ItemListContainerStyles(theme));


export const ItemListContainer = () => {

    const classes = useStyles();

    const [productosAMostrar, setProductosAMostrar] = useState([]);
    const { id } = useParams();

    const getData = () => {
        getProductos(id).then((querySnapshot) => {
            let arrayData = [];
            querySnapshot.forEach((doc) => {
                arrayData.push({ id: doc.id, ...doc.data() });
            });
            setProductosAMostrar(arrayData);
        });
    }

    useEffect(getData, [id]);

    return <>
        {productosAMostrar.length === 0 ? (
            <section>
                <div className={classes.row1}>
                    <img src={CamBot1} className={classes.cambot} alt='' />
                    <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
                    <img src={CamBot2} className={classes.cambot} alt='' />
                </div>
                <div className={classes.container}><h1 className={classes.loader}>CARGANDO...</h1></div>
            </section>
        ) : (
            <section>
                <div className={classes.row1}>
                    <img src={CamBot1} className={classes.cambot} alt='' />
                    <h3>BIENVENIDOS A LA PRIMERA TIENDA DE PRODUCTOS BIOTECNOLOGICOS DE ARGENTINA 2045</h3>
                    <img src={CamBot2} className={classes.cambot} alt='' />
                </div>
                <div className={classes.container}>
                    <div className={classes.items}>
                        <ItemList productos={productosAMostrar} />
                    </div>
                </div>
            </section>
        )}
    </>
}