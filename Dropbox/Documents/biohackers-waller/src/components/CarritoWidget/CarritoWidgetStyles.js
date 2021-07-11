export const CarritoWidgetStyles = theme => {

    return ({

        carritoWidget: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-200px',
            width: '8.5em'
        },

        letras: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        },

        "@media (max-width: 768px)": {

            carritoWidget: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 'auto',
                marginLeft: '28%',
            },

            drone: {
                width: '5em',
                marginLeft: '-2%'
            },

            letras: {
                fontSize: '14px'
            },

        }

    })
}