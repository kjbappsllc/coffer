
export const buildFundObj =({
    label,
    id,
    allocAmount,
    isRecurrent,
    balance = 0
}) => ({
    label,
    id,
    allocAmount,
    isRecurrent,
    balance
})