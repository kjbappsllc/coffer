
export const createBudgetGateway = ({
    create,
    removeById,
    addGroup,
    editTitle,
    getAll
}) => ({
    create: ({ budget }) => create(budget),
    removeById: ({ id }) => removeById(id),
    addGroup: ({ id, group }) => addGroup(id, group),
    editTitle: ({ id, title }) => editTitle(id, title),
    getAll: () => getAll()
})