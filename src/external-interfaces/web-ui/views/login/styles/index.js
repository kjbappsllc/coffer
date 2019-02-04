import colors from '../../../scss/colors.scss'

export const styles = {
    logo: {
        width: '35%',
        height: 'auto',
        objectFit: 'contain'
    },
    logoContainer: {
        paddingTop: '20px',
        marginBottom: '20px'
    },
    formCard: {
        backgroundColor: 'white'
    },
    formAuth: {
        width: '355px'
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
        fontSize: '16px',
        letterSpacing: '2px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white'
    },
    formContent: {
        padding: '25px'
    },
    inputContainer: {
        marginTop: '15px',
        marginBottom: '15px'
    },
    infoContainer: {
        marginTop: '25px',
        fontSize: '14px',
        padding: '14px'
    },
    linkBtn: {
        outline: 'none',
        border: 'none',
        fontSize: '14px',
        padding: '0px 10px'
    }
}