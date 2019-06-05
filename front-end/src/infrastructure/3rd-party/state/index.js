
export const createStateManager = ({
    createStore,
    createSubject
}) => ({
    createState: ({
        initialState
    }) => {
        const observableState = createSubject.replay({ replays: 1 })
        const mainReducer = (state = undefined, action) => action.type === 'modify' ? { ...state, ...action.newState } : state
        const state = createStore(mainReducer, initialState)
        state.subscribe(() => {
            observableState.next(state.getState())
        })
        state.dispatch({ type: 'HYDRATE_OBSERVABLE_STATE' })
        return {
            getState: state.getState,
            modifyState: ({ newState }) => {
                console.log("State being modified")
                state.dispatch({ type: 'modify', newState })
            },
            subscribeToState: ({ selector, cb }) => observableState.map(selector)(cb)
        }
    }
})