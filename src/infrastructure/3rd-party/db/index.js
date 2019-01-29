import fs from 'fs'
import nedb from 'nedb'
import { createDbDriverAdapter } from './adapter'
import { nedbDriver } from './implementations'

const { dbDriverAdapter } = createDbDriverAdapter()
const dbDriver = nedbDriver({ dbDriverAdapter, nedb, fs })

export {
    dbDriver
}