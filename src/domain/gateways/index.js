import { createBudgetGateway } from './budget-gateway'
import { createFundGateway } from './fund-gateway'
import { createGroupGateway } from './group-gateway'
import { createTransactionGateway } from './transaction-gateway'
import { createUserProfileGateway } from './user-profile-gateway'

const budgetGateway = { create: createBudgetGateway }
const fundGateway = { create: createFundGateway }
const groupGateway = { create: createGroupGateway }
const transactionGateway = { create: createTransactionGateway }
const userProfileGateway = { create: createUserProfileGateway } 

export {
    budgetGateway,
    fundGateway,
    groupGateway,
    transactionGateway,
    userProfileGateway
}