
export const validateIncomeSource = ({
    incomeSource: is,
    payPeriodTypes: pptypes
}) => {
    if ( !is.label ) {
        throw new Error("Provide a label")
    } else if ( typeof is.amount !== 'number' ) {
        throw new Error("Provide a valid amount")
    } else if ( is.amount <= 0 ) {
        throw new Error("Amount must be a positive number")
    } else if ( !is.isManual && (is.payPeriodType == void 0 || is.nextPayDate == void 0 )) {
        throw new Error("Provide a pay period and next pay date in order to do automatic payments")
    } else if ( !Object.values(pptypes).includes(is.payPeriodType)) {
        throw new Error("Provide a valid pay period type")
    } else if ( !is.id ) {
        throw new Error("Provide a valid id")
    } else {
        return is
    }
}