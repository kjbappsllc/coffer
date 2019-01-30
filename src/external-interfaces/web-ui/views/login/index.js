import viewFramework from 'react'
import { connect } from '../../utils'
import { loginController } from '../../../../interface-adapters/controllers'
import { loginPresenter } from '../../../../interface-adapters/presenters'
import { loginCoordinator } from '../../../../interface-adapters/coordinators'
import { loginBridge } from '../../../../interface-adapters/bridges'
import { loginView as login } from './view'
import { styles } from './styles'
import { loginViewModel as viewModel } from './view-model'

export const LoginView = connect({
    viewModel,
    subscribe: loginBridge.loginViewSubscription,
    controller: loginController,
    presenter: loginPresenter,
    coordinator: loginCoordinator
})({ View: login({ viewFramework, styles }) })