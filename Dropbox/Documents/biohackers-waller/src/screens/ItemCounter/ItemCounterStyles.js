export const ItemCounterStyles = theme => {

    return ({

        contador: {
            display: 'inline-block',
            marginTop: '-7%',
            marginLeft: '5%'
        },

        sumarYRestar: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },

        numero: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
            marginTop: '8%'
        },

        boton: {
            borderStyle: 'solid',
            display: 'inline-block',
            padding: '20px',
            backgroundColor: 'rgb(30, 208, 240)',
            borderRadius: '50%',
            height: '50px',
            margin: '20px',
            cursor: 'pointer'
        },

        signo: {
            fontSize: '15px'
        },

        agregar: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
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

        '@media(max - width: 768px)': {

            boton: {
                padding: '20px'
            },

            numero: {
                fontSize: '14px'
            }
        }

    })

}





