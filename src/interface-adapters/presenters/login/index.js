
export const createLoginPresenter = ({
    updateViewModel
}) => ({
    viewModel: loginViewModel
}) => {
    let viewModel = { ...loginViewModel }
    return {
        onBeforePasswordEncrypted: () => {
            console.log("Password is about to be encrypted")
        },
        onAfterPasswordEncrypted: ({ encryptedPass }) => {
            console.log("Password was encrypted: ", encryptedPass)
        },
        onPasswordEncryptError: ({ err }) => {
            console.log("Password encryption error: ", err.message)
        }
    }
}