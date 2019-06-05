
export const createLoginCoordinator = () => ({
    history
}) => ({
    goToLoginPage: () => history.push('/login'),
    goToDashboardPage: () => history.push('/')  
})