import { createSubject } from '../../infrastructure/3rd-party/rx-subject'
import { createLoginBridge } from './login'

const loginBridge = createLoginBridge({ createSubject })

export {
    loginBridge
}