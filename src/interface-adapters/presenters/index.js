import { loginSubject } from '../subjects'
import { createLoginPresenter } from './login'

const loginPresenter = createLoginPresenter({ updateViewModel: loginSubject.updateLoginView })

export {
    loginPresenter
}