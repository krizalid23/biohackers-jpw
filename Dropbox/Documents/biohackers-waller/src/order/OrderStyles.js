export const OrderStyles = theme => {

    return ({
        
        containerCarrito: {
            backgroundColor: 'rgba(19, 17, 17, 0.507)',
            borderRadius: '25px 25px 25px 25px',
            height: '33em',
            marginTop: '5em',
        },

        letras: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        },

        loading: {
            fontFamily: 'Silkscreen',
            fontSize: '3em',
            color: 'red',
            textAlign: 'center',
            padding: '18%',
        },

        total: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
            marginLeft: '3%'
        },

        carritoTotal: {
            margin: 'auto'
        },

        finalizar: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        letrasBoton: {
            fontFamily: 'Silkscreen',
            color: 'white',
            textShadow: 'none'
        },

        espera: {
            width: '33em',
            borderRadius: '25px 25px 25px 25px'
        },

        
        row3: {
            display: 'flex',
            flexDirection: 'row'
        },

        botonClose: {
            backgroundColor: '#C01F1F',
            borderStyle: 'solid',
            height: '3em',
            marginTop: '4.5%'
        },

        cruz: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        dialog: {
            borderRadius: '25px 25px 25px 25px'
        },

        dialogContent: {
            backgroundColor: 'rgba(22, 22, 20, 0.87)',
        },

        "@media (max-width: 768px)": {

            loading: {
                padding: '18%',
                fontSize: '2em'
            },

            botonClose: {
                marginTop: '18%',
                marginLeft: '10%'
            },
    
            espera: {
                width: '15em',
                borderRadius: '25px 25px 25px 25px'
            },
        }
    })

}