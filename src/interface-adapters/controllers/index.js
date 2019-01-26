import { encryptPassword, decryptPassword } from '../../infrastructure/security'
import { loginPresenter } from '../presenters'
import { addSecurePasswordUseCase } from '../../use-cases'
import { createLoginController } from './login'

const loginController = createLoginController({
    encryptPassword,
    decryptPassword,
    loginPresenter,
    addSecurePasswordUseCase
})

export {
    loginController
}