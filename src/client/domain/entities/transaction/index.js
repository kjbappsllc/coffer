
export const createTransactionEntity = ({ validate }) => ({
    transaction: {
        init: ({
            date,
            amount,
            fund,
            location,
            id
        }) => validate({
            transaction: {
                date,
                amount,
                fund,
                location,
                id,
                $$type: 'transaction'
            }
        })
    }
})