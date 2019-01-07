import { buildIncomeSourceObj, payPeriodTypes } from "./income-source"
import { buildBudgetObj, budgetTypes } from "./budget"
import { validateIncomeSource, validateBudget } from "../rules"

const incomeSource = {
    init: buildIncomeSourceObj({ validate: validateIncomeSource }),
    payPeriodTypes
}
const budget = {
    init: buildBudgetObj({ validate: validateBudget }),
    budgetTypes
}

export {
    incomeSource,
    budget
}