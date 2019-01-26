
export const createLoginSubject = ({
    createSubject
}) => {
    const {
        subscription: loginViewSubscription,
        next: updateLoginView
    } = createSubject()

    return {
        loginViewSubscription,
        updateLoginView
    }
}