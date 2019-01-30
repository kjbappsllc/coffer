import React from 'react'
import ReactDOM from 'react-dom'
import './scss/main.scss'
import { App } from './app'

localStorage.clear()
ReactDOM.render(<App />, document.getElementById('root'))