
export const payPeriodTypes = Object.freeze({
    WEEKLY: 'weekly',
    BIWEEKLY: 'bi-weekly',
    SEMIMONTHLY: 'semi-monthly',
    MONTHLY: 'monthly'
})

export const buildIncomeSourceObj = ({ validate }) => ({
    label,
    amount,
    isManual = true,
    payPeriodType = null,
    nextPayDate = null
}) => validate({
    incomeSource: { 
        label, 
        amount, 
        isManual, 
        payPeriodType, 
        nextPayDate 
    },
    payPeriodTypes
})