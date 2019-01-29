import { registerUserUseCase } from '../../use-cases'
import { userGateway } from '../../infrastructure/gateways'
import { createLoginController } from './login'

const loginController = createLoginController({ registerUserUseCase, userGateway })

export {
    loginController
}