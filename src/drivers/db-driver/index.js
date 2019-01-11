//dependencies
import fs from 'fs'
import nedb from 'nedb'
//adapters and implementations
import { createDbDriverAdaptor } from './adaptor'
import { nedbDriver } from './implementations'

const { dbDriverAdaptor } = createDbDriverAdaptor()

export const createDbDriver = () => nedbDriver({
    dbDriverAdaptor,
    nedb,
    fs
})