
export const validateBudget = ({
    budget: b,
    budgetTypes: bt
}) => {
    if ( !b.title ) {
        throw new Error("Provide a name for the budget")
    } else if (!Object.values(bt).includes(b.type)) {
        throw new Error("Provide a valid budget type")
    } else if ( !b.id ) {
        throw new Error("Provide a valid ID")
    } else {
        return b
    }
}