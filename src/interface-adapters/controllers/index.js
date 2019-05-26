import { registerUserUseCase, loginUserUseCase } from '../../use-cases'
import { userGateway } from '../gateways'
import { createLoginController } from './login'

const loginController = createLoginController({ 
    registerUserUseCase,
    loginUserUseCase,
    userGateway
 })

export {
    loginController
}