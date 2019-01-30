
export const createConnect =  ({
    viewFramework: React,
    stateContext: StateContext
}) => ({
    viewModel,
    controller,
    subscribe,
    presenter,
    coordinator = ({ history }) => ({})
}) => ({
    View
}) => {
    class Connect extends React.Component {
        constructor(props) {
            super(props)
            this.state = {}
        }

        componentDidMount() {
            const iCoordinator = coordinator({ history: this.props.history })
            const { output, unsubscribeFromState } = presenter({ viewModel, state: this.context, coordinator: iCoordinator })
            const iController = controller({ output })
            this.subscription = subscribe(newViewModel => {
                const newState = { ...newViewModel, ...iController }
                this.setState(newState)
            })
            this.cleanUp = () => {
                this.subscription.unsubscribe && this.subscription.unsubscribe() 
                unsubscribeFromState && unsubscribeFromState()
            }
        }

        componentWillUnmount() {
            this.cleanUp()
        }

        render() {
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