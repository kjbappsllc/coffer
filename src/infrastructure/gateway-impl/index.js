import { iBudgetGateway } from '../../domain/gateway-interfaces'
import { createBudgetGatewayImpl } from './budget'

const baseUrl = 'http://localhost:8081'
const budgetGatewayImpl = createBudgetGatewayImpl({ iBudgetGateway, baseUrl })

export {
    budgetGatewayImpl
}