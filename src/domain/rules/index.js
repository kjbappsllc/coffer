import { isDate } from 'lodash'
import { validateIncomeSource } from "./income-source-rules";
import { validateBudget } from './budget-rules'
import { validateTransaction } from './transaction-rules'
import { validateFund } from './fund-rules'
import { validateGroup } from './group-rules'
import { validateUserProfile } from './user-profile-rules'

const validateTransaction = validateTransaction({ isDate })

export {
    validateIncomeSource,
    validateBudget,
    validateTransaction,
    validateFund,
    validateGroup,
    validateUserProfile 
}