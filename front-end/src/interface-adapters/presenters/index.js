import { loginBridge } from '../bridges'
import { createLoginPresenter } from './login'

const loginPresenter = createLoginPresenter({ updateView: loginBridge.updateLoginView })

export {
    loginPresenter
}