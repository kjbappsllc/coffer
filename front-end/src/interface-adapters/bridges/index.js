import { createSubject } from '../../infrastructure/3rd-party/rx'
import { createLoginBridge } from './login'

const loginBridge = createLoginBridge({ createSubject })

export {
    loginBridge
}