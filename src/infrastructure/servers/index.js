import hapi from 'hapi'
import inert from 'inert'
import { createDbDriver } from '../../drivers'

import { createDbRestService } from './db-api-gateway'
import { createWebServer } from './web-server'

const dbDriver = createDbDriver()
const { dbRestAPI } = createDbRestService({ hapi, dbDriver, port: 8081 })
const { webServer } = createWebServer({ hapi, inert, port: 8080 })

export {
    webServer,
    dbRestAPI
}
