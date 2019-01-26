import { createStore } from 'redux'
import { createSubject } from '../rx-subject'
import { createReduxStateManager } from './implementations'

const stateManager = createReduxStateManager({ createStore, createSubject })

export {
    stateManager
}