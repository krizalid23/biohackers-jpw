export const CarritoStyles = theme => {

    return ({

        containerCarrito: {
            display: 'inline-block',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(19, 17, 17, 0.507)',
            borderRadius: '25px 25px 25px 25px',
            height: '33em',
            width: '60em',
            marginTop: '5em'
        },

        letras: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        botonClose: {
            borderStyle: 'solid',
            display: 'inline-block',
            backgroundColor: 'rgb(240, 30, 30)',
            height: '3em',
            width: '3em',
            marginLeft: '1em',
            borderRadius: '25px 25px 25px 25px',
            cursor: 'pointer'
        },

        tableShop: {
            borderTop: '3px solid',
            borderBottom: '3px solid',
            justifyContent: 'center',
            margin: 'auto'
        },

        carritoTotal: {
            margin: 'auto'
        },

        volver: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        finalizar: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        cruz: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        "@media (max-width: 768px)": {

            containerCarrito: {
                display: 'inline-block',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(19, 17, 17, 0.507)',
                borderRadius: '25px 25px 25px 25px',
                height: '100%',
                width: '100%',
                marginTop: '5em'
            },

            tableShop: {
                flexWrap: 'flex-wrap',
                borderTop: '10px solid',
                borderBottom: '10px solid',
                width: '100%',
                marginLeft: '5%'
            },

            ancho: {
                flexWrap: 'flex-wrap',
                width: '100%'
            }

        }

    })
}