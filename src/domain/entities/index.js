import { buildIncomeSourceObj, payPeriodTypes } from "./income-source"
import { validateIncomeSource } from "../rules"

const incomeSource = {
    buildIncomeSourceObj: buildIncomeSourceObj({ validate: validateIncomeSource }),
    payPeriodTypes
}

export {
    incomeSource
}