
export const createAddBudgetUseCase = ({
    budgetEntity
}) => ({
    presenter: {
        onBudgetBeforeAdd,
        onBudgetAdded,
        onBudgetError
    }
}) => ({
    execute: ({
        newBudget
    }) => {
        try {
            const budgetObj = budgetEntity.init({ budget: newBudget })
            onBudgetBeforeAdd()
            return create({
                budget: budgetObj
            }).then(budget => {
                return onBudgetAdded({ newBudget: budget })
            }).catch(err => {
                return onBudgetError({ err, budgetObj })
            })
        } catch (err) {
            onBudgetError({ err, newBudget: null })
            return Promise.reject(error)
        }
    }

})