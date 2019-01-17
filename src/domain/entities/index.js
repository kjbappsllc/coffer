import { 
    validateIncomeSource, 
    validateBudget, 
    validateTransaction, 
    validateFund, 
    validateGroup,
    validateUserProfile } from "../rules"
import { createGuid } from './utils'
import { createIncomeSourceEntity } from "./income-source"
import { createBudgetEntity } from "./budget"
import { createFundEntity } from "./fund"
import { createTransactionEntity } from "./transaction"
import { createGroupEntity } from './group'
import { createUserProfileEntity } from "./user-profile"

const { incomeSource } = createIncomeSourceEntity({ validate: validateIncomeSource })
const { budget } = createBudgetEntity({ validate: validateBudget, createUUID: createGuid })
const { transaction } = createTransactionEntity({ validate: validateTransaction })
const { fund } = createFundEntity({ validate: validateFund })
const { group } = createGroupEntity({ validate: validateGroup })
const { userProfile } = createUserProfileEntity({ validate: validateUserProfile })

export {
    incomeSource,
    budget,
    fund,
    transaction,
    group,
    userProfile
}