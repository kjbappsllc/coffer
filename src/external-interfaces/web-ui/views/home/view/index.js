
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
                <div className="flex-column" style={styles.header}>
                    <div className="flex-row row-center-v">
                        <img style={styles.logo} src={require('../../../resources/images/logo.png')} />
                        <div style={styles.titleText}>COFFER</div>
                        <div className="flex-row row-center-v" style={styles.menuBtn}>
                            <i className="fas fa-align-right" />
                        </div>
                    </div>
                </div>
                <div className="flex-column">
                    <div className="flex-row row-center-v">
                        <i className="fas fa-chart-bar" style={styles.icon}/>
                        <div style={styles.navLinkText}>Dashboard</div>
                        <i className="fas fa-angle-right" style={styles.icon}/>
                    </div>
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