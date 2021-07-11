import React, { useState, useEffect } from 'react';
import { BuyerFormStyles } from './BuyerFormStyles'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => BuyerFormStyles(theme));


class BuyerInfo {
    constructor(nombre, apellido, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }
}

const formInitialState = new BuyerInfo('', '', '', '');
const errorInitialState = { ...new BuyerInfo(false, false, false, false), emailConfirmation: false };
const validationsRegEx = new BuyerInfo(
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[a-zA-ZáéíóúÁÉÍÓÚ][a-zA-ZáéíóúÁÉÍÓÚ \s]*$/,
    /^[^\s@]+@[^\s@]+$/
);

const validationMessages = new BuyerInfo(
    'El nombre solo puede contener letras y apostrofes.',
    'El apellido solo puede contener letras y apostrofes.',
    'Solo admite números sin guiones. Minimo 8 caracteres, máximo 11.',
    'Ingrese un e-mail válido',
);


export const BuyerForm = props => {

    const classes = useStyles();
    const { ended, addOrder, totalPrice } = props;
    const [inputErrors, setInputErrors] = useState(errorInitialState);
    const [buyerFormData, setBuyerFormData] = useState(formInitialState);
    const [formError, setFormError] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        const regExp = validationsRegEx[name];
        if (!regExp.test(value)) {
            setInputErrors({ ...inputErrors, [name]: true });
        } else {
            setInputErrors({ ...inputErrors, [name]: false });
            setBuyerFormData({
                ...buyerFormData,
                [name]: value
            });
        }
    }

    const handleChangeEmailConfirmation = e => {
        const { name, value } = e.target;
        if (buyerFormData['email'].localeCompare(value) !== 0) {
            setInputErrors({ ...inputErrors, [name]: true });
        } else {
            setInputErrors({ ...inputErrors, [name]: false });
        }
    }

    const submitOrder = e => {
        e.preventDefault();
        let formValidation = true;
        for (const prop in buyerFormData) {
            let regExp = validationsRegEx[prop];
            if (!regExp.test(buyerFormData[prop])) {
                formValidation = false;
                break;
            }
        }
        if (formValidation) {
            setFormError(false);
            addOrder(buyerFormData);
        } else {
            setFormError(true);
        }
    }

    useEffect(() => {
        if (ended) {
            setInputErrors(errorInitialState);
            setBuyerFormData(formInitialState);
        }
    }, [ended]);

    return (
        <form onSubmit={submitOrder}>
            <h3 className={classes.letras}>RELLENE LOS CAMPOS</h3>
            <input className={classes.input} placeholder="Ingresa tu nombre." error={inputErrors['nombre']} name="nombre" label="Nombre" required onChange={handleChange} />
            {inputErrors['nombre'] ? <div>
                {validationMessages['nombre']}
            </div> : <></>}
            <input className={classes.input} placeholder="Ingresa tu apellido" error={inputErrors['apellido']} name="apellido" label="Apellido" required onChange={handleChange} />
            {inputErrors['apellido'] ? <div>
                {validationMessages['apellido']}
            </div> : <></>}
            <input className={classes.input} placeholder="Introducí tu email." error={inputErrors['email']} name="email" label="Email" required onChange={handleChange} />
            {inputErrors['email'] ? <div>
                {validationMessages['email']}
            </div> : <></>}
            <input className={classes.input} placeholder="Confirmar email." error={inputErrors['emailConfirmation']} name="emailConfirmation" label="Confirmacion email" required onChange={handleChangeEmailConfirmation} />
            {inputErrors['emailConfirmation'] ? <div>
                Los dos emails deben coincidir.
            </div> : <></>}
            <div className={classes.row4}>
                <div className={classes.total}> Total: ${totalPrice}</div>
                <button className={classes.confirmar} type='submit'>
                    <p className={classes.letrasBoton}>CONFIRMAR PAGO</p>
                </button>
            </div>
            {formError ? <div>Revise los datos del formulario.</div> : <></>}
        </form>
    );
}
