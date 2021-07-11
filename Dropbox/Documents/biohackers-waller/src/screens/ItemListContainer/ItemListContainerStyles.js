export const ItemListContainerStyles = theme => {

    return ({

        row1: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '2em'
        },

        bienvenida: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          },

        cambot: {
            width: '6em',
            marginTop: '-1%', 
            marginLeft: '0.1%',
        },

        container: {
            display: 'inline-block',
            justifyContent: 'center',
            backgroundColor: 'rgba(19, 17, 17, 0.438)',
            borderRadius: '25px 25px 25px 25px',
            height: '39em',
            width: '80em',
            marginTop: '1.5%',
        },

        items: {
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '1em',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '3fr 3fr 3fr',
            rowGap: '15px'
        },

        linkitems: {
            color: 'transparent'
        },

        loading: {
            fontFamily: 'Silkscreen',
            fontSize: '3em',
            color: 'red',
            textAlign: 'center',
            padding: '18%',
        },

        title: {
            fontFamily: 'Silkscreen',
            fontSize: '1.5em',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 - 1px black'
        },

        description: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 - 1px black'
        },

        price: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
            marginLeft: '3%'
        },

        stock: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            marginLeft: '3%'
        },

        width: {
            width: '8em',
            marginLeft: '-2em'
        },

        "@media (max-width: 768px)": {

            row1: {
                marginTop: '0em',
            },

            bienvenida: {
                fontSize: '14px'
            },

            loading: {
                padding: '18%',
                fontSize: '2em'
            },

            cambot: {
                height: '5em',
                marginTop: '-0.5em'
            },

            container: {            
                alignItems: 'center',
                backgroundColor: 'rgba(19, 17, 17, 0.438)',
                borderRadius: '25px 25px 25px 25px',
                width: '100%',
                height: 'auto',
            },

            items: {
                display: 'flex',
                flexDirection: 'column',
                height: 'auto'
            },

            width: {
                marginLeft: '5px'
            },
        }


    })

}