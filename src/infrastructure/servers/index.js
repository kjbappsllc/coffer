import hapi from 'hapi'
import inert from 'inert'
import path from 'path'
import { dbDriver } from '../3rd-party/db'
import { createDbRestService } from './db-api-gateway'
import { createWebServer } from './web-server'

const { dbRestAPI } = createDbRestService({ hapi, dbDriver, port: 8081, path })
const { webServer } = createWebServer({ hapi, inert, port: 8080, path })

export {
    webServer,
    dbRestAPI
}
