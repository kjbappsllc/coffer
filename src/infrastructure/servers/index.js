import ws from 'ws'
import hapi from 'hapi'
import inert from 'inert'

import { createWsServer } from './ws-server'
import { createWebServer } from './web-server'

const { wsServer } = createWsServer({ ws, port: 8081 })
const { webServer } = createWebServer({ hapi, inert, port: 8080 })

export {
    wsServer,
    webServer
}
