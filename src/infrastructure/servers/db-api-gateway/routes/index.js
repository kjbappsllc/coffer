import { accessTokenManager } from '../../../security'
import { createBudgetRoutes } from './budget'
import { createUserRoutes } from './user'

export const createRoutes = ({
    collections,
    dbDriver
}) => [
    ...createBudgetRoutes({ dbDriver, budgetCollectionName: collections.budget }),
    ...createUserRoutes({ accessTokenManager })
]