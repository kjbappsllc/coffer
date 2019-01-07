
export const buildUserProfileObj = ({
    name,
    balance,
    incomeSources = []
}) => ({
    name,
    balance,
    incomeSources
})