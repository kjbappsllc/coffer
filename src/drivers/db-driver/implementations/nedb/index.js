import { createConnectFn } from './connect'
import { createInsertFn } from './insert'
import { createUpdateFn } from './update'
import { createFindFn } from './find'
import { createRemoveFn } from './remove'

export const nedbDriver = ({
    dbDriverAdaptor,
    nedb: Database,
    fs
}) => {
    let db = {}
    return dbDriverAdaptor.adapt({
        connect: ({ urls }) => {
            return createConnectFn({ fs })({ urls, db, nedb: Database })
        },
        insert: ({ collection, doc }) => {
            return createInsertFn({ db })({ collection, doc })
        },
        update: ({ collection, query, updateObj }) => {
            return createUpdateFn({ db })({ collection, query, updateObj })
        },
        remove: ({ collection, query, removeMultiple }) => {
            return createRemoveFn({ db })({ collection, query, removeMultiple })
        },
        find: ({ collection, query }) => {
            return createFindFn({ db })({ collection, query })
        }
    })
}