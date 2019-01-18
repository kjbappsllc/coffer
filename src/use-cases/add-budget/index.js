import { budget } from '../../../domain/entities'

export const createAddBudgetUseCase = ({
    create
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
                return create({
                    budget: newBudget
                }).then(budget => {
                    onBudgetAdded({ budget })
                }).catch(err => {
                    onBudgetError({ err, newBudget })
                })
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
})