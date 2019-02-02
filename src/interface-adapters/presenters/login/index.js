
export const createLoginPresenter = ({
    updateView
}) => ({
    viewModel: loginViewModel,
    state,
    coordinator: {
        goToDashboardPage
    }
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
            onAfterRegister: ({ user }) => {
                console.log("User successfuly registered: ", user)
                goToDashboardPage()
            },
            onRegisterError: ({ err }) => {
                console.log("User Register error: ", err.err)
            }
        },
        unsubscribeFromState: () => {
            subscription.unsubscribe()
        }
    }
}