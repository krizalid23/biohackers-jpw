export const ItemStyles = theme => {

    return ({

        title: {
            fontFamily: 'Silkscreen',
            color: 'rgb(41, 209, 19)',
            textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'
          },

        img: {
            maxWidth: '10em',
            marginLeft: '30%'
        },

        price: {
            fontFamily: 'Silkscreen',
            color: 'rgb(223, 13, 188)',
            marginLeft: '3%'
        },

        description: {
            fontFamily: 'Silkscreen',
            color: 'rgb(241, 241, 241)',
            margintop: '-3%'
          },          

        "@media (max-width: 768px)": {

            title: {
                fontSize: '14px'
            },

            img: {
                marginLeft: '22%',
                maxWidth: '10em',
                justifyContent: 'center'
            }
        }


    })


}