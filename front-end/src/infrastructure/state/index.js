import { stateManager } from '../3rd-party'
import { createInitialState } from './initial-state'

const initialState = createInitialState()
const state = stateManager.createState({ initialState })

export {
    state
}