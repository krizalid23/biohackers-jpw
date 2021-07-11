export const NavbarStyles = theme => {

    return ({

        navbar: {
            backgroundColor: 'rgba(19, 20, 18, 0.507)',
            height: '5em',
            marginTop: '1px',
            width: '100%'
        },
          
        menu: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5,auto)',
            gridGap: '5px',
            listStyleType: 'none',
            margin: 'auto',
            paddingLeft: '85%',
            marginTop: '-3em'
        },

        navItem: {
            fontFamily: 'Silkscreen',
            color: 'red',
            display: 'flex',
            flexDirection: 'row',
            textDecoration: 'none',
            justifyContent: 'center'
        },

        brandingStyle: {
            display: 'flex',
            flexDirection: 'row'
        },

        logo: {
            width: '7em',
            marginTop: '-1em',
            marginLeft: '0.1%'
        },

        tituloysubtitulo: {
            display: 'flex',
            flexDirection: 'column'

        },

        titulo: {
            fontFamily: 'Silkscreen',
            fontSize: '3em',
            color: 'red',
            textAlign: 'center',
            marginTop: '1%',
          },

        subtitulo: {
            fontFamily: 'Silkscreen',
            fontSize: '1em',
            color: 'rgb(41, 209, 19)',
            marginTop: '-12%'
        },

        productos: {
            fontFamily: 'Silkscreen',
            color: 'red',
            display: 'flex',
            flexDirection: 'row',
            textDecoration: 'none',
            marginLeft: '5%'
        },

        dropdown: {
            width: '4.5em'
        },

        carrito: {
            marginLeft: '5%'
        },

        "@media (max-width: 768px)": {

            tituloysubtitulo: {
                display: 'none'
            },

            logo: {
                marginLeft: '3%'
            },

            menu: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: '-4.5em',
                marginLeft: '-4em'
            },

            productos: {
                marginLeft: '-0.5em',
                marginTop: '3%'
            },

            dropdown: {
                marginLeft: '-3%'
            },

            carrito: {
                marginLeft: '-1em',
                marginTop: '2.5%'
            }

        }

    })
}