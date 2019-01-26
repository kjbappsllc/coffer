
export const createDecryptPassword = ({
    crypto
}) => ({
    encryptedPass
}) => new Promise((resolve) => {
    resolve(crypto.decrypt('123', encryptedPass))
})