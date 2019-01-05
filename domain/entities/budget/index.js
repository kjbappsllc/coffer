
const buildBudgetObj = ({
    title,
    type,
    id,
    groups = []
}) => ({
    title,
    type,
    funds,
    id
})