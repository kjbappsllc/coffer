import { budget } from '../../../domain/entities'

export const createAddBudgetUseCase = ({
    budgetGateway
}) => ({
    addBudget: {
        execute: ({ title,
            budgetType,
            id,
            groups = []
        }) => {
            if(budgetGateway.$$type !== 'iBudgetGateway') {
                return Promise.reject("Error: addBudget requires type of iBudgetGateway")
            }
            const newBudget = budget.init({
                title,
                budgetType,
                id,
                groups
            })
            return iBudgetGateway.create({ budget: newBudget })
        }
    }
})