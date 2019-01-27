import viewFramework from 'react'
import { BrowserRouter as routerComp } from 'react-router-dom'
import * as views from '../views'
import { privateRoute, publicRoute, provider } from '../utils'
import { state } from '../../../infrastructure/state'
import { createRoutes } from './routes';
import { createApp } from './create'

export const App = () => {
    const routes = createRoutes({ views })
    return createApp({
        viewFramework,
        routerComp,
        publicRoute,
        privateRoute,
        routes,
        provider,
        state
    })
}
