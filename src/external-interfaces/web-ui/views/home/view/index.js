
export const homeView = ({
    viewFramework: React,
    styles,
    publicRoute,
    switchComp: Switch
}) => ({
    routes
}) => {
    const routeComponents = routes.map((routeConfig, i) =>
        publicRoute({ routeConfig, key: i })
    )
    return (
        <div className="fill-parent flex-row">
            <div>
                Coffer Home Page Under Development
            </div>
            <div>
                <Switch>
                    {routeComponents}
                </Switch>
            </div>
        </div>
    )
}