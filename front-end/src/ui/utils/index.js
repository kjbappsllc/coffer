import viewFramework from 'react'
import { Route as routeComp, Redirect as redirectComp } from 'react-router-dom'

import { createConnect } from './connect'
import { createStateProvider } from './provider'
import { createContext } from './context'
import { createPublicRoute, createPrivateRoute } from './route'

const context = createContext({ viewFramework })
const stateContext = context({ initialValue: null })
const connect = createConnect({ viewFramework, stateContext })
const provider = createStateProvider({ viewFramework, stateContext })
const publicRoute = createPublicRoute({ viewFramework, routeComp })
const privateRoute = createPrivateRoute({ viewFramework, routeComp, redirectComp })
export {
    connect,
    provider,
    context,
    publicRoute,
    privateRoute
}