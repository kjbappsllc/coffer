import { isDate } from 'lodash'
import { validateIncomeSource } from "./income-source";
import { validateBudget } from './budget'
import { validateTransaction as validateT } from './transaction'
import { validateFund } from './fund'
import { validateGroup } from './group'
import { validateUserProfile } from './user-profile'

const validateTransaction = validateT({ isDate })

export {
    validateIncomeSource,
    validateBudget,
    validateTransaction,
    validateFund,
    validateGroup,
    validateUserProfile 
}