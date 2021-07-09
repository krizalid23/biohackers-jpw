export const CarritoWidgetStyles = theme => {

    return ({

        carritoWidget: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '-200px',
            width: '8.5em'
        },

        "@media (max-width: 768px)": {

            carritoWidget: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 'auto',
                marginLeft: '18%',
                width: '11.5em'
            },

            drone: {
                width: '5em',
                marginLeft: '1em',
            }
        }

    })
}