import viewFramework from 'react'
import { connect } from '../../utils'
import { loginController } from '../../../../interface-adapters/controllers'
import { loginView as login } from './view'
import { styles } from './styles'
import { loginViewModel as viewModel } from './view-model'

export const LoginView = connect({
    viewModel,
    subscribe: () => { },
    controller: loginController
})({ View: login({ viewFramework, styles }) })