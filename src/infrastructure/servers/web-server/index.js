
export const createWebServer = ({
    hapi,
    inert,
    port,
    path
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
                return server.register(inert).then(() => {
                    server.route({
                        method: 'GET',
                        path: '/',
                        handler: (request, h) => {
                            const htmlPath = path.resolve(__dirname,'../../../public/index.html')
                            console.log('Serving html from', htmlPath)
                            return h.file(htmlPath, {
                                confine: false
                            });
                        }
                    });

                    return server.start().then(() => {
                        return Promise.resolve(`Web Server running at: ${server.info.uri}`)
                    })
                })
            }
        }
    }
}