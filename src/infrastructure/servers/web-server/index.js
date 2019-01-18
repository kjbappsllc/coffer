
export const createWebServer = ({
    hapi,
    inert,
    port
}) => {
    let server
    return {
        webServer: {
            start: () => {
                if (!server) {
                    server = hapi.Server({
                        port,
                        host: 'localhost'
                    })
                }
                server.register(inert).then(() => {
                    server.route({
                        method: 'GET',
                        path: '/',
                        handler: (request, h) => {
                            return h.file('./public/index.html');
                        }
                    });

                    return server.start().then(() => {
                        console.log(`Web Server running at: ${server.info.uri}`);
                    })
                })
            }
        }
    }
}