
export const createPrivateRoute = ({
    viewFramework: React,
    routeComp: Route,
    redirectComp: Redirect
}) => ({
    routeConfig
}) => (
    <Route
        path={routeConfig.path}
        exact={routeConfig.exact || false}
        render={props => {
            if(!Object.keys(routeConfig).includes('condition')) {
                console.error('Private route must include condition and redirect url')
                return <routeConfig.component {...props} routes={routeConfig.routes} />
            }
            return routeConfig.condition() ? 
            <routeConfig.component {...props} routes={routeConfig.routes} /> :
            <Redirect to={{ pathname: routeConfig.redirectPath, state: {from: props.location }}} />
        }}
    />
)