
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
        try {
            if(!pass){
                throw new Error("Password not provided")
            }
        } catch (err) {
            onLoginError({ err: { err: err.message }})
        }
        onBeforeLogin()
        return encryptPassword({
            pass
        }).then((encryptedPass) => {
            return login({ encryptedPass })
        }).then(user => {
            return onAfterLogin({ user })
        }).catch((err) => {
            return onLoginError({ err })
        })
    }

})