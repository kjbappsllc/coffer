import { createSubject } from '../../infrastructure/3rd-party/rx-subject'
import { createLoginSubject } from './login'

const loginSubject = createLoginSubject({ createSubject })

export {
    loginSubject
}