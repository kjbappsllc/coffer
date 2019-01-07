
export const buildUserProfileObj = ({
    name,
    balance = 0,
    pastLocations = [],
    incomeSources = []
}) => ({
    name,
    balance,
    incomeSources,
    pastLocations
})