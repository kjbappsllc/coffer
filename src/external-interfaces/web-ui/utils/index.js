import viewFramework from 'react'

import { createConnect } from './connect'
import { createStateProvider } from './provider'

const connect = createConnect({ viewFramework })
const provider = createStateProvider({ viewFramework })

export {
    connect,
    provider
}