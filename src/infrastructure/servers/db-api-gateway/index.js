import { createRoutes } from './routes'

export const createDbRestService = ({
    hapi,
    port,
    dbDriver
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
                server.route(createRoutes({ dbDriver }));
                server
                    .start()
                    .then(() => {
                        console.log(`DB API running at: ${server.info.uri}`);
                    })
            }
        }
    }
}