
export const createReduxStateManager = ({
    createStore: createState
}) => ({
    create: ({
        initialState
    }) => {
        const mainReducer = (state = initialState, action) => ({ ...state, ...action.newState })
        const state = createState(mainReducer)
        return {
            getState: state.getState,
            modifyState: ({ newState }) => {
                state.dispatch({ type: 'modify', newState })
            },
            subscribeToState: state.subscribe
        } 
    }
})