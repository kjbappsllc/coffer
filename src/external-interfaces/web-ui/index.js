import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'

import { LoginView, DashboardView } from './routes'

ReactDOM.render(<LoginView />, document.getElementById('root'))