import { budget } from '../../../domain/entities'

export const createAddBudgetUseCase = ({
    iBudgetGateway
}) => ({
    addBudget: {
        execute: ({ title,
            budgetType,
            id,
            groups = []
        }) => {
            if(iBudgetGateway.$$type !== 'iBudgetGateway') {
                return Promise.reject("Error: addBudget requires type of iBudgetGateway")
            }
            try {
                const newBudget = budget.init({
                    title,
                    budgetType,
                    id,
                    groups
                })
                return iBudgetGateway.create({ budget: newBudget })
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
})