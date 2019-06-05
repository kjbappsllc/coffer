
export const createApp = ({
    viewFramework: React,
    routerComp: Router,
    publicRoute,
    privateRoute,
    routes,
    provider: State,
    switchComp: Switch,
    state
}) => {
    const routeComponents = routes.map((routeConfig, i) =>
        routeConfig.private ?
        privateRoute({ routeConfig, key: i }) :
        publicRoute({ routeConfig, key: i })
    )
    return (
        <State state={state}>
            <Router>
                <div className={'fill-parent'}>
                    <Switch>
                        {routeComponents}
                    </Switch>
                </div>
            </Router>
        </State>
    )
}