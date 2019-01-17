import { createBudgetRoutes } from './budget'

export const createRoutes = ({
    dbDriver
}) => [
    ...createBudgetRoutes({ dbDriver })
]