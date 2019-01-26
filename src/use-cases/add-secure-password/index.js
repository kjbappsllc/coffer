
export const createAddSecurePasswordUseCase = ({
    encryptPassword
}) => ({
    output: {
        onBeforePasswordEncrypted,
        onAfterPasswordEncrypted,
        onPasswordEncryptError
    }
}) => ({
    execute: ({
        password: pass,
        confirmPassword: confirm
    }) => {
        try {
            if (pass !== confirm) {
                throw new Error("Passwords do not match")
            }
        } catch (err) {
            return onPasswordEncryptError({ err, pass: null })
        }
        onBeforePasswordEncrypted()
        return encryptPassword({
            pass
        }).then((encryptedPass) => {
            return onAfterPasswordEncrypted({ encryptedPass })
        }).catch((err) => {
            return onPasswordEncryptError({ err, pass })
        })
    }

})