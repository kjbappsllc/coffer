import hapi from 'hapi'
import inert from 'inert'

import { createDbRestService } from './db-api-gateway'
import { createWebServer } from './web-server'

const { dbRestAPI } = createDbRestService({ hapi, port: 8081 })
const { webServer } = createWebServer({ hapi, inert, port: 8080 })

export {
    webServer,
    dbRestAPI
}
