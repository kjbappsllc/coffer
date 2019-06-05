import { createStore } from 'redux'
import { Subject, ReplaySubject } from 'rxjs'
import { filter, map } from 'rxjs/operators'

import { createRx } from './rx'
import { createStateManager } from './state'


export const createSubject = createRx({ Subject, ReplaySubject, filter, map })
export const stateManager = createStateManager({ createStore, createSubject })