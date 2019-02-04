
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
            if (!pass) {
                throw new Error("Password not provided")
            } else if (!confirm) {
                throw new Error("Confirm password not provided")
            } else if (pass !== confirm) {
                throw new Error("Passwords do not match")
            }
        } catch (err) {
            return onRegisterError({ err: { err: err.message } })
        }
        onBeforeRegister()
        return encryptPassword({
            pass
        }).then((encryptedPass) => {
            return register({ encryptedPass })
        }).then(user => {
            return onAfterRegister({ user })
        }).catch((err) => {
            return onRegisterError({ err })
        })
    }

})