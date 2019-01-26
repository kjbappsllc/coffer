
export const createConnect =  ({
    viewFramework: React
}) => ({
    viewModel,
    controller,
    subscribe
}) => ({
    View
}) => {
    return class Connect extends React.Component {
        constructor(props) {
            super(props)
            this.state = viewModel
            this.controller = controller({ viewModel })
            this.subscription = subscribe(newViewModel => {
                this.setState(newViewModel)
            })
        }

        componentWillUnmount() {
            this.subscription.unsubscribe()
        }

        render() {
            return <View {...this.props} {...this.state} {...this.controller} />
        }
    }
}