
export const buildTransactionObj = ({ validate }) => ({
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