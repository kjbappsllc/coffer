
export const createConnect =  ({
    viewFramework: React,
    stateContext: StateContext
}) => ({
    viewModel,
    controller,
    subscribe,
    presenter
}) => ({
    View
}) => {
    class Connect extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}
        }

        componentDidMount() {
            const { output, unsubscribeFromState } = presenter({ viewModel, state: this.context })
            const controllerInterface = controller({ output })
            this.subscription = subscribe(newViewModel => {
                const newState = { ...newViewModel, ...controllerInterface}
                this.setState(newState)
            })
            this.cleanUp = () => {
                this.subscription.unsubscribe()
                unsubscribeFromState()
            }
        }

        componentWillUnmount() {
            this.cleanUp()
        }

        render() {
            console.log(this.state)
            return (
                <StateContext.Consumer>
                    { () => <View {...this.props} {...this.state} /> }
                </StateContext.Consumer>
            )
        }
    }
    Connect.contextType = StateContext
    return Connect
}