
const budgetTypes = Object.freeze({
    HOARDER: 'hoarder',
    TRADITIONAL: 'traditional'
})

export const createBudgetEntity = ({
    validate,
    createUUID
}) => ({
    budget: {
        init: ({
            title,
            budgetType,
            groups = []
        }) => validate({
            budget: {
                title,
                budgetType,
                groups,
                _id: createUUID()
            },
            budgetTypes
        }),
        budgetTypes
    }
})