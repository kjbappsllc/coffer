import { registerUserUseCase, loginUserUseCase } from '../../use-cases'
import { userGateway } from '../../infrastructure/gateways'
import { createLoginController } from './login'

const loginController = createLoginController({ 
    registerUserUseCase,
    loginUserUseCase,
    userGateway
 })

export {
    loginController
}