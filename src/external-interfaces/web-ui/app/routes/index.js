
export const createRoutes = ({
    views
}) => {
    return [
        {
            path: '/login',
            exact: true,
            component: views.LoginView
        },
        {
            path: '/',
            component: views.HomeView,
            private: true,
            condition: () => {
                const token = localStorage.getItem('token')
                console.log('The token for the page is:', token)
                return token != void 0
            },
            redirectPath: '/login',
            routes: [
                {
                    path: '/',
                    exact: true,
                    component: views.DashboardView,
                    meta: {
                        name: 'Dashboard',
                        icon: 'fas fa-chart-bar'
                    }
                },
                {
                    path: '/budgets',
                    exact: true,
                    component: () => (null),
                    meta: {
                        name: 'Budgets',
                        icon: 'fas fa-file-invoice-dollar'
                    }
                },
                {
                    path: '/transaction-history',
                    exact: true,
                    component: () => (null),
                    meta: {
                        name: 'Transaction History',
                        icon: 'fas fa-history'
                    }
                }
            ]
        }
    ]
}