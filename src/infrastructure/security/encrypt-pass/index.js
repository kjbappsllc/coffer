
export const createEncryptPassword = ({
    crypto
}) => ({
    pass
}) => new Promise((resolve) => {
    resolve(crypto.encrypt('123', pass))
})