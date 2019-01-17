import { budget } from '../../../domain/entities'

export const createAddBudgetUseCase = ({
    create = () => { throw new Error("Provide create method") }
}) => ({
    addBudget: {
        execute: ({
            budget,
            presenter: {
                onBudgetAdded,
                onBudgetError
            }
        }) => {
            try {
                const newBudget = budget.init(budget)
                return create({ budget: newBudget })
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
})