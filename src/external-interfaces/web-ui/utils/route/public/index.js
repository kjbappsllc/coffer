
export const createPublicRoute = ({
    viewFramework: React,
    routeComp: Route
}) => ({
    routeConfig,
    key = null
}) => (
    <Route
        key = {key}
        path={routeConfig.path}
        exact={routeConfig.exact || false}
        render={props => (
            <routeConfig.component {...props} routes={routeConfig.routes} />
        )}
    />
)