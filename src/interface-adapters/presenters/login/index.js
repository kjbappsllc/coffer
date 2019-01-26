
export const createLoginPresenter = ({
    updateView
}) => ({
    viewModel: loginViewModel,
    state
}) => {
    let viewModel = { ...loginViewModel }
    const { subscribeToState } = state
    let unsubscribe = subscribeToState({
        selector: ({
            test: {
                label
            }
        }) => ((viewModel = {...viewModel, label } )),
        cb: () => {
            console.log("Login Presenter Received State Update ...")
            updateView(viewModel)
        }
    })
    return {
        output: {
            onBeforePasswordEncrypted: () => {
                console.log("Password is about to be encrypted")
            },
            onAfterPasswordEncrypted: ({ encryptedPass }) => {
                console.log("Password was encrypted: ", encryptedPass)
            },
            onPasswordEncryptError: ({ err }) => {
                console.log("Password encryption error: ", err.message)
            }
        },
        unsubscribeFromState: () => {
            unsubscribe()
        }
    }
}