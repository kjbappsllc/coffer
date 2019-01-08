
export const buildUserProfileObj = ({ validate }) => ({
    name,
    balance = 0,
    pastLocations = [],
    incomeSources = []
}) => validate({ 
    userProfile: {
        name,
        balance,
        incomeSources,
        pastLocations,
        $$type: 'userProfile'
    }
})