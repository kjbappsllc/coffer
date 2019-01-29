
export const createLoginPresenter = ({
    updateView
}) => ({
    viewModel: loginViewModel,
    state
}) => {
    let viewModel = { ...loginViewModel }
    const { subscribeToState } = state
    let subscription = subscribeToState({
        selector: () => viewModel,
        cb: () => {
            console.log("Login Presenter Received State Update ...")
            updateView(viewModel)
        }
    })
    return {
        output: {
            onBeforeRegister: () => {
                console.log("User is about to be registered")
            },
            onAfterRegister: ({ userInfo }) => {
                console.log("User successfuly registered: ", userInfo)
            },
            onRegisterError: ({ err }) => {
                console.log("User Register error: ", err.message)
            }
        },
        unsubscribeFromState: () => {
            subscription.unsubscribe()
        }
    }
}