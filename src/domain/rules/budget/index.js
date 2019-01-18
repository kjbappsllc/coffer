
export const validateBudget = ({
    budget: b,
    budgetTypes: bt
}) => {
    if ( !b.title ) {
        throw new Error("Provide a name for the budget")
    } else if (!Object.values(bt).includes(b.budgetType)) {
        throw new Error("Provide a valid budget type")
    } else {
        return b
    }
}