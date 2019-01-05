
export const createFundGateway = ({
    create,
    removeById,
    incrementBalance,
    decrementBalance,
    edit
}) => ({
    create: ({ fund }) => create(fund),
    removeById: ({ id }) => removeById(id),
    incrementBalance: ({ id, amount }) => incrementBalance(id, amount),
    decrementBalance: ({ id, amount }) => decrementBalance(id, amount),
    edit: ({ id, fund }) => edit(id, fund)
})