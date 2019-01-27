
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
                const dirPath = path.resolve(__dirname, '../../../../web-build')
                console.log("File will be served from: ", dirPath)
                if (!server) {
                    server = hapi.Server({
                        port,
                        host: 'localhost',
                        routes: {
                            files: {
                                relativeTo: dirPath
                            }
                        }
                    })
                }
                return server.register(inert).then(() => {
                    server.route({
                        method: 'GET',
                        path: '/{param*}',
                        handler: {
                            directory: {
                                path: '.',
                                redirectToSlash: true,
                                index: true,
                            }
                        }
                    });

                    server.ext('onPreResponse', (req, h) => {
                        const { response } = req;
                        if (response.isBoom && response.output.statusCode === 404) {
                            return h.file('index.html');
                        }
                        return h.continue;
                    });

                    return server.start().then(() => {
                        return Promise.resolve(`Web Server running at: ${server.info.uri}`)
                    })
                })
            }
        }
    }
}