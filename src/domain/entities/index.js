import { buildIncomeSourceObj, payPeriodTypes } from "./income-source"
import { buildBudgetObj, budgetTypes } from "./budget"
import { buildFundObj } from "./fund"
import { buildTransactionObj } from "./transaction"
import { buildGroupObj } from './group'
import { buildUserProfileObj } from "./user-profile"
import { 
    validateIncomeSource, 
    validateBudget, 
    validateTransaction, 
    validateFund, 
    validateGroup,
    validateUserProfile } from "../rules"

const incomeSource = { init: buildIncomeSourceObj({ validate: validateIncomeSource }), payPeriodTypes }
const budget = { init: buildBudgetObj({ validate: validateBudget }), budgetTypes }
const transaction = { init: buildTransactionObj({ validate: validateTransaction }) }
const fund = { init: buildFundObj({ validate: validateFund }) }
const group = { init: buildGroupObj({ validate: validateGroup }) }
const userProfile = { init: buildUserProfileObj({ validate: validateUserProfile }) }

export {
    incomeSource,
    budget,
    fund,
    transaction,
    group,
    userProfile
}