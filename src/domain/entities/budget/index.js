
const budgetTypes = Object.freeze({
    HOARDER: 'hoarder',
    TRADITIONAL: 'traditional'
})

export const createBudgetEntity = ({ validate }) => ({
    budget: {
        init: ({
            title,
            budgetType,
            id,
            groups = []
        }) => validate({
            budget: {
                title,
                budgetType,
                groups,
                id,
                $$type: 'budget'
            },
            budgetTypes
        }),
        budgetTypes
    }
})