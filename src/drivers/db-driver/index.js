//dependencies
import fs from 'fs'
import nedb from 'nedb'
//adapters and implementations
import { createDbDriverAdapter } from './adapter'
import { nedbDriver } from './implementations'

const { dbDriverAdapter } = createDbDriverAdapter()

export const createDbDriver = () => nedbDriver({
    dbDriverAdapter,
    nedb,
    fs
})