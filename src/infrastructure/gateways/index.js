import { createBudgetGatewayImpl } from './budget'

const baseUrl = 'http://localhost:8081'
const budgetGatewayImpl = createBudgetGatewayImpl({ baseUrl })

export {
    budgetGatewayImpl
}