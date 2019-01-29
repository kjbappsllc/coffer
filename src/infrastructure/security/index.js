import crypto from 'sjcl'
import jwt from 'jsonwebtoken'

import { createEncryptPassword } from './encrypt-pass'
import { createDecryptPassword } from './decrypt-pass'
import { createAcessTokenManager } from './jwt'

const encryptPassword = createEncryptPassword({ crypto })
const decryptPassword = createDecryptPassword({ crypto })
const accessTokenManager = createAcessTokenManager({ jwt })

export {
    encryptPassword,
    decryptPassword,
    accessTokenManager
}