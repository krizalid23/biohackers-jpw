export const BotonCompraFinalStyles = theme => {

    return ({

        row2: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        },

        cancelar: {
            backgroundColor: 'rgb(240, 30, 30)',
            cursor: 'pointer'
        },


        finalizar: {
            backgroundColor: 'rgb(31, 207, 7)',
            cursor: 'pointer'
        },

        botonclose: {
            borderStyle: 'solid',
            display: 'inline-block',
            backgroundColor: 'rgb(240, 30, 30)',
            height: '3em',
            width: '3em',
            marginLeft: '1em',
            borderRadius: '25px 25px 25px 25px',
            cursor: 'pointer'
        },

        letrasboton: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },


        "@media (max-width: 768px)": {
            cancelar: {
                backgroundColor: 'rgb(240, 30, 30)',
                width: '10em',
                marginRight: '5%',
                cursor: 'pointer'
            },


            finalizar: {
                backgroundColor: 'rgb(31, 207, 7)',
                width: '10em',
                marginLeft: '5%',
                cursor: 'pointer'
            },


            letrasboton: {
                marginTop: '9%'
            }


        }

    })
}