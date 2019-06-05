import viewFramework from 'react'
import { connect } from '../../utils'
import { dashboardViewModel as viewModel } from './view-model'
import { dashboardView } from './view'
import { styles } from './styles'

export const DashboardView = connect({
    viewModel,
    controller: () => ({}),
    presenter: () => ({}),
    subscribe: () => ({})
})({ View: dashboardView({ viewFramework, styles }) })