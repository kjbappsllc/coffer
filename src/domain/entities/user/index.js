
export const createUserEntity = ({ validate }) => ({
    user: {
        init: ({
            name,
            balance = 0,
            pastLocations = [],
            incomeSources = []
        }) => validate({
            user: {
                name,
                balance,
                incomeSources,
                pastLocations
            }
        })
    }
})