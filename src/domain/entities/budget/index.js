
export const budgetTypes = Object.freeze({
    HOARDER: 'hoarder',
    TRADITIONAL: 'traditional'
})

export const buildBudgetObj = ({
    title,
    type,
    id,
    groups = []
}) => ({
    title,
    type,
    funds,
    id
})