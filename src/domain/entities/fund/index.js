
export const buildFundObj = ({
    validate
}) => ({
    label,
    id,
    allocAmount = 0,
    isRecurrent = false,
    balance = 0
}) => validate({ 
    fund: {
        label,
        id,
        allocAmount,
        isRecurrent,
        balance,
        $$type: 'fund'
    }
})