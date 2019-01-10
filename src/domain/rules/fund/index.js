
export const validateFund = ({
    fund: f
}) => {
    if (f.label == void 0) {
        throw new Error("Provide a valid label for the fund")
    } else if ( !f.id ) {
        throw new Error("Provide a valid fund id")
    } else {
        return f
    }
}