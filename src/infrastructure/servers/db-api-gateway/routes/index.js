import { createBudgetRoutes } from './budget'

export const createRoutes = ({
    dbDriver,
    collections
}) => [
    ...createBudgetRoutes({ dbDriver, budgetCollectionName: collections.budget })
]