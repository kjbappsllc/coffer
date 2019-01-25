
export const createEncryptPassword = ({
    crypto
}) => ({
    pass
}) => new Promise((resolve) => {
    const key = crypto.createCipher('aes-128-cbc', pass);
    let passStr = key.update('abc', 'utf8', 'hex')
    passStr += mykey.update.final('hex');
    resolve(passStr)
})