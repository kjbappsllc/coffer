
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
        <div className="fill-parent flex-row" style={styles.main}>
            <div style={styles.nav}>
                <div className="flex-column column-center" style={styles.header}>
                    <img style={styles.logo} src={require('../../../resources/images/logo.png')} />
                    <hr />
                </div>
            </div>
            <div>
                <Switch>
                    {routeComponents}
                </Switch>
            </div>
        </div>
    )
}