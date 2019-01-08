
export const createIncomeSourceGateway = ({
    create,
    edit,
    removeById,
    getAll,
}) => ({
    create: ({ incomeSource }) => create(incomeSource),
    edit: ({ id, newIncomeSource }) => edit(id, newIncomeSource),
    removeById: ({ id }) => removeById(id),
    getAll: () => getAll
})