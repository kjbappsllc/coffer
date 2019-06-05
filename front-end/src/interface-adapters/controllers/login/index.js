
export const createLoginController = ({
    registerUserUseCase,
    loginUserUseCase,
    userGateway
}) => ({
    output
}) => ({
    handleRegister: ({ password, confirmPassword }) => {
        registerUserUseCase({ 
            output,
            userGateway
        }).execute({ password, confirmPassword })
    },
    handleLogin: ({ password }) => {
        loginUserUseCase({
            output,
            userGateway
        }).execute({ password })
    },
    switchToRegister: () => {
        output.switchToRegister()
    },
    switchToLogin: () => {
        output.switchToLogin()
    }
})