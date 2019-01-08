
export const payPeriodTypes = Object.freeze({
    WEEKLY: 'weekly',
    BIWEEKLY: 'bi-weekly',
    SEMIMONTHLY: 'semi-monthly',
    MONTHLY: 'monthly'
})

export const buildIncomeSourceObj = ({ validate }) => ({
    label,
    amount,
    id,
    isManual = true,
    payPeriodType = null,
    nextPayDate = null
}) => validate({
    incomeSource: { 
        label, 
        amount,
        id, 
        isManual, 
        payPeriodType, 
        nextPayDate,
        $$type: 'incomeSource' 
    },
    payPeriodTypes
})