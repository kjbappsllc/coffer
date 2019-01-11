
export const createDbDriverAdaptor = () => ({
    dbDriverAdaptor: {
        adapt: ({
            insert,
            update,
            remove,
            find
        }) => ({
            insert: ({ collection, doc }) => insert({ collection, doc }),
            update: ({ collection, query, updateObj }) => update({ collection, query, updateObj }),
            remove: ({ collection, query, removeMulitple }) => remove({ collection, query, removeMulitple }),
            find: ({ collection, query }) => find({ collection, query }),
            $$type: 'dbDriver'
        })
    }
})