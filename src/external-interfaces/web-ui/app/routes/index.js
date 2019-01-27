
export const createRoutes = ({
    views
}) => {
    return [
        {
            path: '/',
            exact: true,
            component: views.DashboardView,
            private: true,
            condition: !!localStorage.getItem('user'),
            redirectPath: '/login'
        },
        {
            path: '/login',
            exact: true,
            component: views.LoginView
        }
    ]
}