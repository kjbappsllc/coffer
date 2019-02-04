import viewFramework from 'react'
import { Switch as switchComp } from 'react-router-dom'
import { connect, publicRoute } from '../../utils'
import { homeViewModel as viewModel } from './view-model'
import { homeView } from './view'
import { styles } from './styles'

export const HomeView = connect({
    viewModel,
    controller: () => ({}),
    presenter: () => ({}),
    subscribe: () => ({})
})({ View: homeView({ 
    viewFramework, 
    styles, 
    publicRoute, 
    switchComp 
})})