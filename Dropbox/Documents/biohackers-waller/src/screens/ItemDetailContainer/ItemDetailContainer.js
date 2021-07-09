import React, { useEffect, useState } from 'react';
import { ItemDetail } from './../ItemDetail/ItemDetail'
import { getProductoById } from './../../services/CloudFirestoreService';
import { useParams } from 'react-router-dom';
import { ItemDetailContainerStyles } from './ItemDetailContainerStyles'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ItemDetailContainerStyles(theme));


export const ItemDetailContainer = () => {

    const classes = useStyles();
    const { id } = useParams();

    const [item, setItem] = useState([])
    const [mostrarDetalle, setMostrarDetalle] = useState(false);
    const [itemNoEncontrado, setItemNoEncontrado] = useState(false);

    const getItem = () => {
        setMostrarDetalle(false);
        getProductoById(id).then((doc) => {
            if (doc.exists) {
                setItem({ id: doc.id, ...doc.data() });
            } else {
                setItemNoEncontrado(true);
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            setItemNoEncontrado(true);
        }).finally(() => {
            setMostrarDetalle(true);
        });
    }

    useEffect(getItem, [id]);

    return (
        <div>
            {
                mostrarDetalle ? <>
                    {itemNoEncontrado ? <h1>¡Ups! Ese item no se encuentra en nuestro catálogo.</h1> :
                        <div className={classes.containerDetail}>
                            <ItemDetail producto={item} />
                        </div>
                    }
                </> :
                    <div>
                    </div>
            }
        </div>
    );
}