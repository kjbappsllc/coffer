
export const validateGroup = ({
    group: g
}) => {
    if( !g.label ) {
        throw new Error("Provide valid label")
    } else if ( !g.id ) {
        throw new Error("Provide valid group id")
    } else {
        return g
    }
}