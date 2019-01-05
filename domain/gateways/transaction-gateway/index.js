
export const createTransactionGateway = ({
    create,
    getAll
}) => ({
    create: ({ transaction }) => create(transaction),
    getAll: () => getAll()
})