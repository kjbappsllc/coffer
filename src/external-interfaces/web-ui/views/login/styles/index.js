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
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: '60%',
        height: 'auto',
        objectFit: 'contain'
    },
    formCard: {
        width: '350px',
        backgroundColor: 'white'
    },
    input: {
        marginBottom: '15px'
    },
    btn: {
        backgroundColor: colors.primaryColor,
        width: '100%',
        color: colors.whiteColor,
        fontSize: '14px'
    }
}