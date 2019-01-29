import colors from '../../../scss/colors.scss'

export const styles = {
    leftPanel: {
        backgroundColor: colors.primaryColor,
        flex: 1,
        minWidth: '150px',
        maxWidth: '350px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightPanel: {
        backgroundColor: colors.whiteColor,
        flex: 2,
        alignItems: 'center',
        paddingTop: '100px'
    },
    logo: {
        width: '60%',
        height: 'auto',
        objectFit: 'contain'
    },
    formCard: {
        width: '375px',
        backgroundColor: 'white'
    },
    input: {
        marginBottom: '15px',
        width: '100%'
    },
    btn: {
        width: '100%',
        fontSize: '12px',
        letterSpacing: '2px',
    },
    formHeader: {
        height: '50px',
        backgroundColor: colors.primaryColor,
        fontSize: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    formContent: {
        padding: '25px'
    }
}