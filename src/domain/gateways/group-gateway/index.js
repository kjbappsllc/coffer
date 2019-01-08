
export const createGroupGateway = ({
    create,
    removeById,
    getAll,
    addFund,
    edit
}) => ({
    create: ({ group }) => create(group),
    removeById: ({ id }) => removeById(id),
    getAll: () => getAll(),
    addFund: ({ id, fund }) => addFund(id, fund),
    edit: ({ id, newGroup }) => edit(id, newGroup)
})