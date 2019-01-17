import { routes } from './routes'

export const createDbRestService = ({
    hapi,
    port
}) => {
    let server
    return {
        dbRestAPI: {
            start: () => {
                if (!server) {
                    server = hapi.Server({
                        port,
                        host: 'localhost',
                        routes: { cors: true }
                    })
                }
                server.route(routes);
                server
                    .start()
                    .then(() => {
                        console.log(`DB API running at: ${server.info.uri}`);
                    })
            }
        }
    }
}