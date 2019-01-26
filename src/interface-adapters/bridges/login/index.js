
export const createLoginBridge = ({
    createSubject
}) => {
    const {
        subscription: loginViewSubscription,
        next: updateLoginView
    } = createSubject.replay({ replays: 1 })

    return {
        loginViewSubscription,
        updateLoginView
    }
}