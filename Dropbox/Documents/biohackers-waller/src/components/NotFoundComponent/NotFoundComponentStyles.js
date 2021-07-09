export const NotFoundComponentStyles = theme => {

    return ({

        container: {
            display: 'inline-block',
            justifyContent: 'center',
            backgroundColor: 'rgba(19, 17, 17, 0.438)',
            borderRadius: '25px 25px 25px 25px',
            height: '40em',
            width: '80em',
            marginTop: '1em'
        },

        robotOnMars: {
            width: '24em',
            borderRadius: '25px 25px 25px 25px'
        },

        volver: {
            backgroundColor: 'rgb(233, 30, 240)',
            cursor: 'pointer'
        },

        letras: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },

        "@media (max-width: 768px)": {

            container: {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(19, 17, 17, 0.438)',
                borderRadius: '25px 25px 25px 25px',
                width: '100%',
            },

            robotOnMars: {
                width: '15em',
                borderRadius: '25px 25px 25px 25px'
            }
        }

    })
}
