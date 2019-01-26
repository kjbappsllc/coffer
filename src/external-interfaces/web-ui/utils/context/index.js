
export const createContext = ({
    viewFramework: React,
}) => ({
    initialValue = null
}) => {
    return React.createContext(initialValue)
}