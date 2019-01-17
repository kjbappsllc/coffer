import { createBudgetRoutes } from './budget'

const budgetRoutes = createBudgetRoutes()

export const routes =  [
    ...budgetRoutes
]