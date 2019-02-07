
export const homeView = ({
    viewFramework: React,
    styles,
    publicRoute,
    switchComp: Switch,
    navLinkComp: NavLink
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
                <div style={styles.navContainer} className="flex-column">
                    {
                        routes.map((config, i) => (
                            <NavLink
                                exact
                                to={config.path} 
                                key={i}
                                activeClassName='nav-row-active' 
                                className="flex-row row-center-v nav-row"
                            >
                                <i className={config.meta.icon + " icon"} style={styles.iconMain}/>
                                <div className="link" style={styles.navLinkText}>{config.meta.name}</div>
                                <i className="fas fa-angle-right flex icon" style={styles.iconRight}/>
                            </NavLink>
                        ))
                    }
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