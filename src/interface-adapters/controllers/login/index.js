
export const createLoginController = ({
    registerUserUseCase,
    userGateway
}) => ({
    output
}) => ({
    savePasswordAndLogin: ({ password, confirmPassword }) => {
        registerUserUseCase({ 
            output,
            userGateway
        }).execute({ password, confirmPassword })
    }
})