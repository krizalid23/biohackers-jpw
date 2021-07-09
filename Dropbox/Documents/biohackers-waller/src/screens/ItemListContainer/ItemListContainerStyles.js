export const ItemListContainerStyles = theme => {

    return ({

        section: {
            justifyContent: 'center'
        },

        row1: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '1em'
        },

        cambot: {
            width: '7em',
            marginTop: '-1em',
            marginLeft: '0.1%'
        },

        container: {
            display: 'inline-block',
            justifyContent: 'center',
            backgroundColor: 'rgba(19, 17, 17, 0.438)',
            borderRadius: '25px 25px 25px 25px',
            height: '39em',
            width: '80em',
            marginTop: '1em',
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

        loader: {
            padding: '18%',
            fontSize: '3em'
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
            maxWidth: '10em',
            marginLeft: '20%'
        },


        "@media (max-width: 768px)": {

            row1: {
                marginTop: '-0.1em',
            },

            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'rgba(19, 17, 17, 0.438)',
                borderRadius: '25px 25px 25px 25px',
                width: '100%',
                maxHeight: '102em',
            },

            items: {
                display: 'flex',
                flexDirection: 'column'
            },

            loader: {
                padding: '18%',
                fontSize: '2em'
            },

            cambot: {
                height: '5em',
                marginTop: '1em'
            },
        }


    })

}