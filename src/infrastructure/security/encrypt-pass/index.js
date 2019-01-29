
export const createEncryptPassword = ({
    crypto
}) => ({
    pass
}) => new Promise((resolve) => {
    resolve(crypto.encrypt('-yesthisisapublicpwsalt-', pass))
})