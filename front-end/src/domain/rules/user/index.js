
export const validateUser = ({
    user: u
}) => {
    if ( !u.name ) { 
        throw new Error("Provide a valid name")
    } else {
        return u
    }
}