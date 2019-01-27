
export const createPublicRoute = ({
    viewFramework: React,
    routeComp: Route
}) => ({
    routeConfig
}) => (
    <Route
        path={routeConfig.path}
        exact={routeConfig.exact || false}
        render={props => (
            <routeConfig.component {...props} routes={routeConfig.routes} />
        )}
    />
)