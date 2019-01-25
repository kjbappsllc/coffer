
export const createUserProfileEntity = ({ validate }) => ({
    userProfile: {
        init: ({
            name,
            balance = 0,
            pastLocations = [],
            incomeSources = []
        }) => validate({
            userProfile: {
                name,
                balance,
                incomeSources,
                pastLocations
            }
        })
    }
})