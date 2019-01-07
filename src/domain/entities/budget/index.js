
export const budgetTypes = Object.freeze({
    HOARDER: 'hoarder',
    TRADITIONAL: 'traditional'
})

export const buildBudgetObj = ({ validate }) => ({
    title,
    type,
    id,
    groups = []
}) => validate({
    budget: {
        title,
        type,
        groups,
        id,
        $$type: 'budget'
    },
    budgetTypes
})