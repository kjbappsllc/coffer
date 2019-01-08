import { createBudgetGateway } from './budget'
import { createFundGateway } from './fund'
import { createGroupGateway } from './group'
import { createTransactionGateway } from './transaction'
import { createUserProfileGateway } from './user-profile'
import { createIncomeSourceGateway } from './income-source'

const budgetGateway = { create: createBudgetGateway }
const fundGateway = { create: createFundGateway }
const groupGateway = { create: createGroupGateway }
const transactionGateway = { create: createTransactionGateway }
const userProfileGateway = { create: createUserProfileGateway } 
const incomeSourceGateway = { create: createIncomeSourceGateway }

export {
    budgetGateway,
    fundGateway,
    groupGateway,
    transactionGateway,
    userProfileGateway,
    incomeSourceGateway
}