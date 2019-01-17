
export const createIBudgetGateway = () => ({
    iBudgetGateway: {
        implement: ({
            create,
            removeById,
            addGroup,
            editTitle,
            getAll
        }) => ({
            create: ({ budget }) => create({ budget }),
            removeById: ({ id }) => removeById({ id }),
            addGroup: ({ id, group }) => addGroup({ id, group }),
            editTitle: ({ id, budget }) => editTitle({ id, budget }),
            getAll: () => getAll(),
            $$type: 'iBudgetGateway'
        })
    }
})