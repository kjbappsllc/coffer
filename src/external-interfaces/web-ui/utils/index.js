import viewFramework from 'react'

import { createConnect } from './connect'
import { createStateProvider } from './provider'
import { createContext } from './context'

const context = createContext({ viewFramework })

const stateContext = context({ initialValue: null })
const connect = createConnect({ viewFramework, stateContext })
const provider = createStateProvider({ viewFramework, stateContext })

export {
    connect,
    provider,
    context
}