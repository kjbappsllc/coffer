
export const createUserEntity = ({ 
    validate,
    createUUID
}) => ({
    user: {
        init: ({
            name,
            balance = 0,
            pastLocations = [],
            incomeSources = [],
            budgets = [],
            transactions = []
        }) => validate({
            user: {
                name,
                balance,
                incomeSources,
                pastLocations,
                budgets,
                transactions,
                _id: createUUID()
            }
        })
    }
})