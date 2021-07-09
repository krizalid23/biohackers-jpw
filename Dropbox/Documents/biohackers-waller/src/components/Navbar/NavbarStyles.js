export const NavbarStyles = theme => {

    return ({

        navbar: {
            height: '5em',
            marginTop: '1px',
            backgroundColor: 'rgba(19, 20, 18, 0.507)'
        },

        menu: {
            display: 'grid',
            gridTemplateColumns: 'repeat(5,auto)',
            gridGap: '5px',
            listStyleType: 'none',
            margin: 'auto',
            paddingLeft: '85%',
            marginTop: '-3.3em'

        },

        navItem: {
            fontFamily: 'Silkscreen',
            color: 'red',
            display: 'flex',
            flexDirection: 'row',
            textDecoration: 'none'

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

        subtitulo: {
            marginTop: '-12%'
        },

        productos: {
            width: '5em'
        },

        dropdown: {
            width: '5em'
        },

        carrito: {
            marginLeft: '25%'
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
                marginTop: '-26%',
                marginLeft: '-15%'
            },

            productos: {
                marginLeft: '-35%',
                marginTop: '3%'
            },

            dropdown: {
                marginLeft: '-1%'
            },

            carrito: {
                marginLeft: '-15%',
                marginTop: '2.5%'
            }

        }

    })
}