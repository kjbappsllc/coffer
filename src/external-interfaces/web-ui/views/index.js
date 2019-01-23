import React from 'react'

import { loginView as login } from './login'
import { dashboardView as dashboard } from './dashboard'

const LoginView = login({ viewFramework: React })
const DashboardView = dashboard({ viewFramework: React })

export {
    LoginView,
    DashboardView
}