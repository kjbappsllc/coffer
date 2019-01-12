
export const createWebServer = ({
    hapi,
    inert,
    port
}) => {
    const server = hapi.Server({
        port,
        host: 'localhost'
    })
    
    return {
        webServer: {
            start: () => {
                server.register(inert).then(() => {
                    server.route({
                        method: 'GET',
                        path: '/',
                        handler: (request, h) => {
                            return h.file('./public/index.html');
                        }
                    });

                    server
                        .start()
                        .then(() => {
                            console.log(`Server running at: ${server.info.uri}`);
                        })
                })
            }
        }
    }
}