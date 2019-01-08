
export const validateTransaction = ({
    isDate
}) => ({
    transaction: t
}) => {
    if( !t.date || !isDate(t.date) ) {
        throw new Error("Provide a valid date")
    } else if( !t.amount || t.amount <= 0 ) {
        throw new Error("Provide a valid transaction amount")
    } else if ( !t.fund ) {
        throw new Error("Provide a valid fund to modify")
    } else if ( !t.id ) {
        throw new Error("Provide a valid ID")
    } else {
        return t
    }
}