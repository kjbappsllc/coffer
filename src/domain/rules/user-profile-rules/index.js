
export const validateUserProfile = ({
    userProfile: up
}) => {
    if ( !up.name ) { 
        throw new Error("Provide a valid name")
    } else {
        return up
    }
}