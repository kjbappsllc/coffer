
export const createRoutes = ({
    views
}) => {
    return [
        {
            path: '/',
            exact: true,
            component: views.LoginView
        }
    ]
}