import crypto from 'sjcl'

import { createEncryptPassword } from './encrypt-pass'
import { createDecryptPassword } from './decrypt-pass'

const encryptPassword = createEncryptPassword({ crypto })
const decryptPassword = createDecryptPassword({ crypto })

export {
    encryptPassword,
    decryptPassword
}