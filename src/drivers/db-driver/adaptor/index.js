
const throwNotImplementedErr = ({ name }) => {
    throw new Error(`${method} function is not implemented in dbDriverAdapter`)
}

export const createDbDriverAdaptor = () => ({
    dbDriverAdaptor: {
        adapt: ({
            connect = () => { throwNotImplementedErr({ name: connect }) },
            insert = () => { throwNotImplementedErr({ name: insert }) },
            update = () => { throwNotImplementedErr({ name: update }) },
            remove = () => { throwNotImplementedErr({ name: remove }) },
            find = () => { throwNotImplementedErr({ name: find }) }
        }) => ({
            connect: ({ urls }) => connect({ urls }),
            insert: ({ collection, doc }) => insert({ collection, doc }),
            update: ({ collection, query, updateObj }) => update({ collection, query, updateObj }),
            remove: ({ collection, query, removeMulitple }) => remove({ collection, query, removeMulitple }),
            find: ({ collection, query }) => find({ collection, query }),
            $$type: 'dbDriver'
        })
    }
})