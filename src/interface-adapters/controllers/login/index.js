
export const createLoginController = ({
    encryptPassword,
    decryptPassword,
    loginPresenter,
    addSecurePasswordUseCase
}) => ({
    viewModel
}) => ({
    savePasswordAndLogin: ({ password, confirmPassword }) => {
        const presenter = loginPresenter({ viewModel })
        addSecurePasswordUseCase({ 
            presenter
        }).execute({ password, confirmPassword })
    }
})