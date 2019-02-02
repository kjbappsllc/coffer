
// {
//     mode: 'login',
//     err: false,
//     errMsg: '',
//     headerText: 'Login',
//     infoText: 'New to Coffer?',
//     linkText: 'Register'
// }
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
            },
            onBeforeLogin: () => {
                console.log("User is about to be logged In")
            },
            onAfterLogin: ({ user }) => {
                console.log("User successfully logged in: ", user)
            },
            onLoginError: ({ err }) => {
                console.log("User Login error: ", err.err)
            },
            switchToRegister: () => {
                updateView((viewModel = {
                    mode: 'register',
                    err: false,
                    errMsg: '',
                    headerText: 'Register',
                    infoText: 'Already registered?',
                    linkText: 'Login'
                }))
            },
            switchToLogin: () => {
                updateView((viewModel = { ...loginViewModel }))
            }
        },
        unsubscribeFromState: () => {
            subscription.unsubscribe()
        }
    }
}