
export const createAddSecurePasswordUseCase = ({
    encryptPassword
}) => ({
    presenter: {
        onBeforePasswordEncrypted,
        onAfterPasswordEncrypted,
        onPasswordEncryptError
    }
}) => ({
    execute: ({
        password: pass
    }) => {
        onBeforePasswordEncrypted()
        return encryptPassword({
            pass
        }).then((encryptedPass) => {
            onAfterPasswordEncrypted({ encryptedPass })
        }).catch((err) => {
            onPasswordEncryptError({ err, pass })
        })
    }

})