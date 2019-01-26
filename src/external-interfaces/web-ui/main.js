import { LoginView, DashboardView } from './views'
import { provider as State } from './utils'
import { state } from '../../infrastructure/state'

export const App = ({
    viewFramework: React
}) => (
    <State state={state}>
        <LoginView />
    </State>
)