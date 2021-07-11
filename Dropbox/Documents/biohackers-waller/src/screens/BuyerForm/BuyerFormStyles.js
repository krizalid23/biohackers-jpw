export const BuyerFormStyles = theme => {

    return ({

        row4: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '3%'
        },

        input: {
            height: '3.5em',
            color: 'red',
            borderRadius: '25px 25px 25px 25px ',
            backgroundColor: 'rgb(63, 191, 191)'
        },

        letras: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
        },

        total: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
            marginLeft: '3%',
            marginTop: '3%'

        },

        confirmar: {
            backgroundColor: 'rgb(79, 16, 141)',
            cursor: 'pointer',
            marginLeft: '38%'
        },

        letrasBoton: {
            fontFamily: 'Silkscreen',
            justifyContent: 'center',
            color: 'white',
            textShadow: 'none'
        },


        "@media (max-width: 768px)": {

            confirmar: {
                marginLeft: 'none'
            },
        }
    })

}