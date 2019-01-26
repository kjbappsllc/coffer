import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'

import { LoginView } from './views'
import { provider as State } from './utils'
import { state } from '../../infrastructure/state'

window.state = state
ReactDOM.render(<State state={state}><LoginView /></State>, document.getElementById('root'))