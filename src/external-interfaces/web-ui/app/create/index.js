
export const createApp = ({
    viewFramework: React,
    routerComp: Router,
    publicRoute: PublicRoute,
    privateRoute: PrivateRoute,
    routes,
    provider: State,
    state
}) => (
    <State state={state}>
        <Router>
            <div className={'fill-parent'}>
                {routes.map((routeConfig, i) => {
                    return routeConfig.private ?
                        <PrivateRoute key={i} routeConfig={routeConfig} /> :
                        <PublicRoute key={i} routeConfig={routeConfig} />
                })}
            </div>
        </Router>
    </State>
)