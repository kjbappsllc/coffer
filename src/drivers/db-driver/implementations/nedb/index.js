import { createConnectFn } from './connect'
import { createInsertFn } from './insert'
import { createUpdateFn } from './update'

export const nedbDriver = ({
    dbDriverAdaptor,
    nedb: Database,
    fs
}) => {
    let db = {}
    return dbDriverAdaptor.adapt({
        connect: ({ urls }) => {
            const connectFn = createConnectFn({ fs })
            return connectFn({ urls, db, nedb: Database })
        },
        insert: ({ collection, doc }) => {
            const insertFn = createInsertFn({ db })
            return insertFn({ collection, doc })
        },
        update: ({ collection, query, updateObj }) => {
            const updateFn = createUpdateFn({ db })
            return updateFn({ collection, query, updateObj })
        }
    })
}