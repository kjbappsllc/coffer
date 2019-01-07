import { createBudgetGateway } from './budget-gateway'
import { createFundGateway } from './fund-gateway'
import { createGroupGateway } from './group-gateway'
import { createTransactionGateway } from './transaction-gateway'

const budgetGateway = { create: createBudgetGateway }
const fundGateway = { create: createFundGateway }
const groupGateway = { create: createGroupGateway }
const transactionGateway = { create: createTransactionGateway }

export {
    budgetGateway,
    fundGateway,
    groupGateway,
    transactionGateway
}