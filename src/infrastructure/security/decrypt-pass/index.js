
export const createDecryptPassword = ({
    crypto
}) => ({
    encryptedPass
}) => new Promise((resolve) => {
    resolve(crypto.decrypt('-yesthisisapublicpwsalt-', encryptedPass))
})