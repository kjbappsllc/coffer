
export const createLoginController = ({
    addSecurePasswordUseCase
}) => ({
    output
}) => ({
    savePasswordAndLogin: ({ password, confirmPassword }) => {
        addSecurePasswordUseCase({ 
            output
        }).execute({ password, confirmPassword })
    }
})