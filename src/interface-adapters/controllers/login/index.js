
export const createLoginController = ({
    encryptPassword,
    decryptPassword,
    loginPresenter,
    addSecurePasswordUseCase
}) => ({
    viewModel
}) => ({
    savePasswordAndLogin: ({ password, confirmPassword }) => console.log("Saving Password ..")
})