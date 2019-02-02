
export const createLoginUserUseCase = ({
    encryptPassword
}) => ({
    output: {
        onBeforeLogin,
        onAfterLogin,
        onLoginError
    },
    userGateway: {
        login
    }
}) => ({
    execute: ({
        password: pass
    }) => {
        onBeforeLogin()
        return encryptPassword({
            pass
        }).then((encryptedPass) => {
            return login({ encryptedPass })
        }).then(user => {
            return onAfterLogin({ user })
        }).catch((err) => {
            return onLoginError({ err, pass })
        })
    }

})