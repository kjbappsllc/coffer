
export const createDecryptPassword = ({
    crypto
}) => ({
    storedPass,
    newPass
}) => {
    var key = crypto.createDecipher('aes-128-cbc', newPass);
    var passStr = key.update(storedPass, 'hex', 'utf8')
    passStr += key.update.final('utf8');
    return passStr
}