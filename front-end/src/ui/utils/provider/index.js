
export const createStateProvider = ({
    viewFramework: React,
    stateContext: StateContext
}) => class State extends React.Component {
        constructor(props) {
            super(props)
            !this.props.state && console.error('There is no state prop passed')
        }

        render() {
            return (
                <StateContext.Provider value={{ ...this.props.state }}>
                    {this.props.children}
                </StateContext.Provider>
            )
        }
    }