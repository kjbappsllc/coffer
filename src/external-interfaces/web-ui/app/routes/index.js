
export const createRoutes = ({
    views
}) => {
    return [
        {
            path: '/',
            exact: true,
            component: views.DashboardView,
            private: true,
            condition: () => {
                const token = localStorage.getItem('token')
                console.log('The token for the page is:',token)
                return token != void 0
            },
            redirectPath: '/login'
        },
        {
            path: '/login',
            exact: true,
            component: views.LoginView
        }
    ]
}