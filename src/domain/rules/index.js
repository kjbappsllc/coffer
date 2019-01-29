import { isDate } from 'lodash'
import { validateIncomeSource } from "./income-source";
import { validateBudget } from './budget'
import { validateTransaction as validateT } from './transaction'
import { validateFund } from './fund'
import { validateGroup } from './group'
import { validateUser } from './user'

const validateTransaction = validateT({ isDate })

export {
    validateIncomeSource,
    validateBudget,
    validateTransaction,
    validateFund,
    validateGroup,
    validateUser
}