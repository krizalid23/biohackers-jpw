export const ItemDetailContainerStyles = theme => {

    return ({

        containerDetail: {
            display: 'inline-block',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(19, 17, 17, 0.507)',
            borderRadius: '25px 25px 25px 25px',
            height: '30em',
            width: '60em',
            marginTop: '5em'
        },

        loader: {
            padding: '18%',
            fontSize: '3em'
        },


        "@media (max-width: 768px)": {

            containerDetail: {
                display: 'inline-block',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(19, 17, 17, 0.507)',
                borderRadius: '25px 25px 25px 25px',
                height: '100%',
                width: '100%',
                marginTop: '2em'
            },

            loader: {
                padding: '18%',
                fontSize: '2em'
            },

        }
    })

}
