
export const createRegisterUserUseCase = ({
    encryptPassword
}) => ({
    output: {
        onBeforeRegister,
        onAfterRegister,
        onRegisterError
    },
    userGateway: {
        register
    }
}) => ({
    execute: ({
        password: pass,
        confirmPassword: confirm
    }) => {
        try {
            if (pass !== confirm) {
                throw new Error("Passwords do not match")
            }
        } catch (err) {
            return onRegisterError({ err, pass: null })
        }
        onBeforeRegister()
        return encryptPassword({
            pass
        }).then((encryptedPass) => {
            return register({ encryptedPass })
        }).then(userInfo => {
            return onAfterRegister({ userInfo })
        }).catch((err) => {
            return onRegisterError({ err, pass })
        })
    }

})