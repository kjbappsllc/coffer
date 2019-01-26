import { addSecurePasswordUseCase } from '../../use-cases'
import { createLoginController } from './login'

const loginController = createLoginController({ addSecurePasswordUseCase })

export {
    loginController
}