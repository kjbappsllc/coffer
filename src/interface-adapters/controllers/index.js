import { encryptPassword, decryptPassword } from '../../infrastructure/security'
import {createLoginController } from './login'

const loginController = createLoginController({ encryptPassword, decryptPassword })

export {
    loginController
}