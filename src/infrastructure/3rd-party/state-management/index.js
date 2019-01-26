import { createStore } from 'redux'
import { createReduxStateManager } from './implementations'

const stateManager = createReduxStateManager({ createStore })

export {
    stateManager
}